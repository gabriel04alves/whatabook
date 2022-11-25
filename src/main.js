import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store'
import './plugins/axios'

Vue.config.productionTip = false

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);


new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')