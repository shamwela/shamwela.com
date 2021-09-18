import Layout from 'components/Layout'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
      <Layout title='Blog | Sha Mwe La'>
        <h1>Blog</h1>

        <Link href='/blog/why-i-love-tailwind-css'>
          <a>Why I Love Tailwind CSS</a>
        </Link>

        <Link href='/blog/roadmap'>
          <a>Web Development Roadmap for Beginners</a>
        </Link>
      </Layout>
    </>
  )
}

export default Blog
