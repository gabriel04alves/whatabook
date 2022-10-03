<template>
  <div>
    <div data-aos="zoom-in">
      <v-main class="text-center" style="color: #114B5F; font-size: 150%;">CONHEÇA TÍTULOS POR <b>CATEGORIAS</b></v-main>
    </div>

    <v-carousel class="" style="width: 100%;" v-model="model" cycle hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="(color, i) in colors" :key="i" height="110%" width="100%" >
        <v-sheet :color="color" height="110%" width="100%" tile >
          <v-row class="fill-height" align="center" justify="center" >
            <div class="text-h2">
              Whatabook {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row class="pt-8">
      <v-row data-aos="flip-down" v-for="item in categorias" :key="item" class="pt-0 pb-3">
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
      props: [ "livro"],
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      categorias: [
        {title: "Ficção", slogan: "FICÇÕES PARA LER EM UM DIA", desc: "genero textual que tem como caracteristica..."},
        {title: "Drama", slogan: "Dramas SUGERIDOS", desc: "genero textual que tem como caracteristica..."},
        {title: "Suspense", slogan: "suspenses para curiosos", desc: "genero textual que tem como caracteristica..."},
        {title: "Contos", slogan: "os melhores contos", desc: "genero textual que tem como caracteristica..."},
      ],
    }),
    methods: {
    irParaLivro(imagem) {
      this.$router.push({
        name: `livro`,
        params: { livro: imagem, id: imagem.nomeLivro },
      });
    },
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

</style>