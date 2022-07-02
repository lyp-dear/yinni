<template>
  <div class="home">
    <div class="home-top">
      <!-- <div class="downarea" @click="downLoad" v-if="!isApp">
        <div class="downarea-logo">
          <img src="@/assets/image/sun/logo.png" alt="" />
        </div>
        <div class="downarea-name">sunpower.link</div>
        <div class="downarea-btn">
          Download
        </div>
      </div> -->
      <div class="home-top-title">
        <van-sticky>
          <div class="logo">
            <img src="@/assets/image/tsl/logo.png" alt="" />
          </div>
        </van-sticky>
      </div>

      <div class="banner">
        <img src="@/assets/image/sun/banner.jpg" alt="" />
      </div>
      <div class="intive-about">
        <router-link tag="div" to="/notice">
          <div class="intive-about-icon">
            <img src="@/assets/image/tsl/icon1.png" alt="" />
          </div>
          <div class="intive-about-text">
            {{ $t('task.txt107') }}
          </div>
        </router-link>
        <router-link tag="div" to="/about">
          <div class="intive-about-icon">
            <img src="@/assets/image/tsl/icon2.png" alt="" />
          </div>
          <div class="intive-about-text">
            {{ $t('my.txt10') }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="product-container">
      <div class="product-info" v-for="(item, index) in orderData" :key="index">
        <div class="product-tit">Solar PV-700</div>
        <div class="product-img">
          <img src="@/assets/image/tsl/product1.jpeg" alt="" />
        </div>
        <div class="product-txt">
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
          <div class="intive-price">
            <p>邀请朋友佣金</p>
            <p>{{ $utils.currencyType }}{{ item.actualPrice * 0.005 }}</p>
            <img src="@/assets/image/tsl/icon3.png" alt="" />
          </div>
          <div class="btn" @click="showBuy(item)">
            {{ $t('product.txt24') }}
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="showNotic" class="notic-pop">
      <div class="notic-info">
        <div class="title">A harus melihat untuk pengguna baru</div>
        <p class="desc">
          <!-- {{ $t('index.txt45') }} -->
          <!-- <span> {{ $utils.currencyType }}200000 </span> +
          <span> {{ $utils.currencyType }}60000</span> -->
        </p>
        <p>{{ $t('index.txt46[0]') }}</p>
        <p>{{ $t('index.txt46[1]') }}</p>
        <p>{{ $t('index.txt46[2]') }}</p>
      </div>
      <div class="btn" @click="confirme">{{ $t('dialog.txt1') }}</div>
    </van-popup>
  </div>

  <!-- <div class="home">
    <top-bg :tit="$t('index.txt1')"> </top-bg>
    <div class="downapp" @click="downLoad" v-if="!isApp">
      Download App
    </div>
    <div class="home-container">
      <banner></banner>
      <notice></notice>
      <whitdraw-box v-if="userAccount"></whitdraw-box>
      <div class="home-about">
        <div class="about-tit">{{ $t('index.txt2') }}</div>
        <div class="home-about-container">
          <router-link tag="div" to="/about" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon1.png" alt="" />
            </div>
            <p>{{ $t('index.txt2') }}</p>
          </router-link>
          <router-link tag="div" to="/contract" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon2.png" alt="" />
            </div>
            <p>{{ $t('index.txt3') }}</p>
          </router-link>
          <router-link tag="div" to="/gift" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon3.png" alt="" />
            </div>
            <p>{{ $t('index.txt4') }}</p>
          </router-link>
          <router-link
            tag="div"
            :to="{
              path: '/notice',
              query: {
                active: 1,
              },
            }"
            class="home-about-info"
          >
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon4.png" alt="" />
            </div>
            <p>{{ $t('index.txt6') }}</p>
          </router-link>
          <div @click="toService('tggroup')" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon4.png" alt="" />
            </div>
            <p>Tham gia nhóm</p>
          </div>
          <div @click="toService('whats')" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon6.png" alt="" />
            </div>
            <p>{{ $t('index.txt7') }}</p>
          </div>
        </div>
      </div>
      <div class="otc-merchant">
        <div class="merchant-tit">
          <p>{{ $t('index.txt8') }}</p>
          <van-tag round type="primary" size="large">{{
            $t('index.txt9')
          }}</van-tag>
        </div>

        <div class="merchant-container">
          <template v-if="redItem.length > 0">
            <div
              class="asset-info"
              v-for="(item, index) in redItem"
              :key="index"
            >
              <div class="asset-img">
                <van-image
                  width="100%"
                  lazy-load
                  :src="imgBaseUrl + item.imgUrl"
                />
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
                      {{ $utils.getkStr(item.actualPrice * item.returnRate) }}
                    </p>
                  </div>
                  <div class="asset-params-center">
                    <p>{{ $t('product.txt16') }}</p>
                    <p>{{ item.description }}</p>
                  </div>
                  <div class="asset-params-right">
                    <p>{{ $t('product.txt17') }}</p>
                    <p>
                      {{ $utils.currencyType
                      }}{{ $utils.getkStr(item.actualPrice) }}
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
                <div class="asset-desc">{{ $t('product.txt23') }}</div>
                <base-btn
                  :btnTitle="$t('product.txt24')"
                  :disabled="false"
                  @btnClick="showBuy(item)"
                ></base-btn>
              </div>
            </div>
          </template>
          <van-skeleton title :row="6" v-else />
        </div>
      </div>

      <product></product>
      <operate></operate>
    </div>

  
  </div> -->
