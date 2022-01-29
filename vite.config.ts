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
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules'))
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
        },
      },
      // external: ['vue', 'vue-demi'],
    },
  },
  // resolve: {
  //   alias: [{ find: 'assets', replacement: 'src/assets'}]
  // }
})
