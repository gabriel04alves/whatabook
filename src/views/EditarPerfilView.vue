<template>
  <div class="d-flex justify-center align-center" style="margin-top: 5%; gap: 5%;">
    <div>
      <v-col>
        <v-avatar color="#667372" size="200"> </v-avatar>
          <p class="text-center">Foto de perfil</p>
      </v-col>
    </div>
    <v-divider vertical class="ma-10"></v-divider>
    <div>
      <v-form ref="form" >
        <v-text-field class="" color="#114B5F" prepend-inner-icon="mdi-account" :counter="100" label="Name" required outlined></v-text-field>
        <v-text-field class="" color="#114B5F" prepend-inner-icon="mdi-account-edit" :counter="10" label="Username" required outlined></v-text-field>
        <v-textarea class="" rows="3" prepend-inner-icon="mdi-pencil" color="#114B5F" outlined style="height:;" label="Biografia"></v-textarea>
        <v-menu class="" ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto" outlined >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="date" label="Data de aniversário" prepend-inner-icon="mdi-cake-variant-outline" readonly v-bind="attrs" v-on="on" color="#114B5F" outlined ></v-text-field>
          </template>
          <v-date-picker  v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false" > Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)" > OK </v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field class="" color="#114B5F" prepend-inner-icon="mdi-map-marker-outline" :counter="10" label="Localização" required outlined></v-text-field>
        <v-text-field class="" label="Senha" prepend-inner-icon="mdi-lock" v-model="user.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" color="#114B5F" outlined></v-text-field>
        <div class="d-flex justify-center">
          <v-btn link to="/" dark class="-4" color="#114B5F"><v-icon>mdi-send</v-icon>Confirmar </v-btn>
        </div>  
      </v-form>
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