<template>
  <div class="app">
    <Transition>
      <WorkSpaceHome v-if="show.showHome" />
    </Transition>
    <Transition>
      <WorkSpaceFirstConfig v-if="show.showFirstConfig" />
    </Transition>
    <Transition>
      <WorkSpaceLogin v-if="show.showLogin" />
    </Transition>
    <Transition>
      <WorkSpaceDash v-if="show.showAdmin" />
    </Transition>
  </div>
  <Teleport to="body">
    <Overlay />
  </Teleport>
</template>

<script setup>
import WorkSpaceHome from './views/WorkSpaceHome.vue'
import WorkSpaceFirstConfig from './views/WorkSpaceFirstConfig.vue'
import WorkSpaceLogin from './views/WorkSpaceLogin.vue'
import WorkSpaceDash from './views/WorkSpaceDash.vue'

import Overlay from './components/Overlay.vue'

import { useShow } from '@/stores/Show'
const show = useShow()
</script>

<style scoped src="./styles/App.css"></style>
