<template>
  <v-app>
    <!-- App Bar - Fixed position header with scroll effect -->
    <v-app-bar
      :class="{ 'navbar-scrolled': isScrolled }"
      elevation="1"
      height="180"
      class="navbar-container"
    >
      <!-- Main container for logo and navigation -->
      <div class="header-content">
        <!-- Logo Section - Flush Left -->
        <div class="logo-section">
          <router-link to="/" class="text-decoration-none d-flex align-center">
            <img
              src="/src/assets/logo.png"
              alt="Rapid Response Urgent Care Logo"
              class="logo-image"
            />
          </router-link>
        </div>

        <!-- Mobile Menu Icon - Show on small screens and tablets -->
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="white"
          class="d-flex d-lg-none mobile-menu-icon"
          aria-label="Toggle navigation menu"
        ></v-app-bar-nav-icon>

        <!-- Desktop Navigation Section - Flush Right -->
        <div class="navigation-section d-none d-lg-flex">
          <!-- Primary Navigation Items -->
          <div class="nav-links">
            <template v-for="item in primaryNavItems" :key="item.to">
              <v-btn
                v-if="!item.external"
                :to="item.to"
                :active="route.path === item.to"
                variant="text"
                color="white"
                class="nav-btn"
              >
                {{ item.title }}
              </v-btn>
              <v-btn
                v-else
                :href="item.to"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                color="white"
                class="nav-btn"
              >
                {{ item.title }}
              </v-btn>
            </template>

            <!-- More Dropdown Menu -->
            <v-menu 
              open-on-hover 
              transition="scale-transition"
              :close-on-content-click="true"
              offset="5"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="text"
                  color="white"
                  class="nav-btn"
                >
                  MORE
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>

              <v-list>
                <template v-for="item in secondaryNavItems" :key="item.to">
                  <v-list-item
                    v-if="item.external"
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-list-item"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-else
                    :to="item.to"
                    :active="route.path === item.to"
                    class="nav-list-item"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </v-app-bar>

    <!-- Mobile/Tablet Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      width="300"
      class="navigation-drawer"
    >
      <mobile-nav @navigate="closeDrawer" />
    </v-navigation-drawer>

    <!-- Main Content Area -->
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

// External URLs for navigation links
const portalUrl = 'https://patientportal.intelichart.com/'
const webPayUrl = 'https://rapidresponseuc.webpay.md'
const route = useRoute()

// State management for mobile drawer
const drawer = ref(false)

// Primary navigation items that are always visible on desktop
const primaryNavItems = [
  { title: 'HOME', to: '/' },
  { title: 'URGENT CARE SERVICES', to: '/services' },
  { title: 'WEIGHT LOSS', to: '/weightloss' },
  { 
    title: 'SCHEDULE',
    to: 'https://www.clockwisemd.com/hospitals/15568/visits/new',
    external: true 
  }
]

// Secondary navigation items that appear in the More dropdown
const secondaryNavItems = [
  { title: 'PATIENT PORTAL', to: portalUrl, external: true },
  { title: 'BILL PAY', to: webPayUrl, external: true },
  { title: 'CONTACT', to: '/contact' },
  { title: 'ABOUT', to: '/about' }
]

// Scroll handling for navbar transparency effect
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Close mobile drawer after navigation
const closeDrawer = () => {
  drawer.value = false
}

// Lifecycle hooks for scroll event management
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Root variables for consistent spacing and sizing */
:root {
  --content-max-width: 1440px;
  --section-padding: 2rem;
  --border-radius: 8px;
  --header-height-desktop: 180px;
  --header-height-tablet: 160px;
  --header-height-mobile: 140px;
}

/* Base styles for body and layout */
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
  margin-top: var(--header-height-desktop);
  padding-top: 1rem;
}

/* Navbar container styles */
.navbar-container {
  background-color: #8B0000 !important;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  position: fixed !important;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
}

/* Header content wrapper */
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  max-width: var(--content-max-width);
  margin: 0 auto;
  height: 100%;
}

/* Navbar scroll effect */
.navbar-scrolled {
  background-color: rgba(139, 0, 0, 0.87) !important;
  backdrop-filter: blur(10px) !important;
}

/* Logo section styles */
.logo-section {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.logo-image {
  height: 140px;
  width: auto;
  object-fit: contain;
  opacity: 1;
  margin: 10px 0;
  border: 2px solid black;
  border-radius: 28px;
  transition: opacity 0.3s ease;
}

/* Navigation section styles */
.navigation-section {
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Navigation button styles */
.nav-btn {
  font-size: 1rem !important;
  letter-spacing: 0.5px !important;
  font-weight: 500 !important;
  padding: 0 1rem !important;
  height: 48px !important;
  text-transform: uppercase;
  white-space: nowrap;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.nav-btn.v-btn--active {
  background: rgba(255, 255, 255, 0.1) !important;
  font-weight: 600 !important;
}

/* Dropdown menu items */
.nav-list-item {
  font-size: 1rem !important;
  font-weight: 500 !important;
  text-transform: uppercase;
  min-height: 44px;
}

/* Route transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Navigation drawer styles */
.navigation-drawer {
  background-color: white;
}

/* Responsive styles for large screens */
@media (min-width: 1280px) {
  .header-content {
    padding: 0 2rem;
  }

  .nav-btn {
    padding: 0 1.25rem !important;
  }
}

/* Responsive styles for medium-large screens */
@media (min-width: 1024px) and (max-width: 1279px) {
  .nav-btn {
    font-size: 0.9rem !important;
    padding: 0 0.75rem !important;
  }

  .logo-image {
    height: 120px;
  }
}

/* Responsive styles for tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  .header-content {
    padding: 0 1rem;
  }

  .logo-image {
    height: 110px;
  }

  .v-app-bar {
    height: var(--header-height-tablet) !important;
  }

  .v-main {
    margin-top: var(--header-height-tablet);
  }
}

/* Responsive styles for mobile devices */
@media (max-width: 767px) {
  .header-content {
    padding: 0 0.75rem;
  }

  .logo-image {
    height: 90px;
  }

  .v-app-bar {
    height: var(--header-height-mobile) !important;
  }

  .v-main {
    margin-top: var(--header-height-mobile);
  }
}

/* Print styles */
@media print {
  .v-app-bar,
  .v-footer {
    display: none !important;
  }
}
</style>