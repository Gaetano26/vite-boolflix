<template>
    <div class="col container-card mt-3 p-0" v-for="card in store.tvList">
        
        <div class="text-center text-white pt-5">
            <!-- <img class="img-fluid" :src="store.imgUrl" alt=""> -->
            <p>{{ card.name }}</p>
            <p>{{ card.original_name }}</p>
            <p>{{ card.original_language }}</p>
            <p>{{ card.vote_average }}</p>
        </div>
    </div>
</template>

<script>

    import { store } from '../data/store';
    export default {
        name: 'ListComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
.container-card {
    background-color: black;
    height: 300px;
}
</style>
