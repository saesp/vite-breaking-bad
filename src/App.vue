<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import Characters from './components/Characters.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    Characters,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getCharacters() {
      axios
        .get(store.apiURL)
        .them(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    }
  },

  mounted() {
    this.getCharacters()
  }
}
</script>

<template>
  <AppHeader :msg="store.title" />

  <main>
    <Characters />
  </main>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
