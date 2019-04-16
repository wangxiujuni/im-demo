<template>
  <div :class="$style.wrapper">
    <span :class="$style.avatar"></span>
    <svg :class="$style.icon" aria-hidden="true" @click="$emit('delete')">
      <use xlink:href="#icon-close-circle-fill"></use>
    </svg>
    <h1 :class="$style.title">通信工程</h1>
    <div :class="$style.message">科技创新wowowoowowowow是啥</div>
  </div>
</template>

<script>


export default {

}
</script>

<style module lang="postcss">
.wrapper {
  height: 4em;
  padding: .3em;
  overflow: hidden;
}
.wrapper:hover {
  background: rgb(235, 235, 237);
}
.wrapper:hover .icon{
  opacity: 1;
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
.avatar {
  float: left;
  width: 4em;
  height: 4em;
  margin-left: 0.5em;
  margin-right: 1em;
  border-radius: 50%;
  background-image: url("@/assets/userIcon.jpg");
}
</style>
