import { reactive, ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const sider = reactive<RouteRecordRaw[]>([])
const isNotCollapse = ref(true)

export const useSider = () => {
  const handleToggleCollapse = () => {
    isNotCollapse.value = !isNotCollapse.value
  }

  const initSider = (modules: RouteRecordRaw[]) => {
    sider.length = 0
    sider.push(...modules)
  }

  return {
    isNotCollapse,
    handleToggleCollapse,
    sider,
    initSider,
  }
}
