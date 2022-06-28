<template>
  <div class="my-otc">
    <div class="balance-box">
      <div class="balance-info">
        <p>
          {{ $utils.currencyType }}{{ totalData ? totalData.sumProfit : 0 }}
        </p>
        <p>{{ $t('order.txt9') }}</p>
      </div>
      <div class="balance-info">
        <p>
          {{ $utils.currencyType }}{{ totalData ? totalData.perProfit : 0 }}
        </p>
        <p>{{ $t('product.txt6') }}</p>
      </div>
    </div>

    <div class="order-list">
      <div class="merchant-container">
        <div class="asset-info" v-for="(item, index) in orderData" :key="index">
          <div class="asset-img">
            <van-image width="100%" lazy-load :src="imgBaseUrl + item.imgUrl" />
          </div>
          <div class="asset-bot">
            <div class="asset-name">
              <span>
                {{ item.name }}
              </span>
              <span>{{ $t('product.txt14') }}</span>
            </div>
            <div class="asset-params">
              <div class="asset-params-left">
                <p>{{ $t('product.txt6') }}</p>
                <p>
                  {{ $utils.currencyType }}
                  {{ $utils.getkStr(item.amount * item.returnRate) }}
                </p>
              </div>
              <div class="asset-params-center">
                <p>{{ $t('order.txt9') }}</p>
                <p>{{ item.profit }}</p>
              </div>
              <div class="asset-params-right">
                <p>{{ $t('product.txt17') }}</p>
                <p>
                  {{ $utils.currencyType }}{{ $utils.getkStr(item.amount) }}
                </p>
              </div>
            </div>
            <div class="asset-time">
              <p>{{ $t('product.txt7') }}:{{ item.cycle }}</p>
              <p>{{ $t('product.txt20') }}:{{ $t('product.txt21') }}</p>
            </div>
            <div class="asset-rate">
              <p>{{ $t('product.txt22') }}</p>
              <van-progress
                :pivot-text="(item.returnRate * 100).toFixed(1) + '%'"
                :percentage="(item.returnRate * 100).toFixed(1)"
              />
            </div>
            <base-btn
              :btnTitle="
                item.status == 'WORKING' ? $t('order.txt5') : $t('order.txt6')
              "
              @btnClick="$emit('goexchange', item)"
              :disabled="false"
            ></base-btn>
          </div>
        </div>
      </div>
    </div>
    <loadding v-if="isShowLoadding"></loadding>

    <no-data
      v-else-if="!isShowLoadding && (!orderData || orderData.length == 0)"
    ></no-data>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      level: ['1', '2', '3', '4', '5'],

      orderData: [],
      parame: {
        page: 1,
        size: 100,
      },
      isShowLoadding: false,

      totalData: null,
      // isTodayShow: false,
    }
  },
  // computed: {
  //   ...mapGetters({
  //     userInfo: 'user/userInfo',
  //   }),
  // },
  mounted() {
    this.getOrderData()
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
    // var d = new Date(this.userInfo.gmtCreate.toString().replace(/-/g, '/'))
    // var todaysDate = new Date()
    // if (d.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    //   this.isTodayShow = true
    // } else {
    //   this.isTodayShow = false
    // }
  },
  methods: {
    ...mapActions({
      orderUserList: 'order/orderUserList',
      orderUserSta: 'order/orderUserSta',
    }),
    showBuy(item) {
      let obj = Object.assign({}, item)
      obj.isBuy = true
      // this.currentData = item
      // this.show = true
      this.$router.push({
        path: '/investimento',
        query: {
          data: JSON.stringify(obj),
        },
      })
    },
    getTotal() {
      this.orderUserSta().then(res => {
        if (res.code == 0) {
          this.totalData = res.data
        }
      })
    },
    getOrderData() {
      this.isShowLoadding = true
      this.orderUserList(this.parame)
        .then(res => {
          this.isShowLoadding = false
          this.getTotal()
          if (res.code == 0) {
            let { records } = res.data
            // this.redItem = records.find(d => d.originalPrice == 100000)
            this.orderData = res.data.records
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(res => {
          this.isShowLoadding = false
        })
    },
  },
}
</script>
<style lang="less" scoped>
.my-otc {
  padding-bottom: 60px;
  .balance-box {
    margin: 20px 0 15px 0;
    width: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(91, 186, 255, 0.99) 0%,
      #0697ff 93%
    );
    display: flex;
    // align-items: center;
    padding: 16px 15px;
    border-radius: 10px;
    justify-content: center;
    .balance-info {
      p {
        font-size: 18px;
        color: #ffffff;
        font-weight: 500;
        text-align: center;
        &:nth-of-type(2) {
          margin-top: 12px;
          font-size: 14px;
          // padding-left: 16px;
        }
      }
      &:nth-of-type(1) {
        padding-right: 28px;
        border-right: 1px solid #fff;
      }
      &:nth-of-type(2) {
        padding-left: 28px;
      }
    }
  }
  .merchant-btn {
    .van-button {
      background: #f0f0f0 !important;
      border-color: #f0f0f0 !important;
      color: #9b9b9b;
      &.active {
        background: #0094f6 !important;
        border-color: #0094f6 !important;
        color: #fff;
      }
    }
  }
}
</style>
