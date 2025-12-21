// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
    path: '/virtual-visit/learn-more',
    name: 'VirtualVisitLearnMore',
    component: () => import('../views/VirtualVisit_LearnMore.vue'),
    meta: { title: 'Virtual Visits - Learn More' }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue'),
    props: true,
    meta: { title: 'Rapid Response Urgent Care: Privacy Policy' }
  },
  {
    path: '/accessibility',
    name: 'accessibility',
    component: () => import('../views/Accessibility.vue'),
    props: true,
    meta: { title: 'Rapid Response Urgent Care: Accessibility' }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Terms.vue'),
    props: true,
    meta: { title: 'Rapid Response Urgent Care: Terms of Service' }
  },
  {
    path: '/3377396579',
    name: '3377396579',
    component: () => import('../views/3377396579.vue'),
    props: true,
    meta: { title: 'SandBox' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: { title: '404 - Page Not Found' }
  },
  {
    path: '/weightloss',
    name: 'weightloss',
    component: () => import('../views/WeightLoss.vue'),
    meta: { title: 'Weight Loss Services' }
  },
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
        }, 450)
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