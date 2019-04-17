import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myfetch from './utils/myFetch'
import store from './store/index'
// import 'promise-polyfill/src/polyfill'

Vue.config.productionTip = false
Vue.use(myfetch)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
