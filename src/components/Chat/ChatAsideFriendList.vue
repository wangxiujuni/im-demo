<template>
  <div>
    <ChatAsideItem
      v-for="(friend,index) in $store.getters.friendsData"
      v-slot="slotProps"
      :petname="friend.petname"
      :detailOrMessage="friend.detail"
      :avatarUrl="friend.avatarUrl"
      :username="friend.username"
      :key="index"
    >
      <svg
        :class="slotProps.moduleStyle.icon"
        aria-hidden="true"
        @click="confirmDelete({petname:friend.petname,username:friend.username})"
      >
        <use xlink:href="#icon-close-circle-fill"></use>
      </svg>
    </ChatAsideItem>

    <div v-if="isDialogRender" :class="$style.dialog">
      <div :class="$style.tips">确认删除好友{{dialogData.petname}}吗？</div>
      <button :class="$style.button" @click="deleteFriend">确认</button>
      <button :class="$style.button" @click="isDialogRender=false">取消</button>
    </div>

    <BaseAlert :isRender="baseAlert.isRender" :type="baseAlert.type" :message="baseAlert.message"></BaseAlert>
  </div>
</template>

<script>
import { DELETE_FRIEND } from '@/api/api'
import ChatAsideItem from './ChatAsideItem'
import BaseAlert from '@/common/BaseAlert'


export default {
  components: {
    ChatAsideItem,
    BaseAlert
  },
  data() {
    return {
      isDialogRender: false,
      dialogData: {},
      baseAlert: {
        type: true,
        isRender: false,
        message: '删除好友成功！'
      }
    }
  },
  methods: {
    confirmDelete(payload) {
      this.dialogData = payload
      this.isDialogRender = true
    },
    deleteFriend() {
      this.$fetch.delete(DELETE_FRIEND, { username: this.dialogData.username }).then(res => {
        res.code = res.code || 2
        this.isDialogRender = false
        this.baseAlert.isRender = true
        setTimeout(() => {
          this.baseAlert.isRender = false
          this.baseAlert.type = true
          this.baseAlert.message = '删除好友成功！'
        }, 2000)
        if (res.code !== 0) {
          this.baseAlert.type = false
          this.baseAlert.message = '删除好友失败,服务器出现错误！'
        }
      })
    }
  }
}
</script>

<style module lang="postcss">
.dialog {
  position: fixed;
  width: 20em;
  height: 10em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  z-index: 1;
}
.tips {
  padding: 2em 0;
}
.dialog,
.button {
  border: 1px solid rgb(126, 149, 192);
  border-radius: 6px;
}
.button {
  display: inline-block;
  padding: 0.5em 1em;
  margin: 1em 2em;
}
</style>
