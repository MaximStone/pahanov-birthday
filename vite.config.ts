import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/pahanov-birthday/',
  build: {
    outDir: './docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        congrats: resolve(__dirname, 'congrats.html'),
        puzzle: resolve(__dirname, 'puzzle.html'),
        memories: resolve(__dirname, 'memories.html'),
      },
    },
  }

})
