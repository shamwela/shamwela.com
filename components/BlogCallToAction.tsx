import { useRouter } from 'next/router'
import Link from 'next/link'

const BlogCallToAction = () => {
  const { asPath } = useRouter()
  if (!asPath.includes('/blog/')) {
    return null
  }

  return (
    <>
      <hr />

      <section className='flex flex-col'>
        <strong>Written by Sha Mwe La</strong>

        <Link href='/about'>
          <a>Learn more about Sha Mwe La</a>
        </Link>

        <Link href='/blog'>
          <a>See other blogs</a>
        </Link>
      </section>
    </>
  )
}

export default BlogCallToAction
