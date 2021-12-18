import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import 'styles/globals.css'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// Some languages are not added by default. They should be added manually here.
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-git'

const App = ({ Component, pageProps }) => {
  const { pathname } = useRouter()

  useEffect(() => {
    // Only if it is a blog page, highlight the <code> tags
    if (pathname.startsWith('/blog/')) {
      prism.highlightAll()
    }
  }, [pathname])

  return (
    <>
      <Nav />
      <main className='max-w-[70ch] flex flex-col p-5 mx-auto gap-y-5'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
