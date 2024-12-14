// src/composables/useArticles.js
import { ref } from 'vue'
import articleData from '@/data/articles.json'

export const useArticles = () => {
  const articles = ref(articleData.articles)
  
  return {
    articles
  }
}