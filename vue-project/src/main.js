// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入图标库相关
import './icons/iconfont.css'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'
// 引入axios，进行跨域交互
import axios from 'axios'
// 将axios对象设置为全局
Vue.prototype.$axios = axios
// 配置axios，设置默认路径
axios.defaults.baseURL = '/api'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'hFCa9ZkaOxzxlhOdbtZMq9Qhfz0g9bMG'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
