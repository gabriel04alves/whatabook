<template>
  <div>
    <v-row>
      <v-col cols="4">
        <div class="pa-16 d-flex justify-center" style="">
          <img width="350" :src="livro.capa_livro" alt="" />
        </div>
      </v-col>
      <v-col class="" cols="8">
        <div class="ma-16" style="color: #114b5f">
          <h2 class="text-center font-weight-bold">
            {{ livro.titulo_livro }}
          </h2>
          <div class="d-flex justify-center">
            <router-link to="" tag="button"
              ><h3 class="text-center font-weight-light">
                {{ livro.autor_livros[0].nome_autor }}
              </h3></router-link
            >
          </div>
          <h3 class="text-justify font-weight-regular ma-10">
            {{ livro.sinopse_livro }}
          </h3>
        </div>
        <div class="d-flex justify-center align-end" style="gap: 5%">
          <v-btn icon large color="#114B5F">
            <v-icon large>mdi-share-variant-outline</v-icon></v-btn
          >
          <v-divider vertical color="#114B5F"></v-divider>
          <v-btn icon large color="#114B5F">
            <v-icon large>mdi-bookmark</v-icon></v-btn
          >
          <v-divider vertical color="#114B5F"></v-divider>
          <v-btn icon large color="#114B5F">
            <v-icon large>mdi-cart-arrow-down</v-icon></v-btn>
          <v-divider vertical color="#114B5F"></v-divider>
          <v-dialog v-model="dialog" persistent max-width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon large color="#114B5F">
                <v-icon large>mdi-comment-edit</v-icon>
              </v-btn>
            </template>
            <v-card>
              <h3 class="text-uppercase text-center text-decoration-underline pt-3 pb-3" style="color: #114b5f">
                Publique uma resenha:
              </h3>
              <div class="ma-5">
                <v-text-field label="Título" outlined color="#114B5F" v-model="resenha.titulo_resenha" ></v-text-field>
                <v-textarea color="#114B5F" outlined name="input-7-4" label="Resenha" v-model="resenha.desc_resenha" ></v-textarea>
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star"  half-icon="mdi-star-half-full" hover length="5"  size="25" v-model="resenha.nota_resenha" ref="rating"
                ></v-rating>
              </div>

              <v-card-actions>
                <div v-if="erro" style="color: #FF0000">Ocorreu um erro</div>
                <v-spacer></v-spacer>
                <v-btn color="#FF0000" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn style="color: #114b5f"  color="#CAF1FF" text @click="adicionarResenha"
                >
                  Enviar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <div elevation="10" class="d-flex justify-center" style="color: #114b5f" >
          <v-card class="" style="width: 30rem; height: 24rem; color: #114b5f" color="#CAF1FF" >
            <h3 class="text-center text-uppercase text-decoration-underline pa-6">
              Detalhes
            </h3>
            <div class="d-flex justify-center">
              <div class="d-flex flex-column" style="gap: 0.7rem">
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F"
                    >mdi-account-edit-outline</v-icon
                  ><h3 class="font-weight-regular" style="color: #114b5f; cursor: pointer" @click="irParaAutor(livro.autor_livros[0].id)">
                      {{ livro.autor_livros[0].nome_autor }}
                    </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-book-open-page-variant-outline</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    {{ livro.qtd_paginas }}
                  </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-barcode</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    978-3-16-148410-0
                  </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-bookshelf</v-icon>
                  <router-link to="/editora" tag="button"
                    ><h3 class="font-weight-regular" style="color: #114b5f">
                      {{ livro.editora_livro.nome_editora }}
                    </h3></router-link>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-calendar</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    1ª Edição
                  </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-translate</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    Português
                  </h3>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div
          elevation="10"
          class="d-flex justify-center mt-10"
          style="color: #114b5f"
        >
          <v-card
            class=""
            style="width: 30rem; height: 20rem; color: #114b5f"
            color="#CAF1FF"
          >
            <h3
              class="text-center text-uppercase text-decoration-underline pa-6"
            >
              Avaliações
            </h3>
            <div class="pa-5">
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="1.5"></v-rating>
                <v-progress-linear class="rounded" :value="power1" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">{{power1}}%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="2.5"></v-rating>
                <v-progress-linear class="rounded" :value="power2" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">{{power2}}%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="3.5"
                ></v-rating>
                <v-progress-linear class="rounded" :value="power3" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">{{power3}}%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="4.5"
                ></v-rating>
                <v-progress-linear class="rounded" :value="power4" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">{{power4}}%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="5.5"></v-rating>
                <v-progress-linear class="rounded" :value="power5" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">{{power5}}%</h4>
              </v-row>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col cols="8">
        <div class="justify-center" style="">
          <h3 class="text-center text-uppercase text-decoration-undersline mb-0"
            style="color: #114b5f">
            Resenhas da comunidade
          </h3>
          <div class="d-flex justify-center">
            <div data-aos="zoom-up" class="d-flex justify-center flex-column">
              <v-card class="rounded-lg ma-5" elevation="4" color="#114B5F" style="width: 35rem" v-for="(resenha, index) in resenhas.results" :key="index">
                <v-col class="d-flex align-center">
                  <v-avatar v-if="!resenha.user_resenha.midia" class="mr-5" color="#FFF" size="50">GA</v-avatar>
                  <v-avatar v-else class="mr-5" color="#FFF" size="50">
                    <img :src="resenha.user_resenha.midia ? resenha.user_resenha.midia.imagem : '' " alt="">
                  </v-avatar>
                  <h4 class="font-weight-light" style="color: #fff">
                    {{resenha.user_resenha.username}}
                  </h4>
                  <v-spacer></v-spacer>
                  <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="resenha.nota_resenha"></v-rating>
                </v-col>
                <v-col class="d-flex justify-center">
                  <v-card class="rounded-lg" style="width: 30rem">
                    <p class="text-left font-weight-bold ma-3"> {{ resenha.titulo_resenha }} </p>
                    <p class="text-left ma-3">{{ resenha.desc_resenha }}</p>
                  </v-card>
                </v-col>
              </v-card>
              <div class="d-flex justify-center" style="gap: 10px">
                <v-btn color="#caf1ff" v-if="resenhas.previous" @click="page--">Anterior</v-btn>
                <v-card v-if="resenhas.count > 3" width="30px" class="d-flex align-center justify-center" style="background-color: #114b5f; color: white; font-size: 20px;">{{page}}</v-card>
                <v-btn color="#caf1ff" v-if="resenhas.next" @click="page++">Próximo</v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios"
