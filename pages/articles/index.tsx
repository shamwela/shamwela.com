import Layout from 'components/Layout'
import Link from 'next/link'

const Articles = () => {
  return (
    <Layout>
      <h1>Articles</h1>

      <Link href='/articles/roadmap'>
        <a>Web Development Roadmap for Beginners</a>
      </Link>
    </Layout>
  )
}

export default Articles
