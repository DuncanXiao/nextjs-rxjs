const path = require('path')

module.exports = {
  env: {}, // Build-time configuration
  serverRuntimeConfig: {
    nextDir: process.env.NEXT_DIR || path.resolve(__dirname, '../src/client'),
    port: parseInt(process.env.PORT, 10) || 3000
  }, // Runtime configuration
  publicRuntimeConfig: {
    isDev: process.env.NODE_ENV !== 'production'
  }
}
