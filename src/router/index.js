import ListarJugador from '@/components/jugadores/ListarJugador.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/jugador/add',
      name: 'new',
      component: () => import('@/components/jugadores/AgregarJugador.vue'),
    },
    {
      path: '/jugador/list',
      name: 'list',
      component: ListarJugador,
    },
    {
      path: '/jugador/update/:id',
      name: 'update',
      component: () => import('@/components/jugadores/ActualizarJugador.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('@/NotFound.vue'),
    },
  ],
})

export default router
