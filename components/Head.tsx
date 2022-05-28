import NextHead from 'next/head'
import { useRouter } from 'next/router'

type HeadProps = {
  title: string
  description?: string
  imageUrl?: string
  date?: string
}
const baseUrl = 'https://www.shamwela.com'

const Head = ({
  title,
  description = title,
  imageUrl = '/images/sha-mwe-la-open-graph.png',
  date,
}: HeadProps) => {
  const fullImageUrl = baseUrl + imageUrl
  const { pathname } = useRouter()
  const fullUrl = baseUrl + pathname

  return (
    <NextHead>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='image' content={fullImageUrl} />
      <meta property='og:image' content={fullImageUrl} />
      <meta name='twitter:image' content={fullImageUrl} />

      {date ? <meta property='article:published_time' content={date} /> : null}

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />

      {pathname.startsWith('/blog') ? (
        <meta property='og:type' content='blog' />
      ) : (
        <meta property='og:type' content='website' />
      )}
      <meta property='og:site_name' content="Sha Mwe La's website" />

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
    </NextHead>
  )
}

export default Head
