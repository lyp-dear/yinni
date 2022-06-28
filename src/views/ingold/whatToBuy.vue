<template>
  <modMain title="Buy USDT">
    <div class="how-main">
      <!-- 您可以在以下推荐的平台购买USDT -->
      <h1 class="title">{{$t('deposit.remd')}}</h1>
      <div class="content">
        <div class="item-box" @click="toJumb(1)">
          <div class="top line05">
            <img v-if="theme=='dark'" src="@/assets/image/how/paxful.png" alt="" class="logo">
            <img v-else src="@/assets/image/how/paxful_l.png" alt="" class="logo">
            <h2>{{$t('deposit.remdUrl')}}</h2>
            <p class="url">https://paxful.com/zh/buy-tether?fiat-min=100&hasScroll=true</p>
          </div>
          <div class="bot">
            <div class="btn">{{$t('deposit.viewTut')}}</div>
          </div>
        </div>
        <div class="item-box" @click="toJumb(2)">
          <div class="top line05">
            <img v-if="theme=='dark'" src="@/assets/image/how/huobi.png" alt="" class="logo huobi">
            <img v-else src="@/assets/image/how/huobi_l.png" alt="" class="logo huobi">
            <h2>{{$t('deposit.remdUrl')}}</h2>
            <p class="url">https://c2c.huobi.be/zh-cn/trade/buy-usdt</p>
          </div>
          <div class="bot">
            <div class="btn">{{$t('deposit.viewTut')}}</div>
          </div>
        </div>
      </div>
    </div>
  </modMain>
</template>
<script>
export default {
  data() {
    return {
      theme: 'dark',
    }
  },
  computed: {
    cssSkin() {
      return this.$store.getters.getCssSkin()
    },
  },
  created() {
    let _theme = localStorage.getItem('theme')
    if (_theme) {
      this.theme = _theme
    } else {
      this.theme = this.cssSkin
    }
  },
  methods: {
    toJumb(type) {
      this.$router.push({
        path: '/how',
        query: {
          type
        }
      })
    }
  }
}
</script>

