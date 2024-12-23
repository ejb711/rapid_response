import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const app = createApp(App)
const head = createHead()

const vuetify = createVuetify({
 components,
 directives,
 icons: {
   defaultSet: 'mdi'
 },
 theme: {
   defaultTheme: 'light',
   themes: {
     light: {
       dark: false,
       colors: {
         'header-color': '#8B0000',
         primary: '#8B0000',
         secondary: '#4A4A4A',
         background: '#FAFAFA',
         surface: '#FFFFFF',
         'text-primary': '#2E2E2E',
         'text-secondary': '#555555',
         'border-color': '#E0E0E0',
         error: '#C62828',
         info: '#1565C0',
         success: '#2E7D32',
         warning: '#F9A825'
       }
     }
   }
 }
})

// Initialize Google Analytics
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
 const script = document.createElement('script')
 script.async = true
 script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BKX6M5F76C'
 document.head.appendChild(script)

 window.dataLayer = window.dataLayer || []
 function gtag() {
   window.dataLayer.push(arguments)
 }
 gtag('js', new Date())
 gtag('config', 'G-BKX6M5F76C')
 gtag('config', 'AW-983112378')
}

app.use(router)
app.use(vuetify)
app.use(head)
app.mount('#app')