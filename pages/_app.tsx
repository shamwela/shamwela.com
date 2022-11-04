import 'styles/global.css'
import { AppProps } from 'next/app'
import Footer from 'components/Footer'
import { pilatWideBoldFont } from 'utilities/pilatWideBoldFont'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      h1,
      h2,
      h3 {
        font-family: ${pilatWideBoldFont.style.fontFamily};
      }
    `}</style>
    <main className='mx-auto flex max-w-[70ch] flex-col p-5'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
)

export default App
