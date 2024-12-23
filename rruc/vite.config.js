// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'
import generateSitemap from './sitemap-generator.js'
import prerenderPlugin from './prerender.js'

export default defineConfig({
  base: '/',
  plugins: [
    vue({
      include: [/\.vue$/],
      template: {
        transformAssetUrls: {
          img: ['src']
        }
      }
    }),
    vuetify({ autoImport: true }),
    prerenderPlugin,
    {
      name: 'generate-sitemap',
      async closeBundle() {
        try {
          await generateSitemap()
        } catch (error) {
          console.error('Error generating sitemap:', error)
        }
      }
    }
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
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
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: *.googletagmanager.com",
        "style-src 'self' 'unsafe-inline' https: fonts.googleapis.com",
        "font-src 'self' fonts.gstatic.com data:",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https: wss:",
        "frame-src 'self' https:",
        "base-uri 'self'",
        "object-src 'none'"
      ].join('; '),
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', 'vuetify', '@vueuse/head']
  }
})