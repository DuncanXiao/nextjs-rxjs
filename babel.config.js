console.log('load babel.config.js')

module.exports = {
  'presets': ['next/babel'],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': true
      }
    ],
    'jsx-control-statements',
    ['module-resolver', {
      'cwd': 'babelrc',
      'root': [`${__dirname}/src/client`],
      'extensions': ['.js', '.jsx'],
      'alias': {
        '@': `${__dirname}/src/client`
      }
    }]
  ]
}
