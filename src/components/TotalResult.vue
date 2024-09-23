<script>
import { store } from './store.js'
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
  <!-- Parte la chiamata -->
      <h2 v-if="store.foundBoth.results">Film & Serie</h2>
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