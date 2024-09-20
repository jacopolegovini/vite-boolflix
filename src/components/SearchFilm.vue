<script>
import { store } from './store.js'
import axios from "axios";


export default {
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilm(searchedFilm) {
            console.log(searchedFilm)
            return store.searchedFilm = searchedFilm
        }
    }
}
</script>

<template>
    <input type="text" v-model="searchedFilm" @keyup.enter="searchFilm(searchedFilm), store.getApi()">
    <button @click="searchFilm(searchedFilm), store.getApi()">Cerca</button>
</template>

<style scoped></style>