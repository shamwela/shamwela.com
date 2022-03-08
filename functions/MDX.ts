import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import getReadingTime from 'reading-time'
import glob from 'glob'
import grayMatter from 'gray-matter'
import path from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import type { Metadata } from 'types/metadata'

const getFormattedDate = (date: string) => {
  const dateObject = new Date(date)
  const formatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' })
  const formattedDate = formatter.format(dateObject)
  return formattedDate
}

export const getAllMetadata = (FOLDER_PATH: string) => {
  const mdxFullPaths = glob.sync(`${FOLDER_PATH}/**/*.mdx`)
  const allMetadata = mdxFullPaths.map((mdxFullPath) => {
    const mdxFileName = path.basename(mdxFullPath)
    const slug = mdxFileName.replace('.mdx', '')
    const content = fs.readFileSync(mdxFullPath, 'utf8')
    const data = grayMatter(content).data
    const formattedDate = getFormattedDate(data.date)
    const { text: readingTime } = getReadingTime(content)

    const metadata = {
      ...data,
      slug,
      formattedDate,
      readingTime,
    } as Metadata

    return metadata
  })

  return allMetadata
}

export const getMetadata = async (FOLDER_PATH: string, slug: string) => {
  const mdxFileName = slug + '.mdx'
  const mdxFullPath = path.join(FOLDER_PATH, mdxFileName)
  const content = fs.readFileSync(mdxFullPath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source: content,
    xdmOptions: (options) => {
      // This syntax looks weird, but it protects you in case mdx-bundler add or remove plugins in the future.
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrismPlus,
      ]
      return options
    },
  })

  const formattedDate = getFormattedDate(frontmatter.date)
  const { text: readingTime } = getReadingTime(content)

  const meta = {
    ...frontmatter,
    formattedDate,
    slug,
    readingTime,
  } as Metadata

  return { meta, code }
}
