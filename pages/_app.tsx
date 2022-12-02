import 'styles/global.css'
import { AppProps } from 'next/app'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import localFont from '@next/font/local'

const gtAmericaExtended = localFont({
  src: [
    {
      path: '../public/fonts/GT-America-Extended-Black.woff2',
      weight: '900',
    },
    {
      path: '../public/fonts/GT-America-Extended-Light.woff2',
      weight: '300',
    },
  ],
  variable: '--gt-america',
})

const App = ({ Component, pageProps }: AppProps) => (
  <div className={gtAmericaExtended.variable}>
    <Navigation />
    <main className='flex flex-col'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
)

export default App
