import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ViteWebp from 'vite-plugin-vue-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteWebp({
    //   dirs: ['src/assets/icons'],
    //   extensions: ['jpg', 'jpeg', 'png', 'svg'],
    //   customResolvers: [],
    //   customSearchRegex: '([A-Z][a-zA-Z0-9]+)',
    // })
  ]
})
