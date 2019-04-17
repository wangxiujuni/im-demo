import { myFetch } from '@/utils/myFetch'
import { GET_USERDATA } from '@/api/api'

export const SET_USER = 'SET_USER'
export const LOAD_USER = 'LOAD_USER'

const store = {
  state: {
    user: {}
  },
  getters: {
    myAvatarStyle(state, getters) {
      return { background: `url("${getters.userData.avatarUrl}")` }
    },
    userData(state) {
      return state.user
    },
    friendsData(state) {
      return state.user.friends
    }
  },
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload
    }
  },
  actions: {
    [LOAD_USER](context) {
      myFetch.get(GET_USERDATA).then(res => {
        context.commit(SET_USER, res)
      })
    }
  }
}

export default store
