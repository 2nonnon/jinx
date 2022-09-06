<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'
import { useSider } from '~/composables/useSider'

const { sider } = useSider()
console.log({ sider })
</script>

<template>
  <ul :id="menu.menu">
    <MenuItem link="/">
      Home
    </MenuItem>
    <MenuItem link="/sample">
      Sample
    </MenuItem>
    <template v-for="route in sider" :key="route.link">
      <template v-if="route.children">
        <SubMenu>
          <template #title>
            {{ route.meta?.title }}
          </template>
          <MenuItem v-for="item in route.children" :key="item.path" :link="`${route.path}/${item.path}`">
            {{ item.meta?.title }}
          </MenuItem>
        </SubMenu>
      </template>
      <MenuItem v-else :link="route.path">
        {{ route.meta?.title }}
      </MenuItem>
    </template>
  </ul>
</template>

<style module="menu">
#menu {
  width: 200px;
}
</style>
