<script setup lang="ts">
import { useSider } from '../../composables/useSider'
const { handleToggleCollapse } = useSider()
</script>

<template>
  <div
    i-carbon-moon
    @click="handleToggleCollapse"
  />
</template>

<style scoped>
</style>
