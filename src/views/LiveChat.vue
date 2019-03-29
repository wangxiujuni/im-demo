<template>
  <div>
    <ChatNav></ChatNav>
    <ChatAside :chatAsideStyle="chatAsideStyle"></ChatAside>
    <span class="drag-border" v-drag draggable="false"></span>
    <ChatMain></ChatMain>
  </div>
</template>

<script>
import ChatNav from '@/components/Chat/ChatNav.vue'
import ChatAside from '@/components/Chat/ChatAside.vue'
import ChatMain from '@/components/Chat/ChatMain.vue'

export default { components: {
  ChatNav,
  ChatAside,
  ChatMain
},

data() {
  return {
    chatAsideStyle: '300px'
  }
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
} }
</script>

<style scoped>
.drag-border {
  float: left;
  height: 100vh;
  width: 2px;
  box-sizing: content-box;
  padding: 0 4px;
  background-clip: content-box;
  background-color: rgb(126, 149, 192);
  cursor: col-resize;
}
</style>
