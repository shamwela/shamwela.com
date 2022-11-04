import { withPlaiceholder } from '@plaiceholder/next'
import { withContentlayer } from 'next-contentlayer'

export default withContentlayer(
  withPlaiceholder({
    reactStrictMode: true,
  })
)
