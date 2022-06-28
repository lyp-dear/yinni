<template>
  <van-notice-bar left-icon="volume-o" wrapable :scrollable="false">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(item, index) in broadData" :key="index">{{
        item
      }}</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script>
export default {
  data() {
    return {
      broadData: [],
    }
  },
  created() {
    this.broadData = this.getbroadData()
  },
  methods: {
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
        return '****' + demo.substring(7, 9)
      }
      let n = this.randomNum(10, 99) // 1-50随机数

      let price = [
        '40.000',
        '120.000',
        '288.000',
        '480.000',
        '704.000',
        '960.000',
        '2.400.000',
        '9.000.000',
      ]
      let productType = [
        'máy trộn',
        'xe nâng',
        'máy ủi',
        'máy xúc',
        'xe chở bùn',
        'cần trục tháp',
        'xe chở quặng cỡ lớn',
        'giàn khoan dầu',
      ]
      let idx = this.randomNum(0, 4)
      // 12（CTBC电话公司）、14（巴西电信）、15（TELEFÔNICA）、16（CETERP）、21（ENBRATEL）、23（INTELIG）、25（GVT）、31（TELEMAR）、43（SERCOMTEL）、85（VÉSPER）
      // let price = (n * 500).toFixed(0)

      let name = `Xin chúc mừng! UID:${n +
        random()} cho thuê thành công thiết bị ${
        productType[idx]
      }, thu nhập mỗi ngày:  ₫${price[idx]}`

      // Congratulations！UID:83****00 SunPower 5-star merchant,  get exchange income: 24000INR
      // 用户88***888   邀请了6个好友,领取了3R$
      // 用户88***888   下级收益提成R$xx
      return name
    },
  },
}
</script>

<style lang="less" scoped>
.van-notice-bar {
  background: linear-gradient(93.47deg, #0094ff 2.86%, #5ebbff 100%);
  border-radius: 10px;
  padding-left: 4px;
  height: 40px;
  line-height: 20px;
  /deep/ .van-icon {
    color: #fff;
  }
}
.notice-swipe {
  color: #fff;
  font-size: 12px;
  height: 40px;
  padding-top: 2px;
}
</style>
