import 'styles/globals.css'
import { AppProps } from 'next/app'
import Footer from 'components/Footer'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <main className='mx-auto flex max-w-[70ch] flex-col p-5'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
