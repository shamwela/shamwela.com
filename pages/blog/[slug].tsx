import { getAllBlogsMeta, getBlogBySlug } from 'lib/mdx'
// import { components } from 'ui/MDXComponents'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'
import { useMemo } from 'react'
import type { Blog } from 'types/blog'
import Head from 'components/Head'

export const getStaticPaths = () => {
  const blogs = getAllBlogsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getBlogBySlug(slug)

  return {
    props: {
      ...blog,
      formattedDate: format(parseISO(blog.meta.date), 'dd MMMM, yyyy'),
    },
  }
}

const BlogPage = ({ meta, code }: Blog) => {
  const { title, description, imageUrl, date } = meta

  // This is a bit weird, but this is how mdx-bundler recommends it.
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head
        title={title}
        description={description}
        imageUrl={imageUrl}
        date={date}
      />
      <h1>{title}</h1>
      {/* <Component components={components as any} /> */}
    </>
  )
}

export default BlogPage
