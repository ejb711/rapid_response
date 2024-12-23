// src/analytics.js

export const GA_MEASUREMENT_ID = 'G-BKX6M5F76C';
const AW_CONVERSION_ID = 'AW-983112378';

export function initGoogleAnalytics() {
  // Ensure this function runs only in the browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Add Google Analytics tag
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
  gtag('config', AW_CONVERSION_ID);
}

export const trackConversion = (value = 1.0, currency = 'USD') => {
  // Ensure this function runs only in the browser environment
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${AW_CONVERSION_ID}/tRaxCJ_W3EkZELql5NQD`,
    value: value,
    currency: currency,
  });
};

export const trackPageView = (title, path) => {
  // Ensure this function runs only in the browser environment
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: title,
    page_path: path,
  });
};
