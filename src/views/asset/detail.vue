<template>
  <modMain :title="$t('product.txt1')" class="noPadding buydetail">
    <div class="buydetail-main">
      <div class="banner">
        <img src="@/assets/image/sun/prodetail.jpg" />
      </div>
      <div class="product-parameter">
        <div class="product-parameter-title">
          <span>Pembelian tidak terbatas</span>
          <span>SunPower Maxeon</span>
        </div>
        <div class="product-parameter-data">
          <p class="product-price">
            <span> {{ $t('product.txt17') }}:</span> {{ $utils.currencyType
            }}{{ $utils.getkStr(item.actualPrice) }}
          </p>
          <div class="product-rate-box">
            <div>
              <p>{{ (item.returnRate * 100).toFixed(1) }}%</p>
              <p>{{ $t('product.txt22') }}</p>
            </div>
            <div>
              <p>
                {{ $utils.currencyType
                }}{{ $utils.getkStr(item.actualPrice * item.returnRate) }}
              </p>
              <p>{{ $t('product.txt6') }}</p>
            </div>
            <div>
              <p>{{ item.cycle }}{{ $t('product.txt13') }}</p>
              <p>Periode pengembalian</p>
            </div>
          </div>
          <div class="product-desc-box">
            <div>Laporan pendapatan harian</div>
            <div>Jaminan keamanan dana</div>
          </div>
        </div>
      </div>
      <div class="product-calculation">
        <p>Algoritme pendapatan proyek</p>
        <p>
          Total return = daily return * investment cycle; rate of return = total
          return / value
        </p>
        <div class="product-img-box">
          <div><img src="@/assets/image/sun/detail1.png" alt="" /></div>
          <div><img src="@/assets/image/sun/detail2.png" alt="" /></div>
          <div><img src="@/assets/image/sun/detail3.png" alt="" /></div>
        </div>
      </div>
      <div class="product-calculation">
        <p>{{ $t('product.txt2') }}</p>
        <p>{{ item.name }}</p>
      </div>

      <div class="product-calculation">
        <p>Periode pengembalian</p>
        <p>{{ item.cycle }}{{ $t('product.txt13') }}</p>
      </div>
      <div class="product-calculation">
        <p>Perusahaan mitra</p>
        <p>Addepar, Inc. Skuchain, Inc.</p>
      </div>
      <div class="product-calculation">
        <p>Perhitungan tingkat pengembalian</p>
        <p>rate of return = total return / value</p>
      </div>
      <div class="product-calculation">
        <p>Cara Pembayaran</p>
        <p>Network transfer</p>
      </div>
      <div class="product-calculation">
        <p>Keamanan keuangan</p>
        <p>
          Dana yang dibeli oleh pengguna diatur oleh Bank Negara Indonesia dan
          digunakan untuk menghasilkan listrik untuk rumah tangga dan
          perusahaan. Perusahaan telah menandatangani perjanjian jual beli
          listrik dengan Jaringan Nasional Indonesia, dan semua panel
          fotovoltaik memiliki pendapatan yang stabil.
        </p>
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
      .product-parameter {
        border: 1px solid #d7d7d7;
        background: #fff;
        border-radius: 6px;
        overflow: hidden;
        .product-parameter-title {
          background: linear-gradient(90deg, #f55160, #a0041c);
          display: flex;
          align-items: center;
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
          & > span {
            font-size: 14px;
            color: #fff;
            &:nth-of-type(2) {
              margin-left: auto;
            }
          }
        }
        .product-parameter-data {
          padding: 20px 10px 10px 10px;
          .product-price {
            color: #4476da;
            span {
              color: #2e2e2e;
              font-weight: 500;
            }
          }
          .product-rate-box {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            & > div {
              flex: 1;
              text-align: center;
              p {
                font-size: 14px;

                color: #4476da;
                &:nth-of-type(1) {
                  font-weight: 500;
                }
                &:nth-of-type(2) {
                  color: #2e2e2e;
                  margin-top: 6px;
                }
              }
            }
          }
        }
        .product-desc-box {
          margin-top: 10px;
          display: flex;
          & > div {
            flex: 1;
            border-radius: 6px;
            background: #df3688;
            color: #fff;
            height: 96px;
            line-height: 30px;
            text-align: center;
            padding: 10px;
            &:nth-of-type(1) {
              margin-right: 6px;
            }
            &:nth-of-type(2) {
              background: #369ff7;
              margin-left: 6px;
            }
          }
        }
      }
      .product-calculation {
        border: 1px solid #d7d7d7;
        background: #fff;
        border-radius: 6px;
        overflow: hidden;
        padding: 20px 10px 10px 10px;
        margin-top: 10px;
        p {
          &:nth-of-type(1) {
            margin-bottom: 10px;
            font-size: 14px;
          }
          &:nth-of-type(2) {
            font-size: 12px;
            line-height: 24px;
          }
        }
        .product-img-box {
          display: flex;
          margin-top: 10px;
          justify-content: space-between;
          > div {
            flex: 0 0 80px;
            width: 80px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
