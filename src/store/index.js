import Vue from 'vue'
import Vuex from 'vuex'
import Chat from '@/components/Chat/module'
import { SYNC_SESSION } from '@/api/api'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    Chat
  }
})

store.watch(state => state.Chat.sessionsRender, value => {
  Vue.prototype.$fetch.post(SYNC_SESSION, value).then(
    res => {
      if (res.code === 0) {
        console.log(res.message)
      }
      if (res.code === 1 || res.code === 2) {
        console.error(res.message)
      }
    }
  )
}, { deep: true })
export default store
