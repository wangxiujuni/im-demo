<template>
  <div>
    <ChatAsideItem
      v-for="(message,index) in messagesRender"
      v-slot="slotProps"
      :petname="message.petname"
      :username="message.username"
      :detailOrMessage="message.detail"
      :avatarUrl="message.avatarUrl"
      :key="index"
      @click.native="setClickIndex(index)"
    >
      <svg
        :class="slotProps.moduleStyle.icon"
        aria-hidden="true"
        @click.stop="deleteMessage(message.username)"
      >
        <use xlink:href="#icon-close-circle-fill"></use>
      </svg>
    </ChatAsideItem>
  </div>
</template>

<script>
import ChatAsideItem from './ChatAsideItem'
import { DELETE_MESSAGE, SET_CLICKINDEX } from './module'

export default {
  components: {
    ChatAsideItem
  },
  computed: {
    messagesRender() {
      return this.$store.state.Chat.messagesRender
    }
  },
  methods: {
    deleteMessage(username) {
      this.$store.commit(DELETE_MESSAGE, username)
    },
    setClickIndex(index) {
      this.$store.commit(SET_CLICKINDEX, index)
    }
  }
}
</script>

<style module lang="postcss">
</style>
