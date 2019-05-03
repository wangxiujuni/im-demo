<template>
  <div :class="$style.wrapper">
    <span :class="$style.avatar" :style="avatarStyle"></span>
    <slot :moduleStyle="$style"></slot>
    <h1 :class="$style.title">{{petname}}</h1>
    <div :class="$style.message">{{detailOrMessage}}</div>
  </div>
</template>

<script>


export default {
  props: {
    petname: {
      type: String
    },
    detailOrMessage: {
      type: String
    },
    avatarUrl: {
      type: String
    },
    username: {
      type: String
    }
  },
  computed: {
    avatarStyle() {
      return { background: `url("${this.avatarUrl}")` }
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  height: 4em;
  padding: .3em;
  overflow: hidden;
  background: white;
}
.wrapper:hover {
  background: rgb(235, 235, 237);
}
.wrapper:hover .icon{
  opacity: 1;
}
.icon {
  float: right;
  width: 1.5em;
  height: 1.5em;
  margin-top: 1.3em;
  margin-right: 1em;
  fill:gray;
  overflow: hidden;
  opacity: 0;
}
.wrapper:hover .button{
  opacity: 1;
}
.button{
  float: right;
  height: 2em;
  border-radius: 4px;
  margin-top: 1.3em;
  margin-right: 1em;
  color: white;
  background: rgb(126, 149, 192);
  opacity: 0;
}
.button:hover{
  background: rgb(91, 107, 138)
}
.title {
  margin-top: 0.7em;
}
.message {
  font-size: 13px;
  color: rgb(137, 137, 137);
  white-space: nowrap
}
.title, .message{
  user-select: none;
}

.avatar {
  float: left;
  width: 4em;
  height: 4em;
  margin-left: 0.5em;
  margin-right: 1em;
  border-radius: 50%;
}
</style>
