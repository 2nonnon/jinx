<script setup lang="ts">
defineProps<{
  link?: string
}>()
</script>

<template>
  <li :class="$style.menuItem">
    <a :href="link">
      <slot />
    </a>
  </li>
</template>

<style module>
.menuItem {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}
</style>
