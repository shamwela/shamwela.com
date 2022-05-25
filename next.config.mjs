import { withPlaiceholder } from '@plaiceholder/next'
import { withContentlayer } from 'next-contentlayer'

export default withContentlayer(
  withPlaiceholder({
    async redirects() {
      return [
        {
          source: '/blog',
          destination: '/',
          permanent: true,
        },
      ]
    },
    reactStrictMode: true,
  })
)
