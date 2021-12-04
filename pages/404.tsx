import Head from 'components/Head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head
        title='Page not found'
        description='Page not found'
        keywords='page not found, 404'
        previewImage='sha-mwe-la-open-graph.png'
      />

      <h1>Page not found</h1>
      <Link href='/'>
        <a>Go to home page</a>
      </Link>
    </>
  )
}

export default Custom404
