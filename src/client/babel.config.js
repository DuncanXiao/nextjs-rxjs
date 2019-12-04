console.log('load babel.config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ['styled-jsx/babel', { optimizeForSpeed: true }],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    'jsx-control-statements',
    ['module-resolver', {
      root: [__dirname],
      extensions: ['.js', '.jsx'],
      alias: {
        '@': __dirname
      }
    }]
  ]
}
