import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/dash'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/dash'
      },
      {
        path: 'dash',
        component: () => import('@/views/Dash.vue')
      },
      {
        path: 'stores',
        component: () => import('@/views/Stores.vue')
      },
      {
        path: 'add',
        component: () => import('@/views/Add.vue')
      },
      {
        path: 'store',
        component: () => import('@/views/Store.vue')
      },
      {
        path: 'products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: 'product',
        component: () => import('@/views/Product.vue')
      },
      // {
      //   path: 'profile',
      //   component: () => import('@/views/Profile.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
