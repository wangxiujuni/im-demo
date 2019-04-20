<template>
  <div v-if="friendData">
    <h1 :class="$style.title" >{{friendData.petname}}</h1>
    <main ref="main" :class="$style.main">
      <ChatMainChattingSession
        v-for="(item,index) in renderSessions"
        :key="index"
        :sessionData="item"
      >{{index}}</ChatMainChattingSession>
    </main>
    <ChatMainChattingInput @send-content="pushSessions($event);scrollPosition();sendMessage()"></ChatMainChattingInput>
  </div>
</template>

<script>
import ChatMainChattingInput from './ChatMainChattingInput'
import ChatMainChattingSession from './ChatMainChattingSession'


export default {
  components: {
    ChatMainChattingInput,
    ChatMainChattingSession
  },
  data() {
    return {
      renderSessions: []

    }
  },
  computed: {
    friendData() {
      return this.$store.state.Chat.messagesRender[this.$store.state.Chat.messageClickIndex]
    }
  },
  methods: {
    // 将消息推入渲染列表
    pushSessions(data) {
      const sessionData = {
        content: data,
        sendTarget: this.friendData.username,
        isMine: true
      }
      this.renderSessions.push({ ...sessionData })
    },
    // 控制滚动使其满屏时始终滚动到最下
    scrollPosition() {
      this.$nextTick(() => { this.$refs.main.scrollTop = 10000 })
    },
    // 发送websocket
    sendMessage() {

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
