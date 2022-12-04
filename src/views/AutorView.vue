<template>
    <div >
        <div>
            <h1 class="d-flex align-self-center justify-center text-center text-uppercase font-weight-bold mt-10" style="color: #114B5F; "><v-icon class="mr-3" color="#114B5F" x-large>mdi-account-edit</v-icon> Autor</h1>
        </div>
        <div class="d-flex justify-space-around align-start ma-16" style="gap: 5rem;">
            <div class="" style="margin-left: 15rem;">
            <div class="d-flex justify-center">
                <v-avatar elevation="8" color="#667372" size="200"> <v-img :src="autor.autor_imagem"></v-img> </v-avatar>
            </div>
                <h3 class="text-center mt-4 font-weight-bold" style="color: #114B5F;">{{ autor.nome_autor }}</h3>
                <p class="mt-4"> {{ autor.desc_autor }} </p>
                <div class="d-flex justify-center align-center"><v-icon color="#114B5F">mdi-star-outline</v-icon> {{ autor.autor_nasc}}</div>
                <div class="d-flex justify-center align-center"><v-icon color="#114B5F">mdi-coffin</v-icon> {{ autor.autor_falecimento ? autor.autor_falecimento : "Autor(a) vivo" }} </div>
            </div>

            <v-divider class="ma-15" color="#114B5F" vertical></v-divider>
            
            <div class="justify-center" style="">
                <h2 class="text-center text-uppercase text-decoration-underline mb-0" style="color: #114B5F;">Obras mais populares</h2>
                <div class="d-flex justify-center" >
                    <div class="d-flex justify-center flex-column ">
                        <v-card class="rounded-lg mt-5" elevation="4" color="#114B5F" style="width: 45rem;" v-for="livro, index in livros.results" :key="index">
                            <v-col class="d-flex align-center mt-2">
                                    <h3 class="font-weight-bold text-center ml-6" @click="$router.push({name: 'livro', params: {id: livro.id}})" style="color: #FFF; cursor: pointer">{{livro.titulo_livro}}</h3>
                                <v-spacer></v-spacer>
                                <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                                hover length="5" readonly size="25" :value="livro.medianota"></v-rating> 
                            </v-col>
                            <v-col class="d-flex justify-space-around">
                            <v-card class="rounded-lg" style="width: 25rem;">
                                    <p class="text-left ma-3"> {{livro.sinopse_livro | truncate(350)}} </p>
                                </v-card>      
                                <v-card class="rounded-lg" style="width: 12rem">
                                    <v-img @click="$router.push({name: 'livro', params: {id: livro.id}})" style="cursor: pointer" :src="livro.capa_livro" class="rounded-lg"> </v-img>
                                </v-card>                        
                            </v-col>
                        </v-card>                        
                    </div>
                </div>
                    <div class="d-flex justify-center mt-6" style="gap: 10px">
                        <v-btn color="#caf1ff" v-if="livros.previous" @click="page--"> <v-icon color="#114B5F">mdi-chevron-left</v-icon> </v-btn>
                        <v-card v-if="livros.count > 2" width="30px" class="d-flex align-center justify-center" style="background-color: #114b5f; color: white; font-size: 20px;">{{page}}</v-card>
                        <v-btn color="#caf1ff" v-if="livros.next" @click="page++"> <v-icon color="#114B5F">mdi-chevron-right</v-icon> </v-btn>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            autor: {},
            livros: [],
            page: 1,
        }
    },
    mounted() {
        this.getAutor().then(()=>{
            this.getLivrosAutor()
        })
    },
    watch:{
        page(){
            this.getLivrosAutor()
        }
    },
    methods:{
        async getAutor(){
            const {data} = await axios.get(`/api/autor/${this.$route.params.id}/`)
            this.autor = data
        },
        async getLivrosAutor(){
            const {data} = await axios.get(`/api/livros-autor/?autor=${this.$route.params.id}&page=${this.page}`)
            this.livros = data
            console.log(this.livros)
        }
    }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
</style>