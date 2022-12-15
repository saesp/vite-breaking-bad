<script>
import AppHeader from './components/AppHeader.vue'
// import Characters from './components/Characters.vue'

import { store } from './store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    // Characters
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader :msg="store.title" />
  <!-- <Characters /> -->
</template>

<style lang="scss">
@use './style/general.scss'
</style>
