import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({
  title = 'Sha Mwe La',
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content="Sha Mwe La's website"></meta>
      </Head>

      <Nav />

      <main
        style={{ maxWidth: '70ch' }}
        className='mx-auto p-8 flex flex-col gap-y-8'
      >
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
