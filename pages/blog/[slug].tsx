import { getAllBlogsMeta, getBlogBySlug } from 'lib/mdx'
// import { components } from 'ui/MDXComponents'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'
import { useMemo } from 'react'
import type { Blog } from 'types/blog'
import Head from 'components/Head'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import path from 'path'
import glob from 'glob'

export const getStaticPaths = () => {
  const blogs = getAllBlogsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

const ROOT_PATH = process.cwd()
const IMAGES_PATH = path.join(ROOT_PATH, 'public', 'images')
const imagePaths = glob.sync(`${IMAGES_PATH}/**/*`) // These are full paths

const imageRelativePaths = imagePaths.map(
  (imagePath) =>
    // imagePath.replace('D:/Folders/01 Personal/code/shamwela.com/public', '')
    imagePath.split('/public')[1]
  // get the relative image path
  // This is a hack to get the relative path
  // Try to remove this hack as soon as possible
)

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getBlogBySlug(slug)

  const images = await Promise.all(
    imageRelativePaths.map(async (src) => {
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

const BlogPage = ({ meta, code, images }) => {
  const { title, description, imageUrl, date } = meta

  // It's generally a good idea to memoize this function call to
  // avoid re-creating the component every render
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head
        title={title}
        description={description}
        imageUrl={imageUrl}
        date={date}
      />
      <h1>{title}</h1>
      <Component
        components={{
          img: ({ src, alt }: { src: string; alt: string }) => {
            const index = images.findIndex(
              (imageProps) => imageProps.src === src
            )
            const imageProps = images[index]

            return (
              <Image
                {...imageProps}
                placeholder='blur'
                alt={alt}
                quality={100}
              />
            )
          },
        }}
      />
    </>
  )
}

export default BlogPage
