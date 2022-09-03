<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'
</script>

<template>
  <ul class="app-menu">
    <MenuItem>item1</MenuItem>
    <SubMenu>
      <template #title>
        sub 1
      </template>
      <MenuItem>item2</MenuItem>
      <MenuItem>item3</MenuItem>
    </SubMenu>
    <MenuItem>item4</MenuItem>
  </ul>
</template>

<style scoped>
.app-menu {
  width: 175px;
}
</style>
