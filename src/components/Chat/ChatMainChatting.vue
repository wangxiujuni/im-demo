<template>
  <div>
    <h1 :class="$style.title">通信工程</h1>
    <main :class="$style.main">
      <ChatMainChattingSession
        v-for="(item,index) in renderSessions"
        :key="index"
        :sessionData="item"
      >{{index}}</ChatMainChattingSession>
    </main>
    <ChatMainChattingInput @send-content="pushSessions"></ChatMainChattingInput>
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
      sessionData: {
        content: '',
        isMine: true
      },
      renderSessions: []
    }
  },
  methods: {
    pushSessions(data) {
      this.sessionData.content = data
      this.renderSessions.push({ ...this.sessionData })
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
  padding:1em 0;
  overflow-x: auto;
  height: calc(100vh - 64px - 212px - 2em);

}
</style>