</template>
<script>
import product from './components/product.vue'
import operate from './components/operate.vue'
import notice from './components/notice.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex'
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
  components: {
    product,
    operate,
    notice,
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      userAccount: 'user/userAccount',
    }),
  },

  data() {
    return {
      level: ['1', '2', '3', '4', '5'],

      buyLoading: false,
      showNotic: true,
      parame: {
        page: 1,
        size: 10,
      },
      orderData: [],
      redItem: [],
      isApp: '',
    }
  },
  mounted() {
    this.getOrderData()
    // this.showAward()
    this.isApp = sessionStorage.getItem('appId')
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.getQueryUser()
  //   })
  // },
  methods: {
    ...mapActions({
      otcProduct: 'otcProduct',
    }),
    // async getQueryUser() {
    //   if (this.userInfo && this.userInfo.username) {
    //     await this.queryAccountList()
    //   }
    // },
    confirme() {},
    merchant() {
      this.errDialog('Not yet open')
    },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    showBuy(item) {
      this.buyLoading = true
      let obj = Object.assign({}, item)
      obj.isBuy = false
      if (this.isLogin()) {
        this.$router.push({
          path: '/investimento',
          query: {
            data: JSON.stringify(obj),
          },
        })
      }
      this.buyLoading = false
    },
    getOrderData() {
      this.otcProduct(this.parame).then(res => {
        if (res.code == 0) {
          let { records } = res.data
          // this.redItem = records.find(d => d.originalPrice == 100000)
          this.orderData = res.data.records
          // this.redItem.push(this.orderData.find(d => d.actualPrice == 6000000))
          // this.redItem.push(this.orderData.find(d => d.actualPrice == 8000000))
        } else {
          this.errDialog(res.msg)
        }
      })
    },
    confirme() {
      this.showNotic = false
    },
    showAward() {
      if (this.$route.path == '/home' && !sessionStorage.getItem('_t_notic')) {
        this.showNotic = true
        sessionStorage.setItem('_t_notic', 1)
      }
    },
    downLoad() {
      this.$utils.downApp()
    },
  },
}
</script>
<style lang="less" scoped>
.home {
  .home-top {
    // padding: 0 10px;
    .home-top-title {
      /deep/ .van-sticky {
        display: flex;
        background-image: linear-gradient(rgb(0, 27, 74), rgb(0, 58, 116));
        border-bottom: 0.2px solid rgb(16, 142, 210);
        background: linear-gradient(180deg, #001b4a, #003a74);
        justify-content: center;
        padding: 10px 0;
        .logo {
          width: 140px;
          img {
            width: 100%;
          }
        }
      }
    }
    .downarea {
      display: flex;
      align-items: center;
      background: #fafafa;
      padding: 6px 0;
      border-radius: 4px;
      .downarea-logo {
        flex: 0 0 23px;
        width: 23px;
        margin-left: 10px;
        img {
          width: 100%;
        }
      }
      .downarea-name {
        color: #00a961;
        font-size: 12px;
        margin-left: 6px;
      }
      .downarea-btn {
        margin-left: auto;
        background: linear-gradient(180deg, #76c9fd, #39acf8);
        color: #fff;
        font-size: 12px;
        height: 28px;
        line-height: 28px;
        padding: 0 20px;
        border-radius: 4px;
        margin-right: 10px;
      }
    }
    .banner {
      // margin-top: 10px;
      border-radius: 8px;
      overflow: hidden;
    }
    .intive-about {
      margin: 10px;
      display: flex;
      align-items: center;
      background: #002046;

      & > div {
        flex: 1;

        background: linear-gradient(
          rgb(14, 135, 203) 0%,
          rgb(5, 184, 218) 100%
        );
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        text-align: center;
        height: 64px;
        line-height: 64px;
        position: relative;
        overflow: hidden;
        .intive-about-icon {
          position: absolute;
          right: 0;
          bottom: 12px;
          width: 60px;
          height: 40px;
          img {
            width: 100%;
          }
        }
        &:nth-of-type(1) {
          margin-right: 5px;
        }
        &:nth-of-type(2) {
          margin-left: 5px;
          background: linear-gradient(rgb(9, 69, 139) 0%, rgb(0, 92, 156) 100%);
        }
      }
    }
  }
  .product-container {
    padding: 15px;
    .product-info {
      border: 1px solid #005983 !important;
      background-image: linear-gradient(180deg, #002962, #00376a) !important;
      border-radius: 6px;
      padding: 0 10px;
      .product-tit {
        font-size: 14px;
        line-height: 30px;
        color: #fff;
        text-align: center;
      }
      .product-img {
        width: 100%;
        border: 1px solid #005983;
        border-radius: 6px;

        img {
          width: 100%;
        }
      }
      .product-txt {
        margin-top: 20px;
        p {
          display: flex;
          color: #fff;
          margin-bottom: 20px;
          &:nth-of-type(5) {
            background: rgba(0, 113, 178, 0.3);
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
      .intive-price {
        background: rgb(255, 38, 131);
        border-radius: 6px;
        padding: 10px;
        margin-bottom: 10px;
        position: relative;
        p {
          margin-bottom: 10px;
        }
        img {
          position: absolute;
          opacity: 0.1;
          right: 20px;
          bottom: 0;
          width: 40px;
        }
      }
      .btn {
        background: #00a3fe;
        color: #fff;
        font-weight: 700;
        line-height: 50px;
        text-align: center;
        border-radius: 8px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
