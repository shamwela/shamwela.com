import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Head from 'next/head'
import BlogCallToAction from 'components/BlogCallToAction'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// Some languages are not added by default. They should be added maually.
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-git'

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

  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main
        style={{ maxWidth: '70ch' }}
        className='flex flex-col p-8 mx-auto gap-y-8'
      >
        <Component {...pageProps} />
        <BlogCallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
