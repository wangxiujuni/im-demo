<template>
  <div :class="$style.wrapper">
    <span>旧密码：</span>
    <input :class="$style.input" v-model="form.oldPassword" type="password">
    <span>新密码：</span>
    <input :class="$style.input" v-model="form.newPassword" type="password">
    <span>重复新密码：</span>
    <input :class="$style.input" v-model="form.repeatPassword" type="password">
    <button :class="$style.button" @click="goSubmit">确认</button>
    <BaseAlert :type="alert.type" :message="alert.message" :isRender="alert.isRender"></BaseAlert>
  </div>
</template>

<script>
import BaseAlert from '@/common/BaseAlert'
import { UPDATE_PASSWORD } from '@/api/api'

export default {
  components: {
    BaseAlert
  },
  data() {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
      },
      alert: {
        type: false,
        message: '',
        isRender: false
      }
    }
  },
  methods: {
    goSubmit() {
      this.$fetch.post(UPDATE_PASSWORD, this.form).then(res => {
        if (res.code === 0) {
          this.alert.type = true
        } else {
          this.alert.type = false
        }
        this.alert.message = res.message
        this.alert.isRender = true
        setTimeout(() => {
          this.alert.message = ''
          this.alert.isRender = false
        }, 2000)
      })
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  padding-top: 3em;
}
.input {
  display: block;
  width: 80%;
  height: 4em;
  margin: 1em auto;
  border-radius: 0.5em;
  border: thin solid gray;
}
.button {
  display: block;
  width: 5em;
  height: 2em;
  font-size: 25px;
  margin: 0.8em auto;
  color: white;
  border-radius: 0.5em;
  background-color: rgb(126, 149, 192);
}
.button:hover {
  background-color: rgb(91, 107, 138);
}
</style>
