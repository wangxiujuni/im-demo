<template>
  <div>
    <button :class="$style.button" type="button" @click="$emit('click')">{{buttonContent}}</button>
    <div :class="$style.prompt">{{warn}}</div>
  </div>
</template>

<script>
export default {
  props: {
    buttonContent: {
      type: String,
      default: '登录'
    },
    warn: {
      type: String,
      default: ''
    }
  }
}
</script>

<style module lang="postcss">
.button {
  display: block;
  width: 5em;
  height: 2em;
  font-size: 25px;
  margin: 0.8em auto;
  color: white;
  border-radius: 0.5em;
  background-color: rgb(126, 149, 192);
}
.button:hover {
  background-color: rgb(91, 107, 138);
}
.prompt{
  text-align: center;
  margin-top:-0.5em
}

</style>
<style scoped>
.success {
  color: green;
}
.error {
  color: red;
}
</style>
