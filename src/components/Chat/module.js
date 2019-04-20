import { myFetch } from '@/utils/myFetch'
import { GET_USERDATA } from '@/api/api'
import Vue from 'vue'

export const SET_USER = 'SET_USER'
export const SET_NAVNUMBER = 'SET_NAVNUMBER'
export const LOAD_USER = 'LOAD_USER'
export const ADD_SESSION = 'ADD_SESSION'
export const DELETE_SESSION = 'DELETE_SESSION'
export const SET_CLICKFRIEND = 'SET_CLICKFRIEND'
export const PUSH_FRIENDMESSAGE = 'PUSH_FRIENDMESSAGE'
export const PUSH_MYMESSAGE = 'PUSH_MYMESSAGE'

const store = {
  state: {
    user: {},
    navNumber: 1,
    sessionsRender: {},
    // 储存点击的session的key
    sessionClickFriend: ''
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
    [ADD_SESSION](state, friendsData) {
      Vue.set(state.sessionsRender, friendsData.username, { ...friendsData, chattingData: [] })
      // state.sessionsRender.unshift({ ...friendsData, chattingData: [] })
    },
    [DELETE_SESSION](state, username) {
      Vue.delete(state.sessionsRender, username)
    },
    [SET_CLICKFRIEND](state, friendUsername) {
      state.sessionClickFriend = friendUsername
    },
    [PUSH_FRIENDMESSAGE](state, receiveData) {
      state.sessionsRender[receiveData.sender].chattingData.push(receiveData)
    },
    [PUSH_MYMESSAGE](state, sendData) {
      state.sessionsRender[sendData.sendTarget].chattingData.push(sendData)
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
