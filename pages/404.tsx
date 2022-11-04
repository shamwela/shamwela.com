import Head from 'components/Head'
import Link from 'next/link'

const Custom404 = () => (
  <>
    <Head title='Page not found' />

    <div className='flex flex-col items-center gap-y-4'>
      <h1>Page not found</h1>
      <Link href='/'>Go to home page</Link>
    </div>
  </>
)

export default Custom404
