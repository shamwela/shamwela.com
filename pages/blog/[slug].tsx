import { getAllPostsMeta, getPostBySlug } from 'lib/mdx'
import { components } from 'ui/MdxComponents'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps } from 'next'
import React from 'react'
import type { Post } from 'types/blog'

export const getStaticPaths = () => {
  const posts = getAllPostsMeta()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths: paths,
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const slug = context.params?.slug as string
  const post = await getPostBySlug(slug)

  return {
    props: {
      ...post,
      formattedDate: format(parseISO(post.meta.date), 'dd MMMM, yyyy'),
    },
  }
}

export default function PostPage({ meta, code }: Post) {
  const { title, formattedDate } = meta

  // This is a bit weird, but this is how mdx-bundler recommends it.
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <h1>{title}</h1>
      <span>{formattedDate}</span>
      <Component components={components as any} />
    </>
  )
}
