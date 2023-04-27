import Vue from 'vue'
import VueRouter from 'vue-router'

import * as layouts from '@/layouts'
import * as pages from '@/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layouts.defaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: pages.landing
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
