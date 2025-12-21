<template>
  <main class="care-compass">
    <!-- Hero Section -->
    <section 
      class="hero-section py-8" 
      role="banner"
      aria-label="Welcome to CareCompass"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h2 font-weight-bold mb-2">CareCompass</h1>
            <p class="text-body-1">
              Your guide to health and wellness. Expert medical insights and healthcare tips from our professionals.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Featured Article Section -->
    <section 
      v-if="currentFeaturedArticle" 
      class="featured-article py-8"
      aria-label="Featured article"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <div 
              class="featured-card clickable-card" 
              @click="navigateToFeatured"
              role="article"
              :aria-label="`Featured article: ${currentFeaturedArticle.title}`"
            >
              <v-card elevation="0">
                <v-row>
                  <!-- Left Column - Image -->
                  <v-col cols="12" md="6" class="pa-0">
                    <div class="d-flex flex-column align-center justify-center bg-grey-lighten-5 fill-height pa-8">
                      <div class="featured-icon-container">
                        <v-img
                          :src="currentFeaturedArticle.image"
                          :alt="currentFeaturedArticle.imageCaption"
                          width="300"
                          height="225"
                          class="featured-icon"
                          contain
                        >
                          <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                              <v-progress-circular indeterminate color="error"></v-progress-circular>
                            </div>
                          </template>
                        </v-img>
                      </div>
                      <div class="text-center mt-4">
                        <span class="text-subtitle-1 text-medium-emphasis">{{ currentFeaturedArticle.imageCaption }}</span>
                      </div>
                    </div>
                  </v-col>

                  <!-- Right Column - Content -->
                  <v-col cols="12" md="6" class="pa-0">
                    <div class="d-flex flex-column h-100 pa-12">
                      <div class="mb-4 d-flex align-center justify-space-between">
                        <v-chip
                          color="error"
                          size="small"
                          variant="flat"
                          label
                          class="text-uppercase font-weight-medium"
                        >
                          Featured
                        </v-chip>
                        
                        <!-- Featured Article Navigation -->
                        <div 
                          v-if="featuredArticles.length > 1"
                          class="navigation-controls"
                          @click.stop.prevent
                          role="navigation"
                          aria-label="Featured article navigation"
                        >
                          <v-btn
                            icon="mdi-chevron-left"
                            variant="text"
                            size="small"
                            color="error"
                            @click="previousFeatured"
                            @mouseenter="stopAutoRotate"
                            @mouseleave="startAutoRotate"
                            aria-label="Previous featured article"
                          ></v-btn>
                          <span 
                            class="text-caption mx-2"
                            aria-live="polite"
                          >
                            {{ currentFeaturedIndex + 1 }} / {{ featuredArticles.length }}
                          </span>
                          <v-btn
                            icon="mdi-chevron-right"
                            variant="text"
                            size="small"
                            color="error"
                            @click="nextFeatured"
                            @mouseenter="stopAutoRotate"
                            @mouseleave="startAutoRotate"
                            aria-label="Next featured article"
                          ></v-btn>
                        </div>
                      </div>

                      <h2 class="text-h4 font-weight-bold mb-6">{{ currentFeaturedArticle.title }}</h2>
                      
                      <p class="text-body-1 text-medium-emphasis mb-8">{{ currentFeaturedArticle.excerpt }}</p>

                      <div class="mt-auto">
                        <v-btn
                          color="error"
                          size="large"
                          variant="elevated"
                          class="px-8 text-uppercase font-weight-bold"
                          @click.stop="navigateToFeatured"
                        >
                          Read More
                          <span class="sr-only">about {{ currentFeaturedArticle.title }}</span>
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Categories Section -->
    <section 
      class="categories-section py-8 bg-grey-lighten-4"
      role="navigation"
      aria-label="Article categories"
    >
      <v-container>
        <h2 class="text-h5 font-weight-bold mb-6 text-center">Browse by Category</h2>
        <v-row justify="center">
          <v-col cols="12">
            <div 
              class="d-flex flex-wrap justify-center gap-2"
              role="toolbar"
              aria-label="Category filters"
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                :color="selectedCategory === category.toLowerCase().replace(' ', '-') ? 'error' : undefined"
                :variant="selectedCategory === category.toLowerCase().replace(' ', '-') ? 'elevated' : 'outlined'"
                class="ma-1 px-4"
                @click="selectCategory(category)"
                :aria-pressed="selectedCategory === category.toLowerCase().replace(' ', '-')"
                role="button"
                tabindex="0"
              >
                {{ category }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Articles Grid -->
    <section 
      class="articles-grid py-12"
      role="feed"
      aria-label="Article list"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="article in displayedArticles"
            :key="article.id"
            cols="12"
            sm="6"
            md="4"
          >
            <div 
              class="article-card rounded-lg clickable-card" 
              @click="() => navigateToArticle(article)"
              role="article"
              :aria-label="article.title"
            >
              <v-card elevation="0">
                <!-- Article Image -->
                <div class="article-image-wrapper bg-grey-lighten-5 pa-12">
                  <v-img
                    :src="article.image"
                    :alt="article.imageCaption"
                    height="120"
                    contain
                    class="mb-4"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular indeterminate color="error"></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                  <div class="text-center">
                    <span class="text-subtitle-1 text-medium-emphasis">{{ article.imageCaption }}</span>
                  </div>
                </div>

                <!-- Article Content -->
                <div class="article-content px-6 py-4">
                  <div class="d-flex gap-2 mb-4">
                    <v-chip
                      v-if="article.featured"
                      color="error"
                      variant="flat"
                      size="small"
                      label
                      class="font-weight-medium"
                    >
                      Featured
                    </v-chip>
                    <v-chip
                      color="error"
                      variant="outlined"
                      size="small"
                      label
                      class="font-weight-medium"
                    >
                      {{ article.category }}
                    </v-chip>
                    <time class="text-caption text-medium-emphasis pt-1" :datetime="formatDateISO(article.date)">
                      {{ article.date }}
                    </time>
                  </div>

                  <h3 class="text-h6 font-weight-bold mb-3 text-truncate-2">{{ article.title }}</h3>
                  
                  <p class="text-body-2 text-medium-emphasis mb-4 text-truncate-3">{{ article.excerpt }}</p>

                  <v-btn
                    variant="text"
                    color="error"
                    class="px-0 text-none font-weight-bold"
                    @click.stop="() => navigateToArticle(article)"
                  >
                    READ MORE
                    <span class="sr-only">about {{ article.title }}</span>
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <!-- Load More Button -->
        <v-row v-if="hasMoreArticles" class="mt-8">
          <v-col cols="12" class="text-center">
            <v-btn
              color="error"
              variant="outlined"
              @click="loadMore"
              :loading="loading"
              :disabled="loading"
              class="px-6"
              aria-label="Load more articles"
            >
              {{ loading ? 'Loading more articles...' : 'Load More Articles' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useArticles } from '@/composables/useArticles'

const router = useRouter()

// Get articles from composable
const { articles: articlesList } = useArticles()

// State
const selectedCategory = ref(null)
const loading = ref(false)
const page = ref(1)
const itemsPerPage = 6
const currentFeaturedIndex = ref(0)
let autoRotateInterval = null

// Dynamic Categories
const categories = computed(() => {
  const uniqueCategories = new Set(articlesList.value.map(article => article.category))
  return ['All Articles', ...Array.from(uniqueCategories)].sort()
})

// Featured Articles
const featuredArticles = computed(() => 
  articlesList.value.filter(article => article.featured)
)

const currentFeaturedArticle = computed(() => 
  featuredArticles.value[currentFeaturedIndex.value]
)

// Navigation methods for featured articles
const nextFeatured = () => {
  currentFeaturedIndex.value = (currentFeaturedIndex.value + 1) % featuredArticles.value.length
}

const previousFeatured = () => {
  currentFeaturedIndex.value = currentFeaturedIndex.value === 0 
    ? featuredArticles.value.length - 1 
    : currentFeaturedIndex.value - 1
}

// Auto-rotate featured articles
const startAutoRotate = () => {
  stopAutoRotate() // Clear any existing interval
  if (featuredArticles.value.length > 1) {
    autoRotateInterval = setInterval(() => {
      nextFeatured()
    }, 5000) // Rotate every 5 seconds
  }
}

const stopAutoRotate = () => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval)
    autoRotateInterval = null
  }
}

