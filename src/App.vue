<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from "axios";
import { store } from './components/store.js'

export default {
  data() {
    return {
      store,
      apiCall: `https://api.themoviedb.org/3/search/movie?api_key=34587ee4d591e753a1e153f18ed4c583&query=alien`
    }
  },
  methods: {
    getApi() {
      axios.get(this.apiCall)
        .then((response) => {
          console.log(response.data)
          store.foundFilms = response.data

        })
    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  mounted() {
    this.getApi()
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
