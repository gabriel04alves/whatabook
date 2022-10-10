import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store'


Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')