<template>
  <div>
    <v-row class="ma-10" >
      <v-icon x-large color="#114B5F">mdi-book-heart</v-icon>
      <h1 class="ml-5 text-uppercase" style="color:#114B5F;">Minha lista</h1>
    </v-row>
    <v-row class="">
      <v-row data-aos="flip-up" v-for="item in categorias" :key="item" class="pt-0 pb-3">
        <v-sheet width="calc(135rem - 200px)" color="#FFF" style="color: #114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%;">{{ item.slogan }}</h3>
          <v-slide-group  class="pt-2 pb-4 pr-4 pl-4" show-arrows>
              <v-slide-item v-for="imagem in items" :key="imagem" v-show="imagem.categoria == item.title">
                <div  class="ma-4" style="height: 100%; width: 8.1rem;" >
                  <v-row class="fill-height" justify="center" >
                    <img id="img" class="ma-2" :src="imagem.url" height="200" width="140">
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
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Meus favoritos"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Meus favoritos"},
      // ... //
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para comprar mais tarde"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para comprar mais tarde"},
      // ... //
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Gostei"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Gostei"},
      // ... //
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/1984.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/brascubas.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/casca-noz.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/historia-ciencia.png"), categoria: "Para compartilhar"},
      {name: "buraco", url: require("../assets/images/homo-sapiens.png"), categoria: "Para compartilhar"},
    ],
      categorias: [
        {title: "Meus favoritos", slogan: "Meus favoritos", desc: "genero textual que tem como caracteristica..."},
        {title: "Para comprar mais tarde", slogan: "Para comprar mais tarde", desc: "genero textual que tem como caracteristica..."},
        {title: "Gostei", slogan: "Gostei", desc: "genero textual que tem como caracteristica..."},
        {title: "Para compartilhar", slogan: "Para compartilhar", desc: "genero textual que tem como caracteristica..."},
      ],
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