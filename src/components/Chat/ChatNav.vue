<template>
  <div class="chat-nav">
    <label for="chat-nav-sms">
      <input id="chat-nav-sms" type="radio" name="icon" checked>
      <svg class="chat-nav-icon" aria-hidden="true">
        <use xlink:href="#icon-icon_sms"></use>
      </svg>
    </label>

    <label for="chat-nav-signal">
      <input id="chat-nav-signal" type="radio" name="icon">
      <svg class="chat-nav-icon" aria-hidden="true">
        <use xlink:href="#icon-icon_signal"></use>
      </svg>
    </label>
    <div class="user-icon"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.chat-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4em;
  background-color: rgb(126, 149, 192);
}
.chat-nav-icon {
  width: 100%;
  height: 3em;
  padding: 1em 0;
  fill: white;
  overflow: hidden;
}
.user-icon {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background: url('../../assets/userIcon.jpg');
}
.user-icon:hover {
  border: white 2px solid;
}

#chat-nav-sms,
#chat-nav-signal {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
#chat-nav-sms:checked + .chat-nav-icon,
#chat-nav-signal:checked + .chat-nav-icon {
  background-color: rgb(91, 107, 138);
}
</style>
