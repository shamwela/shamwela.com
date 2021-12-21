import { InferGetStaticPropsType } from 'next'
import { allBlogs } from '.contentlayer/data'
import { pick } from 'lib/utils'
import Link from 'next/link'
import Head from 'components/Head'
import { useState } from 'react'

export const getStaticProps = async () => {
  const blogs = allBlogs
    .map((blog) => pick(blog, ['slug', 'title', 'date']))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  return { props: { blogs } }
}

const Blog = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogs = blogs.filter((blog) =>
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
