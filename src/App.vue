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
    methods(){
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=21654f57c1b679bdb0af4addf2ca14aa'

      axios.get(url).then((res) => {
        console.log(res.data)
      })  
    }
}
</script>

<style lang="scss" scoped>
   header {
    background-color: black;
   }
</style>