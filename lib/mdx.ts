import { format, parseISO } from 'date-fns'

import type { BlogMeta } from 'types/blog'
import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import getReadingTime from 'reading-time'
import glob from 'glob'
import grayMatter from 'gray-matter'
import path from 'path'
import rehypePrismPlus from 'rehype-prism-plus'

const ROOT_PATH = process.cwd()
const BLOG_FOLDER_PATH = path.join(ROOT_PATH, 'content', 'blog')

const getFormattedDate = (date: string) => {
  // For example, 1 January, 2022
  return format(parseISO(date), 'd MMMM, yyyy')
}

export const getAllBlogsMeta = () => {
  const mdxFullPaths = glob.sync(`${BLOG_FOLDER_PATH}/**/*.mdx`)

  return (
    mdxFullPaths
      .map((mdxFullPath): BlogMeta => {
        const mdxFileName = path.basename(mdxFullPath)
        const slug = mdxFileName.replace('.mdx', '')

        const content = fs.readFileSync(mdxFullPath, 'utf8')

        // Extract the blog meta from the content
        const data = grayMatter(content).data as BlogMeta

        const formattedDate = getFormattedDate(data.date)
        const { text: readingTime } = getReadingTime(content)

        return {
          ...data,
          slug,
          formattedDate,
          readingTime,
        }
      })
      // Sort blogs by published date
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  )
}

// Get content of a specific blog
export const getBlogBySlug = async (slug: string) => {
  // Get the content of the file
  const source = fs.readFileSync(
    path.join(BLOG_FOLDER_PATH, `${slug}.mdx`),
    'utf8'
  )

  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions: (options) => {
      // This is how mdx-bundler recommends to add custom remark/rehype plugins.
      // The syntax might look weird, but it protects you in case mdx-bundler add or remove
      // plugins in the future.
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrismPlus,
      ]
      return options
    },
  })

  const formattedDate = getFormattedDate(frontmatter.date)
  const { text: readingTime } = getReadingTime(source)

  const meta = {
    ...frontmatter,
    formattedDate,
    slug,
    readingTime,
  } as BlogMeta

  return { meta, code }
}
