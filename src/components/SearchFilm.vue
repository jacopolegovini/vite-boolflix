<script>
import { store } from './store.js';
import axios from "axios";


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
        },
        
        // Metodo che permette ai generi di comparire
        getGenre() {
            let apiCallGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=34587ee4d591e753a1e153f18ed4c583`;
            axios.get(apiCallGenre)
                .then((response) => {

                    // Condizione qualora la ricerca non portasse a nulla
                    if (response.data.genres.length === 0) {
                        console.log('errore')
                        store.foundGenre = ''
                        return store.errorMessage = true
                    }

                    // Resetta la variabile qualora si ricercasse dopo una ricerca con esito negativo
                    store.errorMessage = false

                    // Setta la variabile con l'oggetto desiderato
                    store.foundGenre = response.data.genres
                })
        },
    }, 
    created() {
        this.getGenre()
    }
}
</script>

<template>
    <main>
        <div class="general-search-film">
            <input type="text" v-model.trim="searchedFilm"
            @keyup.enter="searchFilm(searchedFilm), store.modifyGetBothApiCall(searchedFilm)" placeholder="Inserisci il titolo">
            <select class="entertainment-selection" v-model="typeOfEntertainment" @change="decideTypeOfEntertainment(typeOfEntertainment), searchFilm(searchedFilm), store.modifyGetBothApiCall(searchedFilm)">
                <option value="film-serie">Film & Serie</option>
                <option value="film">Film</option>
                <option value="serie">Serie</option>
            </select>
            <select class="genre-selection" v-model="typeOfGenre">
                <option value="typeOfGenre" v-for="(genre, index) in store.foundGenre" :key="index">{{ genre.name }}</option>
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

    .genre-selection{
        width: 100px;
    }
</style>