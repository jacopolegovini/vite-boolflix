<script>
import { store } from './store.js'
import LangFlag from 'vue-lang-code-flags';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        LangFlag
    },
    methods: {
        // Metodo per risolvere il problema delle lingue senza bandiera
        createKeyObject(foundFilm = false, foundSerie = false) {
            const keys = Object.keys(store.nationalities)
            const keysMovie = foundFilm.original_language
            const keysSerie = foundSerie.original_language

            if (foundFilm) return keys.includes(keysMovie)
            if (foundSerie) return keys.includes(keysSerie)
        }
    }
}
</script>

<template>
    <main>
        <div v-if="store.errorMessage">Errore</div>

        <!-- Parte la chiamata basata sui film -->
        <div v-if="store.typeOfEntertainment === 'film'">
            <h3 v-if="store.foundFilms.results">Film</h3>
            <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">
                <li><img :src="'https://image.tmdb.org/t/p/w342' + foundFilm.poster_path" :alt="foundFilm.title"></li>
                <li>{{ foundFilm.title }}</li>
                <li>{{ foundFilm.original_title }}</li>
                <li v-if="createKeyObject(foundFilm)">
                    <lang-flag :iso=foundFilm.original_language />
                </li>
                <li v-else>{{ foundFilm.original_language }}</li>

                <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
                <li v-if="foundFilm.vote_average">
                    <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundFilm.vote_average)"></i>
                </li>
                <li v-else>Not voted yet</li>
            </ul>
        </div>

        <!-- Parte la chiamata basata sulle serie -->
        <div v-if="store.typeOfEntertainment === 'serie'">
            <h3 v-if="store.foundSeries.results">Series</h3>
            <ul class="serie-result" v-for="(foundSerie, index) in store.foundSeries.results" :key="index">
                <li><img :src="'https://image.tmdb.org/t/p/w342' + foundSerie.poster_path" :alt="foundSerie.title"></li>
                <li>{{ foundSerie.name }}</li>
                <li>{{ foundSerie.original_name }}</li>
                <li v-if="createKeyObject(foundSerie)"><lang-flag :iso=foundSerie.original_language /></li>
                <li v-else>{{ foundSerie.original_language }}</li>

                <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
                <li v-if="foundSerie.vote_average">
                    <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundSerie.vote_average)"></i>
                </li>
                <li v-else>Not voted yet</li>
            </ul>
        </div>

        <!-- Parte la chiamata per entrambi -->
        <div v-if="store.typeOfEntertainment === 'film-serie'">
            <h3 v-if="store.foundFilms.results">Film & Series</h3>
            
            <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">
                <li><img :src="'https://image.tmdb.org/t/p/w342' + foundFilm.poster_path" :alt="foundFilm.title"></li>
                <li>{{ foundFilm.title }}</li>
                <li>{{ foundFilm.original_title }}</li>
                <li v-if="createKeyObject(foundFilm)">
                    <lang-flag :iso=foundFilm.original_language />
                </li>
                <li v-else>{{ foundFilm.original_language }}</li>

                <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
                <li v-if="foundFilm.vote_average">
                    <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundFilm.vote_average)"></i>
                </li>
                <li v-else>Not voted yet</li>
            </ul>

            <ul class="serie-result" v-for="(foundSerie, index) in store.foundSeries.results" :key="index">
                <li><img :src="'https://image.tmdb.org/t/p/w342' + foundSerie.poster_path" :alt="foundSerie.title"></li>
                <li>{{ foundSerie.name }}</li>
                <li>{{ foundSerie.original_name }}</li>
                <li v-if="createKeyObject(foundSerie)"><lang-flag :iso=foundSerie.original_language /></li>
                <li v-else>{{ foundSerie.original_language }}</li>

                <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
                <li v-if="foundSerie.vote_average">
                    <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundSerie.vote_average)"></i>
                </li>
                <li v-else>Not voted yet</li>
            </ul>
        </div>
    </main>
</template>

<style scoped></style>