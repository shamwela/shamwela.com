const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

// Wrap the config so it can add necessary configurations to process MDX files.
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Tell Next.js that it should render MDX files as page if they're in the page directory.
})
