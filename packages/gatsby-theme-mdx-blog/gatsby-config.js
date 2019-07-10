module.exports = options => {
  const { mdx = true, basePath, contentPath, assetPath } = options

  return {
    plugins: [
      {
        resolve: `gatsby-theme-mdx-blog`,
        options: {
          // basePath defaults to `/`
          basePath,
          contentPath,
          assetPath,
          mdx: mdx && {
            resolve: `gatsby-plugin-mdx`,
            options: {
              extensions: [`.mdx`, `.md`],
              gatsbyRemarkPlugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    // should this be configurable by the end-user?
                    maxWidth: 1380,
                    linkImagesToOriginal: false,
                  },
                },
                { resolve: `gatsby-remark-copy-linked-files` },
                { resolve: `gatsby-remark-numbered-footnotes` },
                { resolve: `gatsby-remark-smartypants` },
              ],
              remarkPlugins: [require(`remark-slug`)],
            },
          },
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
