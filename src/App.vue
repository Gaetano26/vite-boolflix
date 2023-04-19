<template>
      <header>
        <HeaderComponent />
      </header>
      <main>

      </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import {cards} from './data/store';
import axios from 'axios';

export default {
    name : 'App',
    components: {
          HeaderComponent
    },
    data() {
      return {
        cards
      }
    },
    methods: {
     getMovies() {
      const url = cards.baseUrl + cards.endpoint1;
      let paramsObj = {
         params: {
          api_key: cards.key,
          query: cards.search.text
         }
      }

            axios.get(url, paramsObj ).then((res) => {
              console.log(res.data)

            })            
     }
  
       
    },
    mounted() {
      this.getMovies()
      console.log(this.getMovies)
    },
}
</script>

<style lang="scss" scoped>
   header {
    background-color: black;
   }
</style>