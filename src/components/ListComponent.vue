<template>
    <div class="col container-card p-0" v-for="card in store.tvList">
           <div class="all">
                <div class="cont-img">
                    <img class="img-fluid change" :src="store.imgUrl + card.poster_path" alt="">
                </div>
                
                <div class="info ps-3 pt-5">
                    <p>Titolo: {{ card.name }}</p>
                    <p>Titolo Originale: {{ card.original_name }}</p>
                    <p>Lingua: <span class="ms-2" :class="'fi fi-' +  card.original_language + ' fis'"></span></p>
                    <p>Voto: {{ card.vote_average }}</p>
                </div>
           </div>
           
            
    </div>
</template>

<script>
    import 'flag-icons/css/flag-icons.min.css';
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
    max-height: 390px;
    
}
.all {
    position: relative;
    transition: trasform 0,7;
    transform-style: preserve-3d;
}
.info {
    color: white;
    
}
 .container-card:hover .all {
    transform: rotateY(180deg);
    .info{
        position: absolute;
    }
    .change {
        position: absolute;
        transform: rotateY(180deg);
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
