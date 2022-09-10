<template>
    <div class="d-flex justify-space-between">
        <div class="d-flex justify-center align-center" id="conteudo" style="background-color: #114B5F; height: 62rem; width: 45%">
          <v-img src="./images/logobranco.png" max-width="70%"></v-img>
          <div><p class="text-uppercase" style="color:#114B5F; ">Editora? Acesse aqui.</p></div>
        </div>
        <div class="d-flex justify-center align-center" style="width: 55%;">
          <v-card class="d-flex flex-column justify-start align-center" style="background-color: #BCEEFF; width: 40%; height: 55%;">
            <h2 class="text-decoration-underline mt-10 font-weight-light" style="color: #114B5F">BEM VINDO</h2> 
            <p class="font-weight-bold mt-2" style="color: #114B5F">Faça seu login</p>
            <v-form class="">
              <v-text-field label="Email" v-model="user.email" style=""></v-text-field>
              <v-text-field class="mt-0" label="Senha" v-model="user.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" ></v-text-field>  
              <v-row class="d-flex justify-center mt-5">
                <v-btn class="rounded-lg" color="#FFF" style="color: #114B5F;" @click="login">Entrar</v-btn>
              </v-row>
              <v-row class="d-flex justify-center mt-6">
                <v-btn text small><h5 class="text-decoration-underline text-uppercase" style="color: #114B5F">esqueceu sua senha?</h5></v-btn> 
              </v-row>
              <v-row class="d-flex justify-center mt-6 " style="gap: 5%;">
                <v-btn color="#114B5F" icon small><v-icon>mdi-google</v-icon></v-btn>
                <v-btn color="#114B5F" icon small><v-icon>mdi-facebook</v-icon></v-btn>
              </v-row>
              <v-row class="d-flex justify-center mt-16">
                <v-btn class="text-uppercase rounded-lg font-weight-medium" color="#FFF" style="color: #114B5F;" link to="/cadastro">cadastre-se</v-btn>
              </v-row>       
            </v-form>
          </v-card>
        </div>        
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    login() {
      if (this.user.email === "gabriel52.alves@gmail.com" && this.user.password === "gabriel") {
        this.$router.push({ name: "home" });
      } else {
        this.errorLogin = true;
      }
    },
  },
};
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