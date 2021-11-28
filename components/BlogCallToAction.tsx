import { useRouter } from 'next/router'
import Link from 'next/link'

const BlogCallToAction = () => {
  const { pathname } = useRouter()
  if (!pathname.includes('/blog/')) {
    return null
  }

  return (
    <>
      <hr />

      <strong>Written by Sha Mwe La</strong>

      <Link href='/about'>
        <a className='button'>Learn more about Sha Mwe La</a>
      </Link>

      <Link href='/blog'>
        <a className='button'>See other blogs</a>
      </Link>
    </>
  )
}

export default BlogCallToAction
