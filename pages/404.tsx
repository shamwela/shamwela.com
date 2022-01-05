import Head from 'components/Head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head
        title='Page not found'
        description='Page not found'
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />

      <article className='flex flex-col items-center gap-y-4'>
        <h1>Page not found</h1>
        <Link href='/'>
          <a>Go to home page</a>
        </Link>
      </article>
    </>
  )
}

export default Custom404
