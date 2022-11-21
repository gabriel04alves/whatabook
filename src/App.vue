<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script>
import {tokenChange} from "@/plugins/axios"
export default {
  mounted(){
    tokenChange()
  }
}
</script>

<style>

</style>