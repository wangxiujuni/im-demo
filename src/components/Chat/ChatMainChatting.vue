<template>
  <div>
    <h1 :class="$style.title">通信工程</h1>
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
import { CHAT_MESSAGE } from '@/api/api.js'

export default {
  components: {
    ChatMainChattingInput,
    ChatMainChattingSession
  },
  data() {
    return {
      sessionData: {
        content: '',
        sendTarget: 'baba',
        isMine: true
      },
      renderSessions: []

    }
  },

  mounted() {
    this.ws = new WebSocket(CHAT_MESSAGE)
    this.ws.onmessage = data => {
      console.log(data)
    }
  },
  methods: {
    // 渲染列表
    pushSessions(data) {
      this.sessionData.content = data
      this.renderSessions.push({ ...this.sessionData })
    },
    // 控制滚动
    scrollPosition() {
      this.$nextTick(() => { this.$refs.main.scrollTop = 10000 })
    },
    // 发送websocket
    sendMessage() {
      console.log(this.ws.readyState)
      if (this.ws.readyState === 3) {
        console.log(11111)

        this.ws = new WebSocket(CHAT_MESSAGE)
        this.ws.onmessage = data => {
          console.log(data)
        }
      }
      console.log(this.ws.readyState)
      const WSsend = new Promise(resolve => {
        const timerId = setInterval(() => {
          console.log('diidai')

          if (this.ws.readyState === 1) {
            clearInterval(timerId)
            resolve()
          }
        }, 200)
      })
      WSsend.then(() => {
        console.log(99999999)

        this.ws.send(JSON.stringify(this.sessionData))
      })
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
  padding:1em;
  overflow-x: auto;
  height: calc(100vh - 64px - 212px - 2em);

}
</style>
