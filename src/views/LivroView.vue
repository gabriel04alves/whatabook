<template>
  <div>
    <v-row>
      <v-col cols="4">
        <div class="pa-16 d-flex justify-center" style="">
          <img width="350" :src="livro.imagemLivro" alt="" />
        </div>
      </v-col>
      <v-col class="" cols="8">
        <div class="ma-16" style="color: #114b5f">
          <h2 class="text-center font-weight-bold">
            {{ livro.nomeLivro }}
          </h2>
          <div class="d-flex justify-center">
            <router-link to="" tag="button"
              ><h3 class="text-center font-weight-light">
                {{ livro.autor }}
              </h3></router-link
            >
          </div>
          <h3 class="text-justify font-weight-regular ma-10">
            {{ livro.descLivro }}
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
                <v-text-field label="Título" outlined color="#114B5F" v-model="novoTitulo" ></v-text-field>
                <v-textarea color="#114B5F" outlined name="input-7-4" label="Resenha" v-model="novaResenha" ></v-textarea>
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star"  half-icon="mdi-star-half-full" hover length="5"  size="25" v-model="rating" ref="rating"
                ></v-rating>
              </div>

              <v-card-actions>
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
                  >
                  <router-link to="/autor" tag="button"
                    ><h3 class="font-weight-regular" style="color: #114b5f">
                      {{ livro.autor }}
                    </h3></router-link
                  >
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-book-open-page-variant-outline</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    {{ livro.numPaginas }}
                  </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-barcode</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    {{ livro.isbn }}
                  </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-bookshelf</v-icon>
                  <router-link to="/editora" tag="button"
                    ><h3 class="font-weight-regular" style="color: #114b5f">
                      {{ livro.editora }}
                    </h3></router-link>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-calendar</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    1ª Edição ({{ livro.edicaoLivro }})
                  </h3>
                </div>
                <div class="d-flex flex-row align-center" style="gap: 1rem">
                  <v-icon large color="#114B5F">mdi-translate</v-icon>
                  <h3 class="font-weight-regular" style="color: #114b5f">
                    {{ livro.idiomaLivro }}
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
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" value="1.5"></v-rating>
                <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">75%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" value="2.5"></v-rating>
                <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">75%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" value="3.5"
                ></v-rating>
                <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">75%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" value="4.5"
                ></v-rating>
                <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">75%</h4>
              </v-row>
              <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" value="5.5"></v-rating>
                <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px" ></v-progress-linear>
                <h4 class="text-center" style="color: #114b5f">75%</h4>
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
              <v-card class="rounded-lg ma-5" elevation="4" color="#114B5F" style="width: 35rem" v-for="(comentario, index) in livro.resenha" :key="index">
                <v-col class="d-flex align-center">
                  <v-avatar class="mr-5" color="#FFF" size="50">GA</v-avatar>
                  <h4 class="font-weight-light" style="color: #fff">
                    username
                  </h4>
                  <v-spacer></v-spacer>
                  <v-rating background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="5" readonly size="25" :value="comentario.estrelaResenha"></v-rating>
                </v-col>
                <v-col class="d-flex justify-center">
                  <v-card class="rounded-lg" style="width: 30rem">
                    <p class="text-left font-weight-bold ma-3"> {{ comentario.tituloResenha }} </p>
                    <p class="text-left ma-3">{{ comentario.descResenha }}</p>
                  </v-card>
                </v-col>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: [ "livro"],
  data: () => ({
    power: 75,
    dialog: false,
    novoTitulo: "",
    novaResenha: "",
  }),
  methods: {
    adicionarResenha() {
      this.resenha.push({
        descricao: this.novaResenha,
        titulo: this.novoTitulo,
        estrela: this.rating,
      });
      this.dialog = false;
    },
  },
};
</script>

<style></style>
