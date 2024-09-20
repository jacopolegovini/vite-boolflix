<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        searchFilm(searchedFilm) {
            console.log(searchedFilm)
        }
    }
}
</script>

<template>
    <input type="text" v-model="searchedFilm" @keyup.enter="searchFilm(searchedFilm)">
    <button @click="searchFilm(searchedFilm)">Cerca</button>
</template>

<style scoped></style>