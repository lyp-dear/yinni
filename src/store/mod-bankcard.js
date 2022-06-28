export default client => ({
  namespaced: true,
  state: {
    backCardList: [],
  },
  actions: {
    // GET /bank_card/query/user
    getBankCard({ commit }, arg) {
      return client.get('/bind_card/list', arg).then(res => {
        commit('SET_BANK_LIST', res.data)
        return res
      })
    },
    // /bank_card/bind
    // 绑卡
    addBank({ commit }, arg) {
      return client.post('/bind_card/bind', arg).then(res => {
        // commit('ADD_BANK_LIST', res.data)
        return res
      })
    },
    bankCode({ commit }, arg) {
      return client.get('/bankCode/query', arg).then(res => {
        // commit('ADD_BANK_LIST', res.data)
        return res
      })
    },
    // /bindcard/update
    updateBank({ commit }, arg) {
      return client.post('/bind_card/update', arg)
    },
    deleteBank({ commit }, arg) {
      return client.post('/bind_card/delete', arg)
    },
    getWtime({ commit }, arg) {
      return client.get('/withdraw_order/isWithdrawTime', arg)
    },
  },

  getters: {
    isBindBank(state) {
      return state.backCardList.length > 0
    },
    getBankList(state) {
      return state.backCardList
    },
  },
  mutations: {
    SET_BANK_LIST(state, data) {
      state.backCardList = data
    },
    ADD_BANK_LIST(state, data) {
      state.backCardList = [data, ...state.backCardList]
    },
  },
})
