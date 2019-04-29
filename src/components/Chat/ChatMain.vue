<template>
  <div :class="$style.main">
    <ChatMainChatting v-show="navNumber===1"></ChatMainChatting>
  </div>
</template>

<script>
import ChatMainChatting from './ChatMainChatting'
import { CHAT_MESSAGE } from '@/api/api'
import { ADD_SESSION, PUSH_FRIENDMESSAGE, SET_CLICKFRIEND } from './module'

export default {
  components: {
    ChatMainChatting
  },
  computed: {
    navNumber() {
      return this.$store.state.Chat.navNumber
    },
    sessionsRender() {
      return this.$store.state.Chat.sessionsRender
    }
  },
  mounted() {
    this.ws = new WebSocket(CHAT_MESSAGE)
    this.ws.onopen = () => {
      console.log('ws open!')
    }
    // 消息分发
    this.ws.onmessage = event => {
      const data = JSON.parse(event.data)
      console.log('receive', data)

      // 判断会话栏中是否有该消息
      const isExist = data.sender in this.sessionsRender
      // this.sessionsRender.forEach(session => {
      //   if (session.username === data.sender) {
      //     isExist = true
      //   }
      // })
      // 如果aside中没有消息，则取到sender的朋友数据，将其添加到aside
      if (Object.keys(this.sessionsRender).length === 0 || !isExist) {
        let senderData
        this.$store.getters.friendsData.forEach(friend => {
          console.log(friend, data)

          if (friend.username === data.sender) {
            senderData = friend
          }
        })
        this.$store.commit(ADD_SESSION, senderData)
      }
      this.$store.commit(PUSH_FRIENDMESSAGE, data)
      this.$store.commit(SET_CLICKFRIEND, data.sender)
    }
  }
}
</script>

<style module lang="postcss">
.main {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
