const path = require('path')

module.exports = {
  stories: ['../src/stories/*.stories.js'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
    return config
  }
}