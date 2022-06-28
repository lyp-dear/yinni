<template>
  <modMain
    :title="$t('deposit.chooseMethod')"
    class="noPadding"
    from="payMethods"
  >
    <div class="pay-methods">
      <div class="bankBox wrap" v-if="list && list.length > 0">
        <p>{{ $t('deposit.paymentMethods') }}</p>
        <template v-for="(item, index) in list">
          <div
            class="bank-item line05"
            :class="{ active: currentitemid == item.id }"
            :key="index"
            @click="choose(item)"
          >
            <div class="left">
              <img
                :src="require('@/assets/image/xapp/' + item.logo + '.jpg')"
                alt
              />
              <div class="name-box">
                <p>{{ item.displayName }}</p>
                <p class="desc">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="ojk">
        <h2>Dukungan kerjasama</h2>
        <img src="@/assets/image/xapp/ojk.png" alt="" />
      </div>
    </div>
    <loadding v-if="isLoading" />
    <no-data v-else-if="!isLoading && list.length == 0"></no-data>
    <com-service />
  </modMain>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isLoading: true,
      list: [],
      loadTimer: null,
      currentitemid: '',
    }
  },
  computed: {
    ...mapGetters({
      isBindBank: 'bankCard/isBindBank',
    }),
    cashType() {
      return this.$route.query.type
    },
  },
  created() {
    this.getList()
    this.getBankCard()
    // if (window.webkit) {
    //   window.webkit.messageHandlers.setNavTitle.postMessage('')
    // } else if (window.appInterface) {
    //   window.appInterface.setNavTitle('')
    // }
  },
  mounted() {
    // this.loadTimer = setInterval(() => {
    //   if (this.list && this.list.length > 0) {
    //     this.isLoading = false
    //     clearInterval(this.loadTimer)
    //   }
    // }, 100)
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     from.meta.keepAlive = !(from.path == '/withdrawal' || from.path == '/deposit')
  //   })
  // },
  methods: {
    ...mapActions({
      queryDisplayList: 'user/queryDisplayList',
      getBankCard: 'bankCard/getBankCard',
    }),
    ...mapMutations({
      setCurrentPaymethod: 'setCurrentPaymethod',
    }),
    choose(item) {
      this.setCurrentPaymethod(item)
      let path = this.cashType == 'PAYMENT_OTC' ? '/deposit' : '/withdrawal'
      if (!this.isBindBank && path == '/withdrawal') {
        this.$dialog
          .confirm({
            title: '',
            message: this.$t('sys.cashCard'),
            cancelButtonText: this.$t('sys.cancel'),
            confirmButtonText: this.$t('sys.goBind'),
          })
          .then(() => {
            this.$router.push({
              path: '/addcard',
              query: {
                from: 'paymethods',
              },
            })
          })
          .catch(() => {
            // on cancel
          })
        return
      }
      this.$router.push({
        path: path,
      })
    },
    getList() {
      let params = {
        cashTypes: this.cashType, //PAYMENT_COIN 钱包充币
      }
      this.queryDisplayList(params).then(res => {
        this.list = res.data || []
        let currentitem =
          this.list && this.list.length > 0 ? this.list[0] : null
        if (currentitem) {
          this.currentitemid = currentitem.id
          this.setCurrentPaymethod(currentitem)
        }

        this.isLoading = false
      })
    },
    openAppDialog(isOpen) {
      // isOpen:1 打开 0关闭
      if (window.webkit) {
        window.webkit.messageHandlers.openAppDialog.postMessage(isOpen)
      } else if (window.appInterface) {
        window.appInterface.openAppDialog(isOpen)
      } else {
        // this.errDialog('just later.')
      }
    },
  },
}
</script>
