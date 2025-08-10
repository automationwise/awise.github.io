import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

// If you ever deploy under a subpath (no custom domain), set base to '/<repo>/'
export default defineConfig({
  base: '/',
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown()
  ],
  build: { outDir: 'dist' }
})
