const { env, serverRuntimeConfig, publicRuntimeConfig } = require('./share/env')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    withTM({
      transpileModules: ['draft-js'],
      env,
      serverRuntimeConfig,
      publicRuntimeConfig
    })
  ]
)
