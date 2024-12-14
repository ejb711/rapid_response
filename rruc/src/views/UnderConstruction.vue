<template>
    <div class="construction-container">
      <v-container class="text-center py-16">
        <v-img
          src="/src/assets/logo.png"
          alt="Rapid Response Urgent Care Logo"
          class="construction-logo mx-auto mb-8"
          width="400"
        />
        
        <h1 class="text-h2 font-weight-bold mb-6">Opening January 2, 2024</h1>
        
        <p class="text-body-1 mb-8 max-w-md mx-auto">
          Our new website is under construction. We're working hard to bring you a better experience.
        </p>
  
        <div class="contact-info mb-8">
          <h2 class="text-h5 mb-4">Need to reach us?</h2>
          <div class="d-flex justify-center gap-4 flex-wrap">
            <v-btn
              prepend-icon="mdi-phone"
              color="primary"
              class="mr-4"
              href="tel:985-300-6123"
            >
              985-300-6123
            </v-btn>
            <v-btn
              prepend-icon="mdi-email"
              color="primary"
              href="mailto:support@healthcare.com"
            >
              Email Us
            </v-btn>
          </div>
        </div>
  
        <div class="construction-footer mt-16">
          <p class="text-caption">
            © {{ new Date().getFullYear() }} Rapid Response Urgent Care. All rights reserved.
          </p>
        </div>
      </v-container>
    </div>
  </template>
  
  <style scoped>
  .construction-container {
    min-height: 100vh;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
  }
  
  .construction-logo {
    background: white;
    padding: -0.5rem;
    border-radius: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .max-w-md {
    max-width: 28rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  </style>