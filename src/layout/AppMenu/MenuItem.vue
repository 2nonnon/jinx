<script setup lang="ts">
defineProps<{
  link?: string
}>()
</script>

<template>
  <li>
    <a :href="link">
      <slot />
    </a>
  </li>
</template>

<style scoped>
</style>
