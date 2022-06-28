<template>
  <div class="bit-nav flex" :class="{ flexbot: $route.path == '/transaction' }">
    <!-- <template v-if="$route.path == '/position' && title != ''">
      <div class="title">
        {{ title }}
      </div>
      <div class="right-filter" v-if="positionType == 1" @click="showFilter">
        <img src="@/assets/image/icon/icon_transactions_screen@2x.png" alt="" />
      </div>
    </template> -->
    <!-- <template v-else-if="$route.path == '/transaction'">
      <div class="left">
        <div class="deposit" @click="inMoney">
          {{$t('bill.deposit')}}
        </div>
      </div>
      <div class="middle" @click="changeAccount">
        <div v-if="currentAccount == 0" class="title-account">
          {{$t('home.practice')}}
        </div>
        <div v-else class="title-account"> {{$t('home.real')}}</div>
        <div class="account">
          ₮{{ personalMsgKey[0].value }}
          <i :class="filtershow ? 'icons-down up' : 'icons-down'"></i>
        </div>
      </div>
      <div class="right" @click="$router.push('/rule')">
        {{$t('home.rule')}}
      </div>
    </template> -->
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { bus } from '@/utils/bus.js'
export default {
  data() {
    return {
      // currentAccount: 0, //0模拟盘 1 实盘
      filtershow: false,
    }
  },
  computed: {
    ...mapState({
      positionType: 'positionType',
    }),
    ...mapGetters({
      userInfo: 'user/userInfo',
      personalMsgKey: 'account/personalMsgKey',
      diskinfo: 'diskinfo',
    }),
    currentAccount() {
      let type = this.diskinfo
      return type == 'actual' ? 1 : 0
    },
  },
  // created() { },
  // mounted() {
  //   bus.$on('closeshowAccount', () => {
  //     this.filtershow = false
  //   })
  // },
  // destroyed() {
  //   bus.$off('closeshowAccount')
  //   bus.$off('showFilter')
  // },
  methods: {
    showFilter() {
      bus.$emit('showFilter')
    },
    changeAccount() {
      this.filtershow = true
      bus.$emit('showAccount')
    },
    inMoney() {
      if (this.userInfo.source == 2) {
        this.$router.push('/login')
      } else {
        if (this.currentAccount == 0) {
          this.$dialog
            .confirm({
              message: this.$t('sys.toreal'), //'请先切换至真实账户',
              confirmButtonText: this.$t('sys.switch'),
              cancelButtonText: this.$t('sys.cancel'),
            })
            .then(res => {
              console.log('res', res)
              if (res == 'confirm') {
                this.disk = 'actual'
                bus.$emit('chargeAccountType', false)
              } else {
                return
              }
            })
          return
        }
        this.$router.push('/deposit')
      }
    },
  },
}
</script>
