<template>
    <div class="not-found">
      <v-container class="py-16">
        <v-row justify="center" align="center" style="min-height: 60vh">
          <v-col cols="12" md="8" class="text-center">
            <!-- Error Message -->
            <v-icon
              icon="mdi-alert-circle"
              color="primary"
              size="x-large"
              class="mb-6"
            ></v-icon>
            
            <h1 class="text-h2 font-weight-bold mb-4">
              Page Not Found
            </h1>
            
            <p class="text-body-1 mb-8">
              We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
  
            <!-- Navigation Options -->
            <div class="d-flex flex-wrap justify-center gap-4">
              <v-btn
                color="primary"
                size="large"
                to="/"
              >
                Return Home
              </v-btn>
              
              <v-btn
                variant="outlined"
                size="large"
                to="/services"
              >
                View Services
              </v-btn>
            </div>
  
            <!-- Quick Links -->
            <v-card class="mt-12 pa-6">
              <h3 class="text-h6 mb-4">Popular Pages</h3>
              <v-list>
                <v-list-item
                  v-for="link in popularLinks"
                  :key="link.to"
                  :to="link.to"
                  class="mb-2"
                >
                  <template v-slot:prepend>
                    <v-icon :icon="link.icon"></v-icon>
                  </template>
                  {{ link.text }}
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  // Popular links for quick navigation
  const popularLinks = [
    {
      text: 'Book an Appointment',
      to: '/services',
      icon: 'mdi-calendar'
    },
    {
      text: 'About Us',
      to: '/about',
      icon: 'mdi-information'
    },
    {
      text: 'Contact Support',
      to: '/contact',
      icon: 'mdi-help-circle'
    },
    {
      text: 'Virtual Services',
      to: '/services#virtual',
      icon: 'mdi-video'
    }
  ]
  </script>
  
  <style scoped>
  .not-found {
    background: linear-gradient(to bottom right, var(--v-background-base), var(--v-surface-base));
  }
  
  @media (max-width: 600px) {
    .gap-4 {
      gap: 1rem !important;
    }
  }
  </style>