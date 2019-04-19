<template>
  <div>
    <BaseSearch @search="searchFromName"></BaseSearch>
    <ChatAsideItem
      v-for="(friend,index) of friendsRender"
      v-slot="slotProps"
      :petname="friend.petname"
      :detailOrMessage="friend.detail"
      :avatarUrl="friend.avatarUrl"
      :username="friend.username"
      :key="index"
    >
      <button :class="slotProps.moduleStyle.button" @click="addFriend({username:friend.username})">加为好友</button>
    </ChatAsideItem>
    <BaseAlert :type="alert.type" :message="alert.message" :isRender="alert.isRender"></BaseAlert>
  </div>
</template>

<script>

import ChatAsideItem from './ChatAsideItem'
import BaseSearch from '@/common/BaseSearch'
import BaseAlert from '@/common/BaseAlert'
import { FRIEND_SEARCH, FRIEND_ADD } from '@/api/api'
import { LOAD_USER } from './module'


export default {
  components: {
    BaseSearch,
    BaseAlert,
    ChatAsideItem
  },
  data() {
    return {
      friendsRender: [],
      alert: {
        type: false,
        message: '',
        isRender: false
      }
    }
  },
  methods: {
    searchFromName(payload) {
      this.$fetch.get(FRIEND_SEARCH, payload).then(
        res => {
          if (res.code === 0) {
            this.friendsRender = res.result
          } else {
            this.friendsRender = []
            this.alert.type = false
            this.alert.message = res.message
            this.alert.isRender = true
            setTimeout(() => {
              this.alert.message = ''
              this.alert.isRender = false
            }, 2000)
          }
        }
      )
    },
    addFriend(payload) {
      this.$fetch.post(FRIEND_ADD, payload).then(res => {
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
</style>
