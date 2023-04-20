<template>
    <div class="col p-1 mt-1 flip-card" v-for="card in store.filmTvList">
        <div class=" flip-card-inner" >
            <div class=" flip-card-front">
                <img class="img-fluid" :src="store.imgUrl + card.poster_path" alt="">
            </div>

             
            <div class="info px-3 pt-5 flip-card-back">
                <p>Titolo: {{ card.title }}</p>
                <p>Titolo Originale: {{ card.original_title }}</p>
                <p>Lingua:<span class="ms-2" :class="'fi fi-' +  card.original_language + ' fis'"></span></p>
                <p>Voto: <i class="fa-solid fa-star" v-for="star in Math.round(card.vote_average / 2)" ></i></p>
                <p>{{ card.overview }}</p>
            </div>
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
.flip-card {
  background-color: transparent;
  width: 260px;
  height: 345px;
  perspective: 1000px; 
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.9s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
.info {
  color: white;
}
p {
  font-size: 10px;
}
img {
  max-height: 340px;
  width: 100%;
  
}
</style>