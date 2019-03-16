import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myfetch from './utils/myFetch'
// import 'promise-polyfill/src/polyfill'

Vue.config.productionTip = false
Vue.use(myfetch)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
