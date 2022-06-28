export default client => ({
  namespaced: true,
  state: {
    CheckMem: [],
  },
  actions: {
    orderJoin({ commit }, arg) {
      return client.get('/treasure_chest/joinPage', arg).then(res => {
        return res
      })
    },
    orderPlace({ commit }, arg) {
      return client.post('/order/place', arg).then(res => {
        return res
      })
    },
    // /point_product_order/user/list
    orderUserList({ commit }, arg) {
      return client.get('/order/queryPage', arg).then(res => {
        return res
      })
    },
    orderUserSta({ commit }, arg) {
      return client.get('/order/user/sta', arg).then(res => {
        return res
      })
    },
    // /point_merchant/list
    otcList({ commit }, arg) {
      return client.get('/point_merchant/list', arg).then(res => {
        return res
      })
    },
    ///point_run_order/matchOrder
    matchOrder({ commit }, arg) {
      return client.get('/point_run_order/matchOrder', arg).then(res => {
        return res
      })
    },
    matchMerchant({ commit }, arg) {
      return client.get('/point_run_order/matchMerchant', arg).then(res => {
        return res
      })
    },
    runOrder({ commit }, arg) {
      return client.post('/point_run_order/run', arg).then(res => {
        return res
      })
    },
    pendingOrder({ commit }, arg) {
      return client.get('/point_run_order/pending/page', arg).then(res => {
        return res
      })
    },
    dynamicOrder({ commit }, arg) {
      return client.get('/point_run_order/dynamic/page', arg).then(res => {
        return res
      })
    },
    myOrder({ commit }, arg) {
      return client.get('/point_run_order/used/page', arg).then(res => {
        return res
      })
    },

    orderqueryPage({ commit }, arg) {
      return client.get('/order/queryPage', arg).then(res => {
        return res
      })
    },
    // /order/queryOrderTotalByUserId
    queryOrderTotalByUserId({ commit }, arg) {
      return client.get('/order/queryOrderTotalByUserId', arg).then(res => {
        return res
      })
    },
    // /order/orderSettlement
    orderSettlement({ commit }, arg) {
      return client.get('/order/orderSettlement', arg).then(res => {
        return res
      })
    },
    purchaseGoods({ commit }, arg) {
      return client.get('/purchaseGoods/client/queryList', arg).then(res => {
        return res
      })
    },
    createUserInfo({ commit }, arg) {
      return client.post('/purchaseGoods/createUserInfo', arg).then(res => {
        return res
      })
    },
    purchaseGoodsBuy({ commit }, arg) {
      return client.post('/purchaseGoods/buy', arg).then(res => {
        return res
      })
    },
    puruploadImage({ commit }, arg) {
      return client.post('/purchaseGoods/uploadImage', arg).then(res => {
        return res
      })
    },
    clientQuery({ commit }, arg) {
      return client.get('/paymentImage/clientQuery', arg).then(res => {
        return res
      })
    },
    // order/queryOrderCount
    queryOrderCount({ commit }, arg) {
      return client.get('/order/queryOrderCount', arg).then(res => {
        return res
      })
    },
  },
  getters: {
    isLogin: state => {
      return state.isLogin
    },
  },

  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin
    },
  },
})
