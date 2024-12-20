// src/analytics.js
export const GA_MEASUREMENT_ID = 'G-BKX6M5F76C' // Replace with your GA4 measurement ID

export function initGoogleAnalytics() {
  // Add Google Analytics tag
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}