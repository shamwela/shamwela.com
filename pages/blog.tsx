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

    <h1 className='text-center'>Blog</h1>
    <div className='flex flex-col items-center gap-y-4'>
      {blogs.map(({ _id, url, title }) => (
        <Link href={url} key={_id} className='text-center'>
          {title}
        </Link>
      ))}
    </div>
  </>
)

export default BlogPage
