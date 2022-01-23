import { format, parseISO } from 'date-fns'

import type { BlogData } from 'types/blog'
import type { ProjectData } from 'types/project'
import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import getReadingTime from 'reading-time'
import glob from 'glob'
import grayMatter from 'gray-matter'
import path from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'

const ROOT_PATH = process.cwd()
const CONTENT_FOLDER_PATH = path.join(ROOT_PATH, 'content')

const getFormattedDate = (date: string) => {
  const dateInstance = parseISO(date)
  const formattedDate = format(dateInstance, 'd MMMM, yyyy')

  return formattedDate
}

const getAllMeta = (FOLDER_PATH: string) => {
  const mdxFullPaths = glob.sync(`${FOLDER_PATH}/**/*.mdx`)

  return mdxFullPaths
    .map((mdxFullPath) => {
      const mdxFileName = path.basename(mdxFullPath)
      const slug = mdxFileName.replace('.mdx', '')
      const content = fs.readFileSync(mdxFullPath, 'utf8')
      const data = grayMatter(content).data
      const formattedDate = getFormattedDate(data.date)
      const { text: readingTime } = getReadingTime(content)

      return {
        ...data,
        slug,
        formattedDate,
        readingTime,
      } as BlogData // Since ProjectData and BlogData are the same
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
}

const PROJECTS_FOLDER_PATH = path.join(CONTENT_FOLDER_PATH, 'projects')
export const getAllProjectsMeta = () => {
  return getAllMeta(PROJECTS_FOLDER_PATH)
}

const BLOG_FOLDER_PATH = path.join(CONTENT_FOLDER_PATH, 'blog')
export const getAllBlogsMeta = () => {
  return getAllMeta(BLOG_FOLDER_PATH)
}

const getDataBySlug = async (FOLDER_PATH: string, slug: string) => {
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
  } as ProjectData // Since ProjectData and BlogData are the same

  return { meta, code }
}

export const getAboutData = async () => {
  return getDataBySlug(CONTENT_FOLDER_PATH, 'about')
}

export const getProjectBySlug = async (slug: string) => {
  return getDataBySlug(PROJECTS_FOLDER_PATH, slug)
}

export const getBlogBySlug = async (slug: string) => {
  return getDataBySlug(BLOG_FOLDER_PATH, slug)
}
