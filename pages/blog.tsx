import type { BlogData } from 'types/blog'
import Head from 'components/Head'
import Link from 'next/link'
import { getAllMetadata } from 'functions/MDX'
import path from 'path'

export const getStaticProps = async () => {
  const BLOG_FOLDER_PATH = path.join(process.cwd(), 'content', 'blog')
  const allBlogMetadata = getAllMetadata(BLOG_FOLDER_PATH) as BlogData[]
  const sortedAllBlogMetadata = allBlogMetadata.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return { props: { blogs: sortedAllBlogMetadata } }
}

type BlogPageProps = {
  blogs: BlogData[]
}

const Blog = ({ blogs }: BlogPageProps) => {
  return (
    <>
      <Head title="Sha Mwe La's blog" />

      <h1>Blog</h1>
      {blogs.map(({ slug, title, readingTime }) => (
        <div key={slug} className='flex flex-col'>
          <Link href={'/blog/' + slug}>
            <a>{title}</a>
          </Link>
          <span>{readingTime}</span>
        </div>
      ))}
    </>
  )
}

export default Blog
