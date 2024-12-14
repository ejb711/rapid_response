import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'UnderConstruction',
  //   component: () => import('../views/UnderConstruction.vue'),
  //   meta: { title: 'Rapid Response Urgent Care -Under Construction'}
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: 'Home - Healthcare Services' }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: { title: 'Our Services - Healthcare Services' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: 'About Us - Healthcare Services' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { title: 'Contact Us - Healthcare Services' }
  },
  {
    path: '/carecompass',
    name: 'CareCompass',
    component: () => import('../views/CareCompass.vue'),
    meta: { title: 'Care Compass: Your guide to health news, expert insights, and wellness tips' }
  },
  {
    path: '/articles/:articleSlug',
    name: 'article',
    component: () => import('../views/articles/_article.vue'),
    props: true,
    meta: { title: 'Article' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: { title: '404 - Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.query.section) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.getElementById(to.query.section)
          if (element) {
            const offsetPosition = element.offsetTop + 150
            resolve({
              el: `#${to.query.section}`,
              top: offsetPosition,
              behavior: 'smooth'
            })
          } else {
            resolve({ top: 0 })
          }
        }, 450) // Increased timeout
      })
    }
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Healthcare Services'
  next()
})

export default router