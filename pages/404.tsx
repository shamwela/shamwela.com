import Head from 'next/head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name='description' content='Page not found' />
      </Head>

      <main className='min-h-screen flex flex-col items-center justify-center gap-y-4'>
        <h1>Page not found</h1>

        <Link href='/'>
          <a>← Go to home page</a>
        </Link>
      </main>
    </>
  )
}

export default Custom404
