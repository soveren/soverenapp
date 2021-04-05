import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/news'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/news'
      },
      {
        path: 'news',
        component: () => import('@/views/News.vue')
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
        path: 'my',
        component: () => import('@/views/MyStore.vue')
      },
      {
        path: 'store/:uid',
        component: () => import('@/views/Store.vue')
      },
      {
        path: 'inventory',
        component: () => import('@/views/Inventory.vue')
      },
      {
        path: 'product',
        component: () => import('@/views/Product.vue')
      },
      {
        path: 'edit-store',
        component: () => import('@/views/EditStore.vue')
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
