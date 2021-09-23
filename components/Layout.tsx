import Head from 'next/head'

const Layout = ({ title = 'Sha Mwe La' }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content="Sha Mwe La's website"></meta>
    </Head>
  )
}

export default Layout
