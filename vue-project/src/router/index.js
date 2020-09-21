import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import router from '../router'
import Index from '../view/home/index/Index'
import Login from "../view/admin/login/Login"
import Admin from "../view/admin/admin/admin"
import home_page from "../view/admin/admin/administration/home_page";
import personal_center from "../view/admin/admin/administration/account_administration/personal_center";
import safety_center from "../view/admin/admin/administration/account_administration/safety_center";
import web_notice from "../view/admin/admin/administration/account_administration/web_notice";
import user_administration from "../view/admin/admin/administration/web_administration/user/user_administration";

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
      children: [
        { path: '/admin/home',name: 'home_page',component: home_page },
        { path: '/admin/personalCenter',name: 'personal_center',component: personal_center },
        { path: '/admin/safetyCenter',name: 'safety_center',component: safety_center },
        { path: '/admin/notice',name: 'notice',component: web_notice },
        { path: '/admin/userAdministration',name: 'user_administration',component: user_administration }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
