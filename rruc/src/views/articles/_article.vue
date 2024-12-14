<template>
  <div>
    <component :is="ArticleComponent" v-if="ArticleComponent" />
    <NotFound v-else />
  </div>
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NotFound from '../NotFound.vue'

const route = useRoute()
const ArticleComponent = shallowRef(null)

onMounted(async () => {
  try {
    const importedComponent = (await import(`./${route.params.articleSlug}.vue`)).default
    ArticleComponent.value = importedComponent
  } catch (e) {
    // If the component isn't found, show the NotFound component
    ArticleComponent.value = null
  }
})
</script>
