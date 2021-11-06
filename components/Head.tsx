import Head from 'next/head'

// This component is created because next/head can't be used directly in MDX files
const CustomHead = ({
  title,
  description = title,
  ogImageUrl = '/sha-mwe-la-photo.jpg',
}: {
  title: string
  description?: string
  ogImageUrl?: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />

      <meta property='og:image' content={ogImageUrl} />
      <meta name="twitter:image" content={ogImageUrl}/>

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />
    </Head>
  )
}

export default CustomHead
