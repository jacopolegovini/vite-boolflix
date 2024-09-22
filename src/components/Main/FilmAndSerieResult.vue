<script>
import { store } from '../store.js'
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
  props: {
    createKeyObject: {
        type: Function,
        required: true
    }
  }
}
</script>

<template>
<div v-if="store.typeOfEntertainment === 'film-serie'">
    <h2 v-if="store.foundFilms.results">Film & Series</h2>
    
    <div class="general-results">
        <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">

            <!-- Condizione per verificare se l'immagine è presente o meno -->
            <li v-if="foundFilm.poster_path"><img :src="'https://image.tmdb.org/t/p/w342' + foundFilm.poster_path" :alt="foundFilm.title"></li>
            <li class="img-placeholder" v-else><img src="" alt="placeholder"></li>

            <!-- Condizione per verificare se il titolo e il titolo originale sono ripetuti -->
            <li>{{ foundFilm.title }}</li>
            <li v-if="foundFilm.title !== foundFilm.original_title">{{ foundFilm.original_title }}</li>

            <!-- Condizione per verificare se la lingua esiste o meno -->
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

    <div class="general-results">
        <ul class="serie-result" v-for="(foundSerie, index) in store.foundSeries.results" :key="index">
            <li><img :src="'https://image.tmdb.org/t/p/w342' + foundSerie.poster_path" :alt="foundSerie.title"></li>

            <!-- Condizione per verificare se il titolo e il titolo originale sono ripetuti -->
            <li>{{ foundSerie.name }}</li>
            <li v-if="foundSerie.title !== foundSerie.original_title">{{ foundSerie.original_name }}</li>

                <!-- Condizione per verificare se la lingua esiste o meno -->
            <li v-if="createKeyObject(foundSerie)"><lang-flag :iso=foundSerie.original_language /></li>
            <li v-else>{{ foundSerie.original_language }}</li>

            <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
            <li v-if="foundSerie.vote_average">
                <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundSerie.vote_average)"></i>
            </li>
            <li v-else>Not voted yet</li>
        </ul>
    </div>
</div>
</template>

<style scoped>
    .general-results {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
</style>