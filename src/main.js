/**
 * 项目起始文件
 */
import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'
import * as filters from './filters'
import mixinsValid from './mixins/validator'
import 'nprogress/nprogress.css'
import i18n from './i18n'
Vue.mixin(mixinsValid)
// import LottiePlayer from 'lottie-player-vue'
// Vue.use(LottiePlayer)
// 复制粘贴
import VueClipboard from 'vue-clipboard2'
// if (!localStorage.getItem('t_diskinfo')) {
//   localStorage.setItem('t_diskinfo', 'simulate')
// }
Vue.use(VueClipboard)
// 按需引入
// import { LuckyWheel } from 'vue-luck-draw'
// Vue.components('LuckyWheel', LuckyWheel)

import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import { encrypt, decrypt } from './utils/encryp.js'
Vue.prototype.encrypt = encrypt
Vue.prototype.decrypt = decrypt
// 这里我已经在.babelrc中配资了按需引入了，页面可以不用按需引入
Vue.use(Vant)
import { Lazyload } from 'vant'
Vue.use(Lazyload)
import { ImagePreview } from 'vant'
// 全局注册
Vue.use(ImagePreview)
if (window.appInterface) {
  window.appInterface.setStatusColor('#4476da')
}
// import VueIntro from 'vue-introjs'
// Vue.use(VueIntro)
// import 'intro.js/introjs.css'
// 完整加载
// import LuckDraw from 'vue-luck-draw'
// Vue.use(LuckDraw)
import '@/assets/css/all.less' //引入换肤css
/**********************批量处理全局组件 ***********************/
// 处理首字母大写 abc => Abc
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const requireComponent = require.context('./components', true, /\.vue$/)
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName)
  if (fileName.indexOf('baseComs/') > -1) {
    fileName = fileName.split('/')[2]
  }
  const componentName = changeStr(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )
  // console.log('componentName:', componentName) //全局组件名称
  Vue.component(componentName, config.default || config) // 动态注册该目录下的所有.vue文件
})
/************* end ****************/
// import { Locale } from 'vant'
// import enUS from 'vant/lib/locale/lang/en-US'
// import zhCN from 'vant/lib/locale/lang/zh-CN'
// if (localStorage.getItem('locale') === 'en') {
//   Locale.use('en-US', enUS)
// } else {
//   Locale.use('zh-CN', zhCN)
// }

import '@/icons'
import utils from './utils'
Vue.prototype.$utils = utils
import FastClick from 'fastclick'

// 处理点击事件延迟300ms问题
FastClick.attach(document.body)
// 处理ios点击输入框，要点击多次才能获取到焦点问题
FastClick.prototype.focus = function(targetElement) {
  let length
  if (
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month'
  ) {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
// 全局过滤器注册
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
// 开发环境下面使用vConsole进行调试
// if (process.env.NODE_ENV === 'development') {
//   const VConsole = require('vconsole')
//   new VConsole()
// }
// import GSignInButton from 'vue-google-signin-button'
// Vue.use(GSignInButton)

// import FBSignInButton from 'vue-facebook-signin-button'
// Vue.use(FBSignInButton)

// Number.prototype.toFixed = n => {
//   n = n ? n : 0 //保留的小数位数
//   var num = this + ''
//   var sign = ''
//   //去符号
//   if (num.indexOf('-') > -1 || num.indexOf('+') > -1) {
//     sign = num.substr(0, 1) //符号
//     num = num.substr(1, num.length - 1)
//   }
//   num = num * Math.pow(10, n) + ''
//   //小数点后面的数字是否大于等于5，是 进1
//   var i = num.indexOf('.')
//   if (i > -1) {
//     if (num.substr(i + 1, 1) >= 5) {
//       num = 1 + num * 1 //转为数字运算 否则会进行字符串运算
//     }
//   }
//   num = Math.floor(num)
//   var result = sign + num / Math.pow(10, n)
//   result += '' + new Array(n + 1).join('0') //位数不够的 补0
//   var dot_index = result.indexOf('.')
//   var int_part = result.substr(0, dot_index)
//   var dot_part = result.substr(dot_index + 1, n)
//   return int_part + ',' + dot_part
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
})
