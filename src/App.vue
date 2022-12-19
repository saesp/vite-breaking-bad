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
    },

    toSearch() {
      if (this.store.valueSearch !== "") {
        this.store.apiURL += `"https://api.themoviedb.org/3/search/movie?api_key=d724d9a3e0faf23928324d1fe5b4faa5&query=${store.valueSearch}"`
      }
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
// @use './style/general.scss'
</style>
