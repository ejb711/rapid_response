<template>
    <div class="iframe-wrapper">
      <iframe
        src="https://rapidresponseuc.webpay.md"
        ref="webpayFrame"
        class="webpay-iframe"
      ></iframe>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const webpayFrame = ref(null)
  
  onMounted(() => {
    if (webpayFrame.value) {
      webpayFrame.value.onload = () => {
        console.log('iframe loaded successfully')
      }
    }
  })
  </script>
  
  <style scoped>
  .iframe-wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  
  .webpay-iframe {
    width: 100%;
    height: calc(100% + 180px); /* Increased extra height */
    border: none;
    margin-top: -180px; /* Increased negative margin to hide header */
    position: absolute;
    top: 0;
    left: 0;
    
    /* Hide scrollbars */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .webpay-iframe::-webkit-scrollbar {
    display: none;
  }
  </style>