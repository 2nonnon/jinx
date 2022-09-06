import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import modules from './modules'
import pages from '~pages'
import AppLayout from '~/layout/AppLayout.vue'
import BaseHttpService from '~/utils/base-http.service'
import { useSider } from '~/composables/useSider'

const { initSider } = useSider()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        name: 'Home',
        path: '',
        meta: {
          title: '首页',
        },
        component: () => import('~/views/HomePage/index.vue'),
      },
      ...pages,
      {
        name: '404',
        path: ':pathMatch(.*)*',
        meta: {
          title: '页面不存在',
          side: false,
        },
        component: () => import('~/views/NotFound.vue'),
      },
    ],
  },
]

console.log(pages)
console.log(routes)

const router = createRouter({
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
  history: createWebHistory(),
  routes,
})

modules.forEach((_) => {
  router.addRoute(_)
})

initSider(modules)

router.beforeEach((to, from, next) => {
  const base = new BaseHttpService()
  const token = base.accessToken
  document.title = to.meta.title
  console.log({ token }, 'route start')
  next()
})

router.afterEach(() => {
  console.log('route end')
})

export default router
