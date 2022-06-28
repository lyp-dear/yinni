<template>
  <modMain :title="$t('index.txt4')" class="dynamic">
    <div class="fisher">
      <div class="animatedTop" ref="broadDom">
        <div
          class="contract-order"
          v-for="(item, index) in broadData"
          :key="index"
        >
          <div class="order-top">
            <div class="order-icon">
              <img src="@/assets/image/home/featured.png" alt="" />
            </div>
            <div class="order-name">
              <p>{{ $t('index.txt35') }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
            <div class="order-btn">
              <button>{{ $t('contract.txt7') }}</button>
            </div>
          </div>
          <div class="order-bot">
            <div class="order-bot-l">
              <p>{{ $t('index.txt24') }}</p>
              <p>{{ $utils.currencyType }}{{ $utils.getkStr(item.price) }}</p>
            </div>
            <div class="order-bot-c">
              <p>{{ $t('index.txt36') }}</p>
              <p>
                {{ $utils.currencyType }}
                {{ $utils.getkStr(item.price * item.rate * item.day) }}
              </p>
            </div>
            <div class="order-bot-r">
              <p>{{ $t('index.txt26') }}</p>
              <p>{{ item.day / 30 }}{{ $t('index.txt27') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      orderData: [],
      animatedTop: false,
      scrollTimer: null, // 存款消息滚动定时器
      broadData: [],
    }
  },
  created() {
    this.broadData = this.getbroadData()
  },
  mounted() {
    this.$nextTick(() => {
      this.showScroll()
    })
  },
  methods: {
    ...mapActions({
      commodityQuery: 'user/commodityQuery',
    }),
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
          break
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
          break
        default:
          return 0
          break
      }
    },
    getbroadData(n = 200) {
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push(this.buildObj())
      }
      return arr
    },
    buildObj() {
      let random = () => {
        let demo = ''
        //这里取的是4位，所以for循环4次
        for (let i = 0; i < 9; i++) {
          //设置随机数范围,这设置为0 ~ 9
          let a = Math.floor(Math.random() * 9)
          //拼接字符串
          demo += a
        }
        return '*****' + demo.substring(7, 9)
      }
      let n = this.randomNum(5, 50) // 1-50随机数
      let pre = [
        '0812',
        '0821',
        '0823',
        '0852',
        '0813',
        '0822',
        '0817',
        '0818',
        '0819',
        '0878',
        '0877',
        '0859',
        '0831',
        '0832',
        '0838',
        '0889',
        '0888',
        '0899',
        '0898',
        '0857',
        '0856',
      ]
      let price = [200000, 400000, 800000, 1000000, 2000000, 4000000, 10000000]
      let day = [60, 60, 90, 90, 90, 150, 150]
      let rate = [0.056, 0.056, 0.065, 0.065, 0.08, 0.08, 0.1]
      let priceidx = this.randomNum(0, 3)
      let idx = this.randomNum(0, 14)
      // 12（CTBC电话公司）、14（巴西电信）、15（TELEFÔNICA）、16（CETERP）、21（ENBRATEL）、23（INTELIG）、25（GVT）、31（TELEMAR）、43（SERCOMTEL）、85（VÉSPER）
      // let price = (n * 500).toFixed(0)
      let name = pre[idx] + random()
      // 用户88***888   邀请了6个好友,领取了3R$
      // 用户88***888   下级收益提成R$xx
      let obj = {
        name: name,
        price: price[priceidx],
        day: day[priceidx],
        rate: rate[priceidx],
        // src: require('@/assets/image/xapp/tx' + idx + '.jpg')
      }
      return obj
    },
    showScroll() {
      this.animatedTop = true
      let vm = this
      let x = 0,
        dom = this.$refs.broadDom
      let liHeight = dom.children[0].offsetHeight
      let liLen = vm.broadData.length

      let fun = () => {
        dom.style.bottom = -x + 'px'
        x++
        if (x % (liHeight * 4) == 0) {
          this.broadData = [...this.getbroadData(4), ...this.broadData]
        }
        // this.broadData = [this.buildObj(), ...this.broadData]
        // if (x % (liHeight * liLen) == 0) {
        //   this.broadData = [...this.broadData, ...this.broadData];
        // }
      }
      this.scrollTimer = setInterval(fun, 100)
    },
    getData() {
      this.commodityQuery({ page: 1, size: 10 })
        .then(res => {
          if (res.code == 0) {
            this.orderData = res.data.records

            this.showScroll()

            // this.startStep()
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {
          this.isShowLoadding = false
        })
    },
  },
}
</script>
<style lang="less" scoped>
.dynamic {
  height: 100%;
  padding-top: 60px;
  /deep/ .single-content {
  }
  .contract-order {
    border-bottom: 10px solid #f4f5f8;
    .order-name {
      p {
        font-size: 14px;
        color: #333;
        &:nth-of-type(2) {
          font-size: 12px;
          color: #888;
          margin-top: 4px;
        }
      }
    }
    .order-bot-c {
      p {
        &:nth-of-type(2) {
          color: #0094f6;
        }
      }
    }
  }
}
</style>
