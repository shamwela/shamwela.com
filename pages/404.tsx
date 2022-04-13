import Head from 'components/Head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head title='Page not found' />

      <div className='flex flex-col items-center gap-y-4'>
        <h1>Page not found</h1>
        <Link href='/'>
          <a>Go to home page</a>
        </Link>
      </div>
    </>
  )
}

export default Custom404
