<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar
      :class="{ 'navbar-scrolled': isScrolled }"
      elevation="1"
      height="180"
      class="navbar-container"
    >
      <div class="logo-section">
        <router-link to="/" class="text-decoration-none d-flex align-center">
          <img
            src="/src/assets/logo.png"
            alt="Rapid Response Urgent Care Logo"
            class="logo-image"
          />
        </router-link>
      </div>

      <div class="navigation-section">
        <v-container fluid class="d-flex align-center px-4">
          <v-spacer></v-spacer>
          
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            color="white"
            class="d-flex d-md-none mobile-menu-icon"
          ></v-app-bar-nav-icon>

          <div class="d-none d-md-flex align-center gap-4">
            <v-btn
              v-for="item in navigationItems"
              :key="item.to"
              :to="item.to"
              :active="route.path === item.to"
              variant="text"
              color="white"
              class="font-weight-medium text-none px-5"
              style="letter-spacing: 0.5px; font-size: 1.2rem;"
            >
              {{ item.title }}
            </v-btn>
            
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="text"
                  color="white"
                  class="font-weight-medium text-none px-5"
                  style="letter-spacing: 0.5px; font-size: 1.2rem;"
                >
                  MORE
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  :href="portalUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-weight-medium"
                >
                  <v-list-item-title>PATIENT PORTAL</v-list-item-title>
                </v-list-item>
                <v-list-item
                  :href="webPayUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-weight-medium"
                >
                  <v-list-item-title>BILL PAY</v-list-item-title>
                </v-list-item>
                <v-list-item
                  to="/contact"
                  :active="route.path === '/contact'"
                  class="font-weight-medium"
                >
                  <v-list-item-title>CONTACT</v-list-item-title>
                </v-list-item>
                <v-list-item
                  to="/about"
                  :active="route.path === '/about'"
                  class="font-weight-medium"
                >
                  <v-list-item-title>ABOUT</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-container>
      </div>
    </v-app-bar>

    <!-- Coming Soon Banner -->
    <section class="coming-soon-banner py-3">
      <v-container fluid>
        <div class="d-flex align-center justify-center gap-4">
          <v-icon icon="mdi-hospital-building" color="white" />
          <p class="text-white mb-0">
            {{ BANNER_TEXT }}
          </p>
        </div>
      </v-container>
    </section>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
    >
      <mobile-nav @navigate="handleNavigation" />
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- Footer -->
    <v-footer class="pa-0">
      <site-footer />
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MobileNav from '@/components/navigation/MobileNav.vue'
import SiteFooter from '@/components/footer/SiteFooter.vue'

const BANNER_TEXT = 'Urgent Care - Opening Soon!'
const drawer = ref(false)
const route = useRoute()
const portalUrl = 'https://patientportal.intelichart.com/'
const webPayUrl = 'https://rapidresponseuc.webpay.md'

const navigationItems = [
  { title: 'HOME', to: '/' },
  { title: 'SERVICES', to: '/services' },
  { title: 'CARE COMPASS', to: '/carecompass' }
]

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleNavigation = () => {
  drawer.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
:root {
  --content-max-width: 1440px;
  --section-padding: 2rem;
  --border-radius: 8px;
}

/* Coming Soon Banner */
.coming-soon-banner {
  background-color: #8B0000 !important;
  position: fixed;
  top: 180px;
  left: 0;
  width: 100%;
  z-index: 999;
}

/* Base styles */
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Application container */
.v-application {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Main content area */
.v-main {
  flex: 1 0 auto;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  margin-top: calc(140px + 48px);
  padding-top: 1rem;
}

/* Footer */
.v-footer {
  flex-shrink: 0;
  width: 100%;
  max-width: 100vw;
}

/* Container */
.v-container {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

/* Navbar styles */
.navbar-container {
  display: flex;
  align-items: center;
  padding: 0 !important;
  background-color: #8B0000 !important;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  position: fixed !important;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-scrolled {
  background-color: rgba(139, 0, 0, 0.87) !important;
  backdrop-filter: blur(10px) !important;
}

.navbar-scrolled .logo-image {
  opacity: 0.925;
  filter: blur(0px);
  transition: opacity 0.3s ease, filter 0.3s ease;
}

/* Logo section */
.logo-section {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
}

/* Navigation section */
.navigation-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

/* Logo image */
.logo-image {
  height: 140px;
  width: auto;
  object-fit: contain;
  opacity: 1;
  margin: 10px 0;
  border: 2px solid black;
  border-radius: 28px;
  transition: opacity 0.3s ease, filter 0.3s ease;
  min-width: 200px;
}

/* Navigation buttons */
.v-btn--variant-text:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.v-btn--active {
  background: rgba(255, 255, 255, 0.1) !important;
  font-weight: 600 !important;
}

/* Mobile menu icon */
.mobile-menu-icon {
  margin-right: 8px;
}

/* Route transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive styles */
@media (max-width: 960px) {
  .logo-image {
    height: 120px;
    min-width: 180px;
  }

  .v-btn {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .v-app-bar {
    width: 100vw !important;
    max-width: 100%;
    left: 0;
    right: 0;
  }

  .logo-section {
    padding-left: 8px;
  }

  .navigation-section {
    width: 100%;
    padding: 0;
  }

  .navigation-section .v-container {
    padding-right: 8px !important;
  }

  .logo-image {
    height: 100px;
    min-width: 160px;
    max-width: none;
  }

  .v-btn {
    font-size: 0.9rem;
  }

  .mobile-menu-icon {
    margin-right: 8px;
  }

  .v-container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}

/* Print styles */
@media print {
  .v-app-bar,
  .v-footer,
  .no-print {
    display: none !important;
  }
}
</style>