<template>
  <div :class="$style.main">
    <ChatMainChatting v-show="navNumber===1"></ChatMainChatting>
  </div>
</template>

<script>
import ChatMainChatting from './ChatMainChatting'

export default {
  components: {
    ChatMainChatting
  },
  computed: {
    navNumber() {
      return this.$store.state.Chat.navNumber
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
