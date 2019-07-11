// gatsby-config.js
const Debug = require(`debug`)

const debug = Debug(`site`)

debug(`inside of site's gatsby-config`)
module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-mdx-blog`,
            options: {
                // basePath defaults to `/`
                basePath: `/blog`,
            },
        },
        {
            resolve: `gatsby-theme-assets`
        }
    ],
    siteMetadata: {
        // Used for the site title and SEO
        title: `My Blog Title`,
        // Used to provide alt text for your avatar
        author: `My Name`,
        // Used for SEO
        description: `My site description...`,
        // Used for social links in the root footer
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
}