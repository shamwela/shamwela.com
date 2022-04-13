import { getAllMetadata, getMetadata } from 'functions/MDX'
import type { Metadata } from 'types/metadata'
import Head from 'components/Head'
import { getCustomMDXComponents } from 'functions/CustomMDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imageProperty } from 'types/imageProperty'
import path from 'path'

const BLOG_FOLDER_PATH = path.join(process.cwd(), 'content', 'blog')

export const getStaticPaths = () => {
  const blogs = getAllMetadata(BLOG_FOLDER_PATH)
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { slug } = context.params
  const blogMetadata = await getMetadata(BLOG_FOLDER_PATH, slug)
  const imagesProperties = await getImagesProperties()

  return {
    props: {
      ...blogMetadata,
      imagesProperties,
    },
  }
}

const BlogPage = ({
  metadata,
  imagesProperties,
}: {
  metadata: Metadata
  imagesProperties: imageProperty[]
}) => {
  const {
    title,
    description,
    imageUrl,
    date,
    formattedDate,
    readingTime,
    code,
  } = metadata
  const MDXComponent = getMDXComponent(code)
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
