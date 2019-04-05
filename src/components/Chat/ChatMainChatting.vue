<template>
  <div>
    <h1 :class="$style.title">通信工程</h1>
    <main></main>
    <ChatMainChattingInput></ChatMainChattingInput>
  </div>
</template>

<script>
import ChatMainChattingInput from './ChatMainChattingInput'

export default {
  components: {
    ChatMainChattingInput
  }
}
</script>

<style module lang="postcss">
.title {
  border-bottom: 2px solid rgb(126, 149, 192);
  padding: 1em 0;
  font-size: 20px;

}
</style>
