import { format, parseISO } from 'date-fns'
import fs from 'fs'
import glob from 'glob'
import grayMatter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import type { BlogMeta } from 'types/blog'
import getReadingTime from 'reading-time'
import rehypePrismPlus from 'rehype-prism-plus'

const ROOT_PATH = process.cwd()
const CONTENT_FOLDER_PATH = path.join(ROOT_PATH, 'content')

export const getAllBlogsMeta = () => {
  // Get all MDX file paths in the content folder
  const mdxFilePaths: string[] = glob.sync(`${CONTENT_FOLDER_PATH}/**/*.mdx`)

  return (
    mdxFilePaths
      .map((filePath): BlogMeta => {
        // Get the content of the file
        const source = fs.readFileSync(path.join(filePath), 'utf8')

        // Get the file name without .mdx
        const slug = path.basename(filePath).replace('.mdx', '')
        // Use gray-matter to extract the blog meta from blog content
        const data = grayMatter(source).data as BlogMeta

        const formattedDate = format(parseISO(data.date), 'dd MMMM, yyyy')

        return {
          ...data,
          slug,
          formattedDate,
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
    path.join(CONTENT_FOLDER_PATH, `${slug}.mdx`),
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

  const formattedDate = format(parseISO(frontmatter.date), 'dd MMMM, yyyy')
  const { text: readingTime } = getReadingTime(source)

  const meta = {
    ...frontmatter,
    formattedDate,
    slug,
    readingTime,
  } as BlogMeta

  return {
    meta,
    code,
  }
}
