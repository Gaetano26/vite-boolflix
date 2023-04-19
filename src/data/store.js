import { reactive } from 'vue';

export const cards = reactive({
    characterList: [],
    urlImg: 'https://image.tmdb.org/t/p/original',
    baseUrl: ' https://api.themoviedb.org/3/',
    endpoint: '',
    search: {
        status: '',
        name: ''
    }
})