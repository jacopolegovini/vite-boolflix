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

              <!-- Se il mouse non è hover un determinato elemento -->
              <div class="mouse-not-over" @mouseover="store.setIndex(index)" v-if="index !== store.currentIndex">
                <!-- Se l'immagine è presente -->
                <li v-if="foundFilm.poster_path"><img :src="'https://image.tmdb.org/t/p/w342' + foundFilm.poster_path" :alt="foundFilm.title"></li>

                <!-- Se l'immagine non è presente -->
                <li class="img-placeholder" v-else><img src="../../assets/dummy-landscape-placeholder.svg" alt="placeholder"></li>
              </div>
            
              <!-- Se il mouse è hover un determinato elemento -->
              <div class="mouse-over" v-else>
                <!-- Condizione per verificare se il titolo e il titolo originale sono ripetuti -->
                <li><strong>Titolo: </strong> {{ foundFilm.title }}</li>
                  <li v-if="foundFilm.title !== foundFilm.original_title"><strong>Titolo Originale: </strong> {{ foundFilm.original_title }}</li>

                  <!-- Condizione per verificare se la lingua esiste o meno -->
                  <li v-if="createKeyObject(foundFilm)">
                    <span><strong>Lingua: </strong></span><lang-flag :iso=foundFilm.original_language />
                  </li>
                  <li v-else><span><strong>Lingua: </strong></span>{{ foundFilm.original_language }}</li>
  
                  <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
                  <li v-if="foundFilm.vote_average">
                    <strong>Voto: </strong>  
                    <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundFilm.vote_average)"></i>
                  </li>
                  <li v-else><strong>Voto: </strong>Not voted yet</li>

                    <!-- Overview -->
                    <li class="overview">
                    <p><strong>Overview:</strong> {{ foundFilm.overview }}</p>
                  </li>
              </div>
          </ul>
      </div>

      <div class="general-results">
      <ul class="serie-result" v-for="(foundSerie, index) in store.foundSeries.results" :key="index">

        <!-- Se il mouse non è hover un determinato elemento -->
        <div class="mouse-not-over" @mouseover="store.setIndex(index)" v-if="index !== store.currentIndex">
          <!-- Se l'immagine è presente -->
          <li v-if="foundSerie.poster_path"><img :src="'https://image.tmdb.org/t/p/w342' + foundSerie.poster_path" :alt="foundSerie.title"></li>
          <!-- Se l'immagine non è presente -->
          <li class="img-placeholder" v-else>
            <img src="../../assets/dummy-landscape-placeholder.svg" alt="placeholder">
          </li>
        </div>
        
        <!-- Se il mouse è hover un determinato elemento -->
        <div class="mouse-over" v-else>
          <!-- Condizione per verificare se il titolo e il titolo originale sono ripetuti -->
          <li><strong>Titolo: </strong> {{ foundSerie.name }}</li>
          <li v-if="foundSerie.title !== foundSerie.original_title"><strong>Titolo Originale: </strong> {{ foundSerie.original_name }}</li>

          <!-- Condizione per verificare se la lingua esiste o meno -->
          <li v-if="createKeyObject(foundSerie)"><span><strong>Lingua: </strong></span><lang-flag :iso=foundSerie.original_language /></li>
          <li v-else><span><strong>Lingua: </strong></span>{{ foundSerie.original_language }}</li>

          <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
          <li v-if="foundSerie.vote_average">
                <strong>Voto: </strong>
                <i class="fa-solid fa-star" v-for="vote in store.roundVote(foundSerie.vote_average)"></i>
          </li>
          <li v-else><strong>Voto: </strong>Not voted yet</li>

          <!-- Overview -->
          <li class="overview">
            <p><strong>Overview: </strong> {{ foundSerie.overview }}</p>
          </li>
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

    img {
        border: 1px solid white;
    }

    .img-placeholder img {
        width: 342px;
    }

    .mouse-over {
      height: 513px;
      width: 342px;
      background-color: black;
      color: white;
      padding: 40px 10px 10px 10px;
      overflow: auto;
    }

    .mouse-over li {
        padding: 5px 0;
        font-size: 1.2rem;
    }

    .overview {
      overflow: auto;
    }

    .fa-star {
        color: yellow;
    }
</style>