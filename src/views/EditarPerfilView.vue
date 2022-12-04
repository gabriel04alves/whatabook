<template>
  <div
    class="d-flex justify-center align-center"
    style="margin-top: 5%; gap: 5%"
  >
    <div>
      <v-col>
        <v-avatar
          color="#667372"
          style="cursor: pointer"
          @click="clicar"
          size="200"
        >
          <img :src="midia ? midia.imagem : ''" draggable="false" alt="" />
        </v-avatar>
        <p class="text-center mt-3">Foto de perfil</p>
        <input
          id="inputfile"
          @change="convert64"
          type="file"
          style="display: none"
        />
      </v-col>
    </div>
    <v-divider color="114B5F" vertical class="ma-10"></v-divider>
    <div>
      <v-form ref="form">
        <v-text-field
          class=""
          color="#114B5F"
          prepend-inner-icon="mdi-account-edit"
          :counter="10"
          label="Nome de usuário"
          required
          outlined
          v-model="usuarioAlterado.username"
        ></v-text-field>
        <v-textarea
          class=""
          rows="3"
          prepend-inner-icon="mdi-pencil"
          color="#114B5F"
          outlined
          style="height: "
          label="Biografia"
          v-model="usuarioAlterado.biografia"
        ></v-textarea>
        <v-menu
          class=""
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
          outlined
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="usuarioAlterado.data_nascimento"
              label="Data de aniversário"
              prepend-inner-icon="mdi-cake-variant-outline"
              readonly
              v-bind="attrs"
              v-on="on"
              color="#114B5F"
              outlined
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="usuarioAlterado.data_nascimento"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(usuarioAlterado.data_nascimento)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field
          class=""
          color="#114B5F"
          prepend-inner-icon="mdi-map-marker-outline"
          :counter="50"
          label="Localização"
          required
          outlined
          v-model="usuarioAlterado.localizacao"
        ></v-text-field>
        <v-text-field
          class=""
          label="Alterar senha"
          prepend-inner-icon="mdi-lock"
          v-model="usuarioAlterado.password"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
          color="#114B5F"
          outlined
        ></v-text-field>
        <div class="d-flex justify-center">
          <v-btn link dark class="-4" color="#114B5F" @click="patchUser"
            ><v-icon>mdi-send</v-icon>Confirmar
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState("usuarioLogado", ["usuarioLogado"]),
  },
  data() {
    return {
      usuarioAlterado: {},
      user: {},
      date: "",
      menu: "",
      show: false,
      errorLogin: false,
      midia: {
        imagem: "",
      },
    };
  },
  mounted() {
    this.usuarioAlterado = {
      username: this.usuarioLogado.username,
      email: this.usuarioLogado.email,
      biografia: this.usuarioLogado.biografia,
      data_nascimento: this.usuarioLogado.data_nascimento,
      localizacao: this.usuarioLogado.localizacao,
    };
    if (this.usuarioLogado.midia) {
      this.midia = this.usuarioLogado.midia;
    }
    // console.log(this.usuarioLogado.id);
  },
  methods: {
    ...mapActions("usuarioLogado", ["getDadosUser"]),
    clicar() {
      document.getElementById("inputfile").click();
    },
    convert64() {
      let file = document.getElementById("inputfile").files[0];
      let _this = this;
      var reader = new FileReader();
      reader.onload = () => {
        _this.midia.imagem = reader.result;
      };
      reader.readAsDataURL(file);
    },
    async patchUser() {
      this.getDadosUser();
      
      await axios.patch(
        `/api/user/${this.usuarioLogado.id}/`,
        this.usuarioAlterado
      );
      if (this.usuarioLogado.midia) {
        if(this.usuarioLogado.midia.imagem != this.midia.imagem){
          await axios.patch(
            `/api/midia/${this.usuarioLogado.midia.id}/`,
            this.midia
          );
        }
      } else {
        await axios.post(`/api/midia/`, {
          imagem: this.midia.imagem,
          iduser: this.usuarioLogado.id,
        });
      }
      this.getDadosUser();
      this.$router.push({ path: "/perfil" });
    },
  },
};
</script>

<style>
/* STYLE DEFAULT */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700;800&display=swap");

::-webkit-scrollbar {
  display: none;
}
* {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
/* ............. */
</style>