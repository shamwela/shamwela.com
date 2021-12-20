import { InferGetStaticPropsType } from 'next'
import { allBlogs } from '.contentlayer/data'
import { pick } from 'lib/utils'
import Link from 'next/link'

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) => pick(post, ['slug', 'title']))

  return { props: { posts } }
}

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {/* {posts.map((post) => (
        <Link href={'/blog/' + post.slug} key={post.slug}>
          <a>{post.title}</a>
        </Link>
      ))} */}
      My blog is under maintenance. Please come back later.
    </>
  )
}

export default Blog
