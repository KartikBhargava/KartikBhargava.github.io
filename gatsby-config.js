module.exports = {
  pathPrefix: "/my-tech-blog",
  siteMetadata: {
    title: `Your Tech Blog`,
    description: `A blog about technology, programming, and development`,
    author: `Your Name`,
    siteUrl: `https://kartikbhargava.github.io/my-tech-blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}