<template>
      <header>
        <HeaderComponent @search-change="getMovieList" @search-change-tv="getTvList"/>
        
      </header>
      <main class="bg-dark">
        <FilmsComponent />
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
          FilmsComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getPopular() {
      const url = store.baseUrl + store.endPointMovie;
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
      axios.get(url, options).then((res) => {
        store.filmTvList = res.data.result
      })
    },
    getMovieList() {
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
       
      })
    },
    getTvList() {
      const tvSeriesUrl = store.baseUrl + store.endPointTv
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
      })
    }
  },
    mounted() {
      this.getPopular()
      //console.log(this.getPopular)
    },
}
</script>

<style lang="scss" scoped>
   header {
    background-color: black;
   }
</style>