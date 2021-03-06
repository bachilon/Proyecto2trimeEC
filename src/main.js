import Vue from 'vue'
import App from './App.vue'
import  router from './Router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Instalado BootstrapVue
Vue.use(BootstrapVue)
// Instalado el complemento de componentes del icono BootstrapVue
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  