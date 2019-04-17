<template>
  <div
    v-if="isRender"
    :class="{[$style.basic]:true,[$style.success]:type,[$style.error]:!type}"
  >{{message}}</div>
</template>

<script>
export default {
  props: {
    type: {
      type: Boolean,
      required: true
    },
    isRender: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}


</script>

<style module lang="postcss">
.basic {
  position: fixed;
  padding: 0.5em 1em;
  border: 1px solid rgb(126, 149, 192);
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}
.success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.error {
  background-color: #fef0f0;
  color: #f56c6c;
}
</style>
