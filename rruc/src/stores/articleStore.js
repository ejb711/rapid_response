// stores/articleStore.js
import { defineStore } from 'pinia'
import articleData from '@/data/articles.json'

export const useArticleStore = defineStore('article', {
  state: () => ({
    // Loaded from articles.json
    articles: articleData.articles,

    // For preserving scroll position per route path
    scrollPositions: {},

    // Whether the footer nav is displayed at all
    navigationEnabled: true,

    // We'll store the alignment in localStorage so it persists across reloads
    navAlignment: localStorage.getItem('navAlignment') || 'horizontal'
  }),

  actions: {
    // Scroll handling
    setScrollPosition(path, position) {
      this.scrollPositions[path] = position
    },
    getScrollPosition(path) {
      return this.scrollPositions[path] || 0
    },

    // Retrieve an article object by matching the link property
    getArticleByPath(path) {
      return this.articles.find(article => article.link === path)
    },

    // Toggle navigation
    setNavigationEnabled(enabled) {
      this.navigationEnabled = enabled
    },

    // Persist nav alignment to localStorage
    setNavAlignment(alignment) {
      this.navAlignment = alignment
      localStorage.setItem('navAlignment', alignment)
    }
  }
})
