<template>
  <div>
    <ChatAsideItem
      v-for="(friend,index) in $store.getters.friendsData"
      v-slot="slotProps"
      :petname="friend.petname"
      :detailOrMessage="friend.detail"
      :avatarUrl="friend.avatarUrl"
      :username="friend.username"
      :key="index"
      @click.native="sendSession(friend)"
    >
      <svg
        :class="slotProps.moduleStyle.icon"
        aria-hidden="true"
        @click.stop="confirmDelete({petname:friend.petname,username:friend.username})"
      >
        <use xlink:href="#icon-close-circle-fill"></use>
      </svg>
    </ChatAsideItem>

    <div v-if="isDialogRender" :class="$style.dialog">
      <div :class="$style.tips">确认删除好友{{dialogData.petname}}吗？</div>
      <button :class="$style.button" @click="deleteFriend">确认</button>
      <button :class="$style.button" @click="isDialogRender=false">取消</button>
    </div>

    <BaseAlert :isRender="alert.isRender" :type="alert.type" :message="alert.message"></BaseAlert>
  </div>
</template>

<script>
import ChatAsideItem from './ChatAsideItem'
import BaseAlert from '@/common/BaseAlert'
import { FRIEND_DELETE } from '@/api/api'
import { LOAD_USER, ADD_SESSION, SET_NAVNUMBER, SET_CLICKFRIEND } from './module'


export default {
  components: {
    ChatAsideItem,
    BaseAlert
  },
  data() {
    return {
      isDialogRender: false,
      dialogData: {},
      alert: {
        type: true,
        isRender: false,
        message: ''
      }
    }
  },
  methods: {
    confirmDelete(payload) {
      this.dialogData = payload
      this.isDialogRender = true
    },
    sendSession(friend) {
      this.$store.commit(SET_NAVNUMBER, 1)
      const { sessionsRender } = this.$store.state.Chat
      if (!(friend.username in sessionsRender)) {
        this.$store.commit(ADD_SESSION, friend)
      }
      this.$store.commit(SET_CLICKFRIEND, friend.username)
    },
    deleteFriend() {
      this.isDialogRender = false
      this.$fetch.delete(FRIEND_DELETE, { username: this.dialogData.username }).then(res => {
        if (res.code === 0) {
          this.alert.type = true
        } else {
          this.alert.type = false
        }
        this.alert.message = res.message
        this.alert.isRender = true
        setTimeout(() => {
          this.alert.message = ''
          this.alert.isRender = false
        }, 2000)
        this.$store.dispatch(LOAD_USER)
      })
    }
  }
}
</script>

<style module lang="postcss">
.dialog {
  position: fixed;
  width: 20em;
  height: 10em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  z-index: 1;
}
.tips {
  padding: 2em 0;
}
.dialog,
.button {
  border: 1px solid rgb(126, 149, 192);
  border-radius: 6px;
}
.button {
  display: inline-block;
  padding: 0.5em 1em;
  margin: 1em 2em;
}
</style>
