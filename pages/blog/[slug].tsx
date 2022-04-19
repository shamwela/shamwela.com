import type { Metadata } from 'types/metadata'
import Head from 'components/Head'
import { getCustomMDXComponents } from 'utilities/getCustomMDXComponents'
import { getImageProperties } from 'utilities/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imageProperty } from 'types/imageProperty'
import { blogFolderPath } from 'utilities/blogFolderPath'
import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import { getFormattedDate } from 'utilities/getFormattedDate'

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
  const mdxFileName = slug + '.mdx'
  const mdxFullPath = path.join(blogFolderPath, mdxFileName)
  const content = fs.readFileSync(mdxFullPath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source: content,
    mdxOptions: (options) => {
      // This syntax looks weird, but it protects you in case mdx-bundler add or remove plugins in the future.
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrismPlus,
      ]
      return options
    },
  })
  const formattedDate = getFormattedDate(frontmatter.date)
  const blogMetadata = {
    ...frontmatter,
    slug,
    formattedDate,
  } as Metadata
  const imagesProperties = await getImageProperties()

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
