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
        .then(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        });

      if (this.store.valueSearch !== "") {
        store.apiURL = `https://rickandmortyapi.com/api/character&query=${store.valueSearch}`

      }
    },

    mounted() {
      this.getMovies()
    }
  },
}
</script>




<template>
  <AppHeader :msg="store.title" />

  <main>
    <Characters @search="getMovies" />
  </main>
</template>

<style lang="scss">
// @use './style/general.scss'
</style>
