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
<div v-if="store.typeOfEntertainment === 'serie'">
                <h2 v-if="store.foundSeries.results">Series</h2>
                <div class="general-results">
                    <ul class="serie-result" v-for="(foundSerie, index) in store.foundSeries.results" :key="index">
                        <li><img :src="'https://image.tmdb.org/t/p/w342' + foundSerie.poster_path" :alt="foundSerie.title"></li>
                        <li>{{ foundSerie.name }}</li>
                        <li>{{ foundSerie.original_name }}</li>

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
</style>