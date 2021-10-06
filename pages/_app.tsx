import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Head from 'next/head'
import Nav from 'components/Nav'
import Link from 'next/link'
import Footer from 'components/Footer'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  const blogSlugs = [
    'tips-for-coders',
    'roadmap',
    'favorite-coding-resources',
    'favorite-visual-studio-code-extensions',
    'why-i-love-tailwind-css',
  ]

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const separatedParts = router.asPath.split('/')
  const currentBlog = separatedParts[separatedParts.length - 1]
  const currentBlogIndex = blogSlugs.indexOf(currentBlog)

  const nextBlog = blogSlugs[currentBlogIndex + 1]
  const previousBlog = blogSlugs[currentBlogIndex - 1]

  return (
    <>
      <Head>
        <link rel='icon' href='/assets/favicon.ico' />
      </Head>

      {router.asPath.includes('/blog/') && (
        <section
          style={{ fontSize: '0.875rem' }}
          className='fixed right-0 bottom-32 p-4 flex flex-col text-right'
        >
          {nextBlog && (
            <Link href={'/blog/' + nextBlog}>
              <a>Next Blog</a>
            </Link>
          )}

          {previousBlog && (
            <Link href={'/blog/' + previousBlog}>
              <a>Previous Blog</a>
            </Link>
          )}
        </section>
      )}

      <Nav />

      <main
        style={{ maxWidth: '70ch' }}
        className='mx-auto p-8 flex flex-col gap-y-8'
      >
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default App
