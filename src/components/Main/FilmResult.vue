<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';

export default {
  data() {
    return {
      store,
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
  },
  methods: {
  }
}
</script>

<template>
  <!-- Parte la chiamata basata sui film -->
  <div v-if="store.typeOfEntertainment === 'film'">
      <h2 v-if="store.foundFilms.results">Film</h2>
      <div class="general-results">
          <ul class="film-results" v-for="(foundFilm, index) in store.foundFilms.results" :key="index">

              <!-- Se il mouse non è hover un determinato elemento -->
              <div class="mouse-not-over" @mouseover="store.setIndex(index)" v-if="index !== store.currentIndex">
                <li><img :src="'https://image.tmdb.org/t/p/w342' + foundFilm.poster_path" :alt="foundFilm.title"></li>
              </div>
            
              <!-- Se il mouse è hover un determinato elemento -->
              <div class="mouse-over" v-else>
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
              </div>
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

    .mouse-over {
      height: 513px;
      width: 342px;
      background-color: black;
      color: white;
    }
</style>