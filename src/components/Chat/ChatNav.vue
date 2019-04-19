<template>
  <div :class="$style.wrapper" @change="setNavNumber" @mouseleave="showOptions=false">
    <label>
      <input :class="$style.message" v-model="navNumber" type="radio" name="icon" :value="1">
      <svg :class="$style.icon" aria-hidden="true">
        <use xlink:href="#icon-icon_sms"></use>
      </svg>
    </label>

    <label>
      <input :class="$style.friend" v-model="navNumber" type="radio" name="icon" :value="2">
      <svg :class="$style.icon" aria-hidden="true">
        <use xlink:href="#icon-icon_signal"></use>
      </svg>
    </label>
    <div :class="$style.avatar" :style="[selected,$store.getters.myAvatarStyle]" @click="showOptions=!showOptions" ></div>
    <ChatNavOptions v-if="showOptions" @click="showOptions=!showOptions"></ChatNavOptions>
  </div>
</template>

<script>
import ChatNavOptions from './ChatNavOptions.vue'
import { SET_NAVNUMBER } from './module'


export default {
  components: {
    ChatNavOptions
  },
  data() {
    return {
      navNumber: 1,
      showOptions: false
    }
  },
  computed: {
    // 保持选中状态的边框
    selected() {
      return this.showOptions ? { border: 'white 2px solid' } : ''
    },
    // 当state改变时改变nav样式
    stateNavNumber() {
      return this.$store.state.Chat.navNumber
    }

  },
  watch: {
    stateNavNumber(newValue) {
      this.navNumber = newValue
    }
  },
  methods: {
    setNavNumber() {
      this.$store.commit(SET_NAVNUMBER, this.navNumber)
    }

  }

}
</script>

<style module lang="postcss">
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4em;
  background-color: rgb(126, 149, 192);
}
.icon {
  width: 100%;
  height: 3em;
  padding: 1em 0;
  fill: white;
  overflow: hidden;
}
.avatar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 4em;
  height: 4em;
  border-radius: 50%;
}
.avatar:hover {
  border: white 2px solid;
}

.message,
.friend {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
.message:checked + .icon,
.friend:checked + .icon {
  background: rgb(91, 107, 138);
}
</style>
