<template>
  <div class="user-window">
    <div class="user-window-main">
      <component :is="renderComponent" @toggle-to-signin="toggleToSignIn"></component>
      <a class="user-window-main-toggle" @click.prevent="toggleComponents">{{renderContent}}</a>
    </div>
  </div>
</template>

<script>
import UserSignIn from '../components/User/UserSignIn.vue'
import UserSignUp from '../components/User/UserSignUp.vue'

export default {
  components: {
    UserSignIn,
    UserSignUp
  },
  data() {
    return {
      renderComponent: UserSignIn,
      toggleContent: { toSignIn: '已有帐号？登录', toSignUp: '没有账号？请注册' },
      renderContent: ''
    }
  },
  created() {
    this.renderContent = this.toggleContent.toSignUp
  },
  methods: {
    toggleComponents() {
      if (this.renderComponent === UserSignIn) {
        this.renderComponent = UserSignUp
        this.renderContent = this.toggleContent.toSignIn
      } else {
        this.renderComponent = UserSignIn
        this.renderContent = this.toggleContent.toSignUp
      }
    },
    toggleToSignIn() {
      this.renderComponent = UserSignIn
      this.renderContent = this.toggleContent.toSignUp
    }
  }
}
</script>

<style scoped>
.user-window {
  height: 100vh;
  font-size: 19px;
  line-height: 24px;
  background-image: url("../assets/UserBackground.jpg");
  background-repeat: no-repeat;
}
.user-window-main {
  position: fixed;
  background-color: white;
  width: 18em;
  height: 20em;
  border: 1px transparent;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.user-window-main-toggle {
  position: absolute;
  font-size: 12px;
  color: rgb(87, 107, 149);
  bottom: 0;
}
</style>
