import type { BlogMeta } from 'types/blog'
import Head from 'components/Head'
import Link from 'next/link'
import { getAllBlogsMeta } from 'functions/MDX'
import { useState } from 'react'

export const getStaticProps = async () => {
  const blogs = getAllBlogsMeta()

  let topics: string[] = []

  blogs.forEach((blog) => (topics = [...topics, ...blog.topics]))

  const uniqueTopics = topics.filter(
    (value, index, array) => array.indexOf(value) === index
  )

  return { props: { blogs, uniqueTopics } }
}

const Blog = ({
  blogs,
  uniqueTopics,
}: {
  blogs: BlogMeta[]
  uniqueTopics: string[]
}) => {
  // const [searchValue, setSearchValue] = useState('')
  const [selectedTopics, setSelectedTopics] = useState([])

  // const filteredBlogs = blogs.filter((blog) =>
  //   blog.title.toLowerCase().includes(searchValue.toLowerCase())
  // )

  let filteredBlogs: BlogMeta[]

  // If no topics are selected, return all blogs
  if (selectedTopics.length === 0) {
    filteredBlogs = blogs
  } else {
    filteredBlogs = blogs.filter((blog) => {
      // Only return blogs with the selected topics
      return blog.topics.some((topic) => selectedTopics.includes(topic))
    })
  }

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

      {/* <input
        placeholder='Search'
        aria-label='Search'
        type='search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      /> */}

      <h1>Search blog by topics</h1>

      <section className='flex flex-wrap gap-x-4'>
        {uniqueTopics.map((topic) => (
          // <label key={topic}>
          // <input
          //   onChange={handleTopicsChange}
          //   type='checkbox'
          //   value={topic}
          //   // Implement this later
          //   // aria-checked='false'
          // />
          //   <span>{topic}</span>
          // </label>
          <span key={topic}>
            <input
              id={topic}
              value={topic}
              onChange={handleTopicsChange}
              type='checkbox'
              // Implement this later
              // aria-checked='false'
            />
            <label htmlFor={topic}>{topic}</label>
          </span>
        ))}
      </section>

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
