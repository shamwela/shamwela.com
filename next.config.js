const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
})
