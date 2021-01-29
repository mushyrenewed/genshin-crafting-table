import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import store from './store/index'
import router from './routes/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Make BootstrapVue available throught the project
Vue.use(BootstrapVue)



new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

