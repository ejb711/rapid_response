<!-- Note: Due to length, I will continue the code in my next response to ensure nothing is truncated -->
<template>
  <div class="care-compass">
    <!-- Hero Section -->
    <section class="hero-section py-8">
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

    <!-- Categories Section -->
    <section class="categories-section pt-0 pb-6">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <div class="d-flex flex-wrap justify-center gap-2">
              <v-chip
                v-for="category in categories"
                :key="category.id"
                :color="selectedCategory === category.id ? 'error' : undefined"
                :variant="selectedCategory === category.id ? 'elevated' : 'outlined'"
                class="ma-1 px-4"
                @click="selectedCategory = category.id"
              >
                {{ category.name }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Featured Article Section -->
    <section v-if="currentFeaturedArticle" class="featured-article py-8">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-card class="featured-card" elevation="0">
              <v-row>
                <!-- Left Column - Image -->
                <v-col cols="12" md="6" class="pa-0">
                  <div class="d-flex flex-column align-center justify-center bg-grey-lighten-5 fill-height pa-8">
                    <div class="featured-icon-container">
                      <v-img
                        :src="currentFeaturedArticle.image"
                        :alt="currentFeaturedArticle.imageCaption"
                        width="400"
                        height="300"
                        class="featured-icon"
                        cover
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
                  <div class="d-flex flex-column h-100 pa-16">
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
                      <div v-if="featuredArticles.length > 1" class="d-flex align-center">
                        <v-btn
                          icon="mdi-chevron-left"
                          variant="text"
                          size="small"
                          color="error"
                          @click="previousFeatured"
                        ></v-btn>
                        <span class="text-caption mx-2">{{ currentFeaturedIndex + 1 }} / {{ featuredArticles.length }}</span>
                        <v-btn
                          icon="mdi-chevron-right"
                          variant="text"
                          size="small"
                          color="error"
                          @click="nextFeatured"
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
                        :to="currentFeaturedArticle.link"
                        class="px-8 text-uppercase font-weight-bold"
                      >
                        Read More
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Articles Grid -->
    <section class="articles-grid py-12">
      <v-container>
        <v-row>
          <v-col
            v-for="article in displayedArticles"
            :key="article.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="article-card rounded-lg" elevation="0">
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
                    color="error"
                    variant="outlined"
                    size="small"
                    label
                    class="font-weight-medium"
                  >
                    {{ article.category }}
                  </v-chip>
                  <span class="text-caption text-medium-emphasis pt-1">{{ article.date }}</span>
                </div>

                <h3 class="text-h6 font-weight-bold mb-3 text-truncate-2">{{ article.title }}</h3>
                
                <p class="text-body-2 text-medium-emphasis mb-4 text-truncate-3">{{ article.excerpt }}</p>

                <v-btn
                  variant="text"
                  color="error"
                  :to="article.link"
                  class="px-0 text-none font-weight-bold"
                >
                  READ MORE
                </v-btn>
              </div>
            </v-card>
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
              class="px-6"
            >
              Load More Articles
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useArticles } from '@/composables/useArticles'

// Get articles from composable
const { articles: articlesList } = useArticles()

// State
const selectedCategory = ref(null)
const loading = ref(false)
const page = ref(1)
const itemsPerPage = 6
const currentFeaturedIndex = ref(0)
let autoRotateInterval = null

// Categories
const categories = [
  { id: 'all', name: 'All Articles' },
  { id: 'urgent-care', name: 'Urgent Care' },
  { id: 'health-tips', name: 'Health Tips' },
  { id: 'wellness', name: 'Wellness' },
  { id: 'family-health', name: 'Family Health' },
]

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
  autoRotateInterval = setInterval(() => {
    if (featuredArticles.value.length > 1) {
      nextFeatured()
    }
  }, 10000) // Rotate every 10 seconds
}

const stopAutoRotate = () => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval)
  }
}

// Regular Articles
const displayedArticles = computed(() => {
  let filtered = selectedCategory.value && selectedCategory.value !== 'all'
    ? articlesList.value.filter(article => 
        article.category.toLowerCase().replace(' ', '-') === selectedCategory.value &&
        !article.featured
      )
    : articlesList.value.filter(article => !article.featured)

  return filtered.slice(0, page.value * itemsPerPage)
})

const hasMoreArticles = computed(() => {
  const filtered = selectedCategory.value && selectedCategory.value !== 'all'
    ? articlesList.value.filter(article => 
        article.category.toLowerCase().replace(' ', '-') === selectedCategory.value &&
        !article.featured
      )
    : articlesList.value.filter(article => !article.featured)
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

.categories-section {
  margin-top: -1rem;
}

.featured-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  overflow: hidden;
}

.featured-icon-container {
  width: 400px;
  height: 300px;
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
  transition: transform 0.2s ease;
}

.article-card:hover {
  transform: translateY(-4px);
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

/* Responsive adjustments */
@media (max-width: 960px) {
  .featured-icon-container {
    width: 320px;
    height: 240px;
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
    width: 280px;
    height: 210px;
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