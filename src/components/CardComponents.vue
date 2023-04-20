<template>
    <div class="col container-card  p-0" v-for="card in store.filmTvList">
            <img class="img-fluid change" :src="store.imgUrl + card.poster_path" alt="">
            <div class="info ps-3 pt-5">
                <p>Titolo: {{ card.title }}</p>
                <p>Titolo Originale: {{ card.original_title }}</p>
                <p>Lingua:<span class="ms-2" :class="'fi fi-' +  card.original_language + ' fis'"></span></p>
                <p>Voto:{{ card.vote_average }}</p>
            </div>
            
        </div>
</template>

<script>
import { store } from '../data/store';
import 'flag-icons/css/flag-icons.min.css';
export default {
    name: 'CardComponents',
    data() {
        return {
            store,
            unknownFlag : 'unknown'
           
        }
    },
    mounted() {
        
    }
}
</script>
 

<style lang="scss" scoped>
.container-card {
    background-color: black;
    max-height: 395px;
}
.info {
    display: none;
    color: white;
    
}
 .container-card:hover {
    .info{
        display: block;
    }
    .change {
        display: none;
    }
 }
 p {
    font-size: 13px;
 }
 img {
    max-height: 390px;
    width: 100%;
 }
</style>