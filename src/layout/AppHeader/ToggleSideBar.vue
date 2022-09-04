<script setup lang="ts">
import { useSider } from '../../composables/useSider'
const { isNotCollapse, handleToggleCollapse } = useSider()
</script>

<template>
  <div
    i-carbon:query-queue
    :class="[{ [$style.active]: isNotCollapse }]"
    @click="handleToggleCollapse"
  />
</template>

<style module>
.active {
  transform: rotateY(180deg);
}
</style>
