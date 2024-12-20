import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
