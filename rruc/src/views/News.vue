<!--
  Filename: News.vue
  Purpose: News & Updates page with SociableKIT Facebook feed widget
  Last Updated: December 21, 2024
-->
<template>
  <main class="news" role="main">
    <!-- Hero Section -->
    <section
      class="hero-section py-12"
      aria-labelledby="news-title"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" class="text-center">
            <h1
              id="news-title"
              class="text-h2 font-weight-bold mb-4"
            >
              News & Updates
            </h1>
            <p class="text-body-1 mb-6">
              Stay connected with the latest news, health tips, and announcements from Rapid Response Urgent Care.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Facebook Feed Section -->
    <section
      class="facebook-section py-12 bg-grey-lighten-4"
      aria-labelledby="facebook-heading"
    >
      <v-container>
        <h2 id="facebook-heading" class="text-h4 text-center mb-8">Follow Us on Facebook</h2>
        <div class="facebook-widget-container">
          <div class="sk-ww-facebook-page-posts" data-embed-id="25635747"></div>
        </div>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section
      class="cta py-16"
      aria-labelledby="cta-heading"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 id="cta-heading" class="text-h4 mb-6">Need Care Today?</h2>
            <p class="text-body-1 mb-6">
              Walk-ins welcome or schedule your visit online for faster service.
            </p>
            <v-btn
              size="large"
              color="primary"
              href="https://www.clockwisemd.com/hospitals/15568/visits/new"
              target="_blank"
              rel="noopener"
              prepend-icon="mdi-calendar"
              aria-label="Schedule an in-person visit"
            >
              Schedule Visit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// Load SociableKIT Facebook widget script
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://widgets.sociablekit.com/facebook-page-posts/widget.js'
  script.defer = true
  document.body.appendChild(script)
})

useHead({
  title: 'News & Updates - Rapid Response Urgent Care',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with the latest news, health tips, and announcements from Rapid Response Urgent Care in Morgan City, LA.'
    },
    {
      property: 'og:title',
      content: 'News & Updates - Rapid Response Urgent Care'
    },
    {
      property: 'og:description',
      content: 'Latest news and updates from Rapid Response Urgent Care in Morgan City, Louisiana.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

.facebook-section {
  background-color: #f5f5f5;
}

.facebook-widget-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.sk-ww-facebook-page-posts {
  width: 100%;
}

@media (max-width: 960px) {
  .facebook-widget-container {
    max-width: 100%;
    margin: 0 1rem;
    border-radius: 8px;
  }
}

@media (max-width: 600px) {
  .facebook-widget-container {
    margin: 0;
    border-radius: 0;
    padding: 0.5rem;
  }
}
</style>
