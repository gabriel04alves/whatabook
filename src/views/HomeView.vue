<template>
  <div style="">
    <div class="d-flex justify-end ma-5 flex-row" style="position: fixed; " color="#fff"> 
    </div>
    <v-row style="background: linear-gradient( 180deg, #114b5f 25%, rgba(217, 217, 217, 0) 100% );" class="pa-16 pt-8 d-flex justify-center">
      <v-col>
        <div data-aos="zoom-in-up" class="d-flex justify-end pt-5 pr-16" style="">
          <v-img class="rounded" style="cursor: pointer" elevation="9" :src="ultimolivro.capa_livro" @click="$router.push({name: 'livro', params: {id: ultimolivro.id}})" max-width="270px"></v-img>
        </div>
      </v-col>
      <v-col class="col-8 d-flex align-self-center" color="primary" style="color: #fff">
        <div style="padding-right: 10%">
          <v-row data-aos="fade-down" class="d-flex justify-center mb-3">
            <h3 class="text-center font-weight-black pt-2" style="color: #fff">
              {{ultimolivro.titulo_livro}}
            </h3>
          </v-row>
          <v-row data-aos="zoom-in" class="text-justify">
            {{ultimolivro.sinopse_livro}}
          </v-row>
          <v-row class="ma-5" style="display: flex; justify-content: center">
            <a data-aos="fade-right" @click="$router.push({name: 'autor', params: {id: ultimolivro.autor_livros[0].id}})" class="" style="color: #fff; text-decoration: none" ><h4 class="text-end">Autor</h4></a>
            <v-divider class="ma-2" vertical color="#FFF"></v-divider>
            <a data-aos="fade-left" href="/editora" class="" style="color: #fff; text-decoration: none"><h4 class="text-end">Editora</h4></a>
          </v-row>
          <v-row data-aos="fade-up" class="" style="display: flex; justify-content: center">
            <v-btn @click="$router.push({name: 'livro', params: {id: ultimolivro.id}})" plain small dark link>
              <v-icon>mdi-information-outline</v-icon>
              mais
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-row data-aos="zoom-in-up" class="pt-5 pb-5" >
        <v-sheet elevation="9" width="calc(135rem - 200px)" dark color="#114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%">
            Livros
          </h3>
          <v-slide-group class="pt-2 pb-4 pr-4 pl-4" show-arrows color="#114B5F" >
            <v-slide-item v-for="(livro, index) in livros" :key="index">
              <div class="ma-4" style="height: 100%; width: 8.1rem">
                <v-row class="fill-height" justify="center">
                  <img @click="irParaLivro(livro)" id="img" class="rounded ma-2" :src="livro.capa_livro" height="200" width="140" />
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
import { mapActions, mapState } from 'vuex'
import axios from "axios"
export default {
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
  mounted(){
    this.getCategorias()
    this.getLivros().then(()=>{
      this.ultimolivro = this.livros[this.livros.length -1]
      console.log(this.ultimolivro)
    })
  },
  data(){
    return{
      categorias: [],
      livros:[],
      ultimolivro: {}
    }
  },
  methods: {
    irParaLivro(livro) {
      this.$router.push({
        name: `livro`,
        params: {id: livro.id },
      });
    },
    async getLivros(){
      const {data} = await axios.get('api/livro/')
      this.livros = data
    },
    async getCategorias(){
      const {data} = await axios.get('api/categorias/')
      this.categorias = data
    },
    ...mapActions('auth', ['logout'])
  },
};
</script>

<style>
/* STYLE DEFAULT */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700;800&display=swap");

::-webkit-scrollbar {
  display: none;
}
* {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
/* ............. */
#img {
  cursor: pointer;
  transition: 0.2s;
}
#img:hover {
  transform: scale(1.05);
}
</style>
