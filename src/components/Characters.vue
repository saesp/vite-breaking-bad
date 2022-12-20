<script>
import SingleCharacter from './SingleCharacter.vue'
import { store } from '../store.js'

export default {
    name: "Characters",
    components: {
        SingleCharacter,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header class="container">
        <input placeholder="Cerca" @keyup="$emit('search')" @keydown="$emit('search')" @keyup.enter="$emit('search')"
            v-model="store.valueSearch" type="search"></input>
        <div class="row">
            <div v-for="character in store.characterList" :key="character.id">
                <SingleCharacter :info="character" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>