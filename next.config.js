const slug = import('rehype-slug')

module.exports = require('@zeit/next-mdx')({
  options: {
    hastPlugins: [
      slug
    ]
  }
})({
  pageExtensions: ['jsx', 'js', 'md', 'mdx']
})