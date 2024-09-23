<script>
import LangFlag from 'vue-lang-code-flags';
import {store} from './store.js'

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
  <!-- Parte la chiamata -->
      <h2 v-if="store.foundBoth.results">Film & Serie</h2>

      <div class="general-results">
          <ul class="film-results" v-for="(element, index) in store.foundBoth" :key="index">

              <!-- Se il mouse non è hover un determinato elemento -->
              <div class="mouse-not-over" @mouseover="store.setIndex(index)" v-if="index !== store.currentIndex">

                <!-- Se l'immagine è presente -->
                <li v-if="element.poster_path"><img :src="'https://image.tmdb.org/t/p/w342' + element.poster_path" :alt="element.id"></li>

                <!-- Se l'immagine non è presente -->
                <li class="img-placeholder" v-else><img src="../assets/dummy-landscape-placeholder.svg" alt="placeholder"></li>
              </div>
            
              <!-- Se il mouse è hover un determinato elemento -->
              <div class="mouse-over" v-else @mouseleave="store.resetIndex()">
                <!-- Condizione per verificare se il titolo e il titolo originale sono ripetuti -->
                <li><strong>Titolo: </strong>{{ element.title }}{{ element.name }}</li>
                <li v-if="element.title !== element.original_title"><strong>Titolo Originale: </strong>{{ element.original_title }}</li>

                <!-- Condizione per verificare se la lingua esiste o meno -->
                <li v-if="createKeyObject(element)">
                  <span><strong>Lingua: </strong></span>  
                  <lang-flag :iso=element.original_language />
                </li>
                <li v-else><span><strong>Lingua: </strong></span>{{ element.original_language }}</li>

                <!-- Se esiste un voto compare sotto forma di stelle, se no compare un placeholder -->
                <li v-if="element.vote_average">
                    <strong>Voto: </strong>
                    <i class="fa-solid fa-star" v-for="vote in store.roundVote(element.vote_average)"></i>
                </li>
                <li v-else><strong>Voto: </strong> Not voted yet</li>

                <!-- Overview -->
                <li class="overview" v-if="element.overview">
                  <p><strong>Overview:</strong> {{ element.overview }}</p>
                </li>
                <li v-else>
                    <p>No overview</p>
                </li>
              </div>
          </ul>
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
      border: 1px solid white;

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