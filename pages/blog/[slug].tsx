import Head from 'components/Head'
import type { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

export const getStaticPaths = () => {
  const paths = allBlogs.map((blog) => ({ params: { slug: blog.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const blog = allBlogs.find((blog) => blog.slug === context.params.slug)

  return {
    props: {
      blog,
    },
  }
}

const BlogPage = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!blog) {
    return <p>Sorry. Couldn't find this blog on the server.</p>
  }
  const { title, imageUrl, date, formattedDate, body } = blog
  const { html } = body

  return (
    <>
      <Head title={title} imageUrl={imageUrl} date={date} />
      <h1>{title}</h1>
      <p>{formattedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default BlogPage
