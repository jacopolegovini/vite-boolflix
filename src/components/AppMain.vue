<script>
import FilmAndSerieResult from './Main/FilmAndSerieResult.vue';
import FilmResult from './Main/FilmResult.vue';
import SerieResult from './Main/SerieResult.vue';
import { store } from './store.js'
import LangFlag from 'vue-lang-code-flags';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        LangFlag,
        FilmResult,
        SerieResult,
        FilmAndSerieResult
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
        <div class="general-main container">
            <div class="error-message" v-if="store.errorMessage">It seems pretty empty to me... try searching something else!</div>
    
            <!-- Parte la chiamata basata sui film -->
            <FilmResult
                :createKeyObject="createKeyObject"
            />
    
            <!-- Parte la chiamata basata sulle serie -->
            <SerieResult
                :createKeyObject="createKeyObject"
            />
    
            <!-- Parte la chiamata per entrambi -->
            <FilmAndSerieResult
                :createKeyObject="createKeyObject"
            />
        </div>
    </main>
</template>

<style scoped>
    main {
        height: 100%;
        background-color: #434343;
    }

    h2 {
        color: white;
        text-decoration: underline;
        font-size: 2rem;
        font-weight: bold;
        padding: 20px 0;
    }

    .error-message {
        color: white;
        font-size: 2rem;
        font-weight: 500;
        padding-top: 20px;
    }
</style>