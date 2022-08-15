<template>
  <v-app>
    <v-app-bar app color="#114B5F" dark elevation="1" class="">
      <v-div class="d-flex" style="">
        <v-img class="" src="./images/logobranco.png" max-width="100"></v-img>
        <v-divider class="mt-9 mb-9" color="#FFF" vertical inset></v-divider>
        <v-div class="d-flex flex-row justify-space-around ml-9 align-self-center" style=" margin-top: -12%; font-size: 7px;">
          <v-row>
            <v-col 
              v-for="item in textos"
              :key="item.title"
              >
              <v-item >
                <v-btn small class="white--text mt-16 " text link :to= "item.to"> 
                  <v-list-item-title>{{ item.title}}</v-list-item-title> 
                </v-btn>
              </v-item>
            </v-col>
          </v-row>
        </v-div>
        <v-spacer></v-spacer>
      </v-div>
      <v-spacer></v-spacer>
      <v-div class="pa-2 mr-auto d-flex" >
        <v-row>
        <v-menu
          v-for="([text, rounded], index) in btns"
          :key="text"
          :rounded="rounded"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              :color="colors[index]"
              class="white--text ma-5"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link :to= "item.to"
            >
              <v-list-item-title> {{ item.title}} </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="item in itemsz"
              :key="item.title"
              link :to = "item.to"
            >
              <v-list-item-title> {{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      </v-div>
      
    </v-app-bar>
      <v-main><router-view></router-view> </v-main>

    <v-footer app dark color="#114B5F" style="position: absolute;" class=""><span class="caption">Whatabook &copy; | 2022</span></v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      btns: [
        ['Large', 'lg'],
      ],
      colors: [''],
      items: [
        { title: 'Meu Perfil', to:"/perfil"}, 
        { title: 'Configurações', to:"/configuracoes"},
        ],
      itemsz: [{ title:'Sair', to:"/login" },],
      textos: [
        { title:'Inicio', to:"/" }, 
        { title:'Categorias', to:"/categorias"}, 
        { title:'Minha lista', to:"/minhalista"}
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