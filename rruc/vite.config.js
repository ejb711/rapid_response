import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'
import fs from 'fs/promises'

// Sitemap generation plugin
const generateSitemapPlugin = () => ({
  name: 'generate-sitemap',
  async closeBundle() {
    try {
      const generateSitemap = (await import('./sitemap-generator.js')).default
      await generateSitemap()
      console.log('✓ Sitemap generated successfully')
    } catch (error) {
      console.error('Error generating sitemap:', error)
    }
  }
})

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    generateSitemapPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    modulePreload: true,
    target: 'esnext',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          const dirPath = assetInfo.name.split('/').slice(0, -1).join('/')
          const fileName = assetInfo.name.split('/').pop()
          
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(fileName)) {
            return `${dirPath ? `${dirPath}/` : ''}[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    headers: {
      'Content-Security-Policy': "script-src 'self' 'unsafe-eval' 'unsafe-inline';"
    }
  }
})