import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compress from 'vite-plugin-compress'
// import ViteWebp from 'vite-plugin-vue-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    compress(),
  ],
})
