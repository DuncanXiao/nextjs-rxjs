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
    }),
    {
      webpack (config, { defaultLoaders }) {
        config.module.rules.push({
          test: /\.css$/,
          include: /node_modules/,
          use: [
            defaultLoaders.babel,
            {
              loader: require('styled-jsx/webpack').loader,
              options: {
                type: 'global',
                minimize: true
              }
            }
          ]
        }, {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            defaultLoaders.babel,
            {
              loader: require('styled-jsx/webpack').loader,
              options: {
                type: 'scoped',
                minimize: true
              }
            }
          ]
        })
        config.node = { fs: 'empty', __dirname: true }
        return config
      }
    }
  ]
)
