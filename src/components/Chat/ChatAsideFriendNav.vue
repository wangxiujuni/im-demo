<template>
  <div @change="$emit('nav-change',navNumber)">
    <input
      v-model="navNumber"
      type="radio"
      id="nav1"
      :class="$style.radio"
      :value="1"
      name="friend"
    >
    <label :class="$style.navItem" for="nav1">
      <span :class="$style.content">好友列表</span>
    </label>

    <input
      v-model="navNumber"
      type="radio"
      id="nav2"
      :class="$style.radio"
      :value="2"
      name="friend"
    >
    <label :class="$style.navItem" for="nav2">
      <span :class="$style.content">添加好友</span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navNumber: 1
    }
  }
}
</script>

<style module lang="postcss">
.navItem {
  display: inline-block;
  width: 50%;
  height: 3em;
  text-align: center;
  background: rgb(126, 149, 192);
}
.radio:checked + .navItem {
  background: rgb(91, 107, 138);
}
.radio {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
.content {
  line-height: 3em;
  color: white;
}
</style>
