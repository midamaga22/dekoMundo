import { createRouter, createWebHistory } from 'vue-router'

import Category from '@/views/Category.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cat/:category/:name',
    name: 'category',
    component: Category 
  },
  {
    path: '/item/:code',
    name: 'item',
    component: Category 
  },
  {
    path: '/contact',
    name: 'contact',
    component: Category
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Configuración correcta
  routes // Pasa el array de rutas definido arriba
})

export default router