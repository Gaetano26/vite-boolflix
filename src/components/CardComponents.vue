<template>
    <div class="col p-1 mt-1 flip-card" v-for="(card,index) in store.filmTvList" :key="index">
        <div class=" flip-card-inner" >
            <div class=" flip-card-front" v-if="card.poster_path">
                <img class="img-fluid" :src="store.imgUrl + card.poster_path" alt="">
            </div>
            <div class=" flip-card-front" v-else>
                    <img class="img-fluid h-100" src="/images/Immagine_non_disponibile.jpg" alt="non disponibile">
            </div>

             
            <div class="info px-2 pt-5 flip-card-back">
                <p>Titolo: {{ card.title }}</p>
                <p>Titolo Originale: {{ card.original_title }}</p>
                <div class="d-flex align-items-center">
                      <p>Lingua:</p>
                      <img class="planet ps-1 mb-3" :src=" '/images/' + flag(index) + '.png'"  :alt="card.original_language">
                </div>
                <p>Voto: <i class="fa-solid fa-star" v-for="star in Math.round(card.vote_average / 2)" ></i></p>
                <p>{{ card.overview }}</p>
               
            </div>
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
            flags: [
                'de',
                'en', 'es',
                'fr', 'hi',
                'it', 'ja',
                'ko', 'zh',
             ]
           
        }
    },
    methods: {
      flag(index) {
                    if (this.flags.includes(this.store.filmTvList[index].original_language)) {
                        return this.store.filmTvList[index].original_language;
                    } else {
                        return 'wrld'
                    }
              },
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
  font-size: 9px;
}
img {
  max-height: 340px;
  width: 100%;
  
}
.planet {
  max-width: 25px;
  max-height: 25px;
}
</style>