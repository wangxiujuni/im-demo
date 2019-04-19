<template>
  <div :class="$style.aside" :style="{width:chatAsideStyle}">
    <ChatAsideMessage v-show="navNumber===1"></ChatAsideMessage>
    <ChatAsideFriend v-show="navNumber===2"></ChatAsideFriend>
  </div>
</template>

<script>
import ChatAsideMessage from './ChatAsideMessage'
import ChatAsideFriend from './ChatAsideFriend'

export default {
  components: {
    ChatAsideMessage,
    ChatAsideFriend
  },
  props: {
    chatAsideStyle: {
      type: String,
      required: true
    }
  },
  computed: {
    navNumber() {
      return this.$store.state.Chat.navNumber
    }
  }


}
</script>

<style module lang="postcss">
.aside {
  float: left;
  height: 100vh;
  min-width: 13em;
  max-width: 30em;
  margin-left: 4em;
}
</style>
