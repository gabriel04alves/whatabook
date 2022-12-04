<template>
  <div>
    <div data-aos="zoom-in">
      <v-main class="text-center" style="color: #114B5F; font-size: 150%;">CONHEÇA TÍTULOS POR <b>CATEGORIAS</b></v-main>
    </div>

    <v-carousel class="" style="width: 100%;" v-model="model" cycle hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="(imagem, i) in imagens" :key="i" height="110%" width="100%" >
        <div class="imagem" :style="'background-image: url(' + imagem +'); height: 110%; width: 100%'"></div>
      </v-carousel-item>
    </v-carousel>
    <v-row class="pt-8">
      <v-row data-aos="flip-down" v-for="categoria,index in categorias" v-show="categoria.livros.length" :key="index" class="pt-0 pb-3">
        <v-sheet width="calc(135rem - 200px)" color="#FFF" style="color: #114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%;">{{ categoria.nome_categoria }}</h3>
          <v-slide-group  class="pt-2 pb-4 pr-4 pl-4" show-arrows>
              <v-slide-item v-for="livro,indexx in categoria.livros" :key="indexx">
                <div class="ma-4" style="height: 100%; width: 8.1rem">
                <v-row class="fill-height" justify="center">
                  <img @click="$router.push({name: 'livro', params: {id: livro.id}})" id="img" class="ma-2" :src="livro.capa_livro" height="200" width="140" />
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
import axios from 'axios'
export default {
  data(){
    return{
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      categorias: [],
      imagens: [
        require("../assets/categorias/image1.png"),
        require("../assets/categorias/image.png"),
        require("../assets/categorias/image2.png"),
        require("../assets/categorias/image3.png"),
      ]
    }
  },
  mounted(){
    this.getCategorias()
  },
  methods: {
    async getCategorias(){
      const {data} = await axios.get('/api/categorias/')
      this.categorias = data
      console.log(this.categorias)
    }
  },
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
.imagem{
  background-position: center;
  background-size: cover;
}
</style>