<script setup lang="ts">
import gsap from 'gsap'
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppFooter from './AppFooter/index.vue'
import { useSider } from '~/composables/useSider'

const { isNotCollapse } = useSider()
type TransitionEvent = (el: HTMLElement, done: () => void) => void
const gsapOption: gsap.TweenVars = {
  opacity: 0,
  width: 0,
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
  <section id="app-container" flex border>
    <Transition
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
    >
      <aside v-if="isNotCollapse" id="aside" border>
        <AppMenu />
      </aside>
    </Transition>
    <section id="main" border>
      <header id="header" border>
        <AppHeader />
      </header>
      <main id="content" border font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
        <router-view />
        <Footer />
      </main>
      <footer id="footer" border>
        <AppFooter />
      </footer>
    </section>
  </section>
</template>

<style scoped>
#app-container {
  height: 100%;
  max-height: 100%;
  overflow: hidden;
}
#aside {
  flex: 0 0 auto;
}
#main {
  flex: 1;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
#header {
  flex: 0 0 40px;
  position: sticky;
  top: 0;
}
#content {
  flex: 1;
}
#footer {
  flex: 0 0 40px;
}
</style>
