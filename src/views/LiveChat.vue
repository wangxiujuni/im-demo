<template>
  <div>
    <ChatNav></ChatNav>
    <ChatAside :chatAsideStyle="chatAsideStyle" ></ChatAside>
    <span :class="$style.drag_border" v-drag draggable="false"></span>
    <ChatMain></ChatMain>
  </div>
</template>

<script>
import ChatNav from '@/components/Chat/ChatNav.vue'
import ChatAside from '@/components/Chat/ChatAside.vue'
import ChatMain from '@/components/Chat/ChatMain.vue'
import { LOAD_USER } from '@/components/Chat/module.js'

export default { components: {
  ChatNav,
  ChatAside,
  ChatMain
},

directives: {
  drag: { bind(el, binding, vNode) {
    el.onmousedown = () => {
      document.onmousemove = function fn(e) {
        // if (fn.tId) return
        // // 节流函数
        // fn.tId = setTimeout(() => {
        //   console.log(e.clientX)
        vNode.context.chatAsideStyle = `${e.clientX - 64}px`
        //   fn.tId = null
        // }, 50)
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  } }
},

data() {
  return {
    chatAsideStyle: '300px'
  }
},
mounted() {
  this.$store.dispatch(LOAD_USER)
} }
</script>

<style module lang="postcss">
.drag_border {
  float: left;
  height: 100vh;
  width: 2px;
  box-sizing: content-box;
  padding: 0 4px;
  margin:auto -4px;
  background-clip: content-box;
  background-color: rgb(126, 149, 192);
  cursor: col-resize;
}
</style>
