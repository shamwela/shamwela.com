import type { BlogMeta } from 'types/blog'
import Head from 'components/Head'
import Link from 'next/link'
import { getAllBlogsMeta } from 'functions/MDX'
import { useState } from 'react'

export const getStaticProps = async () => {
  const blogs = getAllBlogsMeta()
  return { props: { blogs } }
}

const Blog = ({ blogs }: { blogs: BlogMeta[] }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <Head
        title="Sha Mwe La's blog"
        description="Sha Mwe La's blog"
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />
      <h1>Blog</h1>
      <input
        placeholder='Search'
        aria-label='Search'
        type='search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
      {filteredBlogs.length === 0 && (
        <p>No blogs found. Please search other stuffs.</p>
      )}
      {filteredBlogs.map(({ slug, title, readingTime }) => (
        <article key={slug} className='flex flex-col'>
          <Link href={'/blog/' + slug}>
            <a>
              <span className='font-bold'>{title}</span>
            </a>
          </Link>
          <span>{readingTime}</span>
        </article>
      ))}
    </>
  )
}

export default Blog
