<template>
    <div class="d-flex justify-space-around align-center ma-16" style="gap: 5rem;">
      <div class="" style="margin-left: 15rem;">
        <div class="d-flex justify-center">
            <v-avatar elevation="8" color="#667372" size="200"> <v-img src="@/assets/images/georgeorwell.jpeg"></v-img> </v-avatar>
        </div>
          <h3 class="text-center mt-4 font-weight-bold" style="color: #114B5F;">{{ autor.nomeAutor }}</h3>
          <p class="mt-4"> {{ autor.biografiaAutor }} </p>
          <div class="d-flex justify-center align-center"><v-icon color="#114B5F">mdi-star-outline</v-icon> {{ autor.dtnascAutor}}</div>
          <div class="d-flex justify-center align-center"><v-icon color="#114B5F">mdi-coffin</v-icon> {{ autor.dtfalecimentoAutor }} </div>
          <div class="d-flex justify-center align-center mt-1"><v-icon color="#114B5F">mdi-map-marker</v-icon> {{ autor.localAutor }} </div>
      </div>
      <v-divider vertical></v-divider>
      <div class="justify-center" style="">
                  <h3 class="text-center text-uppercase text-decoration-underline mb-0" style="color: #114B5F;">Obras mais populares</h3>
                  <div class="d-flex justify-center" >
                      <div class="d-flex justify-center flex-column ">
                          <v-card class="rounded-lg mt-5" elevation="4" color="#114B5F" style="width: 45rem;">
                              <v-col class="d-flex align-center mt-2">
                                        <h4 class="font-weight-bold text-center ml-6" style="color: #FFF;">A Revolução dos Bichos</h4>
                                  <v-spacer></v-spacer>
                                  <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                                  hover length="5" readonly size="25" :value="4"></v-rating> 
                              </v-col>
                              <v-col class="d-flex justify-space-around">
                                <v-card class="rounded-lg" style="width: 25rem;">
                                      <p class="text-left ma-3"> SinopseSinopseSinopseSinopseSinopseSinopseSinopseSinopseSinopseSinopse </p>
                                  </v-card>      
                                  <v-card class="rounded-lg" style="width: 12rem">
                                      <v-img src="../assets/images/emalta.png" class="rounded-lg"> </v-img>
                                  </v-card>                        
                              </v-col>
                          </v-card>                        
                      </div>
                  </div>
              </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            autor: {}
        }
    },
    mounted() {
        this.autor = this.$route.params.autor
    }
  }
  </script>
  
  <style>
  
  </style>