import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className='flex flex-col items-center gap-y-4'>
        <h1>Page not found</h1>
        <Link href='/'>Go to home page</Link>
      </div>
    </>
  )
}
