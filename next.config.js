const { env, serverRuntimeConfig, publicRuntimeConfig } = require('./share/env')

module.exports = {
  env,
  serverRuntimeConfig,
  publicRuntimeConfig,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}
