<template>
  <nav aria-label="Main navigation">
    <v-list role="navigation">
      <!-- Navigation Links -->
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        class="mb-1"
        :aria-label="`Navigate to ${item.title}`"
        role="menuitem"
      >
        <template v-slot:title>
          <span class="nav-text">{{ item.title }}</span>
        </template>
      </v-list-item>

      <v-divider 
        class="my-2"
        role="separator"
        aria-hidden="true"
      ></v-divider>

      <!-- Contact Information -->
      <v-list-item
        prepend-icon="mdi-phone"
        title="Contact"
        subtitle="985-300-6123"
        role="complementary"
        aria-label="Contact Information"
      >
        <template v-slot:subtitle>
          <a 
            href="tel:+19853006123" 
            class="text-decoration-none"
            aria-label="Call us at 985-300-6123"
          >
            985-300-6123
          </a>
        </template>
      </v-list-item>
    </v-list>
  </nav>
</template>

<script setup>
const navigationItems = [
  {
    title: 'Home',
    to: '/',
    icon: 'mdi-home',
    description: 'Return to homepage'
  },
  {
    title: 'Services',
    to: '/services',
    icon: 'mdi-medical-bag',
    description: 'View our medical services'
  },
  {
    title: 'Care Compass',
    to: '/carecompass',
    icon: 'mdi-compass-outline',
    description: 'Navigate your healthcare journey'
  },
  {
    title: 'About',
    to: '/about',
    icon: 'mdi-information',
    description: 'Learn about our organization'
  },
  {
    title: 'Contact',
    to: '/contact',
    icon: 'mdi-email',
    description: 'Get in touch with us'
  }
]
</script>

<style scoped>
.v-list-item {
  min-height: 48px;
}

/* Improve focus visibility */
.v-list-item:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Ensure sufficient color contrast */
.nav-text {
  color: rgba(0, 0, 0, 0.87);
}

/* Improve touch target sizes for mobile */
@media (max-width: 768px) {
  .v-list-item {
    min-height: 56px;
    padding: 12px;
  }
}
</style>