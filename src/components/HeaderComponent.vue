 <template>
    <div class="container py-2">
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-between">
                <div class="cont-log d-flex align-items-center">
                    <img class="img-fluid" src="../assets/logo/Netflix-logo.png" alt="">
                </div>
                 <div class="d-flex align-items-center gap-1">
                    <form @submit.prevent="setSearch">
                        <input  type="text" placeholder="Search" v-model.trim="store.search.query">
                        <button type="submit" class="btn btn-primary">Cerca</button>
                    </form>
                 </div>
            </div>
        </div>
 
    </div>
 </template>
 
 <script>
import { store } from '../data/store';
import axios from 'axios';


    export default {
        data() {
            return {
                store
            }
        },
        methods: {
            setSearch() {
            this.$emit('searchChange')
            this.$emit('searchChangeTv')
        }
        },
    }
 </script>
 
 <style lang="scss" scoped>
     .cont-log {
        width: 110px;
        height: 80px;
     }
 </style>
