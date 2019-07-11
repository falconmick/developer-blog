module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
    ].filter(Boolean),
  }
}
