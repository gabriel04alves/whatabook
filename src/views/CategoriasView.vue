<template>
  <v-div>
    <v-div>
      <v-main class="text-center" style="color: #114B5F; font-size: 150%;">CONHEÇA TÍTULOS POR <b>CATEGORIAS</b> 
      </v-main>
    </v-div>
    <v-carousel class="" style="width: 100%;" v-model="model" cycle hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="(color, i) in colors" :key="color" height="110%" width="100%" >
        <v-sheet :color="color" height="110%" width="100%" tile >
          <v-row class="fill-height" align="center" justify="center" >
            <div class="text-h2">
              Whatabook {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row class="" style="margin-top: 5%;">
      <v-row v-for="item in categorias" :key="item" class="pb-3">
        <v-sheet max-width="11.4%">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%; color: #114B5F">{{ item.slogan }}</h3>
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
        {title: "Ficção", slogan: "FICÇÕES PARA LER EM UM DIA", desc: "genero textual que tem como caracteristica..."},
        {title: "Drama", slogan: "Dramas SUGERIDOS", desc: "genero textual que tem como caracteristica..."},
        {title: "Suspense", slogan: "suspenses para curiosos", desc: "genero textual que tem como caracteristica..."},
        {title: "Contos", slogan: "os melhores contos", desc: "genero textual que tem como caracteristica..."},
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