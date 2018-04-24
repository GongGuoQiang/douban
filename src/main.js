// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'
// import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource);
// Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(vueScrollBehavior,{router: router})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
