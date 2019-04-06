<template>
  <div>
    <textarea v-model="inputContent" :class="$style.input" rows="10" autofocus spellcheck="false" @keyup.shift.enter="send"></textarea>
    <button :class="$style.button" title="使用shift+enter快捷发送" @click="send">发送</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputContent: ''
    }
  },
  methods: {
    send() {
      console.log(this.inputContent)
      this.$emit('send-content', this.inputContent)
      this.inputContent = ''
    }
  }
}
</script>

<style module lang="postcss">
.input {
  position: absolute;
  width: 99%;
  bottom: 0;
  left: 0;
  border-top: rgb(126, 149, 192) solid 2px;
  border-right: transparent;
  border-left: transparent;
  resize: none;
  font-size: 18px;
  font-weight: 550
}
.input:focus{
  outline: none
}
.button{
  position: absolute;
  right: 1.5em;
  bottom: 0.5em;
  width: 4em;
  height: 2em;
  color: white;
  background: rgb(126, 149, 192)
}
.button:hover{
  background-color: rgb(91, 107, 138)
}
</style>
