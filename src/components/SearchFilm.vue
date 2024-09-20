<script>
import { store } from './store.js'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilm(searchedFilm) {
            console.log(searchedFilm)
            store.searchedFilm
        }
    }
}
</script>

<template>
    <input type="text" v-model="searchedFilm" @keyup.enter="searchFilm(searchedFilm)">
    <button @click="searchFilm(searchedFilm)">Cerca</button>
</template>

<style scoped></style>