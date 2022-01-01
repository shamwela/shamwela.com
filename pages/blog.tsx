import { getAllPostsMeta } from 'lib/mdx'
import type { PostMeta } from 'types/blog'
import Link from 'next/link'
import Head from 'components/Head'
import { useState } from 'react'

export const getStaticProps = async () => {
  const posts = getAllPostsMeta()
  return { props: { posts } }
}

const Blog = ({ posts }: { posts: PostMeta[] }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogs = posts.filter((blog) =>
    blog.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <Head
        title="Sha Mwe La's Blog"
        description="Sha Mwe La's Blog"
        image='/images/sha-mwe-la-open-graph.png'
        date='2021-12-20'
      />
      <h1>Blog</h1>
      <input
        placeholder='Search'
        aria-label='Search'
        type='search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
      {filteredBlogs.length === 0 && <p>No blogs found.</p>}

      {filteredBlogs.map(({ slug, title }) => (
        <Link href={'/blog/' + slug} key={slug}>
          <a>{title}</a>
        </Link>
      ))}
    </>
  )
}

export default Blog
