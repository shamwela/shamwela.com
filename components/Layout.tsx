import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
