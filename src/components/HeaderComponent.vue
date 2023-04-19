 <template>
    <div class="container py-2">
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-between">
                <div class="cont-log d-flex align-items-center">
                    <img class="img-fluid" src="../assets/logo/Netflix-logo.png" alt="">
                </div>
                 <div class="d-flex align-items-center gap-1">
                    <input type="text" v-model.trim="store.search.text">
                    <button type="button" class="btn btn-primary">Search</button>
                 </div>
            </div>
        </div>
 
    </div>
 </template>
 
 <script>
import { store } from '../data/store';


    export default {
        data() {
            return {
                store
            }
        }
    }
 </script>
 
 <style lang="scss" scoped>
     .cont-log {
        width: 110px;
        height: 80px;
     }
 </style>
