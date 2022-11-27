<template>
    <div class="d-flex flex-column justify-center align-center" style="">
            <div class="d-flex flex-column justify-center mt-7" style="">
                <div class="d-flex justify-center">
                    <v-avatar elevation="8" color="#667372" size="180" tile>
                        <img :src="editora.midia.imagem" alt="">
                    </v-avatar>
                </div>
                <h3 class="text-center mt-4 font-weight-bold" style="color: #114B5F;">{{editora.username}}</h3>
                <p class="mt-4 text-center">{{editora.biografia}}</p>
            <div class="d-flex justify-center align-center mt-1"><v-icon color="#114B5F">mdi-map-marker</v-icon> {{editora.localizacao}}</div>
    </div>
    <div class="justify-center mt-12" style="">
        <h3 class="text-center text-uppercase text-decoration-underline" style="color: #114B5F;">TÍTULOS MAIS POPULARES</h3>
        <div class="d-flex justify-space-around" style="width: 90rem; gap: 2%">
            <v-card class="rounded-lg mt-5" elevation="4" color="#114B5F" style="width: 45rem;" v-for="livro, index in editora.livros" :key="index">
                <v-col class="d-flex align-center mt-2">
                    <h4 class="font-weight-bold text-center ml-6" style="color: #FFF; cursor:pointer"  @click="$router.push({name: 'livro', params: {id: livro.id}})">{{livro.titulo_livro}}</h4>
                    <v-spacer></v-spacer>
                    <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="livro.medianota"></v-rating> 
                </v-col>
                <v-col class="d-flex justify-space-around">
                    <v-card class="rounded-lg" style="width: 25rem;">
                        <p class="text-left ma-3"> {{livro.sinopse_livro | truncate(350)}} </p>
                    </v-card>      
                    <v-card class="rounded-lg" style="width: 12rem">
                        <v-img @click="$router.push({name: 'livro', params: {id: livro.id}})" :src="livro.capa_livro" style="cursor:pointer" class="rounded-lg"> </v-img>
                    </v-card>                        
                </v-col>
            </v-card>   
        </div>
    </div>
</div>
</template>
  
<script>
import axios from "axios"
export default{
    data(){
        return{
            editora: {}
        }
    },
    mounted(){
        this.getEditora()
    },
    methods:{
        async getEditora(){
            const {data} = await axios.get('/api/user/' + this.$route.params.id + '/') 
            this.editora = data
            console.log(this.editora)
            if(!this.editora.is_editora){
                this.$router.push({name: 'home'})
            }
        }
    }
}
</script>
  
<style>
  
</style>