<template>
  <div class="user-input">
    <input
      class="user-input-base"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      spellcheck="false"
      autocomplete="off"
      @input="$emit('input',$event.target.value)"
    >
    <span class="user-input-warn">{{warn}}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    warn: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  }
}
</script>

<style scoped>
.user-input {
  position: relative;
}
.user-input-base {
  display: block;
  width: 80%;
  height: 4em;
  margin: 1em auto;
  border-radius: 0.5em;
  border: thin solid gray;
}
.user-input-warn {
  position: absolute;
  color:red;
  font-size: 13px;
  top: 15px;
  right: 35px;
}
</style>
