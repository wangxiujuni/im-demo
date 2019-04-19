import { myFetch } from '@/utils/myFetch'
import { GET_USERDATA } from '@/api/api'

export const SET_USER = 'SET_USER'
export const SET_NAVNUMBER = 'SET_NAVNUMBER'
export const LOAD_USER = 'LOAD_USER'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const SET_CLICKINDEX = 'SET_CLICKINDEX'

const store = {
  state: {
    user: {},
    navNumber: 1,
    messagesRender: [],
    // 储存点击的message在render中的索引
    messageClickIndex: 0
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
    },
    [SET_NAVNUMBER](state, payload) {
      state.navNumber = payload
    },
    [ADD_MESSAGE](state, friendsData) {
      state.messagesRender.unshift(friendsData)
    },
    [DELETE_MESSAGE](state, username) {
      let deleteIndex
      state.messagesRender.forEach((message, index) => {
        if (message.username === username) {
          deleteIndex = index
        }
      })
      state.messagesRender.splice(deleteIndex, 1)
    },
    [SET_CLICKINDEX](state, index) {
      state.messageClickIndex = index
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
