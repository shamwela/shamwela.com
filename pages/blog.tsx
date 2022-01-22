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
  // const [searchValue, setSearchValue] = useState('')
  const [selectedTopics, setSelectedTopics] = useState([])

  // const filteredBlogs = blogs.filter((blog) =>
  //   blog.title.toLowerCase().includes(searchValue.toLowerCase())
  // )

  const filteredBlogs = blogs.filter((blog) => {
    // Only return blogs with selected topics
    if (selectedTopics.length > 0) {
      return blog.topics.some((topic) => selectedTopics.includes(topic))
    } else {
      // If no topics are selected, return all blogs
      return blog
    }
  })

  const handleTopicsChange = (event) => {
    if (event.target.checked) {
      const { value } = event.target

      setSelectedTopics((previousTopics) => {
        const topics = [...previousTopics, value]
        const uniqueTopics = topics.filter(
          (value, index, array) => array.indexOf(value) === index
        )
        return uniqueTopics
      })
    } else {
      const { value } = event.target

      setSelectedTopics((previousTopics) => {
        const topics = previousTopics.filter((topic) => topic !== value)
        return topics
      })
    }
  }

  return (
    <>
      <Head
        title="Sha Mwe La's blog"
        description="Sha Mwe La's blog"
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />
      <h1>Blog</h1>
      {/* <input
        placeholder='Search'
        aria-label='Search'
        type='search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      /> */}

      <h2>Search blog by topics</h2>

      <label>
        <input
          onChange={handleTopicsChange}
          type='checkbox'
          value='typescript'
          // aria-checked='false'
        />
        <span>typescript</span>
      </label>

      <label>
        <input
          onChange={handleTopicsChange}
          type='checkbox'
          value='react'
          // aria-checked='false'
        />
        <span>react</span>
      </label>

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
