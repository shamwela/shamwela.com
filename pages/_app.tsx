import 'styles/global.css'
import { AppProps } from 'next/app'
import Footer from 'components/Footer'
import { pilatWideBoldFont } from 'utilities/pilatWideBoldFont'
import Navigation from 'components/Navigation'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      h1,
      h2,
      h3 {
        font-family: ${pilatWideBoldFont.style.fontFamily};
      }
    `}</style>
    <Navigation />
    <main className='flex flex-col'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
