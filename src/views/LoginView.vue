<template>
    <div class="d-flex justify-space-between">
        <div class="d-flex justify-center align-center" id="conteudo" style="background-color: #114B5F; height: 62rem; width: 45%">
          <div class="d-flex justify-center" style="width: 100%;">
            <v-img data-aos="zoom-in" src="./images/logobranco.png" max-width="40rem"></v-img>
          </div>
        </div>
        <div data-aos="flip-up" class="d-flex justify-center align-center" style="width: 55%;">
          <v-card class="d-flex flex-column justify-start align-center" style="background-color: #BCEEFF; width: 40%; height: 55%;">
            <h2 class="text-decoration-underline mt-10 font-weight-light" style="color: #114B5F">BEM VINDO</h2> 
            <p class="font-weight-bold mt-2" style="color: #114B5F">Faça seu login</p>
            <v-form class="">
              <v-text-field color="#114B5F" label="Email" v-model="usuario.username" style="" required outlined></v-text-field>
              <v-text-field color="#114B5F" class="" label="Senha" v-model="usuario.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" required outlined></v-text-field>  
              <v-row class="d-flex justify-center">
                <v-btn class="rounded-lg" color="#FFF" style="color: #114B5F;" @click="submitLogin">Entrar</v-btn>
              </v-row>
              <v-row class="d-flex justify-center mt-6">
                <v-btn text small><h5 class="text-decoration-underline text-uppercase" style="color: #114B5F">esqueceu sua senha?</h5></v-btn> 
              </v-row>
              <v-row class="d-flex justify-center mt-5 " style="gap: 5%;">
                <v-btn color="#114B5F" icon small><v-icon>mdi-google</v-icon></v-btn>
                <v-btn color="#114B5F" icon small><v-icon>mdi-facebook</v-icon></v-btn>
              </v-row>
              <v-row class="d-flex justify-center mt-16">
                <v-btn class="text-uppercase rounded-lg font-weight-medium" color="#FFF" style="color: #114B5F;" link to="/cadastro">cadastre-se</v-btn>
              </v-row>
              <div class="d-flex justify-center mt-6">
                <router-link to="/cadastroeditora" tag="button">
                  <p class="font-italic text-center text-decoration-underline" style="color: #114B5F;">Editora? Acesse aqui</p>
                </router-link>                  
              </div>
            </v-form>
          </v-card>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      show: false,
      usuario: {},
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    submitLogin() {
      this.login(this.usuario),
      this.$router.push({ name: 'home'})
    }
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