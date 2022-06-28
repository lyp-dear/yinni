<template>
  <modMain :title="title" :showLine="true" class="inout">
    <div class="inout-details">
      <div class="top-money">
        {{ detail.reqNum || detail.reqMoney }} {{ detail.targetCurrency }}
      </div>

      <div class="info-box">
        <p class="tip">{{ $t('depost.txt7') }}</p>
        <p class="value">{{ stateText(detail.status) }}</p>
      </div>

      <!-- <div class="info-box" v-if="type==2">
        <p class="tip">{{$t('bill.withdrawAddr')}}</p>
        <p class="value">{{detail.burseAddress}}</p>
      </div> -->
      <div class="info-box" v-if="type == 2">
        <p class="tip">{{ $t('depost.txt13') }}</p>
        <p class="value">{{ detail.fee }}</p>
      </div>

      <!-- <div class="info-box">
        <p class="tip">TxID</p>
        <p class="value">{{detail.hash||'-'}}</p>
      </div> -->
      <div class="info-box">
        <p class="tip">{{ $t('depost.txt8') }}</p>
        <p class="value">{{ detail.arrivalTime || '-' }}</p>
      </div>
      <div class="info-box">
        <p class="tip">{{ $t('depost.txt9') }}</p>
        <p class="value">{{ detail.orderNo }}</p>
      </div>
      <div class="info-box" v-if="type == 2">
        <p class="tip">{{ $t('depost.txt12') }}</p>
        <p class="value">{{ detail.remark || '-' }}</p>
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      detail: null,
    }
  },
  computed: {
    // ...mapState('user', {
    //   detail: 'withdrawDetail'
    // }),

    type() {
      return this.$route.query.type || 1
    },
    title() {
      return this.type == 1 ? this.$t('depost.txt14') : this.$t('depost.txt15')
    },
  },
  created() {
    this.detail = JSON.parse(this.$route.query.detail)
    console.log(this.detail)
  },
  methods: {
    cashText({ cashType, payMethodName }) {
      switch (cashType) {
        case 'PAYMENT_COIN':
          return this.$t('bill.PAYMENTCOIN') //'充币'
        case 'WITHDRAW_COIN':
          return this.$t('bill.WITHDRAWCOIN') //'提币'
        case 'WITHDRAW_OTC':
          return payMethodName //'提币'
      }
    },
    stateText(status) {
      switch (status) {
        case 'NOTPASS':
          return this.$t('depost.txt19') //'审核不通过'
        case 'PENDINGPASS':
          return this.$t('my.txt19') //'待审核'
        case 'PENDING':
          return this.type == 1 ? this.$t('my.txt20') : this.$t('my.txt19') //'待支付'
        case 'PROCESSING':
          return this.$t('my.txt19') //'处理中'
        case 'SUCCESSFUL':
          return this.type == 1 ? this.$t('my.txt21') : this.$t('my.txt22') //'提币成功'
        case 'FAILED':
          return this.type == 1 ? this.$t('my.txt23') : this.$t('my.txt24') //'提币失败'
        case 'SUCCESS':
          return this.$t('depost.txt16') //'支付成功'
        case 'FAIL':
          return this.$t('depost.txt17') //'支付失败'
        case 'CLOSE':
          return this.$t('depost.txt18') //'支付关闭'
      }
    },
  },
}
</script>
<style lang="less" scoped>
.inout {
  height: 100%;
  .inout-details {
    margin-top: 20px;
    background: #ffffff;
    box-shadow: 0px 0px 15px 0px rgba(44, 49, 140, 0.11);
    padding: 17px 15px;
    border-radius: 10px;
  }
}
</style>
