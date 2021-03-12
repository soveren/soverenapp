import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'dash',
        component: () => import('@/views/Dash.vue')
      },
      {
        path: 'shops',
        component: () => import('@/views/Shops.vue')
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
        path: 'purchases',
        component: () => import('@/views/Purchases.vue')
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
