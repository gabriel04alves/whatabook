<template>
  <v-container>
    <v-div>
      <v-main class="text-center" style="color: #114B5F; font-size: 150%;">CONHEÇA TÍTULOS POR <b>CATEGORIAS</b> 
      </v-main>
    </v-div>
    <v-carousel class="" style="width: 250rem;" v-model="model" cycle hide-delimiter-background
    :show-arrows="false">
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
        height="110%"
        width="100%"
      >
        <v-sheet
          :color="color"
          height="110%"
          width="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Whatabook {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
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