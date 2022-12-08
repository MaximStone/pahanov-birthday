import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import PuzzlePage from "@/views/PuzzlePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage
    },
    {
      path: '/puzzle',
      name: 'puzzle',
      component: () => import('../views/PuzzlePage.vue')
    },
    {
      path: '/memories',
      name: 'memories',
      component: () => import('../views/MemoriesPage.vue')
    },
    {
      path: '/congrats',
      name: 'finish',
      component: () => import('../views/FinishPage.vue')
    }
  ]
})

export default router
