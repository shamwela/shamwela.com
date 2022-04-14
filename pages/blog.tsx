import type { Metadata } from 'types/metadata'
import Head from 'components/Head'
import Link from 'next/link'
import { getAllMetadata } from 'functions/MDX'
import path from 'path'

export const getStaticProps = async () => {
  const BLOG_FOLDER_PATH = path.join(process.cwd(), 'content', 'blog')
  const unsortedBlogs = getAllMetadata(BLOG_FOLDER_PATH)
  const blogs = unsortedBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )
  return { props: { blogs } }
}

const Blog = ({ blogs }: { blogs: Metadata[] }) => (
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
