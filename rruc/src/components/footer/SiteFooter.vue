<template>
  <footer class="site-footer bg-primary" role="contentinfo" aria-label="Site Footer">
    <div class="v-container fluid py-8 px-4">
      <!-- Main Footer Content -->
      <div class="v-row no-gutters">
        <!-- Company Info -->
        <div class="v-col cols-12 md-4 mb-6 mb-md-0">
          <div class="mb-6">
            <!-- Company Logo -->
            <img
              src="@/assets/logo.png"
              alt="Rapid Response Urgent Care Logo"
              width="180"
              height="auto"
              class="mb-4 mx-auto mx-md-0"
            />
            <p class="text-body-2 text-white text-center text-md-left">
              Delivering compassionate care when and where you need it, combining traditional in-person visits with seamless virtual solutions for comprehensive urgent care.
            </p>
          </div>
          <!-- Contact Info -->
          <address class="d-flex flex-column align-start mb-4">
            <div class="d-flex align-center mb-4 justify-center justify-md-start">
              <span class="sr-only">Phone:</span>
              <v-icon icon="mdi-phone" color="white" class="mr-2" size="small" aria-hidden="true" />
              <a 
                href="tel:985-300-6123" 
                class="text-white text-decoration-none"
                aria-label="Call us at 985-300-6123"
              >
                985-300-6123
              </a>
            </div>
            <div class="d-flex align-center mb-4 justify-center justify-md-start">
              <span class="sr-only">Email:</span>
              <v-icon icon="mdi-email" color="white" class="mr-2" size="small" aria-hidden="true" />
              <a 
                href="mailto:contact@rrurgentcare.com" 
                class="text-white text-decoration-none"
                aria-label="Email us at contact@rrurgentcare.com"
              >
                contact@rrurgentcare.com
              </a>
            </div>
            <div class="d-flex align-center justify-center justify-md-start">
              <span class="sr-only">Address:</span>
              <v-icon icon="mdi-map-marker" color="white" class="mr-2" size="small" aria-hidden="true" />
              <a 
                href="https://maps.google.com/?q=609+Brashear+Ave.,+Morgan+City,+LA+70830" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-white text-decoration-none"
                aria-label="Visit our location at 609 Brashear Avenue, Morgan City, Louisiana 70830 (opens in new tab)"
              >
                609 Brashear Ave., Morgan City, LA 70380
              </a>
            </div>
          </address>
        </div>

        <!-- Services Navigation -->
        <nav class="v-col cols-12 sm-6 md-2 px-4" aria-label="Services Navigation">
          <h2 class="text-h6 font-weight-bold text-white mb-4 text-center text-md-left">
            Services
          </h2>
          <ul class="clean-list pa-0">
            <li v-for="link in serviceLinks" :key="link.title">
              <router-link
                :to="link.to"
                class="footer-link px-0 justify-center justify-md-start"
                :aria-label="`Learn more about our ${link.title} service`"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Company Navigation -->
        <nav class="v-col cols-12 sm-6 md-2 px-4" aria-label="Company Navigation">
          <h2 class="text-h6 font-weight-bold text-white mb-4 text-center text-md-left">
            Company
          </h2>
          <ul class="clean-list pa-0">
            <li v-for="link in companyLinks" :key="link.title">
              <router-link
                :to="link.to"
                class="footer-link px-0 justify-center justify-md-start"
                :aria-label="`Visit our ${link.title} page`"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Social Links -->
        <div class="v-col cols-12 md-4 px-4">
          <h2 class="text-h6 font-weight-bold text-white mb-4 text-center text-md-left">
            Connect With Us
          </h2>
          <div class="d-flex mb-6 justify-center justify-md-start gap-4" role="list" aria-label="Social Media Links">
            <a
              v-for="social in socialLinks"
              :key="social.icon"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :aria-label="`Follow us on ${social.name} (opens in new tab)`"
            >
              <v-icon :icon="social.icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <hr class="footer-divider my-6" aria-hidden="true" />
      
      <div class="d-flex flex-column flex-sm-row justify-space-between align-center">
        <!-- Copyright -->
        <div class="text-caption text-white mb-4 mb-sm-0 text-center text-sm-left">
          <p>© {{ currentYear }} Rapid Response Urgent Care. All rights reserved.</p>
          <p>Logos are trademarks of their respective owners.</p>
        </div>
        
        <!-- Legal Navigation -->
        <nav aria-label="Legal Navigation">
          <ul class="d-flex flex-wrap gap-4 justify-center justify-sm-end clean-list">
            <li v-for="link in legalLinks" :key="link.title">
              <router-link
                :to="link.to"
                class="text-caption text-white text-decoration-none"
                :aria-label="`View our ${link.title}`"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const serviceLinks = [
  { title: 'In Person Visit', to: '/services?section=urgent' },
  { title: 'Virtual Waiting Room', to: '/services?section=virtual-waiting' },
  { title: 'Virtual Visits', to: '/services?section=virtual-visit' }
]

const companyLinks = [
  { title: 'About Us', to: '/about' },
  { title: 'Contact', to: '/contact' }
]

const socialLinks = [
  { 
    icon: 'mdi-facebook', 
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Rapid-Response-Urgent-Care/61566987523640/' 
  }
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
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.clean-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-link {
  display: block;
  min-height: 32px;
  color: white;
  text-decoration: none;
  padding: 4px 0;
}

.footer-link:hover,
.footer-link:focus {
  background: rgba(255, 255, 255, 0.1);
  outline: 2px solid white;
  outline-offset: 2px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
}

.social-link:hover,
.social-link:focus {
  background: rgba(255, 255, 255, 0.1);
  outline: 2px solid white;
  outline-offset: 2px;
}

.footer-divider {
  border: none;
  border-top: 1px solid white;
  margin: 1.5rem 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.gap-4 {
  gap: 1rem;
}

@media (max-width: 600px) {
  .footer-link {
    min-height: 40px !important;
    text-align: center;
  }
  
  .v-container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}

/* Text alignment utilities */
@media (min-width: 960px) {
  .text-md-left {
    text-align: left !important;
  }
}

@media (min-width: 600px) {
  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }
}
</style>