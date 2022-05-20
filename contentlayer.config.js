import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    imageUrl: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (blog) => blog._raw.flattenedPath,
    },
    url: {
      type: 'string',
      resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
    },
    formattedDate: {
      type: 'string',
      resolve: (blog) => {
        const dateObject = new Date(blog.date)
        const formatter = new Intl.DateTimeFormat('en-GB', {
          dateStyle: 'long',
        })
        const formattedDate = formatter.format(dateObject)
        return formattedDate
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content/blog',
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
})
