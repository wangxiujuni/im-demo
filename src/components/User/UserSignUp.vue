<template>
  <div>
    <h1 :class="$style.title">注册</h1>
    <UserInput
      v-model="form.username"
      type="text"
      :placeholder="placeholder.username"
      :warn="usernameWarn"
      @input="validate(regExp.username)"
    ></UserInput>
    <UserInput
      v-model="form.password"
      type="password"
      :placeholder="placeholder.password"
      :warn="passwordWarn"
      @input="validate(regExp.password)"
    ></UserInput>
      <UserInput
      v-model="form.repeat"
      type="password"
      :placeholder="placeholder.repeat"
      :warn="repeatWarn"
      @input="validate(regExp.repeat)"
      @go-submit="goSubmit"
    ></UserInput>
    <UserButton button-content="注册" :class="buttonClass" :warn="buttonWarn" @click="goSubmit"></UserButton>
  </div>
</template>

<script>
import { USER_SIGNUP } from '@/api/api'
import UserInput from './UserInput'
import UserButton from './UserButton'

export default {
  components: {
    UserInput,
    UserButton
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
        repeat: ''
      },
      placeholder: {
        username: '用户名(4~15位字母或数字)',
        password: '密码(8~20位数字,字母,符号)',
        repeat: '确认密码'
      },
      regExp: {
        username: ['username', /^[0-9A-Za-z]{4,15}$/],
        password: ['password', /^[0-9A-Za-z~`!@#$%^&*()_+={}[|:";'<>,./?\-\]\\]{8,20}$/],
        repeat: ['repeat']
      },
      validateState: {
        isUsername: false,
        isPassword: false,
        isRepeat: false
      },
      isValidation: false,
      buttonWarn: '',
      buttonWarnCode: 0

    }
  },
  computed: {
    usernameWarn() {
      if (this.form.username === '') {
        return ''
      }
      if (this.validateState.isUsername) {
        return ''
      }
      return '请输入符合规则的用户名'
    },
    passwordWarn() {
      if (this.form.password === '') {
        return ''
      }
      if (this.validateState.isPassword) {
        return ''
      }
      return '请输入8~20位符合规则的密码'
    },
    repeatWarn() {
      if (this.form.repeat === '') {
        return ''
      }
      if (this.validateState.isRepeat) {
        return ''
      }
      return '两次密码不一致'
    },
    buttonClass() {
      return { success: !this.buttonWarnCode, error: this.buttonWarnCode }
    }
  },
  methods: {
    validate(regExp) {
      if (regExp[0] === 'username') {
        this.validateState.isUsername = !!this.form.username.match(regExp[1])
      }
      if (regExp[0] === 'password') {
        this.validateState.isPassword = !!this.form.password.match(regExp[1])
      }
      if (regExp[0] === 'repeat') {
        this.validateState.isRepeat = this.form.password === this.form.repeat
      }
      if (this.validateState.isUsername && this.validateState.isPassword && this.validateState.isRepeat) {
        this.isValidation = true
      } else {
        this.isValidation = false
      }
    },
    goSubmit() {
      if (this.isValidation) {
        this.$fetch.post(USER_SIGNUP, { ...this.form, petname: this.form.username }).then(res => {
          this.buttonWarnCode = res.code
          this.buttonWarn = res.message
          if (res.code === 0) {
            setTimeout(() => {
              this.$emit('toggle-to-signin')
            }, 1500)
          }
        })
      }
    }
  }
}
</script>

<style module lang="postcss">
.title {
  margin: 1.5em auto;
  text-align: center;
}
</style>
