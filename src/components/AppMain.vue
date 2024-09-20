<script>
import { store } from './store.js'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h2>Main</h2>
    <div>{{ store.foundFilm.results[0] }}</div>

</template>

<style scoped></style>