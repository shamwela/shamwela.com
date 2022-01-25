import 'styles/globals.css'

import { AppProps } from 'next/app'
import Footer from 'ui/Footer'
import Navigation from 'ui/Navigation'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <main className='mx-auto flex max-w-[70ch] flex-col p-5'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
