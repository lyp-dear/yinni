<template>
  <div class="merchant">
    <div class="merchant-info" v-for="(item, index) in orderData" :key="index">
      <div class="tit">
        <div class="tit-avatr">
          <template v-if="!item.logo">
            <img src="@/assets/image/my/icon_mrtx_nor@2x.png" alt="" />
          </template>
          <template v-else>
            <img :src="imgBaseUrl + item.logo" alt="" />
          </template>
        </div>
        <p>{{ $t('exchange.txt14') }}{{ item.name }}</p>
      </div>
      <div class="exchange-label-value">
        <p>
          <span>{{ $t('exchange.txt17') }}</span>
          <span>
            {{
              $utils.getkStr(
                (item.limitAmount - item.usedAmount) / item.usdtPrice
              )
            }}
            USDT</span
          >
        </p>
        <p>
          <span>{{ $t('exchange.txt18') }}</span>
          <span>
            {{ $utils.currencyType }}{{ $utils.getkStr(item.maxAmount) }}
          </span>
        </p>
        <p>
          <span>{{ $t('exchange.txt16') }}</span>
          <span>{{ $utils.formatDecimal(item.runPoint * 100, 1) }}%</span>
        </p>
        <p class="start-level">
          <span>
            {{ $t('exchange.txt39[0]') }}{{ $t('exchange.txt39[1]')
            }}{{ levelMerchant(item) }}{{ $t('exchange.txt39[2]') }}
          </span>
        </p>
      </div>
      <div class="btn">
        <van-button round type="info" @click="seeDetail(item)">{{
          $t('exchange.txt20')
        }}</van-button>
        <van-button round type="info" @click="exchange(item)"
          >{{ $t('exchange.txt1') }} exchange</van-button
        >
      </div>
    </div>
    <pop-dialog
      ref="dia"
      :show="showPop"
      :isCan="isBuy ? true : false"
      @popcon="popcon"
      @popcan="popcan"
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

    <loadding v-if="isShowLoadding"></loadding>

    <no-data
      v-else-if="!isShowLoadding && (!orderData || orderData.length == 0)"
    ></no-data>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.getList()
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
  },
  data() {
    return {
      buyLoading: false,
      parame: {
        page: 1,
        size: 100,
      },
      orderData: [],
      item: {
        name: '',
        maxAmount: '',
      },
      isBuy: false,
      popText: '',
      runOrderId: '',
      isShowLoadding: false,
      showPop: false,
    }
  },
  methods: {
    ...mapActions({
      otcList: 'order/otcList',
      matchOrder: 'order/matchOrder',
      runOrder: 'order/runOrder',
    }),
    levelMerchant(item) {
      let str = ''
      if (item.maxAmount) {
        switch (item.maxAmount) {
          case 500:
            str = ' junior '
            break
          case 1000:
            str = ' 1-star '
            break
          case 5000:
            str = ' 2-star '
            break
          case 10000:
            str = ' 3-star '
            break
          case 20000:
            str = ' 4-star '
            break
          case 50000:
            str = ' 5-star '
            break
        }

        return str
      }
    },
    getList() {
      this.isShowLoadding = true
      this.otcList(this.parame)
        .then(res => {
          this.isShowLoadding = false
          if (res.code == 0) {
            this.orderData = res.data
          }
        })
        .catch(res => {
          this.isShowLoadding = false
        })
    },
    exchange(item) {
      this.item = Object.assign({}, item)
      let params = {
        merchantId: item.id,
      }
      if (this.buyLoading) return
      this.buyLoading = true

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
            console.log(1111)
          } else {
            this.showDialog(res.msg)
          }
        })
        .catch(res => {
          this.buyLoading = false
        })
    },
    popcan() {
      this.showPop = false
      this.isBuy = false
    },
    popcon() {
      this.showPop = false

      this.$nextTick(_ => {
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
      })
    },
    seeDetail(item) {
      this.$router.push({
        path: '/merchantdetail',
        query: {
          data: JSON.stringify(item),
        },
      })
    },
  },
}
</script>
<style lang="less" scoped>
.merchant {
  margin-top: 20px;
  padding-bottom: 40px;
  .merchant-info {
    border: 0.6px solid #e6e6e6;
    border-radius: 10px;
    padding: 10px 10px;
    margin-bottom: 10px;
    position: relative;
    .tit {
      display: flex;
      align-items: center;
      .tit-avatr {
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: #0697ff;
        margin-right: 6px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 16px;
        color: #000000;
        font-weight: 500;
      }
    }
    .exchange-label-value {
      margin-top: 12px;
      .start-level {
        span {
          color: #fda94f;
        }
      }
    }
    .btn {
      display: flex;
      align-items: center;
      margin-top: 10px;
      & > button {
        flex: 1;
        background-image: linear-gradient(
          90deg,
          rgba(91, 186, 255, 0.99) 0%,
          #0697ff 93%
        );
        border: none;
        font-size: 15px;
        font-weight: 500;
        color: #ffffff;
        &:nth-of-type(1) {
          margin-right: 7px;
        }
        &:nth-of-type(2) {
          margin-left: 7px;
        }
      }
    }
  }
}
</style>
