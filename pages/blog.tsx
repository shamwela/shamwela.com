import { InferGetStaticPropsType } from 'next'
import { allBlogs } from '.contentlayer/data'
import { pick } from 'lib/utils'
import Link from 'next/link'
import Head from 'components/Head'

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) => pick(post, ['slug', 'title']))
  return { props: { posts } }
}

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head
        title="Sha Mwe La's Blog"
        description="Sha Mwe La's Blog"
        image='/images/sha-mwe-la-open-graph.png'
        date='2021-12-20'
      />
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
