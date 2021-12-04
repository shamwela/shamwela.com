import Head from 'next/head'
import { useRouter } from 'next/router'

const CustomHead = ({
  // Although these parameters are required, they don't work well in MDX files.
  // So, the default parameters are added here.
  title = 'Sha Mwe La',
  description = "Sha Mwe La's website",
  keywords = 'sha mwe la, shamwela, shamwela.com',
  previewImage = 'sha-mwe-la-open-graph.png',
}: {
  title: string
  description: string
  keywords: string
  previewImage: string
}) => {
  const previewImageUrl = `https://www.shamwela.com/images/${previewImage}`
  const { pathname } = useRouter()
  const ogUrl = `https://www.shamwela.com${pathname}`

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

      <meta name='image' content={previewImageUrl} />
      <meta property='og:image' content={previewImageUrl} />
      <meta name='twitter:image' content={previewImageUrl} />

      <meta property='og:url' content={ogUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />

      <meta property='og:type' content='blog' />

      {/* Favicons for different platforms */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}

export default CustomHead
