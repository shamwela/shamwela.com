import 'styles/globals.css'
import { AppProps } from 'next/app'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import { ClickToComponent } from 'click-to-react-component'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Navigation />
    <main className='mx-auto flex max-w-[70ch] flex-col p-5'>
      <ClickToComponent />
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
