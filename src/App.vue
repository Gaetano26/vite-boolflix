<template>
      <header>
        <HeaderComponent @search-change="getMovieList" @search-change-tv="getTvList"/>
        
      </header>

      <main class="bg-dark">
        <FilmsComponent />
        <div class="alert alert-success" v-if="store.errors.movie"><p>{{ store.errors.movie }}</p></div>
        <div class="alert alert-success" v-if="store.errors.tv"><p> erroe {{ store.errors.tv }}</p></div>
      </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FilmsComponent from './components/FilmsComponent.vue';
import { store } from './data/store';
import axios from 'axios';

export default {
    name : 'App',
    components: {
          HeaderComponent,
          FilmsComponent,

          
    },
    data() {
      return {
        store
      }
    },
    methods: {
      
    getMovieList() {
      store.errors.movie = '';
      store.loader.movie = true;
      const moviesUrl = store.baseUrl + store.searchMovie
      let options = {}
      let params = {}
      for (let key in store.search) {
        if (store.search[key]) {
          params[key] = store.search[key]
        }
      }
      if (Object.keys(params).length > 0) {
        options.params = params;
       
      }
      axios.get(moviesUrl, options).then((res) => {
        store.filmTvList = res.data.results
       
      }).catch((error)=> {
        store.errors.movie = error.message
      }).finally(() => {
        store.loader.movie = false;
      });
    },
    getTvList() {
      store.errors.tv = '';
      store.loader.tv = true;
      const tvSeriesUrl = store.baseUrl + store.search_Tv 
      let options = {}
      let params = {}
      for (let key in store.search) {
        if (store.search[key]) {
          params[key] = store.search[key]
        }
      }
      if (Object.keys(params).length > 0) {
        options.params = params;
        console.log(options)
      }
      axios.get(tvSeriesUrl, options).then((res) => {
        store.tvList = res.data.results
        console.log(store.tvList)
      }).catch((error)=> {
        store.errors.tv = error.message;
        console.log(error)
      }).finally(() => {
        store.loader.tv = false;
      });
    },
  
  },
    mounted() {
     
    },
}
</script>

<style lang="scss" scoped>
   header {
    background-color: black;
    height: 14vh;
   }
   main {
    height: 86vh;
    overflow-y: auto;
    scroll-behavior: smooth;
   }
</style>