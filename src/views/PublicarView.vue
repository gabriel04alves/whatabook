<template>
  <div>
    <div>
        <h2 class="text-center text-uppercase font-weight-bold text-decoration-underline mt-10" style="color: #114B5F; ">Publicar um livro</h2>
    </div>
    <div class="d-flex justify-space-around mt-10">
        <div class="d-flex flex-column justify-center" style="width: 45rem;">
           <div ><h2 class="text-center font-weight-light" style="color: #114B5F">Inserir uma imagem da capa do livro</h2></div>
           <div class="d-flex justify-center mt-5"><v-img src="./images/1984.png" class="" style="max-width: 300px;"></v-img></div>
           <div>
           </div>
           <v-dialog v-model="dialog" persistent max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <div class="d-flex justify-center">
                  <v-btn class="d-flex mt-15" color="#23C7FF" dark tile v-bind="attrs" v-on="on" style="width: 200px">
                      <v-icon>mdi-upload</v-icon>Adicionar imagem
                  </v-btn>                
              </div>
           </template>
           <v-card class="d-flex flex-column pa-5" style="height: 350px;">
                <v-card-title class="text-h5">
                    Selecionar arquivo
                </v-card-title>
                <v-card-text v-card-text>Escolha apenas uma imagem - de preferencia a capa do livro - no formato jpeg, jpg ou png.</v-card-text>
                <v-file-input color="#114B5F" label="Escolha um arquivo" class="" style="width: 95%" counter outlined truncate-length="1"></v-file-input>
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
        <v-divider vertical color="#114B5F"></v-divider>
        <div class="d-flex flex-column justify-center" style="width: 45rem;">
            <div class="d-flex justify-center">
                <h2 class="text-center font-weight-light" style="color: #114B5F">Dados gerais</h2> 
            </div>
            <div class="d-flex justify-center mt-5 ">
              <div class="d-flex flex-column" style="gap: 4.8rem"> 
                <v-text-field style="width: 400px; height: 5px;" class="" color="#114B5F" prepend-inner-icon="mdi-book-open" :counter="100" label="Título" required outlined></v-text-field>
                <v-text-field style="width: 400px; height: 5px;" class="" color="#114B5F" prepend-inner-icon="mdi-account-edit" :counter="100" label="Autor" required outlined></v-text-field>
                <v-autocomplete style="width: 400px; height: 5px;" class="" color="#114B5F" prepend-inner-icon="mdi-bookshelf" persistent-hint v-model="select" :items="items" label="Categorias" required outlined hide-selected></v-autocomplete>
                <v-textarea class="" rows="3" prepend-inner-icon="mdi-pencil" color="#114B5F" outlined style="width: 400px; height: 5px;" label="Sinopse"></v-textarea>
                <v-text-field style="width: 400px; height: 5px;" class="mt-8" color="#114B5F" prepend-inner-icon="mdi-numeric" :counter="5" label="N de páginas" required outlined></v-text-field>
                <v-text-field style="width: 400px; height: 5px;" class="" color="#114B5F" prepend-inner-icon="mdi-barcode" :counter="10" label="ISBN" required outlined></v-text-field>
                <v-menu class="" ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto" outlined >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field style="width: 400px; height: 5px;" v-model="date" label="Data de lançamento" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" color="#114B5F" outlined ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="#FF0000" @click="menu = false" > Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)" > OK </v-btn>
                  </v-date-picker>
                </v-menu>
                <v-text-field style="width: 400px; height: 5px;" class="" color="#114B5F" prepend-inner-icon="mdi-link" :counter="2000" label="URL para comprar livro" required outlined></v-text-field>
              </div>              
            </div>
        </div>
    </div>
    <div class="d-flex justify-center" style="margin-top: 110px;">
      <v-btn dark color="#114B5F" style="width: 200px"><v-icon>mdi-send</v-icon> Publicar</v-btn>  
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        select: null,
        items: [
        'Ficção',
        'Drama',
        'Suspense',
        'Contos',
      ],
      }
    },
  }
</script>

<style>

</style>