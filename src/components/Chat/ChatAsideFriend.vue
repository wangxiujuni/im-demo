<template>
  <div>
    <ChatAsideFriendNav @nav-change="navNumber=$event"></ChatAsideFriendNav>
    <component :is="renderComponent"></component>
  </div>
</template>

<script>
import ChatAsideFriendNav from './ChatAsideFriendNav'
import ChatAsideFriendList from './ChatAsideFriendList'
import ChatAsideFriendSearch from './ChatAsideFriendSearch'

export default {
  components: {
    ChatAsideFriendNav
  },
  data() {
    return {
      navNumber: 1
    }
  },
  computed: {
    renderComponent() {
      if (this.navNumber === 1) {
        return ChatAsideFriendList
      }
      return ChatAsideFriendSearch
    }
  }
}
</script>

<style module lang="postcss">
</style>
