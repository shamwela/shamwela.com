import type { Blog, BlogMeta } from 'types/blog'
import { getAllBlogsMeta, getBlogBySlug } from 'functions/mdx'

import { GetStaticProps } from 'next'
import Head from 'components/Head'
import { getCustomMDXComponents } from 'functions/MDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

export const getStaticPaths = () => {
  const blogs = getAllBlogsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getBlogBySlug(slug)
  const imagesProperties = await getImagesProperties()

  return {
    props: {
      ...blog,
      imagesProperties,
    },
  }
}

const BlogPage = ({
  meta,
  code,
  imagesProperties,
}: {
  meta: BlogMeta
  code: string
  imagesProperties: {
    src: string
    blurDataURL: string
    width: number
    height: number
    type?: string
  }[]
}) => {
  const { title, description, imageUrl, date, readingTime } = meta

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
      <MDXComponent components={customMDXComponents} />
    </>
  )
}

export default BlogPage
