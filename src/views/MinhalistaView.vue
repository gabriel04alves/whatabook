<template>
  <v-div>
    <v-row class="ma-10" >
      <v-icon x-large color="#114B5F">mdi-book-heart</v-icon>
      <h1 class="ml-5 text-uppercase" style="color:#114B5F;">Minha lista</h1>
    </v-row>
    <v-row class="" style="margin-top: 3%;">
      <v-row v-for="item in categorias" :key="item" class="pb-3">
        <v-sheet max-width="11.4%">
          <v-row>
            <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%; color: #114B5F">{{ item.title }}</h3>
            <v-spacer></v-spacer>
            <v-btn icon small style="margin-right: 5%;"><v-icon color="#114B5F" >mdi-book-edit-outline</v-icon></v-btn> 
          </v-row>
          
          <v-slide-group v-model="model" class="pt-2 pb-4 pr-4 pl-4" show-arrows >
            <v-slide-item v-for="n in 105" :key="n"  >
              <v-card  class="ma-4" height="200" width="130" >
                <v-row class="fill-height" align="center" justify="center" >
                  <img src="" style="width: 100%;">
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>        
      </v-row>
    </v-row>
  </v-div>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      categorias: [
        {title: "Meus favoritos", desc: "genero textual que tem como caracteristica..."},
        {title: "Para comprar mais tarde", desc: "genero textual que tem como caracteristica..."},
        {title: "Gostei", desc: "genero textual que tem como caracteristica..."},
        {title: "Para compartilhar", desc: "genero textual que tem como caracteristica..."},
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