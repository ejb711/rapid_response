<template>
  <v-app>
    <v-app-bar
      :class="{ 'navbar-scrolled': isScrolled }"
      elevation="1"
      height="140"
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
        <v-container class="d-flex align-center px-2">
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            color="white"
            class="d-flex d-md-none"
          ></v-app-bar-nav-icon>

          <v-spacer></v-spacer>

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
          </div>
        </v-container>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
    >
      <mobile-nav @navigate="handleNavigation" />
    </v-navigation-drawer>

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

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

const drawer = ref(false)
const route = useRoute()

const navigationItems = [
  { title: 'HOME', to: '/' },
  { title: 'SERVICES', to: '/services' },
  { title: 'ABOUT', to: '/about' },
  { title: 'CONTACT', to: '/contact' }
]

const isScrolled = ref(false)

const handleScroll = () => {
  // Adjust the scroll threshold as needed.
  // Increase for more scroll before the effect kicks in, decrease for sooner.
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

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.v-application {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.v-main {
  flex: 1 0 auto;
}

.v-footer {
  flex-shrink: 0;
}

.v-container {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

/* 
  Initial header styles:
  Change background-color (#8B0000) if you prefer a different red shade.
*/
.v-app-bar {
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: #8B0000 !important; /* Initial solid red color */
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

  position: fixed !important;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
}

/* 
  When scrolled:
  - Adjust rgba(139,0,0,0.7) for more or less transparency.
  - Change blur(8px) to your desired blur amount.
*/
.navbar-scrolled {
  background-color: rgba(139, 0, 0, 0.87) !important;
  backdrop-filter: blur(10px) !important;
}

/* 
  Apply effect to the logo image when scrolled:
  - Adjust opacity for how "faded" it looks (1 = no fade, 0 = fully transparent).
  - Adjust filter: blur(2px) for the amount of blur applied.
  
  Try different values:
  - For less blur: blur(1px) or no blur.
  - For less transparency: opacity: 0.9 or 0.95.
*/
.navbar-scrolled .logo-image {
  opacity: 0.925;
  filter: blur(0px);
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.logo-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-section {
  flex: 2;
  display: flex;
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

.logo-image {
  height: 140px;
  width: auto;
  object-fit: contain;
  opacity: 1;
  margin: 10px 0;
  border: 2px solid black;
  border-radius: 28px;
  transition: opacity 0.3s ease, filter 0.3s ease; /* Ensure smooth transitions */
}

/* Navigation button hover effects */
.v-btn--variant-text:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

/* Active navigation state */
.v-btn--active {
  background: rgba(255, 255, 255, 0.1) !important;
  font-weight: 600 !important;
}

/* Transitions for route changes */
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
  }

  .v-btn {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .logo-image {
    height: 100px;
  }

  .v-btn {
    font-size: 0.9rem;
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
