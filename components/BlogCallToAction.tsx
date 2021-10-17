import { useRouter } from 'next/router'
import Link from 'next/link'

const BlogCallToAction = () => {
  const { asPath } = useRouter()
  const isBlog = asPath.includes('/blog/')

  return (
    <>
      {isBlog && (
        <>
          <p>
            If you found this useful, please bookmark this website for new blogs
            every Saturday. Please also{' '}
            <a
              href='https://github.com/shamwela/my-website'
              target='_blank'
              rel='noopener'
            >
              star the repository on GitHub
            </a>
            .
          </p>

          <p>
            <Link href='/blog'>
              <a>See other blogs</a>
            </Link>
          </p>
        </>
      )}
    </>
  )
}

export default BlogCallToAction
