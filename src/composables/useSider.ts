import { reactive, ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const sider = reactive<RouteRecordRaw[]>([])
const isCollapse = ref(false)

export const useSider = () => {
  const handleToggleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  const initSider = (modules: RouteRecordRaw[]) => {
    sider.length = 0
    sider.push(...modules)
  }

  return {
    isCollapse,
    handleToggleCollapse,
    sider,
    initSider,
  }
}
