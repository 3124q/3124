import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import router from '../router'
import Index from '../view/home/index/Index'
import Login from "../view/admin/login/Login"
import Admin from "../view/admin/admin/admin"
import homeLogin from "../view/home/login/login"
import homeEnroll from "../view/home/enroll/enroll"
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
import PersonalCenterMynews from "../view/home/personal_center/PersonalCenterMynews";
import HelperCenter from "../view/home/personal_center/HelperCenter";
import famously_pulish from "../view/admin/admin/administration/business_administration/famously/famously_pulish";
import hotel_pulish from "../view/admin/admin/administration/business_administration/hotel/hotel_pulish";
import famously_administration
  from "../view/admin/admin/administration/business_administration/famously/famously_administration";
import famously_comment from "../view/admin/admin/administration/business_administration/famously/famously_comment";
import propaganda from "../view/admin/admin/administration/business_administration/famously/propaganda";
import search from "../view/home/search/search";
import hotel_details from "../view/home/hotel_details/hotel_details";
import room_pulish from "../view/admin/admin/administration/business_administration/hotel/room_pulish";
import room_administration from "../view/admin/admin/administration/business_administration/hotel/room_administration";
import hotel_comment from "../view/admin/admin/administration/business_administration/hotel/hotel_comment";

import Scenic from "../view/home/famously_details/Scenic";
import Selfdrive from "../view/home/famously_details/Selfdrive";
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
      component: Index,
    },
    {
      path: '/Scenic',
      name: 'Scenic',
      component: Scenic,
    },
    {
      path: '/Selfdrive',
      name: 'Selfdrive',
      component: Selfdrive,
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/hotelDetails',
      name: 'hotel_details',
      component: hotel_details
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
        { path: '/admin/famously_publish',name: 'famously_publish',component: famously_pulish},
        { path: '/admin/hotel_pulish',name: 'hotel_publish',component: hotel_pulish},
        { path: '/admin/famouslyCommnet',name: 'famously_comment',component: famously_comment},
        { path: '/admin/famouslyPropaganda',name: 'propaganda',component: propaganda},
        { path: '/admin/hotel_pulish',name: 'hotel_publish',component: hotel_pulish},
        { path: '/admin/roomPulish',name: 'room_publish',component: room_pulish},
        { path: '/admin/roomAdministration',name: 'room_administration',component: room_administration},
        { path: '/admin/hotelOomment',name: 'hotel_comment',component: hotel_comment},
        { path: '/admin/famouslyAdministration',name: 'famously_administration',component: famously_administration},
        { path: '/admin/businessAdministration',name: 'business_administration',component: business_administration},
        { path: '/admin/administrators',name: 'administrators_administration',component: administrators_administration}
      ]
    },
    {path:"/helpercenter/:id",name:'helpercenter',component:HelperCenter},
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
        {
          path:'/mynews',
          name:'mynews',
          component:PersonalCenterMynews
        },
      ]
    },
    {
      path: '/homeLogin',
      name: 'homeLogin',
      component: homeLogin
    },
    {
      path: '/homeEnroll',
      name: 'homeEnroll',
      component: homeEnroll
    },
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
