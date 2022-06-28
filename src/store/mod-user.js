// const url = '/simulate' //实盘
export default client => ({
  namespaced: true,
  state: {
    CheckMem: [],
    isLogin: false,
    user: null, //User
    withdrawDetail: null,
    kycData: null, //临时保存数据
    Account: null,
    moreData: null,
    currentitem: null,
  },
  actions: {
    query({ commit }, arg) {
      return client.get('/user/queryById', arg).then(res => {
        commit('mutQuery', res.data)
      })
    },
    helpImagePage({ commit, state }, arg) {
      return client.get('/helpImage/page', arg).then(res => {
        return res
      })
    },
    userconfigquery({ commit }, arg) {
      return client.get('/user/custom/action/query', arg).then(res => {
        return res
      })
    },
    // account/ queryAccountList
    queryAccountList({ commit }, args = {}) {
      return client.get('/account/queryAccount', args).then(res => {
        commit('SET_ACCOUNT', res.data)
        return res
      })
    },
    // /user/upload/headImg 没有用，暂用http请求
    uploadheadImg({ commit }, arg) {
      return client.post('/upload/img', arg)
    },

    allowance({ commit }, arg) {
      return client.get('/allowance/query', arg).then(res => {
        return res
      })
    },
    ///入金配置列表
    queryRechargeConfig({ commit }, arg) {
      return client.get('/payment_passageway/queryRechargeConfig', arg)
    },

    ///通道列表
    queryDisplayList({ commit }, arg) {
      return client.get('/payment_passageway/queryDisplayList', arg)
    },
    Pay({ commit }, arg) {
      console.log(arg)
      return client.post('/thirdparty/payment/pay', arg)
    },
    place_order({ commit }, arg) {
      console.log(arg)
      return client.post2('/payment_order/place_order', arg)
    },
    //出金
    Usdt_apply({ commit }, arg) {
      console.log(arg)
      return client.post('/withdraw_otc/usdt_apply', arg)
    },
    //存款列表
    paymentList({ commit }, arg) {
      console.log(arg)
      return client.get('/payment_order/user/page', arg)
    },
    //查询用户累计存款金额
    paymentTotal({ commit }, arg) {
      console.log(arg)
      return client.get('/payment_order/user/total', arg)
    },
    //提币记录
    withdrawList({ commit }, arg) {
      return client.get('/withdraw_order/user/page', arg)
    },
    withdrawConfig({ commit }, arg) {
      return client.get('/withdraw_order/query/withdrawConfig', arg)
    },
    //入金汇率
    currencyquery({ commit }, arg) {
      return client.get('/currency/query', arg)
    },
    /**
 * 查询用户钱包列表
 * @param {*} param0
  * @param {*} arg
 *
 * 入参
* {
  symbol (string, optional): 身份证号ID ,
userIdList (integer, optional): 用户Id
}
 */
    burselist({ commit }, arg) {
      return client.request('/user/burse/list', arg)
    },
    ///出金费率
    fee_coin_order({ commit }, arg) {
      return client.get('/withdraw_order/fee_coin_order', arg)
    },
    // /systemConfig/query/fee
    /**
     * 获取费率
     * @param {*} param0
     * @param {*} arg
     */
    queryFee({ commit }, arg) {
      return client.get('/systemConfig/query/fee', arg)
    },
    applyBurse({ commit }, arg) {
      return client.post('/withdraw_order/place_coin_order', arg)
    },
    // amazon/upload
    amazonUpload({ commit, state }, param) {
      return client.post('/upload/s3', param)
    },
    updateUserBasic({ commit }, arg) {
      return client.post('/user/update/updateUserBasic', arg)
    },
    whatsApp({ commit, state }, param) {
      return client
        .get('/whatsApp/queryList', {
          page: 1,
          size: 10,
          enable: true,
        })
        .then(res => {
          let { records } = res.data
          let obj = null
          let url = ''
          if (records && records.length > 0) {
            obj = records[0]
            url = obj.url || 'https://chat.whatsapp.com/DYsecJVdCn03zGOAM1xd4q'
          } else {
            url = 'https://chat.whatsapp.com/DYsecJVdCn03zGOAM1xd4q'
          }
          localStorage.setItem('WATHS_APP_URL', url)
          return res
        })
    },
    codeImg({ commit, state }, param) {
      return client.get('/code/image', param)
    },
    smsSend({ commit, state }, param) {
      return client.post('/code/sms/send/encrypt', param)
    },
    //兑换礼物
    exchageGift({ commit, state }, param) {
      return client.post('/treasure_chest/open', param)
    },
    // /code/image/verify
    verifyCode({ commit, state }, param) {
      return client.get('/code/image/verify', param)
    },
    verifyFakeCode({ commit, state }, param) {
      return client.get('/code/image/fake/verify', param)
    },
    sunshineLast({ commit, state }, param) {
      return client.get('/sunshine/last', param)
    },
    register({ commit }, params) {
      console.log(params)
      // params.brokerCode = params.brokerCode || '0000'
      return client.post('/user/register/encrypt', params)
    },
    login({ commit }, arg) {
      arg.platform = 'H5'
      return client.post('/login', arg).then(res => {
        if (res.code == 0) {
          let { token, user } = res.data
          if (token) localStorage.setItem('token', token)
          commit('mutQuery', user)
        }
        return res
      })
    },
    logout({ commit }, arg) {
      return client.get('/user/logout')
    },
    verifyUsername({ commit }, arg) {
      return client.get('/user/verify/username', arg)
    },
    verifyBroker({ commit }, arg) {
      return client.post('/user/verify/broker', arg)
    },
    // updateUserBasic({ commit }, arg) {
    //   return client.post('/user/upset/kyc', arg)
    // },
    // /user/upload/headImg 没有用，暂用http请求
    uploadheadImg({ commit }, arg) {
      return client.post('/upload/img', arg)
    },
    //上传群组
    sunshineUrl({ commit }, arg) {
      return client.post('/sunshine/url', arg)
    },
    //根据验证码修改登录密码
    updateLoginPwd2({ commit }, arg) {
      return client.post('/user/update/password/login2', arg)
    },
    // / commodity / query
    commodityQuery({ commit }, arg) {
      return client.get('/commodity/query', arg).then(res => {
        return res
      })
    },
    codeVerify({}, args) {
      return client.get('/code/sms/verify', args).then(res => {
        return res
      })
    },
    codeVerify({}, args) {
      return client.get('/code/sms/verify', args).then(res => {
        return res
      })
    },
    // user/queryUserTreeNode    团队列表
    queryUserTreeNode({ commit }, arg) {
      return client.get('/user/queryUserTreeNode', arg).then(res => {
        return res
      })
    },
    // user/queryIncome   用户收益
    queryIncome({ commit }, arg) {
      return client.get('/user/queryIncome', arg).then(res => {
        return res
      })
    },
    // user/queryRank  我的排名
    queryRank({ commit }, arg) {
      return client.get('/user/queryRank', arg).then(res => {
        return res
      })
    },
    queryLucky({ commit }, arg) {
      return client.get('/lucky/queryLuckyDrawCommodity', arg).then(res => {
        return res
      })
    },
    luckyDraw({ commit }, arg) {
      return client.get('/lucky/luckyDraw', arg).then(res => {
        return res
      })
    },
    // /account/queryStatementPage
    queryStatementPage({ commit }, arg) {
      return client.post('/account/queryStatementPage', arg).then(res => {
        return res
      })
    },
    // /withdraw_order/place_otc_order
    applyBurseOtc({ commit }, arg) {
      return client.post('/withdraw_order/place_otc_order', arg).then(res => {
        return res
      })
    },
    linkquery({ commit }, arg) {
      return client.get('/client/caller/links/query', arg).then(res => {
        return res
      })
    },
    userMission({ commit }, arg) {
      return client.get('/userMission/queryList', arg).then(res => {
        return res
      })
    },
    award({ commit }, arg) {
      return client.post('/userMission/award', arg).then(res => {
        return res
      })
    },
    awardStatus({ commit }, arg) {
      return client.get('/userMission/awardStatus', arg).then(res => {
        return res
      })
    },
    awardQueryCount({ commit }, arg) {
      return client.get('/userMission/queryCount', arg).then(res => {
        return res
      })
    },
    getluckyDraw({ commit }, arg) {
      return client.get('/lucky/luckyDraw', arg).then(res => {
        return res
      })
    },
    // /sunshine/youtube
    sunshineYoutube({ commit }, arg) {
      return client.post('/sunshine/youtube', arg).then(res => {
        return res
      })
    },
    loginToken({ commit }, arg) {
      return client.post('/google/login', arg).then(res => {
        if (res.code == 0) {
          let { token, user } = res.data
          if (token) localStorage.setItem('token', token)
          commit('mutQuery', user)
        }
        return res
      })
    },
  },
  getters: {
    isLogin: state => {
      return state.isLogin
    },
    userInfo: state => {
      let user = state.user
      if (!user) {
        let _user = localStorage.getItem('USER_INFO') || null
        if (_user && _user != 'undefined') {
          return JSON.parse(_user)
        }
        return {
          username: null,
          uid: '',
          level: 0,
        }
      }
      return state.user
    },
    userAccount: state => {
      return state.Account
    },
    isKycVerfic: state => {
      let user = state.user
      let kycData = {
        name: '',
        surname: '',
        sex: 1,
        birthday: '',
        country: '',
        city: '',
        postalCode: '',
        address: '',
      }
      Object.keys(kycData).forEach(key => {
        kycData[key] = user[key]
      })
      let arr = Object.keys(kycData).filter(
        v => !kycData[v] && typeof kycData[v] !== 'number'
      )
      return arr <= 0 //true 代表认证过了
    },
    kycCacheData: state => {
      return state.kycData
    },
    getMoreData: state => {
      return state.moreData
    },
    currentPaymethod: state => {
      return state.currentitem
    },
  },

  mutations: {
    updateLucky(state, data) {
      if (state.user && state.user.luckyDraws > 0) {
        state.user.luckyDraws = state.user.luckyDraws - 1
        localStorage.setItem('USER_INFO', JSON.stringify(state.user))
      }
    },
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin
    },
    SET_ACCOUNT(state, data) {
      if (data) {
        state.Account = data
      }
    },
    setMoreData(state, data) {
      state.moreData = data
    },
    mutQuery(state, userInfo) {
      // let user = new User()
      // user.merge(userInfo)
      state.user = userInfo
      console.log('userInfo查询的数据', userInfo)
      localStorage.setItem('USER_INFO', JSON.stringify(userInfo))
      state.isLogin = true
    },
    setCurrentPaymethod(state, data) {
      state.currentitem = data
    },
    UPDATE_USER(state, data) {
      let _user = localStorage.getItem('USER_INFO') || null
      if (!_user) return
      _user = JSON.parse(_user)
      Object.keys(data).forEach(key => {
        _user[key] = data[key]
      })
      state.user = _user
      localStorage.setItem('USER_INFO', JSON.stringify(_user))
    },
    UPDATE_KYC(state, data) {
      let kycData = {
        name: '',
        surname: '',
        sex: 1,
        birthday: '',
        country: '',
        city: '',
        postalCode: '',
        address: '',
      }
      let obj = JSON.parse(localStorage.getItem('KYCDATA') || null)
      if (obj) {
        kycData = Object.assign(obj, data)
      } else {
        Object.keys(data).forEach(key => {
          kycData[key] = data[key] || ''
        })
      }
      state.kycData = kycData
      localStorage.setItem('KYCDATA', JSON.stringify(kycData))
    },
    clearKycData(state) {
      let kycData = {
        name: '',
        surname: '',
        sex: 1,
        birthday: '',
        country: '',
        city: '',
        postalCode: '',
        address: '',
      }
      localStorage.removeItem('KYCDATA')
      state.kycData = kycData
    },
    setRealAuth(state) {
      state.user.realAuth = true
    },
    setfundPasswdBlank(state) {
      state.user.password = true
    },
    SET_WITHDRAW_DETAIL(state, data) {
      state.withdrawDetail = data
    },
    quitLogin(state) {
      state.user = { username: null, uid: '', level: 0 }
      state.Account = null
    },
  },
})
