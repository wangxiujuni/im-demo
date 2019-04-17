<template>
  <div :class="$style.wrapper" @click="$emit('click')">
    <div :class="$style.name">{{$store.getters.userData.petname}}</div>
    <div>修改密码</div>
    <div>登出</div>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="postcss">

.wrapper {
  position: absolute;
  width: 5em;
  border: solid 1px rgb(137, 137, 137);
  bottom: 0;
  left: 4em;
  background: white;
  user-select: none;
}
.wrapper div:hover {
  background: rgb(126, 149, 192);
}
.wrapper div {
  padding: 1em 0;
}
.name{
  font-weight: 600
}
</style>
