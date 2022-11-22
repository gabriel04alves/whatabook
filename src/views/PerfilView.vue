<template>
  <div class="d-flex justify-space-around align-center ma-16" style="gap: 5rem;">
    <div class="d-flex flex-column align-center" style="margin-left: 15rem;">
        <v-avatar elevation="8" color="#667372" size="200">
            <img :src="usuarioLogado.midia ? usuarioLogado.midia.imagem : '' " alt="">
            <!-- <div :style="background-{src: usuarioLogado.midia.imagem}"></div> -->
        </v-avatar>
        <h3 class="text-center mt-4 font-weight-bold" style="color: #114B5F;">{{usuarioLogado.username}}</h3>
        <p v-if="usuarioLogado.biografia" class="mt-4">{{usuarioLogado.biografia}}</p>
        <p v-else class="mt-4">Aqui uma pequena biografia</p>
        <div class="d-flex justify-center align-center"><v-icon color="#114B5F">mdi-cake-variant-outline</v-icon> {{usuarioLogado.data_nascimento.split('-').reverse().join('/')}}</div>
        <div class="d-flex justify-center align-center mt-1"><v-icon color="#114B5F">mdi-map-marker</v-icon> {{usuarioLogado.localizacao ? usuarioLogado.localizacao : 'Não informado'}}</div>
        <v-row class="d-flex justify-center mt-5">
            <v-btn link to="/editarperfil" dark color="#114B5F"><v-icon>mdi-pencil</v-icon>Editar perfil</v-btn>
        </v-row>
    </div>
    <v-divider vertical></v-divider>
    <div class="justify-center" style="">
                <h3 class="text-center text-uppercase text-decoration-underline mb-0" style="color: #114B5F;">Resenhas publicadas</h3>
                <div class="d-flex justify-center" >
                    <div class="d-flex justify-center flex-column ">
                        <v-card class="rounded-lg mt-5" elevation="4" color="#114B5F" style="width: 35rem;">
                            <v-col class=" d-flex align-center">
                                <v-avatar class="mr-5" color="#FFF" size="50">GA</v-avatar>
                                <h4 class="font-weight-light" style="color: #FFF;">username</h4>
                                <v-spacer></v-spacer>
                                <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                                hover length="5" readonly size="25" :value="4"></v-rating> 
                            </v-col>
                            <v-col class="d-flex justify-center">
                                <v-card class="rounded-lg" style="width: 30rem;">
                                    <p class="text-left font-weight-bold ma-3">Titulo</p>
                                    <p class="text-left ma-3"> muito bommuito bommuito bommuito bommuito bommuito bom  </p>
                                </v-card>                        
                            </v-col>
                        </v-card>                        
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState('usuarioLogado', ['usuarioLogado'])
  },
}
</script>

<style>

</style>