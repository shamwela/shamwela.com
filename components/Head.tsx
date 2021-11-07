import Head from 'next/head'

const MyHead = ({
  title,
  description,
  keywords,
  imageUrl,
}: {
  title: string
  description: string
  keywords: string
  imageUrl: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:alt' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='keywords' content={keywords} />

      <meta name='image' content={imageUrl} />
      <meta property='og:image' content={imageUrl} />
      <meta name='twitter:image' content={imageUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />

      <meta property='og:type' content='blog' />
      <meta property='og:url' content='https://www.shamwela.com' />
      {/* <link rel='canonical' href='https://www.shamwela.com' /> */}
    </Head>
  )
}

export default MyHead
