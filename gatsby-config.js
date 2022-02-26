module.exports = {
  siteMetadata: {
    title: `Ravi Mashru`,
    description: `Ravi Mashru's home page on the internet - personal portfolio, blog and notes.`,
    author: `@mashruravi`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false
          }
        }
      }
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post-images`,
        path: `${__dirname}/content/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notebooks`,
        path: `${__dirname}/content/notebooks/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/notes/`,
        ignore: [`**/\.*`]
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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
            options: {
              parseWikiLinks: true,
              stripBrackets: true,
              titleToURLPath: `${__dirname}/resolve-notes-url.js`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
        ]
      }
    },
    `gatsby-remark-copy-linked-files`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
