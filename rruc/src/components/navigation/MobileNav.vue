<template>
    <v-list>
      <!-- User Profile Section -->
      <!-- <v-list-item
        prepend-avatar="Image 2"
        title="Guest User"
        subtitle="Login or Sign Up"
        class="mb-2"
      >
        <template v-slot:append>
          <v-btn
            color="primary"
            variant="text"
            size="small"
            to="/login"
          >
            Login
          </v-btn>
        </template>
      </v-list-item>
  
      <v-divider></v-divider> -->
  
      <!-- Navigation Links -->
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        class="mb-1"
      ></v-list-item>
  
      <v-divider class="my-2"></v-divider>
  
      <!-- Contact Information -->
      <v-list-item
        prepend-icon="mdi-phone"
        title="Contact"
        subtitle="985-300-6123"
      ></v-list-item>
    </v-list>
  </template>
  
  <script setup>
  const navigationItems = [
    {
      title: 'Home',
      to: '/',
      icon: 'mdi-home'
    },
    {
      title: 'Services',
      to: '/services',
      icon: 'mdi-medical-bag'
    },
    {
      title: 'About',
      to: '/about',
      icon: 'mdi-information'
    },
    {
      title: 'Contact',
      to: '/contact',
      icon: 'mdi-email'
    }
  ]
  </script>
  
  <style scoped>
  .v-list-item {
    min-height: 48px;
  }
  </style>