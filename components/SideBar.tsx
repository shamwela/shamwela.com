import { useRouter } from 'next/router'
import Link from 'next/link'

const SideBar = () => {
  const router = useRouter()
  const blogSlugs = [
    'tips-for-coders',
    'roadmap',
    'favorite-coding-resources',
    'favorite-visual-studio-code-extensions',
    'how-to-host-a-website-for-free',
    'why-i-love-tailwind-css',
  ]

  const separatedParts = router.asPath.split('/')
  const currentBlog = separatedParts[separatedParts.length - 1]
  const currentBlogIndex = blogSlugs.indexOf(currentBlog)

  const nextBlog = blogSlugs[currentBlogIndex + 1]
  const previousBlog = blogSlugs[currentBlogIndex - 1]

  return (
    <>
      {router.asPath.includes('/blog/') && (
        <section
          style={{ fontSize: '0.875rem' }}
          className='text-sm md:text-base fixed right-0 bottom-32 bg-secondary text-primary p-4 flex flex-col text-right'
        >
          {nextBlog && (
            <Link href={'/blog/' + nextBlog}>
              <a>←</a>
            </Link>
          )}

          {previousBlog && (
            <Link href={'/blog/' + previousBlog}>
              <a>→</a>
            </Link>
          )}
        </section>
      )}

      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default SideBar
