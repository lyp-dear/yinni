<template>
  <div class="exchange-all">
    <!-- <top-bg :tit="$t('order.txt1')"> </top-bg> -->
    <div class="exchange-container">
      <div class="exchange-box">
        <exchange></exchange>
      </div>
    </div>
    <pop-dialog ref="dia" :show="showPop" @popcan="popcan" @popcon="popcon">
      <p class="pop-txt">
        {{ popTxt }}
      </p>
    </pop-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import MyOtc from './components/myotc.vue'
import exchange from './components/exchange.vue'

export default {
  components: { MyOtc, exchange },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  data() {
    return {
      active: 0,
      showPop: false,
      popTxt: '',
      tabList: [
        {
          title: this.$t('order.txt2'),
          index: 0,
        },
        {
          title: this.$t('order.txt3'),

          index: 1,
        },
        // {
        //   title: this.$t('exchange.txt6'),
        //   index: 2,
        // },
        // {
        //   title: this.$t('exchange.txt7'),
        //   index: 3,
        // },
      ],
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(1111)
    next(vm => {
      let active = vm.$route.query.active || ''
      if (active) {
        vm.active = 1
        vm.itemClick(Number(active))
      }
    })
  },
  beforeRouteLeave(to, from, next) {
    this.active = 0
    next()
  },
  mounted() {},
  methods: {
    ...mapActions({
      orderUserList: 'order/orderUserList',
    }),
    itemClick(active) {
      this.active = active
    },
    isToday(date) {
      //Code goes here.
      var d = new Date(date.toString().replace(/-/g, '/'))
      var todaysDate = new Date()
      if (d.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
        return true
      } else {
        return false
      }
    },
    goexchange(val) {
      this.showPop = true
      if (val.status == 'WORKING') {
        this.popTxt = this.$t('order.txt7')
      } else {
        this.popTxt = this.$t('order.txt8')
      }
    },
    popcon() {
      this.showPop = false
    },
    popcan() {
      this.showPop = false
    },
  },
}
</script>
<style lang="less" scoped>
.exchange-all {
  position: relative;
  height: 100%;

  .exchange-container {
    position: relative;
    z-index: 2;
    // padding-top: 60px;
    height: 100%;
  }
}
</style>
