import Head from 'next/head'
import Layout from 'components/Layout'
import Link from 'next/link'

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles | Sha Mwe La</title>
        <meta name='description' content="Sha Mwe La's personal website"></meta>
      </Head>

      <Layout>
        <h1>Articles</h1>

        <Link href='/articles/roadmap'>
          <a>Web Development Roadmap for Beginners</a>
        </Link>
      </Layout>
    </>
  )
}

export default Articles