export default {
  data: () => ({
    power1: 0,
    power2: 0,
    power3: 0,
    power4: 0,
    power5: 0,
    dialog: false,
    resenha: {},
    livro: {},
    erro: false,
    resenhas: [],
    page: 1,
  }),
  computed: {
    ...mapState(["autores"]),
    ...mapState('usuarioLogado', ['usuarioLogado'])
  },
  watch:{
    page(){
      this.getResenhas()
    }
  },
  methods: {
    async adicionarResenha() {
      try{
        await axios.post('/api/resenha/', this.resenha)
        this.resenha.user_resenha = this.usuarioLogado.id
        this.resenha.livro_resenha = this.livro.id
        this.dialog = false;
        this.getLivro().then(()=>{
          this.porcentagens()
        })
      }catch(e){
        console.log(e)
        this.erro = true
      }
    },
    irParaAutor(idAutor) {
      this.$router.push({ name: "autor", params: { id: idAutor } })
    },
    async getLivro(){
      const {data} = await axios.get(`/api/livro/${this.$route.params.id}/`)
      this.livro = data
      this.getResenhas()
      console.log(this.livro)
    },
    porcentagens(){
      let notas = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      }
      for(let resenha of this.livro.resenha){
        notas[resenha.nota_resenha]++
      }
      let soma = notas[1] + notas[2] + notas[3] + notas[4] + notas[5]
      if(soma){
        this.power1 = ((notas[1]/soma) * 100).toFixed(0)
        this.power2 = ((notas[2]/soma) * 100).toFixed(0)
        this.power3 = ((notas[3]/soma) * 100).toFixed(0)
        this.power4 = ((notas[4]/soma) * 100).toFixed(0)
        this.power5 = ((notas[5]/soma) * 100).toFixed(0)
      }
    },
    async getResenhas(){
      const {data} = await axios.get(`/api/resenha/?livro=${this.livro.id}&page=${this.page}`)
      this.resenhas = data
    }
  },
  mounted(){
    this.getLivro().then(()=>{
      this.porcentagens()
      this.resenha.user_resenha = this.usuarioLogado.id
      this.resenha.livro_resenha = this.livro.id
    })
  }
};
</script>

<style></style>
