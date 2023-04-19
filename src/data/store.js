import { reactive } from 'vue';

export const cards = reactive({
    characterList: [],
    urlImg: 'https://image.tmdb.org/t/p/original',
    baseUrl: ' https://api.themoviedb.org/3/',
    endpoint1: 'search/movie?',
    key: '21654f57c1b679bdb0af4addf2ca14aa',
    search: {
        text: '',

    }
})