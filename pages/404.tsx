import Head from 'next/head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name='description' content='Page not found' />
      </Head>

      <h1>Page not found</h1>
      <Link href='/'>
        <a>Go to home page</a>
      </Link>
    </>
  )
}

export default Custom404
