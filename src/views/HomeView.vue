<template>
  <div style="">
    <v-row style="background: linear-gradient(180deg, #114B5F 0%, rgba(217, 217, 217, 0) 100%);" class="pa-16 pt-8 d-flex justify-center" >
      <v-col> 
        <div class=" d-flex justify-end pt-5 pr-16" style="cursor: pointer;">
          <v-img src="../assets/images/emalta.png" max-width="270px"></v-img>
        </div>
      </v-col>
      <v-col class="col-8 d-flex align-self-center " color="primary" style="color: #FFF; cursor: pointer;">
        <div style="padding-right: 10%;">
          <v-row>
            <v-main class="text-center font-weight-black pt-2" style="color: #FFF; ">A revolução dos bichos: Um conto de fadas | </v-main>
          </v-row>
          <v-row class="text-justify">
            Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. 
          </v-row>
          <v-row class="ma-5" style="display: flex; justify-content: center;">
            <a href="/autor" class="" style="color: #FFF; text-decoration: none;"><h4 class="text-end">Autor</h4></a>
            <v-divider class="ma-2" vertical color="#FFF"></v-divider>
            <a href="/" class="" style="color: #FFF; text-decoration: none;"><h4 class="text-end">Editora</h4></a>
          </v-row>
          <v-row class="" style="display: flex; justify-content: center;"> 
            <v-btn plain small dark link to="/livro">
              <v-icon>mdi-information-outline</v-icon>
              mais
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-row v-for="(item,index) in categorias" :key="index" class="pt-5 pb-5">
        <v-sheet elevation="9" width="calc(135rem - 200px)" dark color="#114B5F">
          <h3 class="pt-5 text-uppercase font-weight-light" style="padding-left: 5%;">{{ item.slogan }}</h3>
          <v-slide-group class="pt-2 pb-4 pr-4 pl-4" show-arrows color="#114B5F">
              <v-slide-item v-for="(imagem,index) in items" :key="index" v-show="imagem.categoria == item.title">
                <div  class="ma-4" style="height: 100%; width: 8.1rem;" >
                  <v-row class="fill-height" justify="center" >
                    <img id="img" class="ma-2" :src="imagem.url" height="200" width="140" to="/livro">
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
      {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Ficção"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Ficção"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Ficção"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Ficção"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Ficção"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Ficção"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Ficção"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Ficção"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Ficção"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Ficção"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Ficção"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Ficção"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Ficção"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Ficção"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Ficção"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Ficção"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Ficção"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Ficção"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Ficção"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Ficção"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Ficção"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Ficção"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Ficção"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Ficção"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Ficção"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Ficção"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Ficção"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Ficção"},
        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Drama"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Drama"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Drama"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Drama"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Drama"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Drama"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Drama"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Drama"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Drama"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Drama"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Drama"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Drama"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Drama"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Drama"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Drama"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Drama"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Drama"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Drama"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Drama"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Drama"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Drama"},
        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Drama"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Drama"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Drama"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Drama"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Drama"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Drama"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Drama"},
        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Romance"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Romance"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Romance"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Romance"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Romance"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Romance"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Romance"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Romance"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Romance"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Romance"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Romance"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Romance"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Romance"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Romance"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Romance"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Romance"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Romance"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Romance"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Romance"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Romance"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Romance"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Romance"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Romance"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Romance"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Romance"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Romance"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Romance"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Romance"},
        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Sugestoes"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Sugestoes"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Sugestoes"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Sugestoes"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Sugestoes"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Sugestoes"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Sugestoes"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Sugestoes"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Sugestoes"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Sugestoes"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Sugestoes"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Sugestoes"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Sugestoes"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Sugestoes"},        {name: "buraco", url: require("../assets/images/buraco-negro.png"), categoria: "Sugestoes"},
        {name: "1984", url: require("../assets/images/1984.png"), categoria: "Sugestoes"},
        {name: "brascubas", url: require("../assets/images/brascubas.png"), categoria: "Sugestoes"},
        {name: "casca-noz", url: require("../assets/images/casca-noz.png"), categoria: "Sugestoes"},
        {name: "emalta", url: require("../assets/images/emalta.png"), categoria: "Sugestoes"},
        {name: "historia-ciencia", url: require("../assets/images/historia-ciencia.png"), categoria: "Sugestoes"},
        {name: "homo-sapiens", url: require("../assets/images/homo-sapiens.png"), categoria: "Sugestoes"},

      ],
      categorias: [
        {title: "Sugestoes", slogan: "Para você", desc: "genero textual que tem como caracteristica..."},
        {title: "Romance", slogan: "Os melhores romances", desc: "genero textual que tem como caracteristica..."},
        {title: "Ficção", slogan: "FICÇÕES PARA LER EM UM DIA", desc: "genero textual que tem como caracteristica..."},
        {title: "Drama", slogan: "Dramas SUGERIDOS", desc: "genero textual que tem como caracteristica..."},
      ]
    }),
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
      #img {
        cursor: pointer;
        transition: .2s;
    }
    #img:hover {
        transform: scale(1.05);
    }
</style>