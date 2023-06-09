import { reactive } from 'vue';

export const store = reactive({
    filmTvList: [],
    tvList: [],
    imgUrl: 'https://image.tmdb.org/t/p/w342',
    baseUrl: 'https://api.themoviedb.org/3',
    endPointMovie: '/movie/popular',
    searchMovie: '/search/movie',
    search_Tv: '/search/tv',
    search: {
        query: '',
        api_key: '21654f57c1b679bdb0af4addf2ca14aa',
       
    },
    errors: {
        movie: '',
        tv: '',
    },
    loader: {
        movie: false,
        tv: false ,
    }
})
