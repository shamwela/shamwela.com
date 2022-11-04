import { withContentlayer } from 'next-contentlayer'
import { withPlaiceholder } from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default withContentlayer(withPlaiceholder(nextConfig))
