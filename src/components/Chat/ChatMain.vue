<template>
  <div :class="$style.main">
    <ChatMainChatting v-show="navNumber===1"></ChatMainChatting>
  </div>
</template>

<script>
import WebSocket from 'isomorphic-ws'
import ChatMainChatting from './ChatMainChatting'
import { CHAT_MESSAGE } from '@/api/api'
import { ADD_MESSAGE, PUSH_FRIENDSESSION } from './module'

export default {
  components: {
    ChatMainChatting
  },
  computed: {
    navNumber() {
      return this.$store.state.Chat.navNumber
    },
    messagesRender() {
      return this.$store.state.Chat.messagesRender
    }
  },
  mounted() {
    this.ws = new WebSocket(CHAT_MESSAGE)
    // 消息分发
    this.ws.onmessage = data => {
      // 判断消息栏中是否有该消息
      let isExist = false
      this.messagesRender.forEach(message => {
        if (message.username === data.sender) {
          isExist = true
        }
      })
      // 如果aside消息栏中没有消息，则取到sender的朋友数据，将其添加到aside
      if (this.messagesRender.length === 0 || !isExist) {
        let senderData
        this.$store.getter.friendsData.forEach(friend => {
          if (friend.username === data.sender) {
            senderData = friend
          }
        })
        this.$store.commit(ADD_MESSAGE, senderData)
      }
      this.$store.dispatch(PUSH_FRIENDSESSION, data)
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
