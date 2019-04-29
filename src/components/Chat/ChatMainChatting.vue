<template>
  <div v-if="friendData">
    <h1 :class="$style.title" >{{friendData.petname}}</h1>
    <main ref="main" :class="$style.main">
      <ChatMainChattingMessage
        v-for="(item,index) in renderMessages"
        :key="index"
        :messageData="item"
      >{{scrollPosition()}}</ChatMainChattingMessage>
    </main>
    <ChatMainChattingInput @send-content="pushMessages($event);sendMessage($event)"></ChatMainChattingInput>
  </div>
</template>

<script>
import ChatMainChattingInput from './ChatMainChattingInput'
import ChatMainChattingMessage from './ChatMainChattingMessage'
import { PUSH_MYMESSAGE } from './module'


export default {
  components: {
    ChatMainChattingInput,
    ChatMainChattingMessage
  },
  computed: {
    friendData() {
      return this.$store.state.Chat.sessionsRender[this.$store.state.Chat.sessionClickFriend]
    },
    renderMessages() {
      return this.friendData.chattingData
    }
  },
  methods: {
    // 将消息推入渲染列表
    pushMessages(data) {
      const messageData = {
        content: data,
        sendTarget: this.friendData.username,
        isMine: true
      }
      this.$store.commit(PUSH_MYMESSAGE, { ...messageData })
    },
    // 控制滚动使其满屏时始终滚动到最下
    scrollPosition() {
      this.$nextTick(() => { this.$refs.main.scrollTop = 10000 })
    },
    // 发送websocket
    sendMessage(data) {
      console.log(this.friendData.username)

      const messageData = {
        content: data,
        sendTarget: this.friendData.username,
        isMine: true
      }
      this.$parent.ws.send(JSON.stringify(messageData))
    }
  }
}
</script>

<style module lang="postcss">
.title {
  border-bottom: 2px solid rgb(126, 149, 192);
  padding: 1em 0;
  font-size: 20px;
}
.main {
  padding: 1em;
  overflow-x: auto;
  height: calc(100vh - 64px - 212px - 2em);
}
</style>
