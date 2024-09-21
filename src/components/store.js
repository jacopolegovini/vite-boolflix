import { reactive } from 'vue'
import axios from "axios";


export const store = reactive({
    foundFilms: {},
    foundSeries: {},
    searchedFilm: '',
    typeOfEntertainment: '',
    apiCallComplete: '',
    errorMessage: false,
    nationalities: {
        am: 'et',
        ar: 'sy',
        az: 'az',
        bn: 'bd',
        be: 'by',
        ca: 'es-ct',
        cs: 'cz',
        de: 'de',
        el: 'gr',
        en: 'gb',
        es: 'es',
        et: 'ee',
        fa: 'ir',
        fr: 'fr',
        bg: 'bg',
        ha: 'ne',
        hi: 'in',
        hu: 'hu',
        hy: 'am',
        it: 'it',
        id: 'id',
        ja: 'jp',
        jv: 'id',
        km: 'kh',
        ko: 'kr',
        lv: 'lv',
        mr: 'in',
        ms: 'my',
        nl: 'nl',
        pl: 'pl',
        pt: 'pt',
        ro: 'ro',
        ru: 'ru',
        sw: 'ke',
        ta: 'lk',
        te: 'in',
        th: 'th',
        tr: 'tr',
        uk: 'ua',
        uz: 'uz',
        vi: 'vn',
        zh: 'cn',
    },

    // ! Methods
    // Metodo che ingloba getApi() e che mi permette di modificare la stringa e richiamarla insieme
    modifyGetApiCall(searchedFilm) {
        // Dichiaro la stringa della API
        let apiCall = `https://api.themoviedb.org/3/search/movie?api_key=34587ee4d591e753a1e153f18ed4c583&query=`;
        let apiCallTv = `https://api.themoviedb.org/3/search/tv?api_key=34587ee4d591e753a1e153f18ed4c583&query=`;

        // Metto insieme con la parola cercata
        let apiCallComplete = apiCall + searchedFilm;
        let apiCallTvComplete = apiCallTv + searchedFilm;
        console.log(apiCallComplete)
        console.log(apiCallTvComplete)

        // Gestisco le varie condizioni con le funzioni preparate 
        if (this.typeOfEntertainment === 'film') {
            this.getFilm(apiCallComplete)

        } else if (this.typeOfEntertainment === 'serie') {
            this.getSerie(apiCallTvComplete)

        } else {
            this.getFilm(apiCallComplete)
            this.getSerie(apiCallTvComplete)
        }
    },

    // Metodo che richiama i film
    getFilm(apiCallComplete) {
        axios.get(apiCallComplete)
            .then((response) => {
                console.log(apiCallComplete)
                console.log(response.data)

                // Condizione qualora la ricerca non portasse a nulla
                if (response.data.results.length === 0) {
                    console.log('errore')
                    this.foundFilms = ''
                    return this.errorMessage = true
                }

                // Resetta la variabile qualora si ricercasse dopo una ricerca con esito negativo
                this.errorMessage = false

                // Setta la variabile con l'oggetto desiderato
                this.foundFilms = response.data
            })
    },

    // Metodo che richiama le serie
    getSerie(apiCallTvComplete) {
        // Faccio partire la chiamata per le serie
        axios.get(apiCallTvComplete)
            .then((response) => {
                console.log(apiCallTvComplete)
                console.log(response.data)

                // Condizione qualora la ricerca non portasse a nulla
                if (response.data.results.length === 0) {
                    console.log('errore')
                    this.foundSeries = ''
                    return this.errorMessage = true
                }

                // Resetta la variabile qualora si ricercasse dopo una ricerca con esito negativo
                this.errorMessage = false

                // Setta la variabile con l'oggetto desiderato
                this.foundSeries = response.data
            })
    },

    // Metodo che arrotonda i numeri da 1 a 5
    roundVote(vote) {
        let roundVote = Math.ceil(vote / 2);
        return roundVote;
    }

    // ! Non più utili
    // Metodo che mi permette di richiamare la API
    // getApi() {
    //     axios.get(apiCallComplete)
    //         .then((response) => {
    //             console.log(this.apiCallComplete)
    //             console.log(response.data)
    //             store.foundFilms = response.data
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // },
})