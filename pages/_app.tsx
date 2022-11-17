import 'styles/global.css'
import { AppProps } from 'next/app'
import Footer from 'components/Footer'
import { pilatWideBoldFont } from 'utilities/pilatWideBoldFont'
import Navigation from 'components/Navigation'

const App = ({ Component, pageProps }: AppProps) => (
  <div className={pilatWideBoldFont.variable}>
    <Navigation />
    <main className='flex flex-col'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
)

export default App
