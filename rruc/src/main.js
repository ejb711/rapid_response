import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'header-color': '#8B0000',     // Elegant dark red for header
          primary: '#8B0000',            // Matching dark red for primary
          secondary: '#4A4A4A',          // Neutral gray for secondary contrast
          background: '#FAFAFA',         // Soft off-white background
          surface: '#FFFFFF',            // Pure white for surface elements
          'text-primary': '#2E2E2E',     // Almost black text for readability
          'text-secondary': '#555555',   // Subtle gray for secondary text
          'border-color': '#E0E0E0',     // Light gray for borders
          error: '#C62828',              // Slightly softer red for errors
          info: '#1565C0',               // Rich blue for informational elements
          success: '#2E7D32',            // Calm green for success messages
          warning: '#F9A825'             // Vibrant yellow for warnings
        }
      }
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
