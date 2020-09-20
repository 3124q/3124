import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import router from '../router'
import Index from '../view/home/index/Index'
import Login from "../view/admin/login/Login"
import Admin from "../view/admin/admin/admin"
import home_page from "../view/admin/admin/administration/home_page";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: 'home',
      name: 'home',
      component: home_page
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
