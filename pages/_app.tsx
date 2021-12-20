import Nav from 'components/Nav'
import Footer from 'components/Footer'
import 'styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <main className='max-w-[70ch] flex flex-col p-5 mx-auto gap-y-5'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
