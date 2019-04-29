<template>
  <div>
    <span :class="$style.avatar" :style="floatRightAvatar"></span>
    <div :class="$style.message" :style="floatRight" :dir="messageDirection">
      <a :class="$style.name">{{messageUserData.petname}}</a>
      <div
        :class="$style.content"
        dir="auto"
        v-text="messageData.content"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageData: {
      type: Object
    }
  },
  computed: {
    floatRight() {
      return this.messageData.isMine ? 'float:right' : 'float:left'
    },
    messageDirection() {
      return this.messageData.isMine ? 'rtl' : 'ltr'
    },
    messageUserData() {
      if ('sendTarget' in this.messageData) {
        return this.$store.getters.userData
      }
      let friendData
      this.$store.getters.friendsData.forEach(friend => {
        if (friend.username === this.messageData.sender) {
          friendData = friend
        }
      })
      return friendData
    },
    floatRightAvatar() {
      const styleObj = {}
      if (this.messageData.isMine) {
        styleObj.float = 'right'
      } else {
        styleObj.float = 'left'
      }
      styleObj.background = `url(${this.messageUserData.avatarUrl})`
      return styleObj
    }
  }
}
</script>

<style module lang="postcss">
.avatar {
  display: inline-block;
  width: 4em;
  height: 4em;
  vertical-align: top;
  border-radius: 50%;
}
.name {
  display: block;
  color:rgb(137, 137, 137);
}
.message {
  display: inline-block;
  width: calc(100% - 4em);
}
.content {
  display: inline-block;
  min-width: 1px;
  min-height: 5px;
  padding: 1em;
  border-radius: 1em;
  background: rgb(126, 149, 192);
  white-space: pre-wrap;
}
</style>
