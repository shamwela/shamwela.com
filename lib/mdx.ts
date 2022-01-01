import { format, parseISO } from 'date-fns'
import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import gfmPlugin from 'remark-gfm'
import slugPlugin from 'remark-slug'
import type { PostMeta } from 'types/post'

const ROOT_PATH = process.cwd()
export const POSTS_PATH = path.join(ROOT_PATH, 'posts')

export const getAllPostsMeta = () => {
  const PATH = path.join(POSTS_PATH)

  // Get all file paths in the posts folder (that end with .mdx)
  const paths = glob.sync(`${PATH}/**/*.mdx`)

  return (
    paths
      .map((filePath): PostMeta => {
        // Get the content of the file
        const source = fs.readFileSync(path.join(filePath), 'utf8')

        // Get the file name without .mdx
        const slug = path.basename(filePath).replace('.mdx', '')
        // Use gray-matter to extract the post meta from post content
        const data = matter(source).data as PostMeta

        const formattedDate = format(parseISO(data.date), 'dd MMMM, yyyy')

        return {
          ...data,
          slug,
          formattedDate,
        }
      })

      // Sort posts by published date
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  )
}

// Get content of specific post
export const getPostBySlug = async (slug: string) => {
  // Get the content of the file
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        slugPlugin,
        gfmPlugin,
      ]

      return options
    },
    esbuildOptions(options) {
      options.target = 'esnext'
      return options
    },
  })

  const formattedDate = format(parseISO(frontmatter.date), 'dd MMMM, yyyy')

  const meta = {
    ...frontmatter,
    formattedDate,
    slug,
  } as PostMeta

  return {
    meta,
    code,
  }
}
