<script setup lang="ts">
import gsap from 'gsap'

const isNotCollapse = ref(false)
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
    <div :class="$style.subMenu_title" @click="toggleCollapse">
      <slot name="title" /> <i inline-block i-carbon:chevron-up :class="$style[isNotCollapse ? 'subMenu_arrow' : 'subMenu_arrow--down']" />
    </div>
    <Transition
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
    >
      <ul v-if="isNotCollapse" overflow="hidden" pl-20px>
        <slot />
      </ul>
    </Transition>
  </li>
</template>

<style module>
.subMenu_title {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  position: relative;
}
.subMenu_arrow,
.subMenu_arrow--down{
  position: absolute;
  top: 50%;
  right: 20px;
  transition: transform .2s linear;
}
.subMenu_arrow {
  transform: translateY(-50%);
}
.subMenu_arrow--down {
  transform: translateY(-50%) rotateZ(180deg);
}
</style>
