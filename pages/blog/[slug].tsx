import { getAllBlogsMeta, getBlogBySlug } from 'lib/mdx'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'
import { useMemo } from 'react'
import type { BlogMeta, Blog } from 'types/blog'
import Head from 'components/Head'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import path from 'path'
import glob from 'glob'
import Link from 'next/link'

export const getStaticPaths = () => {
  const blogs = getAllBlogsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

const ROOT_PATH = process.cwd()
const IMAGES_FOLDER_PATH = path.join(ROOT_PATH, 'public', 'images')
const fullImagePaths: string[] = glob.sync(`${IMAGES_FOLDER_PATH}/**/*`)
const relativeImagePaths = fullImagePaths.map(
  (imagePath: string) => imagePath.split('/public')[1]
)

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getBlogBySlug(slug)

  const images = await Promise.all(
    relativeImagePaths.map(async (src) => {
      const { base64, img } = await getPlaiceholder(src)

      return {
        ...img,
        blurDataURL: base64,
      }
    })
  ).then((values) => values)

  return {
    props: {
      ...blog,
      formattedDate: format(parseISO(blog.meta.date), 'dd MMMM, yyyy'),
      images,
    },
  }
}

const BlogPage = ({
  meta,
  code,
  images,
}: {
  meta: BlogMeta
  code: any
  images: {
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
  const Component = useMemo(() => getMDXComponent(code), [code])

  const components = {
    img: ({ src, alt }: { src: string; alt: string }) => {
      const index = images.findIndex((imageProps) => imageProps.src === src)
      const imageProps = images[index]

      return (
        <Image {...imageProps} placeholder='blur' alt={alt} quality={100} />
      )
    },
    a: ({ href, ...props }: { href: string }) => {
      if (href.startsWith('http')) {
        return <a href={href} target='_blank' rel='noreferrer' {...props} />
      }

      return (
        <Link href={href}>
          <a {...props} />
        </Link>
      )
    },
  }

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
      <Component components={components} />
    </>
  )
}

export default BlogPage
