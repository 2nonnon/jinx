<script setup lang="ts">
</script>

<template>
  <section>
    <aside>1</aside>
    <section>
      <header>2</header>
      <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
        <router-view />
        <Footer />
      </main>
      <footer>3</footer>
    </section>
  </section>
</template>

<style scoped>
</style>
