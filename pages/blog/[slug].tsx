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

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getBlogBySlug(slug)

  const ROOT_PATH = process.cwd()
  const IMAGE_PATH = path.join(ROOT_PATH, 'public', 'images')
  const PATH = path.join(IMAGE_PATH)
  const paths = glob.sync(`${PATH}/**/*.png`) // should add other extensions here later

  const plaiceholderData = await Promise.all(
    paths.map(async (path) => {
      const { base64, img } = await getPlaiceholder(
        path.replace(path.join(ROOT_PATH, 'public'), '') // should fix this later
      )
      const imageProps = {
        ...img,
        blurDataURL: base64,
      }
      return imageProps
    })
  )

  return {
    props: {
      ...blog,
      formattedDate: format(parseISO(blog.meta.date), 'dd MMMM, yyyy'),
      plaiceholderData,
    },
  }
}

const BlogPage = ({ meta, code, plaiceholderData }) => {
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
          img: (props) => {
            const { src, alt, width, height } = props
            const blurDataURL = plaiceholderData.find(
              (path) => (path.src = props.src)
            )
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                placeholder='blur'
                blurDataURL={blurDataURL}
              />
            )
          },
        }}
      />
    </>
  )
}

export default BlogPage
