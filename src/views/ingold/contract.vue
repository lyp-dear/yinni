<template>
  <modMain :title="$t('index.txt24')" class="contract">
    <div class="contract-main" v-if="item">
      <div class="contract-info">
        <div class="label-value">
          <div class="label w200">{{ $t('contract.txt13') }}:</div>
          <div class="value">{{ userInfo.uid }}</div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt1') }}:</div>
          <div class="value">{{ userInfo.username }}</div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt2') }}:</div>
          <div class="value">{{ item.randomId }}</div>
        </div>
      </div>
      <div class="contract-info">
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt3') }}:</div>
          <div class="value">OKe</div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt1') }}:</div>
          <div class="value">OKe Group</div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt2') }}:</div>
          <div class="value">{{ item.randomId }}</div>
        </div>
      </div>

      <div class="contract-info">
        <div class="label-value">
          <div class="label">{{ $t('index.txt24') }}:</div>
          <div class="value">
            {{ $utils.currencyType }}{{ $utils.getkStr(item.amount) }}
          </div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt4') }}:</div>
          <div class="value">{{ item.auditTime }}</div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt5') }}:</div>
          <div class="value">
            {{ endTime | dateFormat('yyyy-MM-dd HH:mm:ss') }}
          </div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('index.txt26') }}:</div>
          <div class="value">{{ item.cycle / 30 }}{{ $t('index.txt27') }}</div>
        </div>
        <div class="label-value">
          <div class="label w200">{{ $t('contract.txt9') }}:</div>
          <div class="value">
            {{ $utils.currencyType }}
            {{ $utils.getkStr(item.amount * item.returnRate * item.cycle) }}
          </div>
        </div>
        <div class="label-value">
          <div class="label w200">{{ $t('conDetail.txt6') }}:</div>
          <div class="value">{{ $t('conDetail.txt7') }}</div>
        </div>
        <div class="label-value">
          <div class="label">{{ $t('conDetail.txt10') }}:</div>
          <div class="value">{{ $t('conDetail.txt8') }}</div>
        </div>
      </div>
      <div class="bot">{{ $t('conDetail.txt9') }}:{{ item.auditTime }}</div>
    </div>
    <div class="signature"></div>
  </modMain>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  data() {
    return {
      item: null,

      endTime: null,
    }
  },
  mounted() {
    this.item = JSON.parse(this.$route.query.data)
    let day = this.item.auditTime.replace(/\-/g, '/')
    let date = new Date(day)
    let time1 = date.getTime()
    this.endTime = this.addDay(this.item.cycle, time1)
  },
  methods: {
    addDay(dayNumber, date) {
      var ms = dayNumber * (1000 * 60 * 60 * 24)
      var newDate = date + ms
      return newDate
    },
  },
}
</script>
<style lang="less" scoped>
.contract {
  height: auto !important;
  background: #f7f8fc;
  padding: 47px 0 20px 0;
  position: relative;
  /deep/.single-content {
  }
  .contract-main {
    .contract-info {
      padding: 20px 10px 14px 10px;
      background: #ffffff;
      margin-bottom: 10px;
      .label-value {
        display: flex;
        font-size: 14px;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 14px;
        border-bottom: 1px solid #e6e6e6;
        &:last-child {
          margin-bottom: 0;
          border-bottom: 0;
        }
        .label {
          flex: 0 0 160px;
          width: 160px;
          text-align: left;
          color: #666666;
          padding-left: 4px;
          &.w200 {
            flex: 0 0 200px;
            width: 200px;
          }
        }
        .value {
          flex: 1;
          color: #000;
          text-align: right;
          padding-right: 4px;
        }
      }
    }
    .bot {
      margin-top: 20px;
      text-align: right;
      padding-right: 4px;
    }
  }
  .signature {
    width: 120px;
    height: 120px;
    background: url('./../../assets/image/home/signature.png') no-repeat;
    background-size: cover;
    position: absolute;
    right: 30px;
    bottom: 0;
    opacity: 0.5;
    transform: rotate(-45deg);
  }
}
</style>
