import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Nav />

      <main
        style={{ maxWidth: '70ch' }}
        // Bottom padding should be the same as the Nav height
        className='p-8 pb-12 md:pb-8 mx-auto flex flex-col gap-y-8'
      >
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
