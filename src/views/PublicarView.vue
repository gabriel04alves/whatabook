<template>
  <div>
    <div>
        <h1 class="d-flex align-self-center justify-center text-center text-uppercase font-weight-bold mt-10" style="color: #114B5F; "><v-icon class="mr-3" color="#114B5F" x-large>mdi-book-arrow-up</v-icon> Publicar um livro</h1>
    </div>
    <div class="d-flex justify-space-around mt-10">
        <div class="d-flex flex-column justify-center" style="width: 45rem;">
           <div><h2 class="text-center font-weight-light" style="color: #114B5F">Inserir uma imagem da capa do livro</h2></div>
           <div class="d-flex justify-center mt-5"><v-img :src="livro.capa_livro" class="" style="max-width: 300px; background-color:#d9d9d9"></v-img></div>

           <div>
           </div>
           <v-dialog v-model="dialog" persistent max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <div class="d-flex justify-center">
                  <v-btn class="d-flex mt-3" color="#23C7FF" dark tile v-bind="attrs" v-on="on" style="width: 200px">
                      <v-icon>mdi-upload</v-icon>Adicionar imagem
                  </v-btn>                
              </div>
           </template>
           <v-card class="d-flex flex-column pa-3" style="height: 350px;">
                <v-card-title style="color:#114B5F;" class="text-h5">
                    Selecionar capa
                </v-card-title>
                <v-card-text>Escolha apenas uma imagem, o mais nítida possível - que seja a capa do livro - no formato jpeg, jpg ou png.</v-card-text>
                <v-file-input color="#114B5F" @change="convert64" id="inputfile" label="Escolha um arquivo" class="" style="width: 95%" counter outlined truncate-length="1"></v-file-input>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <div class="justify-end">
                        <v-btn color="#FF0000" text @click="dialog = false"> Cancelar </v-btn>
                        <v-btn color="#114B5F" text @click="dialog = false"> Enviar </v-btn>
                    </div>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
        <div class="d-flex align-center mt-16">
          <v-divider vertical color="#114B5F"></v-divider>
        </div>
        <div class="d-flex flex-column justify-center" style="width: 45rem;">
            <div class="d-flex justify-center">
                <h2 class="text-center font-weight-light" style="color: #114B5F">Dados gerais</h2> 
            </div>
            <div class="d-flex justify-center mt-5 ">
              <div class="d-flex flex-column" style="gap: 4.8rem"> 
                <v-text-field style="width: 450px; height: 4px;" class="" color="#114B5F" prepend-inner-icon="mdi-book-open" :counter="100" label="Título" v-model="livro.titulo_livro" required outlined></v-text-field>
                <v-row class="d-flex justify-center pa-3" style="gap: 10px;">
                  <v-autocomplete style="width: 100px; height: 4px;" class="" color="#114B5F" prepend-inner-icon="mdi-account-edit" persistent-hint  v-model="livro.autor_livros" :items="autores" item-text="nome_autor" item-value="id" label="Autor" required outlined hide-selected></v-autocomplete>
                  <v-autocomplete style="width: 100px; height: 4px;" class="" color="#114B5F" prepend-inner-icon="mdi-bookshelf" persistent-hint v-model="livro.categoria_livro" :items="categorias" item-text="nome_categoria" item-value="id" label="Categorias" required outlined hide-selected></v-autocomplete>
                </v-row>
                <v-textarea class="" rows="3" prepend-inner-icon="mdi-pencil" color="#114B5F" outlined style="width: 450px; height: 5px;" label="Sinopse" v-model="livro.sinopse_livro"></v-textarea>
                <v-row class="d-flex justify-center align-center pa-3" style="gap: 10px;">
                  <v-text-field style="width: 85px; height: 4px;" class="mt-8" color="#114B5F" prepend-inner-icon="mdi-numeric" :counter="5" label="N° de páginas" v-model="livro.qtd_paginas" required outlined></v-text-field>
                  <v-menu class="" ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto" outlined >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field class="mt-8" style="width: 130px; height: 4px;" v-model="livro.ano_lancamento" label="Data de lançamento" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" color="#114B5F" outlined ></v-text-field>
                    </template>
                    <v-date-picker class="d-flex justify-end" v-model="livro.ano_lancamento" no-title scrollable>
                      <v-btn text color="#FF0000" @click="menu = false" > Cancel </v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)" > OK </v-btn>
                    </v-date-picker>
                  </v-menu>                  
                </v-row>
                <v-text-field style="width: 450px; height: 4px;" class="mt-2" color="#114B5F" prepend-inner-icon="mdi-barcode" :counter="10" label="ISBN" required v-model="livro.isbn" outlined></v-text-field>
                <v-text-field style="width: 450px; height: 4px;" class="" color="#114B5F" prepend-inner-icon="mdi-link" :counter="2000" label="URL para comprar livro" v-model="livro.url_compra" required outlined></v-text-field>
              </div>              
            </div>
        </div>
    </div>
    <div class="d-flex justify-center" style="margin-top: 110px;">
      <v-btn @click="publicar" large dark color="#114B5F" style="width: 200px"><v-icon>mdi-send</v-icon> Publicar</v-btn>  
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
      date: '',
      menu: '',
      dialog: false,
      select: null,
      items: [
      'Ficção',
      'Drama',
      'Suspense',
      'Contos',
    ],
    livro:{},
    autores: [],
    categorias: []
    }
  },
  mounted(){
    this.getAutores()
    this.getCategorias()
  },
  methods:{
    async getAutores(){
      const {data} = await axios.get('/api/autor/')
      this.autores = data
    },
    async getCategorias(){
      const {data} = await axios.get('/api/categorias/')
      this.categorias = data
    },
    async publicar(){
      console.log(this.livro)
      await axios.post('/api/livro/',
      {
        ano_lancamento: this.livro.ano_lancamento,
        autor_livros: [this.livro.autor_livros],
        categoria_livro: [this.livro.categoria_livro],
        capa_livro: this.livro.capa_livro,
        isbn: this.livro.isbn,
        qtd_paginas: this.livro.qtd_paginas,
        sinopse_livro: this.livro.sinopse_livro,
        titulo_livro: this.livro.titulo_livro,
        url_compra: this.livro.url_compra,
      })
    },
    convert64(){
      let file = document.getElementById('inputfile').files[0]
      let _this = this
      var reader = new FileReader()
      reader.onload = () =>{
        _this.livro.capa_livro = reader.result  
      }
      reader.readAsDataURL(file);
    },
  }
}
</script>

<style>

</style>