// Navigation methods
const navigateToFeatured = (event) => {
  // Check if click originated from navigation controls
  if (!event.target.closest('.navigation-controls')) {
    router.push(currentFeaturedArticle.value.link)
  }
}

const navigateToArticle = (article) => {
  router.push(article.link)
}

// Category selection
const selectCategory = (category) => {
  selectedCategory.value = category.toLowerCase().replace(' ', '-')
  page.value = 1 // Reset pagination
}

// Format date for datetime attribute
const formatDateISO = (dateStr) => {
  const date = new Date(dateStr)
  return date.toISOString().split('T')[0]
}

// Regular Articles (now includes featured articles)
const displayedArticles = computed(() => {
  let filtered = selectedCategory.value && selectedCategory.value !== 'all-articles'
    ? articlesList.value.filter(article => 
        article.category.toLowerCase().replace(' ', '-') === selectedCategory.value
      )
    : articlesList.value

  return filtered.slice(0, page.value * itemsPerPage)
})

const hasMoreArticles = computed(() => {
  const filtered = selectedCategory.value && selectedCategory.value !== 'all-articles'
    ? articlesList.value.filter(article => 
        article.category.toLowerCase().replace(' ', '-') === selectedCategory.value
      )
    : articlesList.value
  return displayedArticles.value.length < filtered.length
})

// Lifecycle hooks
onMounted(() => {
  startAutoRotate()
})

onBeforeUnmount(() => {
  stopAutoRotate()
})

// Methods
const loadMore = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  page.value++
  loading.value = false
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

.featured-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  overflow: hidden;
}

.featured-icon-container {
  width: 300px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-icon {
  border: 2px solid #BA1818;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.article-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.clickable-card {
  cursor: pointer;
}

.clickable-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-image-wrapper {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.gap-2 {
  gap: 0.5rem;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.navigation-controls {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}

/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid var(--v-error-base);
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .featured-icon-container {
    width: 240px;
    height: 180px;
  }

  .pa-16 {
    padding: 24px !important;
  }

  .pa-8 {
    padding: 16px !important;
  }
}

@media (max-width: 600px) {
  .featured-icon-container {
    width: 210px;
    height: 158px;
  }

  .text-h2 {
    font-size: 2rem !important;
  }
  
  .text-h4 {
    font-size: 1.5rem !important;
    line-height: 1.4 !important;
  }
  
  .v-card-title {
    font-size: 1.25rem !important;
  }

  .article-image-wrapper {
    padding: 1.5rem !important;
  }
  
  .article-content {
    padding: 1rem !important;
  }
}
</style>