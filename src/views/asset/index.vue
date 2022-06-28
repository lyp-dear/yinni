<template>
  <div class="asset">
    <div class="tab-list">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        :class="[index == active ? 'active' : '']"
        @click="itemClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="asset-container" v-if="active == 0">
      <div class="asset-info" v-for="(item, index) in orderData" :key="index">
        <div class="asset-title">
          <span>{{ item.name }}</span>
          <span
            >{{ $t('product.txt17') }}: {{ $utils.currencyType
            }}{{ $utils.getkStr(item.actualPrice) }}</span
          >
        </div>
        <div class="asset-product">
          <div class="asset-image">
            <van-image width="100%" lazy-load :src="item.imgUrl">
              <template v-slot:default> </template>
            </van-image>
          </div>
          <div class="asset-txt">
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
                  $utils.getkStr(
                    item.actualPrice * item.returnRate * item.cycle
                  )
                }}</span
              >
            </p>
            <div class="btn" @click="showBuy(item)">
              {{ $t('product.txt24') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-project" v-if="active == 1">
      <div class="asset-info" v-for="(item, index) in orderData2" :key="index">
        <div class="asset-title">
          <span>{{ item.name }} </span>
          <span>{{
            item.status == 'WORKING'
              ? 'Peralatan bekerja'
              : 'Instalasi peralatan'
          }}</span>
        </div>
        <div class="asset-product">
          <div class="asset-image">
            <van-image width="100%" lazy-load :src="item.imgUrl">
              <template v-slot:default> </template>
            </van-image>
          </div>
          <div class="asset-txt">
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
                {{ $utils.getkStr(item.perProfit) }}</span
              >
            </p>
            <p>
              Periode pengembalian:
              <span>{{ item.cycle }}{{ $t('product.txt13') }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <top-bg :tit="$t('product.txt25')"> </top-bg> -->
    <!-- <div class="asset-container">
      <div class="asset-info" v-for="(item, index) in orderData" :key="index">
        <div
          class="asset-mask"
          v-if="item.id == '8' || item.id == '9' || item.id == '10'"
        >
          {{ $t('index.txt49') }}
        </div>
        <div class="asset-mask" v-else>{{ $t('index.txt48') }}</div>

        <div class="asset-img">
          <van-image width="100%" lazy-load :src="imgBaseUrl + item.imgUrl">
            <template v-slot:default> </template>
          </van-image>
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
                {{ $utils.currencyType }}{{ $utils.getkStr(item.actualPrice) }}
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
    </div> -->
    <loadding v-if="isShowLoadding"></loadding>
    <no-data
      v-else-if="
        active == 0 && !isShowLoadding && (!orderData || orderData.length == 0)
      "
    ></no-data>
    <no-data
      v-else-if="
        active == 1 &&
          !isShowLoadding &&
          (!orderData2 || orderData2.length == 0)
      "
    ></no-data>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import jsondata from '@/assets/json/5609-hot.json'

export default {
  data() {
    return {
      // palyoption: {
      //   loop: true,
      //   autoplay: true,
      //   speed: 1,
      //   width: '18px',
      // },
      // jsondata,
      tabList: [
        {
          title: this.$t('index.txt37'),
          index: 0,
        },
        {
          title: this.$t('order.txt2'),
          index: 1,
        },
      ],
      level: ['1', '2', '3', '4', '5'],

      active: 0,
      isShowLoadding: false,
      orderData: [],
      orderData2: [],
      currentData: null,
      dayRevenue: 0,
      cumuRevenue: 0,
      parame: {
        page: 1,
        size: 20,
      },
      volume: 1,
      postData: {
        volume: 1,
        commodityId: 0,
      },
      buyLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  mounted() {
    this.itemClick(0)
    // this.getOrderData()
  },
  methods: {
    ...mapActions({
      // commodityQuery: 'user/commodityQuery',
      // orderPlace: 'order/orderPlace',
      // orderqueryPage: 'order/orderqueryPage',
      // queryOrderCount: 'order/queryOrderCount',
      orderUserList: 'order/orderUserList',

      otcProduct: 'otcProduct',
    }),
    itemClick(active, intro = null) {
      this.active = active
      this.orderData = []
      this.orderData2 = []
      if (active == 0) {
        this.getOrderData()
      } else if (active == 1) {
        if (this.userInfo && this.userInfo.username) {
          this.getorderqueryPage(intro)
        }
      }
    },
    getorderqueryPage() {
      this.isShowLoadding = true
      let params = {
        page: 1,
        size: 100,
      }
      this.orderUserList(params)
        .then(res => {
          this.isShowLoadding = false
          if (res.code == 0) {
            let { records } = res.data
            // this.redItem = records.find(d => d.originalPrice == 100000)
            this.orderData2 = res.data.records
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(res => {
          this.isShowLoadding = false
        })
    },
    getChooise(item) {
      let str = ''
      if (item.amount >= 1000 && item.amount < 10000) {
        str = '60% '
      } else if (item.amount >= 10000 && item.amount <= 50000) {
        str = '90% '
      } else {
        str = '80% '
      }
      return str
    },

    getOrderData() {
      this.isShowLoadding = true

      this.otcProduct(this.parame)
        .then(res => {
          this.isShowLoadding = false

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
      if (this.isLogin()) {
        this.currentData = item
        this.show = true
        this.$router.push({
          path: '/investimento',
          query: {
            data: JSON.stringify(obj),
          },
        })
      }
      this.buyLoading = false
    },
  },
}
</script>
<style lang="less" scoped>
.asset {
  .tab-list {
    display: flex;
    align-items: center;
    > div {
      flex: 1;
      line-height: 38px;
      text-align: center;

      background: #fff;
      &.active {
        background: #5088f8;
        color: #fff;
      }
    }
  }
  .asset-info {
    margin-bottom: 10px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #e1e1e1;
    .asset-title {
      background: linear-gradient(90deg, #4b85f8, #6544da);
      color: #fff;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      display: flex;
      font-size: 12px;
      & > span {
        &:nth-of-type(2) {
          margin-left: auto;
        }
      }
    }
    .asset-product {
      margin: 10px 8px 0 8px;
      display: flex;
      align-items: center;
      .asset-image {
        border-radius: 8px;
        overflow: hidden;
        flex: 0 0 130px;
        width: 130px;
        img {
          width: 100%;
        }
      }
      .asset-txt {
        margin-left: 10px;
        flex: 1;
        p {
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 8px;
          span {
            color: #313131;
            font-weight: 700;
            font-size: 14px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
        .btn {
          background: linear-gradient(180deg, #71a0ff, #4077e3);
          color: #fff;
          text-align: center;
          height: 32px;
          line-height: 32px;
          border-radius: 6px;
        }
      }
    }
  }
  .asset-container {
    padding: 0 10px;
    margin-top: 10px;
  }
  .my-project {
    padding: 0 10px;
    margin-top: 10px;
    .asset-info {
      .asset-title {
        background: linear-gradient(90deg, #2acb88, #4cb288);
      }
      .asset-txt {
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
