import { reactive, ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const sider = reactive<RouteRecordRaw[]>([])
const isNotCollapse = ref(true)

const recursionFilerRoute = (routes: RouteRecordRaw[]) => {
  return routes.filter((item) => {
    if (!item.meta?.side)
      return false
    if (Array.isArray(item.children))
      item.children = recursionFilerRoute(item.children)
    return true
  })
}

export const useSider = () => {
  const handleToggleCollapse = () => {
    isNotCollapse.value = !isNotCollapse.value
  }

  const initSider = (modules: RouteRecordRaw[]) => {
    sider.length = 0
    sider.push(...recursionFilerRoute(modules))
  }

  return {
    isNotCollapse,
    handleToggleCollapse,
    sider,
    initSider,
  }
}
