import { InferGetStaticPropsType } from 'next'
import { allBlogs } from '.contentlayer/data'
import { pick } from 'lib/utils'
import Link from 'next/link'

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) => pick(post, ['slug', 'title']))
  return { props: { posts } }
}

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts)

  return (
    <>
      <h1>Blog</h1>
      {posts.map(({ slug, title }) => (
        <Link href={'/blog/' + slug} key={slug}>
          <a>{title}</a>
        </Link>
      ))}
    </>
  )
}

export default Blog
