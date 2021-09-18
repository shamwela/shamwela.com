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
        <meta name='description' content="Sha Mwe La's personal website"></meta>
      </Head>

      <Nav />

      <main
        style={{ maxWidth: '70ch' }}
        // Bottom padding should be the same as the Nav height
        className='p-8 pb-12 md:pb-8 mx-auto flex flex-col gap-y-8'
      >
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
