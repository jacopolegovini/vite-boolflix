<script>
import { store } from './store.js'

export default {
    data() {
        return {
            store,
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
        },
        decideTypeOfGenre(typeOfGenre) {
            console.log(typeOfGenre)
            return store.typeOfGenre = typeOfGenre
        }
    }, 
    created() {
        store.getGenre()
    }
}
</script>

<template>
    <main>
        <div class="general-search-film">
            <select v-model="typeOfGenre">
                <option value="typeOfGenre" v-for="(genre, index) in store.foundGenre" :key="index">{{ genre.name }}</option>
            </select>
            <input type="text" v-model.trim="searchedFilm"
            @keyup.enter="searchFilm(searchedFilm), store.modifyGetBothApiCall(searchedFilm)">
            <select v-model="typeOfEntertainment" @change="decideTypeOfEntertainment(typeOfEntertainment), searchFilm(searchedFilm), store.modifyGetBothApiCall(searchedFilm)">
                <option value="film-serie">Film & Serie</option>
                <option value="film">Film</option>
                <option value="serie">Serie</option>
            </select>
            <button @click="searchFilm(searchedFilm), store.modifyGetBothApiCall(searchedFilm)">Cerca <i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </main>
</template>

<style scoped>
    .general-search-film {
        display: flex;
        gap: 10px;
    }

    input {
        border-radius: 20px;
        padding-left: 15px;
    }

    select {
        border-radius: 20px;
        padding: 0 15px;
    }

    button {
        padding: 10px 10px;
        border-radius: 20px;
    }
</style>