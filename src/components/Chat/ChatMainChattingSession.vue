<template>
  <div>
    <span :class="$style.avatar" :style="floatRight"></span>
    <div :class="$style.message" :style="floatRight" :dir="messageDirection">
      <a :class="$style.name">通信工程</a>
      <div
        :class="$style.content"
        dir="auto"
        v-text="sessionData.content"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sessionData: {
      type: Object
    }
  },
  computed: {
    floatRight() {
      return this.sessionData.isMine ? 'float:right' : 'float:left'
    },
    messageDirection() {
      return this.sessionData.isMine ? 'rtl' : 'ltr'
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
  background: url("@/assets/userIcon.jpg");
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
