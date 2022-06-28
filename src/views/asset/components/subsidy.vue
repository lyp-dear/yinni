<template>
  <div class="subsidy">
    <div class="lucky-info">
      <div class="title-desc">
        <h1>
          {{ $t('contract.txt18') }}
        </h1>
        <div class="desc">{{ $t('contract.txt19') }}</div>
      </div>
      <div class="lucky">
        <div class="total">
          {{ $utils.currencyType }}
          <countTo
            :startVal="startVal"
            :endVal="totalPrice"
            :duration="duration"
            separator="."
          ></countTo>
        </div>
        <p class="total-desc">
          {{ $t('contract.txt20') }}
        </p>
        <div class="learn-more">
          {{ $utils.currencyType }}

          <countTo
            :startVal="startVal2"
            :endVal="distributed"
            :duration="duration"
            separator="."
          ></countTo>
        </div>
        <p class="price-total">
          {{ $t('contract.txt21') }}
        </p>
      </div>
      <div class="pro-main">
        <div class="pro-txt">
          {{ $t('contract.txt22') }}
        </div>
        <div class="pro-txt">
          {{ $t('contract.txt23') }}
        </div>
      </div>
    </div>
    <div class="free-reg" @click="toBuy">
      {{ $t('contract.txt24') }}
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: { countTo },
  data() {
    return {
      // 需要滚动的时间
      duration: 3000,
      // 初始值
      startVal: 0,
      // 最终值
      total: 0,
      startVal2: 0,
      distributed: 0,
    }
  },
  computed: {
    totalPrice() {
      return this.total - this.distributed
    },
  },
  created() {
    this._allowanceQuery()
  },
  methods: {
    ...mapActions({
      allowanceQuery: 'user/allowance',
    }),
    ...mapMutations({
      setActiveType: 'setActiveType',
    }),
    _allowanceQuery() {
      this.allowanceQuery().then(res => {
        if (res.code === 0) {
          this.total = res.data[0].total
          this.distributed = res.data[0].distributed
        }
      })
    },
    toBuy() {
      // window.location.href = 'https://m.merlinsolar.online/#/asset'
      this.$emit('buyPro')
    },
  },
}
</script>
<style lang="less" scoped>
.subsidy {
  width: 100%;
  background: url('../../../assets/image/home/bg1.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  padding-bottom: 1rem;
  .lucky-info {
    // width: 100%;
    // height: 499px;
    // background: url('../../../assets/image/xapp/land/lucky.png') no-repeat;
    // background-size: cover;
    // position: relative;
    padding: 20px 30px;
    h1 {
      font-size: 24px;
      line-height: 39px;
      text-align: center;
      color: #fefcfb;
      text-shadow: 0px 0px 9px #e8b121;
    }
    .desc {
      font-weight: 500;
      font-size: 28px;
      line-height: 48px;
      margin-top: 7px;
      width: 100%;
      height: 48px;
      color: #72490b;
      background: url('../../../assets/image/home/desc.png') no-repeat;
      background-size: cover;
      text-align: center;
    }
    .lucky {
      margin-top: 24px;
      width: 100%;
      height: 330px;
      background: url('../../../assets/image/home/lucky.png') no-repeat;
      background-size: cover;
      position: relative;

      .total {
        font-size: 28px;
        color: #72490b;
        text-align: center;
        padding-top: 40px;
      }
      .total-desc {
        font-weight: 500;
        font-size: 14px;
        color: #b78e4f;
        text-align: center;
        margin-top: 10px;
        margin: 10px 20px 0 20px;
        line-height: 24px;
      }
    }
    .learn-more {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 50px;
      left: 50%;
      margin-left: -125px;
      bottom: 80px;
      background: linear-gradient(0deg, #efa95f 0%, #fcf1c0 100%);
      box-shadow: -0.0267043px 1.54063px 4.10836px #a52a28,
        inset 0px 4.24089px 4.24089px #fff1d3;
      border-radius: 50px;
      font-size: 20px;
      line-height: 26px;
      color: #72490b;
      // animation: heartbeat2 1.6s infinite;
      z-index: 9;
    }
    .price-total {
      position: absolute;
      bottom: 20px;
      width: 100%;
      font-weight: 600;
      line-height: 24px;
      font-size: 14px;
      color: #fbf5d6;
      left: 0;
      text-align: center;
    }
  }
  .pro-main {
    margin-top: 22px;
    .pro-txt {
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 4px 16px rgba(33, 36, 75, 0.16),
        inset 0px 0px 40px rgba(173, 170, 255, 0.25);
      border-radius: 10px;
      padding: 23px 15px;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      margin-bottom: 20px;
    }
  }
  .free-reg {
    width: 355px;
    height: 48px;
    // position: fixed;
    // left: 10px;
    // bottom: 80px;
    margin: 0 auto;
    // bottom: calc(80px + constant(safe-area-inset-bottom));
    // bottom: calc(80px + env(safe-area-inset-bottom));
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #fad657 0%, #fca227 100%);
    box-shadow: inset 0px -4px 0px #ab3f57;
    border-radius: 50px;
    font-size: 22px;
    // line-height: 27px;
    color: #82001c;
    z-index: 2;
    animation: heartbeat2 1.5s infinite;
  }
}
</style>
