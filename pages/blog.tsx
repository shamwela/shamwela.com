import Head from 'components/Head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'pages', 'blog') // "cwd" means current working directory

export const getStaticProps = async () => {
  // Get file names under /pages/blog
  const fileNames = fs.readdirSync(blogDirectory) // Should this be async? not sure.
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = grayMatter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string }),
    }
  })

  return {
    props: { allPostsData },
  }
}

const Blog = ({ allPostsData }) => {
  console.log(allPostsData)

  return (
    <>
      <Head
        title="Sha Mwe La's Blog"
        description="Sha Mwe La's Blog"
        keywords='sha mwe la blog, shamwela blog'
        previewImage='sha-mwe-la-open-graph.png'
      />

      <h1>Blog</h1>

      {allPostsData.map(({ id, title }) => (
        <Link href={'/blog/' + id} key={id}>
          <a>{title}</a>
        </Link>
      ))}
    </>
  )
}

export default Blog
