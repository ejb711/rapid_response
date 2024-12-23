# src/views/articles/_article.vue
<template>
  <div class="article-wrapper">
    <Suspense>
      <template #default>
        <keep-alive>
          <component 
            :is="articleComponent" 
            v-if="articleComponent"
            v-bind="$attrs"
          />
          <NotFound v-else />
        </keep-alive>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref, shallowRef, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NotFound from '../NotFound.vue'

defineOptions({
  inheritAttrs: false
})

const route = useRoute()
const articleComponent = shallowRef(null)

onMounted(async () => {
  try {
    const importedComponent = await import(`./content/${route.params.articleSlug}.vue`)
    articleComponent.value = importedComponent.default
  } catch (e) {
    articleComponent.value = null
  }
})
</script>

<style scoped>
.article-wrapper {
  width: 100%;
}
</style>