import NextHead from 'next/head'
import { useRouter } from 'next/router'

type HeadProps = {
  title: string
  description?: string
  date?: string
}

const Head = ({ title, description = title, date }: HeadProps) => {
  const openGraphImageUrl = 'https://www.shamwela.com/images/open-graph.png'
  const { pathname } = useRouter()

  return (
    <NextHead>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='image' content={openGraphImageUrl} />
      <meta property='og:image' content={openGraphImageUrl} />
      <meta name='twitter:image' content={openGraphImageUrl} />

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

      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  )
}

export default Head
