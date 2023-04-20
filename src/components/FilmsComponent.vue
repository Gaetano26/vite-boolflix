<template>
    <div class="container">
        <div class="row pt-5">
            <h3 class="text-white text-center">Films</h3>
        </div>
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5  justify-content-center altz">
            <CardComponents/>
        </div>
        <div class="row mt-5">
            <h3 class="text-white text-center mt-5">Serie tv</h3>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5  justify-content-center pb-5 altz">
            <ListComponent/>
        </div>    
    </div>
   
</template>

<script>
    import ListComponent from './ListComponent.vue';
    import CardComponents from './CardComponents.vue';
    import axios from 'axios';
    import { store } from '../data/store';
    export default {
        name: 'FilmsComponent',
        components: {
            CardComponents,
            ListComponent
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
  .altz{

    height: fit-content;
  }
</style>