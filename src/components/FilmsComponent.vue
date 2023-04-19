<template>
    <div class="container">
        <div class="row pt-5">
            <h3 class="text-white text-center">Films</h3>
        </div>
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 gap-1s justify-content-center">
            <CardComponents/>
        </div>
        <div class="row mt-5">
            <h3 class="text-white text-center">Serie tv</h3>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 gap 1 justify-content-center pb-4">
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
</style>