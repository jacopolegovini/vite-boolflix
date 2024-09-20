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
        <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">
            <li>{{ foundFilm.title }}</li>
            <li>{{ foundFilm.original_title }}</li>
            <li>{{ foundFilm.original_language }}: <lang-flag :iso=foundFilm.original_language /></li>
            <li>{{ foundFilm.vote_average }}</li>
        </ul>
    </main>
</template>

<style scoped></style>