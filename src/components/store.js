import { reactive } from 'vue'
import axios from "axios";


export const store = reactive({
    foundFilms: {},
    searchedFilm: '',
    apiCallComplete: '',

    // Methods
    // Metodo che mi permette di richiamare la API
    getApi() {
        axios.get(apiCallComplete)
            .then((response) => {
                console.log(this.apiCallComplete)
                console.log(response.data)
                store.foundFilms = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    modifyGetApiCall(searchedFilm) {
        // Dichiaro la stringa della API
        let apiCall = `https://api.themoviedb.org/3/search/movie?api_key=34587ee4d591e753a1e153f18ed4c583&query=`

        // Metto insieme con la parola cercata
        let apiCallComplete = apiCall + searchedFilm
        console.log(apiCallComplete)

        // Faccio partire la chiamata
        axios.get(apiCallComplete)
            .then((response) => {
                console.log(apiCallComplete)
                console.log(response.data)
                this.foundFilms = response.data
            })
    }
})