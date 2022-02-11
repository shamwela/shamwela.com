import { getAllBlogsMeta, getBlogBySlug } from 'functions/MDX'

import type { BlogData } from 'types/blog'
import Head from 'components/Head'
import { getCustomMDXComponents } from 'functions/CustomMDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imagesProperties } from 'types/imagesProperties'
import { useMemo } from 'react'

export const getStaticPaths = () => {
  const blogs = getAllBlogsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const slug = context.params?.slug as string
  const blogData = await getBlogBySlug(slug)
  const imagesProperties = await getImagesProperties()

  return {
    props: {
      ...blogData,
      imagesProperties,
    },
  }
}

const BlogPage = ({
  meta,
  code,
  imagesProperties,
}: {
  meta: BlogData
  code: string
  imagesProperties: imagesProperties
}) => {
  const { title, description, imageUrl, date, formattedDate, readingTime } = meta

  // It's generally a good idea to memoize this function call to
  // avoid re-creating the component every render
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])
  const customMDXComponents = getCustomMDXComponents(imagesProperties)

  return (
    <>
      <Head
        title={title}
        description={description}
        imageUrl={imageUrl}
        date={date}
      />
      <h1>{title}</h1>
      <p>{readingTime}</p>
      <p>{formattedDate}</p>
      <MDXComponent components={customMDXComponents} />
    </>
  )
}

export default BlogPage
