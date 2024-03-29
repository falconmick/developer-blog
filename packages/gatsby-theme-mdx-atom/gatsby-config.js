const Debug = require(`debug`)

const debug = Debug(`gatsby-theme-mdx-atom`)

debug(`inside of mdx-atom's gatsby-config`)
module.exports = options => {
  debug(`inside of mdx-atom's gatsby-config's export`)

  const { mdx = true } = options

  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/gatsbyjs`,
        },
        {
          name: `github`,
          url: `https://github.com/gatsbyjs`,
        },
      ],
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`,
        },
      },
      `gatsby-plugin-react-helmet`,
    ].filter(Boolean),
  }
}
