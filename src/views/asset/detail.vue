<template>
  <modMain :title="item.name" class="noPadding buydetail">
    <div class="buydetail-main">
      <div class="banner">
        <img src="@/assets/image/tsl/product1.jpeg" alt="" />
      </div>
      <div class="buydetail-txt">
        <p>
          Pembangkitan energi: <span>{{ item.specification }}kWh</span>
        </p>
        <p>
          {{ $t('product.txt22') }}:
          <span>
            {{ (item.returnRate * 100).toFixed(1) }}
            %</span
          >
        </p>
        <p>
          {{ $t('product.txt6') }}:
          <span>
            {{ $utils.currencyType }}
            {{ $utils.getkStr(item.actualPrice * item.returnRate) }}</span
          >
        </p>
        <p>
          Periode pengembalian:
          <span>{{ item.cycle }}{{ $t('product.txt13') }}</span>
        </p>
        <p>
          Total:
          <span>
            {{ $utils.currencyType
            }}{{
              $utils.getkStr(item.actualPrice * item.returnRate * item.cycle)
            }}</span
          >
        </p>
        <div class="buydetail-price">
          <p>邀请朋友佣金</p>
          <p>{{ $utils.currencyType }}{{ item.actualPrice * 0.005 }}</p>
          <!-- <img src="@/assets/image/tsl/icon3.png" alt="" /> -->
        </div>

        <div class="product-info">
          <p>产品介绍</p>
          <p>产品详情:</p>
          <p class="zhu">
            注：所有远程太阳能设备均由特斯拉检查和管理，并出售给政府能源回收公司，以促进经济增长和环境保护。
          </p>
          <p>
            1.最多购买100套,价格为{{ $utils.currencyType }}{{ item.actualPrice
            }}<br />2.每日回报{{
              item.returnRate
            }}%,总回报1000%.<br />3.收益每日发放,到期返还本金.4.您可以享受朋友投资的8%+2%的红利
          </p>
          <div class="procut-desc">
            Tesla Powerwall 是共享经济的能源平台。<br />推动新能源发展，造福世界人民。<br />特斯拉将在世界各地阳光充足的地方建造大型太阳能发电站。<br />让每一位用户都获得新能量。
          </div>
          <img src="@/assets/image/tsl/pro1.png" alt="" />
        </div>
      </div>
    </div>

    <div class="inver-btn">
      <van-button class="btn" :loading="isLoading" @click="showBuy">{{
        $t('product.txt24')
      }}</van-button>
    </div>
    <!-- <div class="buydetail-main">
      <div class="product-img">
        <van-image width="100%" lazy-load :src="imgBaseUrl + item.imgUrl" />
        <p>
          {{ $t('product.txt29') }}:{{ $utils.currencyType
          }}{{ $utils.getkStr(item.actualPrice) }}
        </p>
        <p>{{ $t('product.txt2') }}:{{ item.name }}</p>
      </div>
      <div class="product-parameter">
        <div class="product-tit">
          {{ $t('product.txt1') }}
        </div>
        <div class="product-tabel">
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt2') }}</div>
            <div class="product-value">{{ item.name }}</div>
          </div>
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt6') }}</div>
            <div class="product-value">
              {{ $utils.currencyType }}
              {{ $utils.getkStr(item.actualPrice * item.returnRate) }}
            </div>
          </div>
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt22') }}</div>
            <div class="product-value">
              {{ (item.returnRate * 100).toFixed(2) }}%
            </div>
          </div>
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt3') }}</div>
            <div class="product-value">1/{{ $t('product.txt12') }}</div>
          </div>
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt4') }}</div>
            <div class="product-value">{{ $t('product.txt11') }}</div>
          </div>
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt5') }}</div>
            <div class="product-value">{{ item.description }}</div>
          </div>

          <div class="product-info">
            <div class="product-label">{{ $t('product.txt7') }}</div>
            <div class="product-value">
              {{ item.cycle }} {{ $t('product.txt13') }}
            </div>
          </div>
          <div class="product-info">
            <div class="product-label">{{ $t('product.txt8') }}</div>
            <div class="product-value">
              {{ Math.ceil(1 / item.returnRate) }} {{ $t('product.txt13') }}
            </div>
          </div>
        </div>
        <div
          class="product-desc"
          v-html="$t(`product.txt26[${item.id - 2}]`) + $t('product.txt27')"
        ></div>
      </div>
    </div>

 -->
    <pop-dialog
      ref="dia"
      :show="showPop"
      isCan
      @popcon="popcon"
      @popcan="popcan"
    >
      <p class="pop-txt">{{ $t('product.txt9') }}</p>
    </pop-dialog>
  </modMain>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      buyLoading: false,
      item: null,
      value: 0,
      postData: {
        volume: 1,
        commodityId: 0,
      },
      balanceNumber: 0,
      actualPrice: 0,
      amount: 0,
      showPop: false,

      level: ['1', '2', '3', '4', '5'],

      isBuy: false,
      popText: '',
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    // toTal() {
    //   if (this.item) {
    //     let { actualPrice, returnRate } = this.item
    //     return Number((actualPrice * returnRate * 180).toFixed(2))
    //   }
    //   return 0
    // },
  },
  created() {
    this.item = JSON.parse(this.$route.query.data)
    // this.isBuy = this.item.isBuy
    // this.actualPrice = this.$utils.getkStr(this.item.actualPrice)
    // this.amount = this.$utils.getkStr(
    //   this.item.returnRate * this.item.actualPrice * this.item.cycle
    // )
    // this.balanceNumber =
    // this.userAccount.balance - this.userAccount.freezeCapital
    //  $utils.getkStr(item.returnRate * item.actualPrice)
  },

  methods: {
    ...mapActions({
      orderPlace: 'order/orderPlace',
    }),

    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    showBuy() {
      let vm = this
      if (this.isLogin()) {
        this.showPop = true
      }
    },
    popcon() {
      this.showPop = false
      if (!this.isBuy) {
        this.submit()
      }
    },
    popcan() {
      this.showPop = false
    },
    submit() {
      this.buyLoading = true
      let item = this.item
      this.postData.commodityId = item.id
      this.orderPlace(this.postData)
        .then(res => {
          this.buyLoading = false
          this.show = false
          if (res.code == 0) {
            this.showDialog(this.$t('product.txt28'))
            // setTimeout(() => {
            //   this.$router.push('/notice')
            // }, 300)
          } else if (res.code == 3002) {
            setTimeout(() => {
              this.$dialog
                .confirm({
                  title: '',
                  message: this.$t('dialog.txt4'),
                  cancelButtonText: this.$t('dialog.txt2'),
                  confirmButtonText: this.$t('dialog.txt5'),
                })
                .then(() => {
                  this.$router.push({
                    path: '/deposit',
                  })
                })
                .catch(() => {
                  // on cancel
                })
            }, 1000)
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(res => {
          this.buyLoading = false
        })
    },
  },
}
</script>
<style lang="less" scoped>
.buydetail {
  /deep/ .single-content {
    // padding: 14px !important;
    padding-bottom: 100px !important;
    .buydetail-main {
      padding: 10px;
      .banner {
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
      }
      .buydetail-txt {
        margin-top: 20px;
        p {
          display: flex;
          color: #fff;
          margin-bottom: 20px;
          &:nth-of-type(5) {
            background: rgba(0, 113, 178, 0.3) !important;
            line-height: 30px;
            border-radius: 6px;
            padding: 0 10px;
          }
          span {
            margin-left: auto;
            color: #fadda7;
          }
        }
      }
      .buydetail-price {
        background: rgb(255, 38, 131);
        border-radius: 6px;
        padding: 0 10px;
        position: relative;
        line-height: 36px;
        display: flex;
        align-items: center;
        p {
          margin-bottom: 0;
          &:nth-of-type(2) {
            margin-left: auto;
          }
        }
      }
      .product-info {
        box-shadow: 0 0.1rem 0.32rem 0 hsl(0deg 0% 100% / 12%);
        border-radius: 6px;
        padding: 10px;
        margin-top: 15px;
        .zhu {
          color: #e03e2d;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
        .procut-desc {
          font-size: 14px;
          line-height: 24px;
          color: #fff;
        }
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
  .inver-btn {
    background: none;
    /deep/ .van-button {
      background: #00a3fe;
      border: 0;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
