<script>
import SearchFilm from './SearchFilm.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        SearchFilm,
    }
}
</script>

<template>
    <header>
        <div class="general-header container">
            <h1>boolflix</h1>
            <SearchFilm />
        </div>
    </header>
</template>

<style scoped>
    header {
        background-color: black;
        height: 10vh;
        position: sticky;
        top: 0;
    }

    .general-header {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        text-transform: uppercase;
        color: red;
    }
</style>