import { format, parseISO } from 'date-fns'

import type { BlogMeta } from 'types/blog'
import type { ProjectMeta } from 'types/project'
import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import getReadingTime from 'reading-time'
import glob from 'glob'
import grayMatter from 'gray-matter'
import path from 'path'
import rehypePrismPlus from 'rehype-prism-plus'

const ROOT_PATH = process.cwd()
const BLOG_FOLDER_PATH = path.join(ROOT_PATH, 'content', 'blog')
const PROJECTS_FOLDER_PATH = path.join(ROOT_PATH, 'content', 'projects')

const getFormattedDate = (date: string) => {
  return format(parseISO(date), 'd MMMM, yyyy')
}

export const getAllProjectsMeta = () => {
  const mdxFullPaths = glob.sync(`${PROJECTS_FOLDER_PATH}/**/*.mdx`)

  return mdxFullPaths.map((mdxFullPath): ProjectMeta => {
    const mdxFileName = path.basename(mdxFullPath)
    const slug = mdxFileName.replace('.mdx', '')
    const content = fs.readFileSync(mdxFullPath, 'utf8')
    const data = grayMatter(content).data as ProjectMeta
    const { text: readingTime } = getReadingTime(content)

    return {
      ...data,
      slug,
      readingTime,
    }
  })
}

export const getAllBlogsMeta = () => {
  const mdxFullPaths = glob.sync(`${BLOG_FOLDER_PATH}/**/*.mdx`)

  return (
    mdxFullPaths
      .map((mdxFullPath): BlogMeta => {
        const mdxFileName = path.basename(mdxFullPath)
        const slug = mdxFileName.replace('.mdx', '')
        const content = fs.readFileSync(mdxFullPath, 'utf8')
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

export const getProjectBySlug = async (slug: string) => {
  const mdxFileName = slug + '.mdx'
  const mdxFullPath = path.join(PROJECTS_FOLDER_PATH, mdxFileName)
  const content = fs.readFileSync(mdxFullPath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source: content,
    xdmOptions: (options) => {
      // This syntax looks weird, but it protects you in case mdx-bundler add or remove plugins in the future.
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrismPlus,
      ]
      return options
    },
  })

  const { text: readingTime } = getReadingTime(content)

  const meta = {
    ...frontmatter,
    slug,
    readingTime,
  } as BlogMeta

  return { meta, code }
}

export const getBlogBySlug = async (slug: string) => {
  const mdxFileName = slug + '.mdx'
  const mdxFullPath = path.join(BLOG_FOLDER_PATH, mdxFileName)
  const content = fs.readFileSync(mdxFullPath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source: content,
    xdmOptions: (options) => {
      // This syntax looks weird, but it protects you in case mdx-bundler add or remove plugins in the future.
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
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
  } as BlogMeta

  return { meta, code }
}
