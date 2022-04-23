import Head from 'components/Head'
import Link from 'next/link'
import { getAllMetadata } from 'utilities/getAllMetadata'
import { blogFolderPath } from 'utilities/blogFolderPath'
import type { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const unsortedBlogs = getAllMetadata(blogFolderPath)
  const blogs = unsortedBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )
  return { props: { blogs } }
}

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head title="Sha Mwe La's blog" />

    <h1>Blog</h1>
    {blogs.map(({ slug, title }) => (
      <Link href={'/blog/' + slug} key={slug}>
        <a>{title}</a>
      </Link>
    ))}
  </>
)

export default Blog
