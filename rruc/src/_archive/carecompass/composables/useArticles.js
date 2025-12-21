import { ref } from 'vue'
import articlesData from '@/data/articles.json'

export function useArticles() {
  const articles = ref(articlesData.articles.map(article => ({
    ...article,
    // Convert the image path to the actual image URL
    image: new URL(`../assets/carecompass/${article.imagePath}`, import.meta.url).href
  })))

  return {
    articles
  }
}