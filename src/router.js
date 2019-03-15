import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import User from './views/User.vue'
import LiveChat from './views/LiveChat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/livechat',
      name: 'LiveChat',
      component: LiveChat
    },
    {
      path: '*',
      component: () => import('./views/404.vue')
    }
  ]
})
