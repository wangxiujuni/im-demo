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
      <button :class="slotProps.moduleStyle.button">加为好友</button>
    </ChatAsideItem>
  </div>
</template>

<script>
import BaseSearch from '@/common/BaseSearch'
import ChatAsideItem from './ChatAsideItem'
import { SEARCH_FRIEND } from '@/api/api'

export default {
  components: {
    BaseSearch,
    ChatAsideItem
  },
  data() {
    return {
      friendsRender: []
    }
  },
  methods: {
    searchFromName(payload) {
      this.$fetch.post(SEARCH_FRIEND, payload).then(
        res => {
          console.log(res)

          this.friendsRender = res
        }
      )
    }
  }
}
</script>

<style module lang="postcss">
</style>
