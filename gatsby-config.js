module.exports = {
  siteMetadata: {
    title: `Ravi Mashru`,
    description: `Ravi Mashru's home page on the internet - personal portfolio, blog and notes.`,
    author: `@mashruravi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ravi Mashru's Home Page`,
        short_name: `Ravi Mashru`,
        background_color: `#323232`,
        theme_color: `#323232`,
        display: `standalone`,
        icon: `src/images/rm-hires.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-mdx`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
