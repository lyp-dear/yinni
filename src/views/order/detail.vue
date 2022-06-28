<template>
  <modMain :title="$t('exchange.txt6')" class="merchant-detail">
    <div class="main">
      <div class="merchant-detail-info">
        <p class="avatr-name">
          <span class="avatr">
            <template v-if="!item.logo">
              <img src="@/assets/image/my/icon_mrtx_nor@2x.png" alt="" />
            </template>
            <template v-else>
              <img :src="imgBaseUrl + item.logo" alt="" />
            </template>
          </span>
          <span>{{ $t('exchange.txt6') }}:</span>
          <span>
            {{ item.name }}
          </span>
        </p>
        <p>
          <span>{{ $t('exchange.txt17') }}</span>
          <span>
            <span>
              {{ $utils.getkStr(item.limitAmount / item.usdtPrice) }}
              USDT</span
            >
          </span>
        </p>
        <p>
          <span>{{ $t('exchange.txt24') }}</span>
          <span>
            {{ $utils.currencyType }}{{ $utils.getkStr(item.maxAmount) }}
          </span>
        </p>
        <p>
          <span>{{ $t('exchange.txt19') }}</span>
          <span>
            {{ $utils.currencyType }}{{ $utils.getkStr(item.usdtPrice) }}
          </span>
        </p>
        <p>
          <span>{{ $t('exchange.txt12') }}</span>
          <span>{{ (item.runPoint * 100).toFixed(1) }}%</span>
        </p>
        <p>
          <span>{{ $t('exchange.txt25') }}</span>
          <span> {{ (item.turnoverRate * 100).toFixed(1) }} %</span>
        </p>
      </div>
    </div>

    <div class="merchant-btn">
      <van-button type="primary" :loading="buyLoading" @click="exchange" block
        >{{ $t('exchange.txt1') }} exchange</van-button
      >
    </div>
    <p class="desc">
      {{ $t('exchange.txt35') }}
    </p>
    <pop-dialog
      ref="dia"
      :isCan="isBuy ? true : false"
      @popcan="popcan"
      :show="showPop"
      @popcon="popcon"
    >
      <div class="buy-info" v-if="isBuy">
        <p>
          <span>{{ $t('exchange.txt6') }}:</span>
          <span>{{ item.name }}</span>
        </p>
        <p>
          <span>{{ $t('exchange.txt21') }}</span>
          <span>{{ $t('index.txt8') }}</span>
        </p>
        <p>
          <span>{{ $t('exchange.txt11') }}</span>
          <span
            >{{ $utils.currencyType }}{{ $utils.getkStr(item.maxAmount) }}
          </span>
        </p>
        <p>
          <span>{{ $t('exchange.txt13') }}</span>
          <span
            >{{ $utils.currencyType
            }}{{ $utils.getkStr(item.maxAmount * item.runPoint) }}
          </span>
        </p>
      </div>
      <p class="pop-txt" v-else>{{ popText }}</p>
    </pop-dialog>
  </modMain>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      item: null,
      buyLoading: false,

      isBuy: false,
      popText: '',
      runOrderId: '',
      showPop: false,
    }
  },
  created() {
    this.item = JSON.parse(this.$route.query.data)
  },
  methods: {
    ...mapActions({
      matchOrder: 'order/matchOrder',
      runOrder: 'order/runOrder',
    }),
    exchange() {
      this.buyLoading = true
      let params = {
        merchantId: this.item.id,
      }
      this.matchOrder(params)
        .then(res => {
          this.buyLoading = false
          if (res.code == 0) {
            this.isBuy = true
            this.showPop = true
            this.runOrderId = res.data.id
          } else if (res.code == 6010) {
            this.isBuy = false
            this.showPop = true

            this.popText = res.msg
          } else {
            this.showDialog(res.msg)
          }
        })
        .catch(res => {
          this.buyLoading = false
        })
    },
    popcon() {
      this.showPop = false

      if (this.isBuy) {
        let params = {
          runOrderId: this.runOrderId,
          merchantId: this.item.id,
        }
        this.runOrder(params).then(res => {
          this.isBuy = false

          if (res.code == 0) {
            this.showDialog(this.$t('exchange.txt33'))
          } else {
            this.showDialog(res.msg)
          }
        })
      } else {
        this.isBuy = false

        this.$router.push('/contract')
      }
    },
    popcan() {
      this.showPop = false
      this.isBuy = false
    },
  },
}
</script>
<style lang="less" scoped>
.merchant-detail {
  background: #f7f7f7;
  .main {
    margin-top: 16px;
    background: #ffffff;
    border: 0.6px solid #e6e6e6;
    border-radius: 10px;
    padding: 20px 16px;
    .merchant-detail-info {
      .avatr-name {
        align-items: center;
        .avatr {
          flex: 0 0 40px;
          width: 40px;
          img {
            width: 40px;
          }
        }
        span {
          &:nth-of-type(2) {
            color: #4a4a4a;
            margin-left: 4px;
          }
          &:nth-of-type(3) {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .desc {
    color: #8b8c8d;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
    line-height: 18px;
  }
  .merchant-btn {
    margin-top: 30px;
    .van-button {
      height: 42px;
      font-size: 15px;
      color: #ffffff;
      font-weight: 500;
      background: #0094f6;
      border-color: #0094f6;
      border-radius: 8px;
    }
  }
}
</style>
