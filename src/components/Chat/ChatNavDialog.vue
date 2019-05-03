<template>
  <div :class="$style.background">
    <div :class="$style.dialog">
     <div :class="$style.close" @click="$emit('close')">x</div>
      <ChatNavDialogDetail v-if="dialogProp==='name'"></ChatNavDialogDetail>
      <ChatNavDialogRepassword v-if="dialogProp==='repassword'"></ChatNavDialogRepassword>
    </div>
  </div>
</template>

<script>
import ChatNavDialogRepassword from './ChatNavDialogRepassword'
import ChatNavDialogDetail from './ChatNavDialogDetail'

export default {
  components: {
    ChatNavDialogRepassword,
    ChatNavDialogDetail
  },
  props: {
    dialogProp: {
      type: String
    }
  }
}
</script>

<style module lang="postcss">
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25%;
  height: 60%;
  transform: translate3d(-50%, -50%, 0);
  background: white;
}
.close{
  position: absolute;
  top:0;
  right: 0;
  width: 2em;
  height: 1.5em;
  text-align: center;
  cursor: pointer;
}
.close:hover{
  background: red;
  opacity: .5;
}

</style>
