const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{ maxWidth: '70ch' }}
      className='p-8 mx-auto flex flex-col gap-y-8'
    >
      {children}
    </main>
  )
}

export default Layout
