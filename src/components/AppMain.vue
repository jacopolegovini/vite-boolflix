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
        <div v-if="store.typeOfEntertainment === 'film'">
            <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">
                <li>{{ foundFilm.title }}</li>
                <li>{{ foundFilm.original_title }}</li>
                <li v-if="createKeyObject(foundFilm)">
                    <lang-flag :iso=foundFilm.original_language />
                </li>
                <li v-else>{{ foundFilm.original_language }}</li>
                <li>{{ foundFilm.vote_average }}</li>
            </ul>
        </div>
        <div v-if="store.typeOfEntertainment === 'serie'">
            <ul v-for="(foundSerie, index) in store.foundSeries.results" :key="index">
                <li>{{ foundSerie.name }}</li>
                <li>{{ foundSerie.original_name }}</li>
                <li v-if="createKeyObject(foundSerie)"><lang-flag :iso=foundSerie.original_language /></li>
                <li v-else>{{ foundSerie.original_language }}</li>
                <li>{{ foundSerie.vote_average }}</li>
            </ul>
        </div>
    </main>
</template>

<style scoped></style>