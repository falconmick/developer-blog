const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const crypto = require(`crypto`)
const Debug = require(`debug`)

const debug = Debug(`gatsby-theme-mdx-blog`)

// These are customizable theme options we only need to check once
let basePath
let assetPath

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()

  basePath = themeOptions.basePath || `/`
  assetPath = themeOptions.assetPath || `content/assets`

  const dirs = [
    path.join(program.directory, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}
