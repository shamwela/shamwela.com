import 'styles/globals.css'

import Footer from 'ui/Footer'
import Navigation from 'ui/Navigation'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <main className='max-w-[70ch] flex flex-col p-5 mx-auto'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
