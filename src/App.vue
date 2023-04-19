<template>
      <header>
        <HeaderComponent />
      </header>
      <main>

      </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import {store} from './data/store';
import axios from 'axios';

export default {
    name : 'App',
    components: {
          HeaderComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMoviesTvSeries() {
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
        store.filmTvList = res.data
      })
    }
  },
    mounted() {
      this.getMoviesTvSeries()
      //console.log(this.getMovies)
    },
}
</script>

<style lang="scss" scoped>
   header {
    background-color: black;
   }
</style>