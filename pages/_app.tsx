import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Head from 'next/head'
import BlogCallToAction from 'components/BlogCallToAction'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel='icon' href='/assets/favicon.ico' />
      </Head>

      <main
        style={{ maxWidth: '70ch' }}
        className='mx-auto p-8 flex flex-col gap-y-8'
      >
        <Component {...pageProps} />
        <BlogCallToAction />
      </main>

      <Footer />
      <Nav />
    </>
  )
}

export default App
