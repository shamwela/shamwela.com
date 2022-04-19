import { getMetadata } from 'utilities/MDX'
import type { Metadata } from 'types/metadata'
import Head from 'components/Head'
import { getCustomMDXComponents } from 'utilities/CustomMDXComponents'
import { getImagesProperties } from 'utilities/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imageProperty } from 'types/imageProperty'
import { blogFolderPath } from 'utilities/blogFolderPath'
import fs from 'fs'

export const getStaticPaths = () => {
  const mdxFileNames = fs.readdirSync(blogFolderPath)
  const slugs = mdxFileNames.map((mdxFileName) =>
    mdxFileName.replace('.mdx', '')
  )
  const paths = slugs.map((slug) => ({ params: { slug } }))

  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { slug } = context.params
  const { meta: blogMetadata, code } = await getMetadata(blogFolderPath, slug)
  const imagesProperties = await getImagesProperties()

  return {
    props: {
      blogMetadata,
      code,
      imagesProperties,
    },
  }
}

const BlogPage = ({
  blogMetadata,
  code,
  imagesProperties,
}: {
  blogMetadata: Metadata
  code: string
  imagesProperties: imageProperty[]
}) => {
  const { title, imageUrl, date, formattedDate } = blogMetadata
  const MDXComponent = getMDXComponent(code)
  const customMDXComponents = getCustomMDXComponents(imagesProperties)

  return (
    <>
      <Head title={title} imageUrl={imageUrl} date={date} />
      <h1>{title}</h1>
      <p>{formattedDate}</p>
      <MDXComponent components={customMDXComponents} />
    </>
  )
}

export default BlogPage
