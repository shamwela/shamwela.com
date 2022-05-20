import Head from 'components/Head'
import type { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { getCustomMDXComponents } from 'utilities/getCustomMDXComponents'
import { getImageProperties } from 'utilities/plaiceholder'

export const getStaticPaths = () => {
  const paths = allBlogs.map((blog) => ({ params: { slug: blog.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const blog = allBlogs.find((blog) => blog.slug === context.params.slug)
  const imagesProperties = await getImageProperties()

  return {
    props: {
      blog,
      imagesProperties,
    },
  }
}

const BlogPage = ({
  blog,
  imagesProperties,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!blog) {
    return <p>Sorry. Couldn't find this blog on the server.</p>
  }

  const { title, imageUrl, date, formattedDate } = blog
  const Component = useMDXComponent(blog.body.code)
  const MDXComponents = getCustomMDXComponents(imagesProperties)

  return (
    <>
      <Head title={title} imageUrl={imageUrl} date={date} />
      <h1>{title}</h1>
      <p>{formattedDate}</p>

      <Component components={MDXComponents} />
    </>
  )
}

export default BlogPage
