import type { Blog, BlogMeta } from 'types/blog'
import { getAllBlogsMeta, getBlogBySlug } from 'lib/mdx'

import { GetStaticProps } from 'next'
import Head from 'components/Head'
import Image from 'next/image'
import Link from 'next/link'
import { getMDXComponent } from 'mdx-bundler/client'
import { getPlaiceholder } from 'plaiceholder'
import glob from 'glob'
import path from 'path'
import { useMemo } from 'react'

export const getStaticPaths = () => {
  const blogs = getAllBlogsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

const ROOT_PATH = process.cwd()
const IMAGES_FOLDER_PATH = path.join(ROOT_PATH, 'public', 'images')
const fullImagePaths: string[] = glob.sync(`${IMAGES_FOLDER_PATH}/**/*`)
const relativeImagePaths = fullImagePaths.map((fullImagePath) => {
  const imageName = path.basename(fullImagePath) // For example, 'my-image.png'
  return '/images/' + imageName
})

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getBlogBySlug(slug)

  const imagesProperties = await Promise.all(
    relativeImagePaths.map(async (relativeImagePath) => {
      const { img: imageProperties, base64: blurDataURL } =
        await getPlaiceholder(relativeImagePath)

      return {
        ...imageProperties,
        blurDataURL,
      }
    })
  )

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

  const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
    const imageProperties = imagesProperties.find(
      (imageProperties) => imageProperties.src === src
    )

    return (
      <Image {...imageProperties} placeholder='blur' alt={alt} quality={100} />
    )
  }

  const CustomLink = ({ href, ...props }: { href: string }) => {
    if (href.startsWith('http')) {
      return <a href={href} target='_blank' rel='noreferrer' {...props} />
    }

    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  const customComponents = { img: CustomImage, a: CustomLink }

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
      <MDXComponent components={customComponents} />
    </>
  )
}

export default BlogPage
