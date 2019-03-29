<template>
  <div class="chat-aside" :style="{width:chatAsideStyle}">

  </div>
</template>

<script>
export default {
  props: {
    chatAsideStyle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.chat-aside{
  float: left;
  height: 100vh;
  min-width: 13em;
  max-width: 30em;
  margin-left: 4em;

}
</style>
