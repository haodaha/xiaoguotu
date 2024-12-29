import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/client/order/waiting'
    },
    {
      path: '/client/order/waiting',
      name: 'waitingOrder',
      component: () => import('../views/client/order/WaitingOrder.vue')
    },
    {
      path: '/warehouse/inbound',
      name: 'inboundManagement',
      component: () => import('../views/warehouse/InboundManagement.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router 