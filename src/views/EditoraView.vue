<template>
    <div class="d-flex flex-column justify-center align-center" style="">
            <div class="d-flex flex-column justify-center mt-7" style="">
                <div class="d-flex justify-center">
                    <v-avatar elevation="8" color="#667372" size="180" tile></v-avatar>
                </div>
                <h3 class="text-center mt-4 font-weight-bold" style="color: #114B5F;">Editora SA</h3>
                <p class="mt-4 text-center">Aqui uma pequena descrição</p>
            <div class="d-flex justify-center align-center mt-1"><v-icon color="#114B5F">mdi-map-marker</v-icon> Santa Catarina, Brasil</div>
    </div>
    <div class="justify-center mt-12" style="">
            <h3 class="text-center text-uppercase text-decoration-underline" style="color: #114B5F;">TÍTULOS MAIS POPULARES</h3>
            <div class="d-flex justify-space-around" style="width: 90rem; gap: 2%">
                <v-card class="rounded-lg mt-5" elevation="4" color="#114B5F" style="width: 45rem;">
                    <v-col class="d-flex align-center mt-2">
                        <h4 class="font-weight-bold text-center ml-6" style="color: #FFF;">A Revolução dos Bichos</h4>
                        <v-spacer></v-spacer>
                        <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="4"></v-rating> 
                    </v-col>
                    <v-col class="d-flex justify-space-around">
                        <v-card class="rounded-lg" style="width: 25rem;">
                            <p class="text-left ma-3"> SinopseSinopseSinopseSinopseSinopseSinopseSinopseSinopseSinopseSinopse </p>
                            <p class="text-left ma-3"> {{ livros }} </p>
                        </v-card>      
                        <v-card class="rounded-lg" style="width: 12rem">
                            <v-img src="../assets/images/emalta.png" class="rounded-lg"> </v-img>
                        </v-card>                        
                    </v-col>
                </v-card>   
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import LivroApi from '@/api/livro'
  const livroApi =  new LivroApi()

  export default {
    data() {
        return {
            livros: '222'
        }
    },
    async created() {
        this.livros = await livroApi.getLivros();
    }
  }
  </script>
  
  <style>
  
  </style>