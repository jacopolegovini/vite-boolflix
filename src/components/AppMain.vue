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
        <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">
            <li>{{ foundFilm.title }}</li>
            <li>{{ foundFilm.original_title }}</li>
            <li>{{ foundFilm.original_language }}: <lang-flag :iso=foundFilm.original_language /></li>
            <!-- TODO Da trovare un modo per trattare il caso in cui non sia presente la nazione -->
            <!-- <li v-if="store.nationalities !== ''">test</li> -->
            <li>{{ foundFilm.vote_average }}</li>
        </ul>
    </main>
</template>

<style scoped></style>