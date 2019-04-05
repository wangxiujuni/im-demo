<template>
  <div :class="$style.main">
    <ChatMainChatting></ChatMainChatting>
  </div>
</template>

<script>
import ChatMainChatting from './ChatMainChatting'

export default {
  components: {
    ChatMainChatting
  }
}
</script>

<style module lang="postcss">
.main {
  position: relative;
  height: 100vh;
  padding-right: 1em;
  overflow: hidden;
}
</style>
