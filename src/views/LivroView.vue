<template>
  <div>
    <v-row>
        <v-col cols="4">
            <div class="pa-16 d-flex justify-center" style="">
                    <img width="" src="../assets/images/emalta.png" alt="">
            </div>
        </v-col>
        <v-col class="" cols="8">
            <div class="ma-16" style="color: #114B5F;">
                <h2 class="text-center font-weight-bold">A revolução dos bichos: Um conto de fadas</h2>
                <h2 class="text-center font-weight-light">por George Orwell</h2>
                <h3 class="text-justify font-weight-regular ma-10">Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo.</h3>
            </div>
            <div class="d-flex justify-center align-end" style="gap: 5%;">
                <v-btn icon large color="#114B5F"> <v-icon large>mdi-share-variant-outline</v-icon></v-btn>
                <v-divider vertical color="#114B5F"></v-divider>
                <v-btn icon large color="#114B5F"> <v-icon large>mdi-bookmark</v-icon></v-btn>
                <v-divider vertical color="#114B5F"></v-divider>
                <v-btn icon large color="#114B5F"> <v-icon large>mdi-cart-arrow-down</v-icon></v-btn>
                <v-divider vertical color="#114B5F"></v-divider>
                <v-dialog v-model="dialog" persistent max-width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" icon large color="#114B5F"> <v-icon large>mdi-comment-edit</v-icon> </v-btn>
                    </template>
                    <v-card>
                        <h3 class="text-uppercase text-center text-decoration-underline pt-3 pb-3" style="color: #114B5F;"> Publique uma resenha:</h3>
                        <div class="ma-5">
                            <v-text-field label="Título" outlined color="#114B5F"></v-text-field>
                                    <v-textarea color="#114B5F" outlined name="input-7-4" label="Resenha"></v-textarea>
                        </div>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#FF0000" text @click="dialog = false"> Cancelar </v-btn>
                        <v-btn style="color: #114B5F;" color="#CAF1FF" text @click="dialog = false"> Enviar </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="4">
            <div elevation="10" class="d-flex justify-center" style=" color: #114B5F;">
                <v-card class="" style="width: 30rem; height: 20rem; color: #114B5F;" color="#CAF1FF" >
                    <h3 class="text-center text-uppercase text-decoration-underline pa-6">Avaliações</h3>
                    <div class="pa-5">
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="1.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="2.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="3.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="4.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="5.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                    </div>
                </v-card>
            </div>
        </v-col>
        <v-col  cols="8">
            <div style="">
                <h3 class="text-center text-uppercase text-decoration-underline mb-0" style="color: #114B5F;">Resenhas da comunidade</h3>
                <div class="d-flex justify-center flex-column" >
                    <div class="d-flex justify-center">
                        <v-card class="rounded-lg ma-5" elevation="4" color="#114B5F" style="width: 35rem;">
                            <v-col class=" d-flex align-center">
                                <v-avatar class="mr-5" color="#FFF" size="50">GA</v-avatar>
                                <h4 class="font-weight-light" style="color: #FFF;">Username</h4>
                                <v-spacer></v-spacer>
                                <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                                hover length="5" readonly size="25" value="4.5"></v-rating> 
                            </v-col>
                            <v-col class="d-flex justify-center">
                                <v-card class="rounded-lg" style="width: 30rem;">
                                    <p class="text-left ma-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id neque vel justo tincidunt varius id et est. Cras sit amet turpis et risus ultricies vestibulum et eu dui. Sed pretium leo in fermentum consectetur. Donec id tincidunt purus.  </p>
                                </v-card>                        
                            </v-col>
                        </v-card>                        
                    </div>
                    <div class="d-flex justify-center">
                        <v-card class="rounded-lg ma-5" elevation="4" color="#114B5F" style="width: 35rem;">
                            <v-col class=" d-flex align-center">
                                <v-avatar class="mr-5" color="#FFF" size="50">JV</v-avatar>
                                <h4 class="font-weight-light" style="color: #FFF;">Username</h4>
                                <v-spacer></v-spacer>
                                <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                                hover length="5" readonly size="25" value="4.5"></v-rating> 
                            </v-col>
                            <v-col class="d-flex justify-center">
                                <v-card class="rounded-lg" style="width: 30rem;">
                                    <p class="text-left ma-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id neque vel justo tincidunt varius id et est. Cras sit amet turpis et risus ultricies vestibulum et eu dui. Sed pretium leo in fermentum consectetur. Donec id tincidunt purus.  </p>
                                </v-card>                        
                            </v-col>
                        </v-card>                        
                    </div>
                    <div class="d-flex justify-center">
                        <v-card class="rounded-lg ma-5" elevation="4" color="#114B5F" style="width: 35rem;">
                            <v-col class=" d-flex align-center">
                                <v-avatar class="mr-5" color="#FFF" size="50">YM</v-avatar>
                                <h4 class="font-weight-light" style="color: #FFF;">Username</h4>
                                <v-spacer></v-spacer>
                                <v-rating class="" style="" background-color="#F1C40F" color="#F1C40F" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                                hover length="5" readonly size="25" value="4.5"></v-rating> 
                            </v-col>
                            <v-col class="d-flex justify-center">
                                <v-card class="rounded-lg" style="width: 30rem;">
                                    <p class="text-left ma-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id neque vel justo tincidunt varius id et est. Cras sit amet turpis et risus ultricies vestibulum et eu dui. Sed pretium leo in fermentum consectetur. Donec id tincidunt purus.  </p>
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
    data: () => ({ 
      power: 75,
      dialog: false,
    }),
}
</script>

<style>

</style>