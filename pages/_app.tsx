import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
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
