<template>
    <div class="d-flex justify-space-between">
        <div class="d-flex justify-center align-center" id="conteudo" style="background-color: #114B5F; height: 62rem; width: 45%">
          <v-img src="./images/logobranco.png" max-width="70%"></v-img>
        </div>
        <div class="d-flex justify-center align-center" style="width: 55%;">
          <!-- <v-card class="d-flex flex-column justify-start align-center" style="background-color: #BCEEFF; width: 40%; height: 55%;"></v-card> -->
            <v-card max-width="500" class="mx-auto" style="background-color: #BCEEFF; width: 40%; height: 55%;">
                <v-card-title class=" justify-space-between">
                    <span class="text-h6 font-weight-bold text-decoration-underline" style="color:#114B5F;">{{ currentTitle }}</span>
                    <v-avatar color="#114B5F" class="subheading white--text" size="24" v-text="step" style=""></v-avatar>
                </v-card-title>
                
                <v-window v-model="step">

                <v-window-item :value="1">
                    <div>
                        <v-form ref="form" lazy-validation class="ma-5"> 
                            <v-text-field color="#114B5F" prepend-inner-icon="mdi-email" v-model="email" label="E-mail" required outlined></v-text-field> 
                            <v-text-field color="#114B5F" prepend-inner-icon="mdi-account" v-model="nome" :counter="100" label="Nome" required outlined style=""></v-text-field>
                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto" outlined >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="Data de aniversário" prepend-inner-icon="mdi-cake-variant-outline" readonly v-bind="attrs" v-on="on" color="#114B5F" outlined ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="#114B5F" @click="menu = false" > Cancel </v-btn>
                                    <v-btn text color="#114B5F" @click="$refs.menu.save(date)" > OK </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-form>
                    </div>
                    
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text>
                    <v-text-field label="Password" type="password"></v-text-field>
                    <v-text-field label="Confirm Password" type="password" ></v-text-field>
                    <span class="text-caption grey--text text--darken-1">
                        Please enter a password for your account
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                    <v-img class="mb-4" contain height="128" src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img>
                    <h3 class="text-h6 font-weight-light mb-2">
                        Welcome to Vuetify
                    </h3>
                    <span class="text-caption grey--text">Thanks for signing up!</span>
                    </div>
                </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions class="">
                    <v-btn :disabled="step === 1" text @click="step--" >
                        Voltar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="step === 3" color="#114B5F" style="color: #FFF;" depressed @click="step++" >
                        Continuar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>        
    </div>
</template>

<script>
  export default {
    data(){
        return{
            nome: '',
            date: '',
            menu: '',
            email: '',
            step: 1,
        }
    },
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Cadastro'
          case 2: return 'Criar uma senha'
          default: return 'Sucesso!'
        }
      },
    },
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