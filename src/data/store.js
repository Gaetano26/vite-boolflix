import { reactive } from 'vue';

export const store = reactive({
    filmTvList: [],
    tvList: [],
    imgUrl: 'https://image.tmdb.org/t/p/w300',
    baseUrl: 'https://api.themoviedb.org/3',
    endPointMovie: '/movie/popular',
    searchMovie: '/search/movie',
    endPointTv: '/search/tv',
    search: {
        query: '',
        api_key: '21654f57c1b679bdb0af4addf2ca14aa',
       
    }
})
