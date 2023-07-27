import 'styles/global.css'
import { AppProps } from 'next/app'
import Footer from 'components/Footer'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <main className='flex flex-col'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
