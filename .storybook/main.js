// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
//   "framework": "@storybook/vue3"
// }

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


// import { createApp } from 'vue'

// import Vue from "vue";
// import App from './App.vue'

// import { createPinia } from "pinia"
// createApp(App).use(createPinia())