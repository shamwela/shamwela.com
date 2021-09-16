import Head from 'next/head'
import Layout from 'components/Layout'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Sha Mwe La</title>
        <meta name='description' content="Sha Mwe La's personal website"></meta>
      </Head>

      <Layout>
        <h1>Blog</h1>

        <Link href='/blog/roadmap'>
          <a>Web Development Roadmap for Beginners</a>
        </Link>
      </Layout>
    </>
  )
}

export default Blog
