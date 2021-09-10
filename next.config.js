const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Add lang='en' to all pages
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})
