import Vue from 'vue'
import VueRouter from 'vue-router'

import * as layouts from '@/layouts'
import * as pages from '@/pages'
import * as auth from '@/pages/Auth'
import * as verification from '@/pages/Verification'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layouts.defaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: pages.landing,
      }
    ],
  },
  {
    path: '/sign_in',
    component: layouts.defaultLayout,
    children: [
      {
        path: '/sign_up',
        name: 'sign_up',
        component: auth.registration,
      },
      {
        path: '/sign_in',
        name: 'sign_in',
        component: auth.login,
      },
      {
        path: '/verified',
        name: 'account_verified',
        component: verification.verified,
      },
      {
        path: '/error_verification',
        name: 'not_verified',
        component: verification.error,
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
