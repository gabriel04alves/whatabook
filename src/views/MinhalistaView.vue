<template>
  <div>
    <v-row data-aos="fade-right" class="ma-10" >
      <v-icon x-large color="#114B5F">mdi-book-heart</v-icon>
      <h1 class="ml-5 text-uppercase" style="color:#114B5F;">Minhas listas</h1>
      <v-row align="center" class="ml-6 flex-start">
        <v-btn class="font-weight-regular" tile raised color="#caf1ff" style="color: #114B5F;" @click="dialog=true"><v-icon color="#114B5F" left>mdi-plus</v-icon>Criar nova lista</v-btn>
      </v-row>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-3" height="270">
        <h3 class="text-uppercase text-center pt-3 pb-3" style="color: #114b5f">
          Personalize sua lista:
        </h3>
        <div class="ma-5">
          <v-text-field label="Nome da lista" outlined color="#114B5F" v-model="listanome" @keyup.enter="criarLista"></v-text-field>
        </div>
        <v-card-actions class="mt-5">
          <div v-if="erro" style="color: #FF0000">Ocorreu um erro</div>
          <v-spacer></v-spacer>
          <v-btn color="#FF0000" text @click="dialog = false">Cancelar</v-btn>
          <v-btn style="color: #114b5f"  color="#CAF1FF" text @click="criarLista">Criar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row class="pt-8">
      <v-row data-aos="flip-down" v-for="lista,index in listas" :key="index" class="pt-0 pb-3 d-flex flex-column">
        <div class="d-flex align-center">
          <h2 class="pt-5 text-uppercase font-weight-light pl-15" style="color:#114B5F;"> <v-icon color="#114B5F">mdi-format-list-bulleted</v-icon> {{ lista.titulo_lista }}</h2>
          <v-btn tile plain class="ml-3 mt-5" color="error" @click="escolherLista(lista)"><v-icon left>mdi-trash-can</v-icon>Excluir</v-btn>
        <v-dialog v-model="dialog1" persistent max-width="350" :retain-focus="false">
          <v-card class="pa-2" height="200">
            <h3 class="text-uppercase text-center pt-3 pb-3" style="color: #FF0000;">
              <v-icon color="#FF0000">mdi-alert-circle-outline</v-icon> Excluir lista
            </h3>
            <h3 class="font-weight-regular ma-5">Deseja apagar a lista: "{{delLista.titulo_lista}}"?</h3>
            <v-card-actions class="">
              <v-spacer></v-spacer>
              <v-btn style="color: #114b5f"  color="#CAF1FF" text @click.stop="dialog1 = false">Cancelar</v-btn>
              <v-btn color="#FF0000" text @click.stop="excluirLista(delLista.id)">Excluir</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </div>
        <v-sheet width="calc(135rem - 200px)" color="#FFF" style="color: #114B5F">
          <v-slide-group  class="mx-10 mb-5 mt-2" show-arrows>
              <v-slide-item v-for="livro,index in lista.livros_lista" :key="index">
                <div class="ma-4" style="height: 100%; width: 8.1rem">
                <v-row class="fill-height" justify="center">
                  <img @click="$router.push({name: 'livro', params: {id: livro.id}})" style="cursor: pointer" id="img" class="ma-2" :src="livro.capa_livro" height="200" width="140" />
                </v-row>
              </div>
              </v-slide-item>
          </v-slide-group>
        </v-sheet>        
      </v-row>
    </v-row>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data: () => ({
      dialog: false,
      dialog1: false,
      erro: false,
      listanome: '',
      listas: [],
      livro: [],
      delLista: {},
    }),
    mounted(){
      this.getListas()
    },
    methods:{
      async criarLista(){
        await axios.post('/api/listafav/', {titulo_lista: this.listanome})
        this.getListas()
        this.dialog = false
      },
      async getListas(){
        const {data} = await axios.get('/api/listafav/')
        this.listas = data
        console.log(this.listas)
      },
      async excluirLista(id){
        await axios.delete(`/api/listafav/${id}/`)
        this.dialog1 = false
        this.getListas()
      },
      escolherLista(lista){
        this.delLista = {}
        this.delLista = lista
        this.dialog1 = true
      }
    }
  }
</script>

<style>
  /* STYLE DEFAULT */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700;800&display=swap');
  
  ::-webkit-scrollbar{
    display: none;
  }
  * {
      padding: 0;
      margin: 0;
      font-family: 'Inter', sans-serif;
  }
  /* ............. */
</style>