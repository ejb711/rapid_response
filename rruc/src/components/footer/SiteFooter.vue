<template>
    <v-footer class="site-footer bg-primary">
      <v-container class="py-8">
        <!-- Main Footer Content -->
        <v-row>
          <!-- Company Info -->
          <v-col cols="12" md="4" class="mb-6 mb-md-0">
            <div class="mb-6">
              <v-img
                src="Image 1"
                alt="Company Logo"
                max-width="180"
                class="mb-4"
              />
              <p class="text-body-2 text-white">
                Delivering compassionate care when and where you need it, combining traditional in-person visits with seamless virtual solutions for comprehensive urgent care.
              </p>
            </div>
            <div class="d-flex align-center mb-4">
              <v-icon icon="mdi-phone" color="white" class="mr-2"></v-icon>
              <a href="tel:985-300-6123" class="text-white text-decoration-none">
                985-300-6123
              </a>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-email" color="white" class="mr-2"></v-icon>
              <a href="mailto:contact@rrurgentcare.com" class="text-white text-decoration-none">
                contact@rrurgentcare.com
              </a>
            </div>
          </v-col>
  
          <!-- Quick Links -->
          <v-col cols="12" sm="6" md="2">
            <h3 class="text-h6 font-weight-bold text-white mb-4">
              Services
            </h3>
            <v-list class="bg-transparent pa-0">
              <v-list-item
                v-for="link in serviceLinks"
                :key="link.title"
                :to="link.to"
                class="px-0"
                density="compact"
              >
                <v-list-item-title class="text-white">
                  {{ link.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
  
          <!-- Company Links -->
          <v-col cols="12" sm="6" md="2">
            <h3 class="text-h6 font-weight-bold text-white mb-4">
              Company
            </h3>
            <v-list class="bg-transparent pa-0">
              <v-list-item
                v-for="link in companyLinks"
                :key="link.title"
                :to="link.to"
                class="px-0"
                density="compact"
              >
                <v-list-item-title class="text-white">
                  {{ link.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
  
          <!-- Social & App Links -->
          <v-col cols="12" md="4">
            <h3 class="text-h6 font-weight-bold text-white mb-4">
              Connect With Us
            </h3>
            <!-- Social Media Icons -->
            <div class="d-flex mb-6 gap-4">
              <v-btn
                v-for="social in socialLinks"
                :key="social.icon"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                icon
                variant="outlined"
                color="white"
              >
                <v-icon :icon="social.icon"></v-icon>
              </v-btn>
            </div>
            <!-- App Store Buttons -->
            <div class="d-flex flex-wrap gap-4">
              <v-btn
                variant="outlined"
                color="white"
                href="#"
                target="_blank"
                prepend-icon="mdi-apple"
              >
                App Store
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                href="#"
                target="_blank"
                prepend-icon="mdi-google-play"
              >
                Google Play
              </v-btn>
            </div>
          </v-col>
        </v-row>
  
        <!-- Bottom Bar -->
        <v-divider color="white" class="my-6"></v-divider>
        
        <div class="d-flex flex-wrap justify-space-between">
          <!-- Copyright -->
          <div class="text-caption text-white mb-4 mb-sm-0">
            © {{ currentYear }} Rapid Response Urgent Care. All rights reserved.<br>
            Logos are trademarks of their respective owners.
          </div>
          
          <!-- Legal Links -->
          <div class="d-flex flex-wrap gap-4">
            <router-link
              v-for="link in legalLinks"
              :key="link.title"
              :to="link.to"
              class="text-caption text-white text-decoration-none"
            >
              {{ link.title }}
            </router-link>
          </div>
        </div>
      </v-container>
    </v-footer>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const currentYear = computed(() => new Date().getFullYear())
  
  // Footer Links
  const serviceLinks = [
  { title: 'In Person Visit', to: '/services?section=urgent' },
  { title: 'Virtual Waiting Room', to: '/services?section=virtual-waiting' },
  { title: 'Virtual Visits', to: '/services?section=virtual-visit' }
  ]
  
  const companyLinks = [
    { title: 'About Us', to: '/about' },
    { title: 'Contact', to: '/contact' },
    { title: 'Care Compass', to: '/carecompass' }
  ]
  
  const socialLinks = [
    { icon: 'mdi-facebook', href: 'https://www.facebook.com/people/Rapid-Response-Urgent-Care/61566987523640/' },
    { icon: 'mdi-twitter', href: '#' },
    { icon: 'mdi-instagram', href: '#' },
    { icon: 'mdi-linkedin', href: '#' }
  ]
  
  const legalLinks = [
    { title: 'Privacy Policy', to: '/privacy' },
    { title: 'Terms of Service', to: '/terms' },
    { title: 'Accessibility', to: '/accessibility' }
  ]
  </script>
  
  <style scoped>
  .site-footer {
    color: white;
  }
  
  .bg-transparent {
    background-color: transparent !important;
  }
  
  .v-list-item {
    min-height: 32px !important;
  }
  
  .v-list-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  @media (max-width: 600px) {
    .v-list-item {
      min-height: 40px !important;
    }
  }
  </style>