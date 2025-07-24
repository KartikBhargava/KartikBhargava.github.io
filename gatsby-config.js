module.exports = {
  siteMetadata: {
    title: `Kartik Bhargava - Tech Blog`,
    description: `Technology, programming, and development insights`,
    author: `Kartik Bhargava`,
    siteUrl: `https://kartikbhargava.github.io`,
    social: {
      twitter: `@kartikbhargav18`,
      github: `KartikBhargava`,
      linkedin: `kartik-bhargava`,
      email: `your.email@gmail.com`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    
    // Temporarily disable manifest plugin
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Kartik Bhargava - Tech Blog`,
    //     short_name: `Kartik Tech`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#3b82f6`,
    //     display: `standalone`,
    //     icon: `src/images/icon.png`,
    //   },
    // },

    // File System
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // MDX for blog posts
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                sh: "bash",
                js: "javascript",
                ts: "typescript"
              },
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}