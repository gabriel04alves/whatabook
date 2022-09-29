<template>
  <div style="">
    <v-row
      style="
        background: linear-gradient(
          180deg,
          #114b5f 0%,
          rgba(217, 217, 217, 0) 100%
        );
      "
      class="pa-16 pt-8 d-flex justify-center"
    >
      <v-col>
        <div
          data-aos="zoom-in-up"
          class="d-flex justify-end pt-5 pr-16"
          style=""
        >
          <v-img
            src="../assets/images/emalta.png"
            @click="irParaLivro(items[4])"
            max-width="270px"
          ></v-img>
        </div>
      </v-col>
      <v-col
        class="col-8 d-flex align-self-center"
        color="primary"
        style="color: #fff"
      >
        <div style="padding-right: 10%">
          <v-row data-aos="fade-down" class="d-flex justify-center mb-3">
            <h3 class="text-center font-weight-black pt-2" style="color: #fff">
              A revolução dos bichos: Um conto de fadas
            </h3>
          </v-row>
          <v-row data-aos="zoom-in" class="text-justify">
            Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois
            de ter sido rejeitada por várias editoras, essa pequena narrativa
            causou desconforto ao satirizar ferozmente a ditadura stalinista
            numa época em que os soviéticos ainda eram aliados do Ocidente na
            luta contra o eixo nazifascista. De fato, são claras as referências:
            o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria
            Trotsky, e os eventos políticos - expurgos, instituição de um estado
            policial, deturpação tendenciosa da História - mimetizam os que
            estavam em curso na União Soviética. Com o acirramento da Guerra
            Fria, as mesmas razões que causaram constrangimento na época de sua
            publicação levaram A revolução dos bichos a ser amplamente usada
            pelo Ocidente nas décadas seguintes como arma ideológica contra o
            comunismo.
          </v-row>
          <v-row class="ma-5" style="display: flex; justify-content: center">
            <a
              data-aos="fade-right"
              href="/autor"
              class=""
              style="color: #fff; text-decoration: none"
              ><h4 class="text-end">Autor</h4></a
            >
            <v-divider class="ma-2" vertical color="#FFF"></v-divider>
            <a
              data-aos="fade-left"
              href="/editora"
              class=""
              style="color: #fff; text-decoration: none"
              ><h4 class="text-end">Editora</h4></a
            >
          </v-row>
          <v-row
            data-aos="fade-up"
            class=""
            style="display: flex; justify-content: center"
          >
            <v-btn plain small dark link to="/livro">
              <v-icon>mdi-information-outline</v-icon>
              mais
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-row
        data-aos="zoom-in-up"
        v-for="(item, index) in categorias"
        :key="index"
        class="pt-5 pb-5"
      >
        <v-sheet
          elevation="9"
          width="calc(135rem - 200px)"
          dark
          color="#114B5F"
        >
          <h3
            class="pt-5 text-uppercase font-weight-light"
            style="padding-left: 5%"
          >
            {{ item.slogan }}
          </h3>
          <v-slide-group
            class="pt-2 pb-4 pr-4 pl-4"
            show-arrows
            color="#114B5F"
          >
            <v-slide-item
              v-for="(imagem, index) in items"
              :key="index"
              v-show="imagem.categoria == item.title"
            >
              <div class="ma-4" style="height: 100%; width: 8.1rem">
                <v-row class="fill-height" justify="center">
                  <img
                    @click="irParaLivro(imagem)"
                    id="img"
                    class="ma-2"
                    :src="imagem.url"
                    height="200"
                    width="140"
                  />
                </v-row>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "buraco",
        url: require("../assets/images/buraco-negro.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "fodase CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "1984",
        url: require("../assets/images/1984.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "merda CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "brascubas",
        url: require("../assets/images/brascubas.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "coco CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "casca-noz",
        url: require("../assets/images/casca-noz.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "bosta CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "emalta",
        url: require("../assets/images/emalta.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "cu CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "historia-ciencia",
        url: require("../assets/images/historia-ciencia.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "esterco CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "homo-sapiens",
        url: require("../assets/images/homo-sapiens.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "buraco",
        url: require("../assets/images/buraco-negro.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "1984",
        url: require("../assets/images/1984.png"),
        categoria: "Ficção",
        link: "/livro",
        desc: "CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
      },
      {
        name: "brascubas",
        url: require("../assets/images/brascubas.png"),
        categoria: "Ficção",
        desc: "CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
        link: "/livro",
      },
      {
        name: "casca-noz",
        url: require("../assets/images/casca-noz.png"),
        categoria: "Ficção",
        desc: "CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
        link: "/livro",
      },
      {
        name: "emalta",
        url: require("../assets/images/emalta.png"),
        categoria: "Ficção",
        desc: "CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
        link: "/livro",
      },
    ],
    categorias: [
      {
        title: "Sugestoes",
        link: "/livro",
        slogan: "Para você",
        desc: "genero textual que tem como caracteristica...",
      },
      {
        title: "Romance",
        link: "/livro",
        slogan: "Os melhores romances",
        desc: "genero textual que tem como caracteristica...",
      },
      {
        title: "Ficção",
        link: "/livro",
        slogan: "FICÇÕES PARA LER EM UM DIA",
        desc: "genero textual que tem como caracteristica...",
      },
      {
        title: "Drama",
        link: "/livro",
        slogan: "Dramas SUGERIDOS",
        desc: "genero textual que tem como caracteristica...",
      },
    ],
  }),
  methods: {
    irParaLivro(imagem) {
      this.$router.push({
        name: `livro`,
        params: { livro: imagem, id: imagem.name },
      });
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
#img {
  cursor: pointer;
  transition: 0.2s;
}
#img:hover {
  transform: scale(1.05);
}
</style>
