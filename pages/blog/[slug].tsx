import { useMDXComponent } from 'next-contentlayer/hooks'
import components from 'components/MDXComponents'
import BlogLayout from 'layouts/blog'
import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)
  return { props: { blog } }
}

const Post = ({ blog }: { blog: Blog }) => {
  const Component = useMDXComponent(blog.body.code)

  return (
    <BlogLayout blog={blog}>
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </BlogLayout>
  )
}

export default Post
