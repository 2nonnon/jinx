<script setup lang="ts">
import ToggleSideBar from './ToggleSideBar.vue'
</script>

<template>
  <div :class="$style.header">
    <ToggleSideBar /> Header <Footer />
  </div>
</template>

<style module>
.header {
  display: flex;
  padding: 6px 12px;
  align-items: center;
  gap: 12px;
}
</style>
