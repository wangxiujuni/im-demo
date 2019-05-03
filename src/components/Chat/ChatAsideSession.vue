<template>
  <div>
    <div :class="$style.without"></div>
    <ChatAsideItem
      v-for="(session,index) in sessionsRender"
      v-slot="slotProps"
      :petname="session.petname"
      :username="session.username"
      :detailOrsession="session.detail"
      :avatarUrl="session.avatarUrl"
      :key="index"
      @click.native="setClickFriend(session.username)"
    >
      <svg
        :class="slotProps.moduleStyle.icon"
        aria-hidden="true"
        @click.stop="deleteSession(session.username)"
      >
        <use xlink:href="#icon-close-circle-fill"></use>
      </svg>
    </ChatAsideItem>
  </div>
</template>

<script>
import ChatAsideItem from './ChatAsideItem'
import { DELETE_SESSION, SET_CLICKFRIEND } from './module'

export default {
  components: {
    ChatAsideItem
  },
  computed: {
    sessionsRender() {
      return this.$store.state.Chat.sessionsRender
    }
  },
  methods: {
    deleteSession(username) {
      this.$store.commit(DELETE_SESSION, username)
    },
    setClickFriend(friendUsername) {
      console.log(friendUsername, 'funame')

      this.$store.commit(SET_CLICKFRIEND, friendUsername)
    }
  }
}
</script>

<style module lang="postcss">
.without::after{
  content: '没有内容,请选择好友开始会话';
  position: absolute;
  z-index: -1;
  color:  rgb(126, 149, 192);

}
</style>
