<script setup lang="ts">
import gsap from 'gsap'

const isNotCollapse = ref(true)
const toggleCollapse = () => {
  isNotCollapse.value = !isNotCollapse.value
}
type TransitionEvent = (el: HTMLElement, done: () => void) => void
const gsapOption: gsap.TweenVars = {
  opacity: 0,
  height: 0,
  ease: 'linear',
  duration: 0.2,
}
const onEnter: TransitionEvent = (el, done) => {
  gsap.from(el, Object.assign({ onComplete: done } as gsap.TweenVars, gsapOption))
}
const onLeave: TransitionEvent = (el, done) => {
  gsap.to(el, Object.assign({ onComplete: done } as gsap.TweenVars, gsapOption))
}
</script>

<template>
  <li>
    <div @click="toggleCollapse">
      <slot name="title" /> <i inline-block i-carbon-moon />
    </div>
    <Transition
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
    >
      <ul v-if="isNotCollapse" overflow="hidden">
        <slot />
      </ul>
    </Transition>
  </li>
</template>

<style scoped>
</style>
