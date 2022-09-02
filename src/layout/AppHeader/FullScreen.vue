<script setup lang="ts">
const handleToggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  }
  else {
    if (document.exitFullscreen)
      document.exitFullscreen()
  }
}
</script>

<template>
  <button @click="handleToggleFullScreen" />
</template>

<style scoped>

</style>
