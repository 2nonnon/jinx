import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const _accessToken = ref('')

const hasLogin = computed(() => {
  return _accessToken.value.length > 0
})

export const useAuth = () => {
  return {
    _accessToken,
    hasLogin,
  }
}
