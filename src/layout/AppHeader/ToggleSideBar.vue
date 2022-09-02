<script setup lang="ts">
import { useSider } from '../../composables/useSider'
const { handleToggleCollapse } = useSider()
</script>

<template>
  <div
    @click="handleToggleCollapse"
  />
</template>

<style scoped>
</style>
