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
import authority_administration
  from "../view/admin/admin/administration/web_administration/administrators/authority_administration";
import administrators_administration
  from "../view/admin/admin/administration/web_administration/administrators/administrators_administration";
import new_administrator from "../view/admin/admin/administration/web_administration/administrators/new_administrator";
import business_administration
  from "../view/admin/admin/administration/web_administration/business/business_administration";
import business_examine from "../view/admin/admin/administration/web_administration/business/business_examine";
import PersonalCenter from "../view/home/personal_center/PersonalCenter";
import PersonalCenterRecharge from "../view/home/personal_center/PersonalCenterRecharge";
import PersonalCenterMywallet from "../view/home/personal_center/PersonalCenterMywallet";
import PersonalCenterChangephone from "../view/home/personal_center/PersonalCenterChangephone";
import PersonalCenterMygroup from "../view/home/personal_center/PersonalCenterMygroup";
import PersonalCenterMyticket from "../view/home/personal_center/PersonalCenterMyticket";
import PersonalCenterMyhotel from "../view/home/personal_center/PersonalCenterMyhotel";
import PersonalCenterMyCollect from "../view/home/personal_center/PersonalCenterMyCollect";
import PersonalCenterPwdchange from "../view/home/personal_center/PersonalCenterPwdchange";
import PersonalCenterSetEmail from "../view/home/personal_center/PersonalCenterSetEmail";
import PersonalCenterMyImformation from "../view/home/personal_center/PersonalCenterMyImformation";

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
        { path: '/admin/userAdministration',name: 'user_administration',component: user_administration },
        { path: '/admin/authority',name: 'authority_administration',component: authority_administration},
        { path: '/admin/newAdministrator',name: 'new_administrator',component: new_administrator},
        { path: '/admin/business_examine',name: 'business_examine',component: business_examine},
        { path: '/admin/businessAdministration',name: 'business_administration',component: business_administration},
        { path: '/admin/administrators',name: 'administrators_administration',component: administrators_administration}
      ]
    },
    {path:"/personalcenter",name:'PersonalCenter',component:PersonalCenter,
      children:[{
        path:'/myimformation',
        name:'myimformation',
        component :PersonalCenterMyImformation
      },
        {
          path:'/setemail',
          name:'setemail',
          component :PersonalCenterSetEmail
        },
        {
          path:'/pwdchange',
          name:'pwdchange',
          component :PersonalCenterPwdchange
        },
        {
          path:'/changephone',
          name:'changephone',
          component :PersonalCenterChangephone
        },
        {
          path:'/mywallet',
          name:'mywallet',
          component :PersonalCenterMywallet
        },
        {
          path:'/recharge',
          name:'recharge',
          component :PersonalCenterRecharge
        },

        {
          path:'/mycollect',
          name:'mycollect',
          component :PersonalCenterMyCollect
        },
        {
          path:'/myhotel',
          name:'myhotel',
          component :PersonalCenterMyhotel
        },
        {
          path:'/myticket',
          name:'myticket',
          component :PersonalCenterMyticket
        },
        {
          path:'/mygroup',
          name:'mygroup',
          component :PersonalCenterMygroup
        },
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
