<template>
  <div :class="$style.wrapper">
    <div :class="$style.name" @click="$emit('click','name')">{{$store.getters.userData.petname}}</div>
    <div @click="$emit('click','repassword')">修改密码</div>
    <div @click="logOut">登出</div>
  </div>
</template>

<script>


export default {
  methods: {
    logOut() {
      const mydate = new Date()
      mydate.setTime(mydate.getTime() - 1)
      document.cookie = `id=; expires=${mydate.toGMTString()}`
      this.$router.push('/')
    }
  }
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
.name {
  font-weight: 600;
}
</style>
