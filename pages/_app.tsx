import 'styles/global.css'
import { AppProps } from 'next/app'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Navigation />
    <main className='flex flex-col'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
