import { reactive } from 'vue'

export const store = reactive(
    {
        characterList: [],

        apiURL: "https://rickandmortyapi.com/api/character",

        title: "Rick and Morty App",
    }
)