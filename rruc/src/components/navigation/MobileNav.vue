<template>
  <nav aria-label="Main navigation">
    <v-list role="navigation">
      <v-list-item
        v-for="item in mainNavigationItems"
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

      <!-- More Menu Items -->
      <v-list-item
        href="https://patientportal.intelichart.com/"
        target="_blank"
        rel="noopener noreferrer"
        prepend-icon="mdi-account-circle"
        title="Patient Portal"
        class="mb-1"
        :aria-label="'Access Patient Portal'"
        role="menuitem"
      >
        <template v-slot:title>
          <span class="nav-text">Patient Portal</span>
        </template>
      </v-list-item>

      <v-list-item
        to="/contact"
        prepend-icon="mdi-email"
        title="Contact"
        class="mb-1"
        aria-label="Navigate to Contact"
        role="menuitem"
      >
        <template v-slot:title>
          <span class="nav-text">Contact</span>
        </template>
      </v-list-item>

      <v-list-item
        to="/about"
        prepend-icon="mdi-information"
        title="About"
        class="mb-1"
        aria-label="Navigate to About"
        role="menuitem"
      >
        <template v-slot:title>
          <span class="nav-text">About</span>
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
const mainNavigationItems = [
  {
    title: 'Home',
    to: '/',
    icon: 'mdi-home',
    description: 'Return to homepage'
  },
  {
    title: 'Weight Loss',
    to: '/weightloss',
    icon: 'mdi-scale-bathroom',
    description: 'Weight loss services'
  },
  {
    title: 'Urgent Care Services',
    to: '/services',
    icon: 'mdi-medical-bag',
    description: 'View our medical services'
  },
  {
    title: 'News',
    to: '/news',
    icon: 'mdi-newspaper',
    description: 'Latest news and updates'
  },
  {
    title: 'Schedule Online',
    href: 'https://www.clockwisemd.com/hospitals/15568/visits/new',
    icon: 'mdi-clock-check-outline',
    description: 'Schedule your appointment online'
  }
]
</script>

<style scoped>
.v-list-item {
  min-height: 48px;
}

.v-list-item:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.nav-text {
  color: rgba(0, 0, 0, 0.87);
}

@media (max-width: 768px) {
  .v-list-item {
    min-height: 56px;
    padding: 12px;
  }
}
</style>