import { createRouter, createWebHistory } from 'vue-router'

// Opción 1: Usando import directo (recomendado para rutas principales)
import mainView from '@/views/home/mainView.vue'
import VinilView from '@/views/pisos/viewVinil.vue'

// Opción 2: Usando lazy-loading (recomendado para rutas secundarias)
// const VinilView = () => import('@/views/pisos/viewVinil.vue')

const routes = [
  {
    path: '/mainView',
    name: 'mainView',
    component: mainView// Usa solo UNA de las opciones anteriores
  },
  {
    path: '/viewVinil',
    name: 'vinil',
    component: VinilView // Usa solo UNA de las opciones anteriores
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Configuración correcta
  routes // Pasa el array de rutas definido arriba
})

export default router