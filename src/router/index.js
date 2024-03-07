import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/searchResults',
    name: 'search-results',
    component: () => import('../views/searchResults.vue')
  },
  {
    path: '/FilmsAffichage',
    name: 'films-affichage',
    component: () => import('../views/FilmsAffichage.vue')
  },
  {
    path: '/SeriesAffichage',
    name: 'series-affichage',
    component: () => import('../views/SeriesAffichage.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
