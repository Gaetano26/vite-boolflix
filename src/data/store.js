import { reactive } from 'vue';

export const store = reactive({
    filmTvList: [],
    baseUrl: 'https://api.themoviedb.org/3',
    endPointMovie: '/movie/popular',
    endPointTvShow: '',
    search: {
        query: '',
        api_key: '21654f57c1b679bdb0af4addf2ca14aa'
    }
})
