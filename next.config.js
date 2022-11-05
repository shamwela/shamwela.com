const { withContentlayer } = require('next-contentlayer')
const { withPlaiceholder } = require('@plaiceholder/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withContentlayer(withPlaiceholder(nextConfig))
