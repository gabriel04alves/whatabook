<template>
  <v-app>
    <v-app-bar app color="#114B5F" dark elevation="1" class="">
      <div class="d-flex" style="">
        <router-link to="/" tag="button"><v-img data-aos="zoom-in" class="" src="./images/logobranco.png" max-width="100"></v-img> </router-link> 
        <v-divider class="mt-9 mb-9" color="#FFF" vertical inset></v-divider>
        <div class="d-flex flex-row justify-space-around ml-9 align-self-center" style=" margin-top: -12%; font-size: 7px;">
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
        </div>
        <v-spacer></v-spacer>
      </div>
      <v-spacer></v-spacer>
      <div class="pa-2 mr-auto d-flex" >
        <v-row>
        <v-menu
          v-for="([text, rounded], index) in btns"
          :key="text"
          :rounded="rounded"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn :color="colors[index]" class="white--text ma-5" v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link :to= "item.to"
            >
              
              <v-list-item-title> <v-icon> {{item.icon}} </v-icon> {{ item.title}} </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="item in itemsz"
              :key="item.title"
              link :to = "item.to"
            >
              <v-list-item-title> <v-icon> {{item.icon}} </v-icon> {{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      </div>
      
    </v-app-bar>
      <v-main><router-view></router-view> </v-main>
    
    <div style="margin-top: 3%">
      <v-footer app dark color="#114B5F" style="position: absolute;" class="">
        <h5 class="font-weight-regular"> <a class="h5 font-weight-regular" style="color: #FFF; text-decoration: none;" href="/">Whatabook</a>  &copy; | 2022</h5>
        <v-spacer></v-spacer>
        <div class="d-flex ma-2" style="gap: 15px;">
          <p class="d-flex" style=""><v-icon>mdi-github</v-icon><a class="text-weight-light" style="color: #FFF; text-decoration: none;" href="https://github.com/gabriel04alves">Gabriel Alves</a></p>
          <p class="d-flex" style=""><v-icon>mdi-github</v-icon><a class="text-weight-light" style="color: #FFF; text-decoration: none;" href="https://github.com/EuAlmeida">João Almeida</a></p>
          <p class="d-flex" style=""><v-icon>mdi-github</v-icon><a class="text-weight-light" style="color: #FFF; text-decoration: none;" href="https://github.com/yasmarcelino">Yas Marcelino</a></p>
        </div>
      </v-footer>
    </div>
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
        { title: 'Meu Perfil', to:"/perfil", icon:"mdi-account-edit"}, 
        { title: 'Configurações', to:"/configuracoes", icon:"mdi-cog"},
        ],
      itemsz: [{ title:'Sair', to:"/login", icon: "mdi-logout" },],
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