import { reactive } from 'vue'
import axios from "axios";


export const store = reactive({
    foundFilms: {},
    searchedFilm: '',
    // apiCallComplete: '',
    // apiCall: `https://api.themoviedb.org/3/search/movie?api_key=34587ee4d591e753a1e153f18ed4c583&query=alien`,
    getApi() {
        this.modifyApiCall(this.searchedFilm)
        axios.get(apiCallComplete)
            .then((response) => {
                console.log(this.apiCallComplete)
                console.log(response.data)
                store.foundFilms = response.data
            })
    },
    modifyApiCall(searchedFilm) {
        let apiCall = `https://api.themoviedb.org/3/search/movie?api_key=34587ee4d591e753a1e153f18ed4c583&query=`

        let apiCallComplete = apiCall + searchedFilm
        console.log(apiCallComplete)

        return apiCallComplete
    }
})