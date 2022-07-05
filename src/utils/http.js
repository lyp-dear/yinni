import axios from 'axios'
import router from '../router'
import store from '../store'
import { Toast } from 'vant'

//  var requesting = []
//  var limitTime = 2000 //請求間隔時間
//  var requestingId = ''
//  var time = null;
let baseURl =
  process.env.NODE_ENV === 'production'
    ? 'https://m.ustslenergy.com/r9cs3pfp'
    : process.env.NODE_ENV === 'uat'
    ? 'https://m.ustslenergy.com/r9cs3pfp'
    : '/trade'
axios.defaults.timeout = 100000 //請求過期時間。
axios.defaults.baseURL = baseURl

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  if (
    config.url == '/user/register/encrypt' ||
    config.url == '/code/sms/send/encrypt'
  ) {
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
  }
  config.headers['locale'] = 'id_ID'

  let token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})
// const toLogo = () => {
//   if (window.webkit) {
//     window.webkit.messageHandlers.toLogin.postMessage({})
//     return
//   } else if (window.appInterface) {
//     window.appInterface.toLogin({})
//     return
//   } else {
//     Toast({
//       message:
//         'Your account login invalid，and will be switched to demo account.',
//       duration: 1000,
//       forbidClick: true,
//     })
//     router.replace({
//       path: '/login',
//       query: {
//         redirect: router.currentRoute.fullPath,
//       },
//     })
//     return
//   }
// }

const removeCache = () => {
  localStorage.removeItem('USER_INFO')
  localStorage.removeItem('token')
  store.commit('user/quitLogin')
}
/**
 * 添加响应拦截器，统一处理服务器响应和异常
 */
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        removeCache()
        router.replace({
          path: '/login',
          // query: {
          //     redirect: router.currentRoute.fullPath,
          // },
        })
        break
      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      case 403:
        removeCache()
        Toast({
          // message: '登录过期，请重新登录',
          message: 'Login telah kedaluwarsa, silakan login kembali',
          duration: 1000,
          forbidClick: true,
        })

        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        // setTimeout(() => {
        //   toLogo()
        // }, 1000)
        break

      // 404请求不存在
      case 404:
        Toast({
          message: 'Tidak ada permintaan jaringan',
          duration: 1500,
          forbidClick: true,
        })
        break
      // 其他错误，直接抛出错误提示
      default:
        Toast({
          message: error.response.data.message || 'Anomali jaringan',
          duration: 1500,
          forbidClick: true,
        })
    }

    return Promise.reject(error)
  }
)

export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post2(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params, {
          timeout: 5000 * 3,
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * postFormData方法，对应post请求，用来提交文件+数据
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  postFormData(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        headers: {
          'Content-Type': 'multipart/form-data', //
          Authorization: localStorage.getItem('token'),
        },
        transformRequest: [
          function(data) {
            // 在请求之前对data传参进行格式转换
            const formData = new FormData()
            Object.keys(data).forEach(key => {
              formData.append(key, data[key])
            })
            return formData
          },
        ],
        url,
        method: 'post',
        data: params,
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
}
