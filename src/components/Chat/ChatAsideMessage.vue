<template>
  <div>
    <ChatAsideItem v-slot="slotProps">
      <svg  :class="slotProps.moduleStyle.icon" aria-hidden="true">
        <use xlink:href="#icon-close-circle-fill"></use>
      </svg>
    </ChatAsideItem>
  </div>
</template>

<script>
import ChatAsideItem from './ChatAsideItem'

export default {
  components: {
    ChatAsideItem
  }
}
</script>

<style module lang="postcss">
</style>
