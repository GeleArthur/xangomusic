import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Music from '../views/Music.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path:'/Music/:land',
    name:'Music',
    component: Music
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
