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
        },
        decideTypeOfEntertainment(typeOfEntertainment) {
            console.log(typeOfEntertainment)
            return store.typeOfEntertainment = typeOfEntertainment
        }
    }
}
</script>

<template>
    <input type="text" v-model="searchedFilm"
        @keyup.enter="searchFilm(searchedFilm), store.modifyGetApiCall(searchedFilm)">
    <select v-model="typeOfEntertainment" @change="decideTypeOfEntertainment(typeOfEntertainment)">
        <option value="film">Film</option>
        <option value="serie">Serie</option>
    </select>
    <button @click="searchFilm(searchedFilm), store.modifyGetApiCall(searchedFilm)">Cerca</button>
</template>

<style scoped></style>