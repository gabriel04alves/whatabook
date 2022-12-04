<template>
    <div class="d-flex justify-space-between">
        <div class="d-flex justify-center align-center" id="conteudo" style="background-color: #114B5F; height: 62rem; width: 45%">
          <div class="d-flex justify-center" style="width: 100%;">
            <v-img data-aos="zoom-in" src="./images/logobranco.png" max-width="40rem"></v-img>
          </div>
        </div>
        <div data-aos="flip-up" class="d-flex justify-center align-center" style="width: 55%;">
          <v-card class="d-flex flex-column justify-center align-center pa-10" style="background-color: #BCEEFF; width: 450px; height: 550px;">
            <h2 class="text-decoration-underline font-weight-light mt-5" style="color: #114B5F">BEM VINDO</h2> 
            <p class="font-weight-bold mt-2" style="color: #114B5F">Faça seu login</p>
            <div class="d-flex justify-center flex-column">
              <div class="ma-5">
                <v-text-field class="pa-3" color="#114B5F" style="width: 325px; height: 3px;" label="Usuário" v-model="usuario.username" required outlined></v-text-field>
              </div>
              <div class="ma-5">
                <v-text-field class="pa-3"  color="#114B5F" style="width: 325px; height: 3px;" label="Senha" v-model="usuario.password" @keyup.enter="submitLogin" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" required outlined></v-text-field>  
              </div>
                <div class="mt-10">
                  <button class="learn-more" width="40%" style="color: #114B5F; margin-left: 30%;" @click="submitLogin">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Entrar</span>
                  </button>                
                </div>
                <!-- <v-btn class="rounded-lg mt-12" width="40%" color="#FFF" style="color: #114B5F; margin-left: 30%;" @click="submitLogin">Entrar <v-icon color="#114B5F">mdi-arrow-right-circle-outline</v-icon> </v-btn>  -->
                <v-btn text small plain class="mt-4" width="60%" style=" margin-left: 21.7%;"><p class="text-decoration-underline text-uppercase text-center" style="color: #114B5F">esqueceu sua senha?</p></v-btn> 
            </div>
            <div class="d-flex justify-center flex-column" style="margin-top: 100px;">
                <v-btn class="text-uppercase rounded-lg font-weight-medium" color="#FFF" style="color: #114B5F;" link to="/cadastro">criar uma conta</v-btn>
                <v-btn text small plain class="font-italic text-center text-decoration-underline" color="#BCEEFF" style="color: #114B5F;" to="/cadastroeditora" tag="button">
                  Editora? Acesse aqui
                </v-btn>                  
              </div>
          </v-card>
          <v-snackbar v-model="loginMessage" timeout="2000">
            {{ loginText }}
            <template v-slot:action="{attrs}">
              <v-btn color="black" text v-bind="attrs" @click="loginMessage=false">Fechar</v-btn>
            </template>
          </v-snackbar>
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
      loginMessage: false,
      loginText: '',
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    async submitLogin() {
      try {
        await this.login(this.usuario),
        this.loginMessage = true;
        this.loginText="Login realizado com sucesso",
        this.$router.push({ name: 'home'})
      } catch (e) {
        alert("Erro de autenticação")
      }
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

/* Botão de login */

  button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  }

  button.learn-more {
  width: 10rem;
  height: auto;
  }

  button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 2.8rem;
  background: #114B5F;
  border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  }

  button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.100rem;
  background: none;
  }

  button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
  }

  button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #114B5F;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  }

  button:hover .circle {
  width: 100%;
  }

  button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
  }

  button:hover .button-text {
  color: #fff;
  }

/* . */
</style>