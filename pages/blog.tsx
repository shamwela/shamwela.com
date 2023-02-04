import Head from 'components/Head'
import Link from 'next/link'
import type { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

export const getStaticProps = async () => {
  const blogs = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )
  return { props: { blogs } }
}

const BlogPage = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head title="Sha Mwe La's blog" />

    <h1>Blog</h1>
    {blogs.map(({ _id, url, title }) => (
      <Link href={url} key={_id} className='text-[inherit]'>
        {title}
      </Link>
    ))}
  </>
)

export default BlogPage
