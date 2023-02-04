import 'styles/global.css'
import { AppProps } from 'next/app'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Navigation />
    <main className='flex flex-col'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
)

export default App
