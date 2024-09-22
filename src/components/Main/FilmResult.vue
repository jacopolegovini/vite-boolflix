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
            <!-- Parte la chiamata basata sui film -->
            <div v-if="store.typeOfEntertainment === 'film'">
                <h2 v-if="store.foundFilms.results">Film</h2>
                <div class="general-results">
                    <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">
                        <li><img :src="'https://image.tmdb.org/t/p/w342' + foundFilm.poster_path" :alt="foundFilm.title"></li>
                        <li>{{ foundFilm.title }}</li>
                        <li>{{ foundFilm.original_title }}</li>

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
            </div>
</template>

<style scoped>
</style>