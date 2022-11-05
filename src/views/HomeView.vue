<template>
  <div style="">
    <div class="d-flex justify-end ma-5 flex-row" style="position: fixed; " color="#fff"> 
    </div>
    <v-row style="background: linear-gradient( 180deg, #114b5f 25%, rgba(217, 217, 217, 0) 100% );" class="pa-16 pt-8 d-flex justify-center">
      <v-col>
        <div data-aos="zoom-in-up" class="d-flex justify-end pt-5 pr-16" style="">
          <v-img class="rounded" elevation="9" src="../assets/images/emalta.png" @click="irParaLivro(items[4])" max-width="270px"></v-img>
        </div>
      </v-col>
      <v-col class="col-8 d-flex align-self-center" color="primary" style="color: #fff">
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
            <a data-aos="fade-right" href="/autor" class="" style="color: #fff; text-decoration: none" ><h4 class="text-end">Autor</h4></a>
            <v-divider class="ma-2" vertical color="#FFF"></v-divider>
            <a data-aos="fade-left" href="/editora" class="" style="color: #fff; text-decoration: none"><h4 class="text-end">Editora</h4></a>
          </v-row>
          <v-row data-aos="fade-up" class="" style="display: flex; justify-content: center">
            <v-btn plain small dark link to="/livro">
              <v-icon>mdi-information-outline</v-icon>
              mais
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-row data-aos="zoom-in-up" v-for="(item, index) in categorias" :key="index" class="pt-5 pb-5" >
        <v-sheet elevation="9" width="calc(135rem - 200px)" dark color="#114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%">
            {{ item.sloganCategoria }}
          </h3>
          <v-slide-group class="pt-2 pb-4 pr-4 pl-4" show-arrows color="#114B5F" >
            <v-slide-item v-for="(imagem, index) in livros" :key="index" v-show="imagem. categoria == item.nomeCategoria">
              <div class="ma-4" style="height: 100%; width: 8.1rem">
                <v-row class="fill-height" justify="center">
                  <img @click="irParaLivro(imagem)" id="img" class="rounded ma-2" :src="imagem.imagemLivro" height="200" width="140" />
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
import { mapActions, mapState } from 'vuex'
import livros from '../api/livro'

export default {
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },

  data: () => ({

    livros: [
      {
        nomeLivro: "Buracos Negros",
        imagemLivro: require("../assets/images/buraco-negro.png"),
        urlCompra: "https://www.amazon.com.br/Buracos-Negros-Stephen-Hawking/dp/8551000985/ref=sr_1_1_sspa?keywords=buracos+negros&qid=1664816964&qu=eyJxc2MiOiIyLjY0IiwicXNhIjoiMS44MCIsInFzcCI6IjEuMzUifQ%3D%3D&sprefix=buracos%2Caps%2C390&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWElXSEFDVUpFMkM1JmVuY3J5cHRlZElkPUEwNDcwMzMwMktCWktVNjFHV1E1RSZlbmNyeXB0ZWRBZElkPUEwMzM1MDEwMVQ2RFVPOURWVUIySiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        categoria: "Sugestoes",
        link: "/livro",
        autor: "Stephen Hawking",
        numPaginas: 150,
        isbn: 152300458,
        edicaoLivro: "10 janeiro 2007",
        editora: "Companhia das Letras",
        idiomaLivro: "Portugues",
        descLivro: "1 CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO CONTEUDO",
        resenha: [
          {
          descResenha: "bom livro",
          tituloResenha: "gostei do livro",
          estrelaResenha: 3, 
          }
        ],
      },
      {
        nomeLivro: "1984",
        imagemLivro: require("../assets/images/1984.png"),
        urlCompra: "https://www.amazon.com.br/Buracos-Negros-Stephen-Hawking/dp/8551000985/ref=sr_1_1_sspa?keywords=buracos+negros&qid=1664816964&qu=eyJxc2MiOiIyLjY0IiwicXNhIjoiMS44MCIsInFzcCI6IjEuMzUifQ%3D%3D&sprefix=buracos%2Caps%2C390&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWElXSEFDVUpFMkM1JmVuY3J5cHRlZElkPUEwNDcwMzMwMktCWktVNjFHV1E1RSZlbmNyeXB0ZWRBZElkPUEwMzM1MDEwMVQ2RFVPOURWVUIySiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        categoria: "Sugestoes",
        link: "/livro",
        autor: "George Orwell",
        numPaginas: 170,
        isbn: 546454,
        edicaoLivro: "10 janeiro 2007",
        editora: "Companhia das Letras",
        idiomaLivro: "Portugues",
        descLivro: "descrição descrição descrição descrição descrição descrição ",
        resenha: [
          {
          descResenha: "excelente",
          tituloResenha: "show de bola",
          estrelaResenha: 4, 
          }
        ],
      },
    ],
    categorias: [
      {
        nomeCategoria: "Sugestoes",
        link: "/livro",
        sloganCategoria: "Para você",
        descCategoria: "genero genero.",
      },
    ],
    editoras: [
      {
        nomeEditora: "",
        descEditora: "",
        localEditora: "",
      }
    ],
  }),
  created() {
    this.getLivros();
  },
  methods: {
    async getLivros() {
      this.livros = await livros.get('/api/livro')
    },
    irParaLivro(imagem) {
      this.$router.push({
        name: `livro`,
        params: { livro: imagem, id: imagem.nomeLivro },
      });
    },
    ...mapActions('auth', ['logout'])
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
