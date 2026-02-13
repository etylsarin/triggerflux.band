module.exports = {
  siteMetadata: {
    title: `Triggerflux`,
    description: `High-voltage electronic rock from Adelaide's underground.`,
    siteUrl: `https://filip.github.io/triggerflux`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
