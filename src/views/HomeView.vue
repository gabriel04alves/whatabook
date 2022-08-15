<template>
  <v-div style="">
    <v-row style="background: linear-gradient(180deg, #114B5F 0%, rgba(217, 217, 217, 0) 100%);" class="pa-16 pt-8 d-flex justify-center" >
      <v-col> 
        <v-div class=" d-flex justify-end pt-5 pr-16" style="cursor: pointer;">
          <v-img src="./images/1984.png" max-width="270px"></v-img>
        </v-div>
      </v-col>
      <v-col class="col-8 d-flex align-self-center " color="primary" style="color: #FFF; cursor: pointer;">
        <v-div style="padding-right: 10%;">
          <v-row>
            <v-main class="text-center font-weight-black pt-2" style="color: #FFF; ">A revolução dos bichos: Um conto de fadas</v-main>
          </v-row>
          <v-row class="text-justify">
            Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. 
          </v-row>
          <v-row style="display: flex; justify-content: center;">
            <v-col class="text-end">Autor</v-col>
            <v-divider vertical color="#FFF"></v-divider>
            <v-col class="text-start">Editora</v-col>
          </v-row>
          <v-row class="mt-5" style="display: flex; justify-content: center;"> 
            <v-btn plain small dark>
              <v-icon>mdi-information-outline</v-icon>
              mais
            </v-btn>
          </v-row>
        </v-div>
      </v-col>
    </v-row>
    <v-row>
      <v-row v-for="item in categorias" :key="item" class="pt-5 pb-5">
        <v-sheet elevation="9" max-width="11.4%" dark color="#114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%;">{{ item.slogan }}</h3>
          <v-slide-group v-model="model" class="pt-2 pb-4 pr-4 pl-4" show-arrows >
            <v-slide-item v-for="n in 105" :key="n"  >
              <v-card  class="ma-4" height="200" width="130" >
                <v-row class="fill-height" align="center" justify="center" >
                  <img src="item.url" style="width: 100%;">
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
      items: [
        {name: "1984", url: " "},
      ],
      categorias: [
        {title: "Sugestoes", slogan: "Para você", desc: "genero textual que tem como caracteristica..."},
        {title: "Romance", slogan: "Os melhores romances", desc: "genero textual que tem como caracteristica..."},
        {title: "Ficção", slogan: "FICÇÕES PARA LER EM UM DIA", desc: "genero textual que tem como caracteristica..."},
        {title: "Drama", slogan: "Dramas SUGERIDOS", desc: "genero textual que tem como caracteristica..."},
      ]
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