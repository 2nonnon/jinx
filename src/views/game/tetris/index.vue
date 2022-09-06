<script setup lang="ts">
</script>

<template>
  <h1>Tetris</h1>
  <div :id="$style.playground">
    <p v-for="i in 20" :key="i" flex gap-2px>
      <b v-for="j in 10" :key="j" :class="[$style.block, { [$style.active]: j === i }]" />
    </p>
  </div>
</template>

<style module>
#playground {
  border: 2px solid #000;
  padding: 2px;
  background-color: #9ead86;;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: fit-content;
}
.block {
  display: block;
  width: 20px;
  height: 20px;
  padding: 2px;
  border: 2px solid #879372;
}
.block::after {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background: #879372;
}
.active {
  border-color: #000;
}
.active::after {
  background: #000;
}
</style>
