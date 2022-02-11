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
  },
  entry: {
    
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  // 出力するフォルダ名
  }
}