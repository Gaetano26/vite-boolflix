<template>
    <div class="col mt-3 p-0" v-for="card in store.filmTvList">
        <div class="text-center text-white pt-5 bl">
            <!-- <img class="img-fluid" :src="store.imgUrl" alt=""> -->
            <p>{{ card.title }}</p>
            <p>{{ card.original_title }}</p>
            <p>{{ card.original_language }}</p>
            <p>{{ card.vote_average }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'CardComponents',
    data() {
        return {
            store,
           
        }
    },
    mounted() {
        
    }
}
</script>
 

<style lang="scss" scoped>
 .bl {
    background-color: black;
    height: 300px;
 }
</style>