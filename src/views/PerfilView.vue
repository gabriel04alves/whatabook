<template>
  <div class="d-flex justify-center align-self-center mx-16 mb-16" style="margin-top: 8rem; gap: 15rem;">
    <div class="d-flex flex-column align-center" style="margin-left: 15rem;">
        <v-avatar elevation="8" color="#667372" size="200">
            <img :src="usuarioLogado.midia ? usuarioLogado.midia.imagem : '' " alt="">
            <!-- <div :style="background-{src: usuarioLogado.midia.imagem}"></div> -->
        </v-avatar>
        <h3 class="text-center mt-4 font-weight-bold" style="color: #114B5F;">{{usuarioLogado.username}}</h3>
        <p v-if="usuarioLogado.biografia" class="mt-4">{{usuarioLogado.biografia}}</p>
        <p v-else class="mt-4">Aqui uma pequena biografia</p>
        <div class="d-flex justify-center align-center"><v-icon color="#114B5F">mdi-cake-variant-outline</v-icon> {{usuarioLogado.data_nascimento ? usuarioLogado.data_nascimento.split('-').reverse().join('/') : 'Não informado'}}</div>
        <div class="d-flex justify-center align-center mt-1"><v-icon color="#114B5F">mdi-map-marker</v-icon> {{usuarioLogado.localizacao ? usuarioLogado.localizacao : 'Não informado'}}</div>
        <v-row class="d-flex justify-center mt-5">
            <v-btn link to="/editarperfil" dark color="#114B5F"><v-icon>mdi-pencil</v-icon>Editar perfil</v-btn>
        </v-row>
    </div>
    <v-divider color="114B5F" vertical></v-divider>
    <div class="justify-center" style="">
        <h3 class="text-center text-uppercase text-decoration-underline mb-0" style="color: #114B5F;">Resenhas publicadas</h3>
        <div class="d-flex justify-center" >
            <div class="d-flex justify-center flex-column ">
                <v-card class="rounded-lg ma-5" elevation="4" color="#114B5F" style="width: 35rem" v-for="(resenha, index) in resenhas.results" :key="index">
                <v-col class="d-flex align-center">
                  <div class="font-weight-bold mt-5 mx-5" style="color: #FFF; font-size: 17px; cursor: pointer" @click="$router.push({name: 'livro', params: {id: resenha.livro_resenha.id}})">{{resenha.livro_resenha.titulo_livro}}</div>
                  <v-spacer></v-spacer>
                  <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="resenha.nota_resenha"></v-rating>
                </v-col>
                <v-col class="d-flex justify-center">
                  <v-card class="rounded-lg" style="width: 30rem">
                    <p class="text-left font-weight-bold ma-3"> {{ resenha.titulo_resenha }} </p>
                    <p class="text-left ma-3">{{ resenha.desc_resenha }}</p>
                              
                  </v-card>
                  
                </v-col>
              </v-card>       
                <div class="d-flex justify-center" style="gap: 10px">
                    <v-btn color="#caf1ff" v-if="resenhas.previous" @click="page--"><v-icon color="#114B5F">mdi-chevron-left</v-icon></v-btn>
                    <v-card v-if="resenhas.count > 3" width="30px" class="d-flex align-center justify-center" style="background-color: #114b5f; color: white; font-size: 20px;">{{page}}</v-card>
                    <v-btn color="#caf1ff" v-if="resenhas.next" @click="page++"><v-icon color="#114B5F">mdi-chevron-right</v-icon></v-btn>
                </div>                 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import axios from "axios"
export default {
    data(){
        return{
            resenhas: [],
            page: 1,
        }
    },
    computed:{
        ...mapState('usuarioLogado', ['usuarioLogado'])
    },
    mounted(){
        this.getResenhas()
    },
    watch:{
        page(){
            this.getResenhas()
        }
    },
    methods: {
        async getResenhas(){
            const {data} = await axios.get(`/api/resenha/?user=${this.usuarioLogado.id}&page=${this.page}`)
            this.resenhas = data
        }
    }
}
</script>

<style>

</style>