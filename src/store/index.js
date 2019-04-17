import Vue from 'vue'
import Vuex from 'vuex'
import Chat from '@/components/Chat/module'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    Chat
  }
})

export default store
