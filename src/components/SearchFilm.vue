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
    <main>
        <div class="general-search-film">
            <input type="text" v-model="searchedFilm"
                @keyup.enter="searchFilm(searchedFilm), store.modifyGetApiCall(searchedFilm)">
            <select v-model="typeOfEntertainment" @change="decideTypeOfEntertainment(typeOfEntertainment), searchFilm(searchedFilm), store.modifyGetApiCall(searchedFilm)">
                <option value="film-serie">Film & Serie</option>
                <option value="film">Film</option>
                <option value="serie">Serie</option>
            </select>
            <button @click="searchFilm(searchedFilm), store.modifyGetApiCall(searchedFilm)">Cerca <i class="fa-solid fa-magnifying-glass"></i></button>
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