import type { BlogMeta } from 'types/blog'
import Head from 'components/Head'
import Link from 'next/link'
import { getAllBlogsMeta } from 'functions/MDX'
import { useEffect, useState } from 'react'

export const getStaticProps = async () => {
  const blogs = getAllBlogsMeta()

  const nestedAndDuplicatedTopics = blogs.map(({ topics }) => topics)
  const duplicatedTopics = nestedAndDuplicatedTopics.flat()
  const uniqueTopics = [...new Set(duplicatedTopics)]
  const topics = uniqueTopics.sort()

  return { props: { blogs, topics } }
}

const Blog = ({ blogs, topics }: { blogs: BlogMeta[]; topics: string[] }) => {
  const [query, setQuery] = useState<string | undefined>(undefined)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  useEffect(() => {
    const noQuery = !query
    const noSelectedTopics = selectedTopics.length === 0

    if (noQuery && noSelectedTopics) {
      setFilteredBlogs(blogs)
    } else {
      const filteredBlogs = blogs.filter(({ title, topics }) => {
        let matchesTitle = false
        if (query) {
          matchesTitle = title.toLowerCase().includes(query.toLowerCase())
        }

        const matchesTopics = topics.some((topic) =>
          selectedTopics.includes(topic)
        )

        return matchesTitle || matchesTopics
      })

      setFilteredBlogs(filteredBlogs)
    }
  }, [blogs, query, selectedTopics])

  const handleTopicsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value: newSelectedTopic } = event.target

    if (checked) {
      setSelectedTopics((previousSelectedTopics) => [
        ...previousSelectedTopics,
        newSelectedTopic,
      ])
    } else {
      // If the user unchecked a topic, remove it from the selectedTopics array
      setSelectedTopics((previousSelectedTopics) =>
        previousSelectedTopics.filter(
          (previousSelectedTopic) => previousSelectedTopic !== newSelectedTopic
        )
      )
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

      <input
        placeholder='Search blogs'
        aria-label='Search blogs'
        type='search'
        inputMode='search'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <h2>Search blog by topics</h2>

      <section className='flex flex-wrap gap-x-4'>
        {topics.map((topic) => (
          <span key={topic}>
            <input
              id={topic}
              value={topic}
              onChange={handleTopicsChange}
              type='checkbox'
              className='cursor-pointer'
            />
            <label htmlFor={topic} className='cursor-pointer'>
              {topic}
            </label>
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
