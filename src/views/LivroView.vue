<template>
  <div>
    <v-row>
        <v-col cols="4">
            <div class="pa-16 d-flex justify-center" style="background-color: red;">
                    <img width="" src="../assets/images/emalta.png" alt="">
            </div>
        </v-col>
        <v-col class="" cols="8">
            <div class="ma-16" style="background-color: red; color: #114B5F;">
                <h2 class="text-center font-weight-bold">A revolução dos bichos: Um conto de fadas</h2>
                <h2 class="text-center font-weight-light">por George Orwell</h2>
                <h3 class="text-justify font-weight-regular ma-10">Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo.</h3>
            </div>
            <div>
                
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="4">
            <div elevation="10" class="pa-16 d-flex justify-center" style="background-color: red; color: #114B5F;">
                <v-card class="" style="width: 30rem; height: 24rem; color: #114B5F;" color="#CAF1FF" >
                    <h3 class="text-center text-uppercase text-decoration-underline pa-6">Avaliações</h3>
                    <div class="pa-5">
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="warning lighten-1" color="warning" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="1.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="warning lighten-1" color="warning" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="2.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="warning lighten-1" color="warning" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="3.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="warning lighten-1" color="warning" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="4.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                        <v-row class="d-flex align-center justify-space-around ms-2 me-2">
                            <v-rating class="" style="" background-color="warning lighten-1" color="warning" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" 
                            hover length="5" readonly size="25" value="5.5"></v-rating> 
                            <v-progress-linear class="rounded" v-model="power" color="amber" height="15" style="width: 150px;"></v-progress-linear> <h4 class="text-center" style="color: #114B5F;">75%</h4>                            
                        </v-row>
                    </div>
                </v-card>
            </div>
        </v-col>
        <v-col  cols="8">
            <div style="background-color: red;">teste</div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data: () => ({ 
      power: 75,
    }),
}
</script>

<style>

</style>