import Head from 'next/head'
import { useRouter } from 'next/router'

const CustomHead = ({
  title,
  description,
  imageUrl,
  date,
}: {
  title: string
  description: string
  imageUrl: string
  date: string
}) => {
  const fullImageUrl = 'https://www.shamwela.com' + imageUrl
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:alt' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='image' content={fullImageUrl} />
      <meta property='og:image' content={fullImageUrl} />
      <meta name='twitter:image' content={fullImageUrl} />

      <meta property='article:published_time' content={date} />

      <meta
        property='og:url'
        content={'https://www.shamwela.com' + router.asPath}
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />

      <meta property='og:type' content='blog' />

      {/* Favicons for different platforms */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicons/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />

      {/* Download and cache the font files as soon as possible */}
      <link
        rel='preload'
        href='/fonts/Roboto-Regular.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='/fonts/Roboto-Bold.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='/fonts/Roboto-Mono-Regular.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
    </Head>
  )
}

export default CustomHead
