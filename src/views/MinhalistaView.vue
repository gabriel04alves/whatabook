<template>
  <div>
    <v-row data-aos="fade-right" class="ma-10" >
      <v-icon x-large color="#114B5F">mdi-book-heart</v-icon>
      <h1 class="ml-5 text-uppercase" style="color:#114B5F;">Minha lista</h1>
    </v-row>
    <v-row class="pt-8">
      <v-row data-aos="flip-down" v-for="item,index in categorias" :key="index" class="pt-0 pb-3">
        <v-sheet width="calc(135rem - 200px)" color="#FFF" style="color: #114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%;">{{ item.slogan }}</h3>
          <v-slide-group  class="pt-2 pb-4 pr-4 pl-4" show-arrows>
              <v-slide-item v-for="imagem in livro" :key="imagem" v-show="imagem.categoria == livro.nomeLivro">
                <div class="ma-4" style="height: 100%; width: 8.1rem">
                <v-row class="fill-height" justify="center">
                  <img @click="irParaLivro(imagem)" id="img" class="ma-2" :src="imagem.imagemLivro" height="200" width="140" />
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
  export default {
    data: () => ({
      items: [
      
    ],
      categorias: [
        {title: "Meus favoritos", slogan: "Meus favoritos", desc: "genero textual que tem como caracteristica..."},
        {title: "Para comprar mais tarde", slogan: "Para comprar mais tarde", desc: "genero textual que tem como caracteristica..."},
        {title: "Gostei", slogan: "Gostei", desc: "genero textual que tem como caracteristica..."},
        {title: "Para compartilhar", slogan: "Para compartilhar", desc: "genero textual que tem como caracteristica..."},
      ],
      livro: [],
    }),
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