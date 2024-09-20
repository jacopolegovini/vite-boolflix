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
                <li>{{ foundFilm.original_language }}: <lang-flag :iso=foundFilm.original_language /></li>
                <!-- TODO Da trovare un modo per trattare il caso in cui non sia presente la nazione -->
                <!-- <li v-if="store.nationalities !== ''">test</li> -->
                <li>{{ foundFilm.vote_average }}</li>
            </ul>
        </div>
        <div v-if="store.typeOfEntertainment === 'serie'">
            <ul v-for="(foundSerie, index) in store.foundSeries.results" :key="index">
                <li>{{ foundSerie.name }}</li>
                <li>{{ foundSerie.original_name }}</li>
                <li>{{ foundSerie.original_language }}: <lang-flag :iso=foundSerie.original_language /></li>
                <li>{{ foundSerie.vote_average }}</li>
    
            </ul>
        </div>
    </main>
</template>

<style scoped></style>