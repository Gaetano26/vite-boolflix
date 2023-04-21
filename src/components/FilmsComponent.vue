<template>
    <div class="container" v-if="!store.loader.tv && !store.loader.movie">
         <CardComponents />
         <ListComponent/>
        
    </div>
    <div class="container-fluid" v-else>
     <LoaderComponent />   

    </div>
   
</template>

<script>
    import ListComponent from './ListComponent.vue';
    import CardComponents from './CardComponents.vue';
    import LoaderComponent from './LoaderComponent.vue';
    import axios from 'axios';
    import { store } from '../data/store';
    export default {
        name: 'FilmsComponent',
        components: {
            CardComponents,
            ListComponent,
            LoaderComponent,

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