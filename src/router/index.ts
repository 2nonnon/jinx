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
    children: [...pages],
  },
]

console.log(pages)

const router = createRouter({
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
  history: createWebHistory(),
  routes,
})

// modules.forEach((_) => {
//   router.addRoute(_)
// })

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
