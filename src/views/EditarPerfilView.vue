<template>
  <v-div class="d-flex justify-center align-center" style="margin-top: 5%; gap: 5%;">
    <v-div>
      <v-col>
        <v-avatar color="#667372" size="200"> </v-avatar>
          <p class="text-center">Foto de perfil</p>
      </v-col>
    </v-div>
    <v-divider vertical class="ma-10"></v-divider>
    <v-div>
      <v-form ref="form" v-model="valid" lazy-validation >
        <v-text-field class="mt-2" color="#114B5F" prepend-inner-icon="mdi-account" v-model="name" :counter="100" :rules="nameRules" label="Name" required outlined></v-text-field>
        <v-text-field class="mt-2" color="#114B5F" prepend-inner-icon="mdi-account-edit" v-model="name" :counter="10" :rules="nameRules" label="Username" required outlined></v-text-field>
        <v-menu class="mt-2" ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto" outlined >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="date" label="Data de aniversário" prepend-inner-icon="mdi-cake-variant-outline" readonly v-bind="attrs" v-on="on" color="#114B5F" outlined ></v-text-field>
          </template>
          <v-date-picker  v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false" > Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)" > OK </v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field class="mt-2" color="#114B5F" prepend-inner-icon="mdi-email" v-model="email" :rules="emailRules" label="E-mail" required outlined></v-text-field> 
        <v-text-field class="mt-2" label="Senha" prepend-inner-icon="mdi-lock" v-model="user.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" color="#114B5F" outlined></v-text-field>  
        <v-btn class="mt-4" style="color: #114B5F;"><v-icon color="#114B5F">mdi-send</v-icon>Confirmar </v-btn>
      </v-form>
    </v-div>
  </v-div>
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