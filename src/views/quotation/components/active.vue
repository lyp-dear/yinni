<template>
  <div class="active">
    <div class="active-title">
      Ratusan miliar subsidi OKe
    </div>
    <div class="time-box">
      <p>Jumlah subsidi hari ini</p>
      <countTo
        :startVal="startVal"
        :endVal="total"
        :duration="duration"
        class="pro-number"
      ></countTo>

      <van-count-down
        class="time-number"
        millisecond
        :time="time"
        format="HH:mm:ss:SS"
      />
    </div>
    <p class="desc">Untuk membeli 10 juta diberikan 2 juta</p>
    <div class="active-btn-box">
      <router-link tag="div" to="/acvityDetail">Detail</router-link>
      <div @click="buy">Pembelian</div>
    </div>

    <p class="desc">Investasikan 10 juta untuk mendapatkan kontrak 12 juta</p>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { countTo },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  data() {
    return {
      duration: 3000,
      // 初始值
      startVal: 0,
      // 最终值
      total: 0,
      time: 0,
      redItem: [],
      parame: {
        page: 1,
        size: 100,
      },
      timer: null,
    }
  },

  created() {
    this.getTime()
    this.getOrderData()
  },
  methods: {
    ...mapActions({
      commodityQuery: 'user/commodityQuery',
    }),
    getTime() {
      let mytime = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          24 * 60 * 60 * 1000 -
          1
      )
      let tem = this.$options.filters['dateFormat']

      let time1 = new Date(tem(mytime, 'yyyy/MM/dd HH:mm:ss')).getTime()
      let time2 = new Date().getTime()

      this.time = time1 - time2
    },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    buy() {
      if (this.isLogin()) {
        if (this.total <= 0) {
          this.errDialog(
            'Terjual habis untuk hari ini, silakan kembali lebih awal besok'
          )
          return
        }
        this.$router.push({
          path: '/investimento',
          query: {
            data: JSON.stringify(this.redItem[0]),
          },
        })
      }
    },
    getOrderData() {
      this.commodityQuery(this.parame).then(res => {
        if (res.code == 0) {
          let { records } = res.data
          // this.redItem = records.find(d => d.originalPrice == 100000)
          this.orderData = records.filter(d => d.enable && d.panelVolume != 1)

          this.redItem.push(
            this.orderData.find(d => d.originalPrice == 10000000)
          )
          console.log(this.redItem)
          this.startVal = this.redItem[0].totalQuantity
          this.total =
            this.redItem[0].totalQuantity - this.redItem[0].usedQuantity
        } else {
          this.errDialog(res.msg)
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.active {
  width: 100%;
  height: 614px;
  background: url('./../../../assets/image/home/active.png');
  background-size: cover;
  .active-title {
    font-weight: 900;
    font-size: 24px;
    color: #fff;
    padding-left: 16px;
    padding-top: 20px;
    line-height: 35px;
  }
  .time-box {
    margin: 15px 33px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 23px 0 26px 0;
    p {
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
    .pro-number {
      font-weight: 900;
      font-size: 100px;
      color: #ffe81b;
      text-align: center;
      line-height: 140px;
      display: block;
    }
    .time-number {
      text-align: center;
      font-size: 40px;
      color: #fff;
      line-height: 32px;
    }
  }
  .desc {
    margin: 20px 32px 20px 32px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 30px;
  }
  .active-btn-box {
    margin: 0 32px;
    display: flex;
    & > div {
      border-radius: 25px;
      background: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 23px;
      color: #000;
      flex: 1;
      &:nth-of-type(2) {
        margin-left: 40px;
        background: #ffe81b;
      }
    }
  }
}
</style>
