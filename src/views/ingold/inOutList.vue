<template>
  <modMain :title="title" class="noPadding">
    <div class="record-main">
      <pull-list
        :params="params"
        :total="total"
        @getList="getList"
        @setPage="setPage"
        @setListData="setListData"
        ref="pullComp"
      >
        <!-- <div
          slot="content"
          class="record-list line05"
          v-for="item in outinList"
          @click="goToDetail(item)"
        >
          <div class="list-icon">
            <img src="@/assets/image/home/with.png" alt="" />
          </div>
          <div class="left">
            <p>{{ item.reqNum }}</p>
            <p>{{ item.arrivalTime }}</p>
          </div>
          <div class="right">
            <p>{{ stateText(item.status) }}</p>
          </div>
          <div class="left-box">
            <p class="usdt">
              Rp {{ type == 1 ? item.realMoney : item.realNum }}
            </p>
            <p class="time">{{ item.arrivalTime || '-' }}</p>
          </div>
          <div
            class="right-state"
            :class="{
              success: item.status == 'SUCCESS' || item.status == 'SUCCESSFUL',
              refused: item.status == 'NOTPASS',
              failed: item.status == 'FAILED',
            }"
          >
            {{ stateText(item.status) }}
          </div>
        </div> -->
        <div
          class="list"
          slot="content"
          v-for="(item, index) in outinList"
          :key="index"
        >
          <div class="time">{{ item.gmtCreate }}</div>
          <div class="list-type">
            {{ stateText(item.status) }}
          </div>
          <div class="list-share-type">
            {{ $t('depost.txt9') }}: {{ item.orderNo }}
          </div>
          <div class="list-share-type" v-if="item.remark">
            {{ $t('depost.txt12') }}: {{ item.remark }}
          </div>
          <div class="list-amount">
            {{ item.reqNum }}
          </div>
        </div>
      </pull-list>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      outinList: [],
      title: '',
      total: 0,
      params: {
        start: '',
        end: '',
        page: 1,
        size: 15,
      },
    }
  },
  computed: {
    type() {
      return this.$route.query.type || 1
    },
  },
  created() {
    this.title = this.type == 1 ? this.$t('my.txt12') : this.$t('my.txt11')
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions('user', {
      paymentList: 'paymentList', // 存款记录
      withdrawList: 'withdrawList', // 提币记录
    }),
    ...mapMutations('user', {
      setWithdrawDetail: 'SET_WITHDRAW_DETAIL',
    }),
    stateText(status) {
      switch (status) {
        case 'NOTPASS':
          return this.$t('my.txt24') //'审核不通过'
        case 'PENDINGPASS':
          return this.$t('my.txt19') //'待审核'
        case 'PENDING':
          return this.type == 1 ? this.$t('my.txt20') : this.$t('my.txt25') //'待支付'
        case 'PROCESSING':
          return this.$t('my.txt19') //'处理中'
        case 'SUCCESSFUL':
          return this.type == 1 ? this.$t('my.txt21') : this.$t('my.txt22') //'提币成功'
        case 'FAILED':
          return this.type == 1 ? this.$t('my.txt23') : this.$t('my.txt24') //'提币失败'
        case 'SUCCESS':
          return this.$t('my.txt21') //'支付成功'
        case 'FAIL':
          return this.$t('my.txt23') //'支付失败'
        case 'CLOSE':
          return this.$t('my.txt26') //'支付关闭'
      }
    },
    async getList() {
      let res = null
      if (this.type == 1) {
        res = await this.paymentList(this.params)
      } else {
        res = await this.withdrawList(this.params)
      }
      if (res && res.code == 0) {
        let rows = res.data.records
        await this.$refs.pullComp.loadFinished(rows)
      } else {
        this.errDialog(res.msg)
      }
    },

    goToDetail(item) {
      // this.setWithdrawDetail(item)
      let strData = JSON.stringify(item)
      this.$router.push({
        path: '/inoutDetail',
        query: {
          type: this.type,
          detail: strData,
        },
      })
    },

    /****======下拉刷新两个回调======*****/
    setListData(data) {
      this.outinList = data
    },
    setPage(ismore = true) {
      if (ismore) {
        this.params.page++
      } else {
        this.params.page = 1
      }
    },
    /****======end======*****/
  },
}
</script>
<style lang="less" scoped>
.noPadding {
  background: #f7f7f7;
  padding-left: 12px;
  padding-right: 12px;
  .record-main {
    margin-top: 20px;
  }
}
.list {
  background: #fff;
  padding: 12px;
  // box-shadow: 2px 8px 13px 0px rgba(164, 164, 164, 0.4);
  border-radius: 14px;
  margin-bottom: 10px;
  position: relative;
  .time {
    color: #939393;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  .list-type {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }
  .list-share-type {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    margin-top: 16px;
  }
  .list-amount {
    position: absolute;
    right: 0;
    top: 50%;
    padding: 0 10px;
    height: 25px;
    margin-top: -12px;
    background: #32cc8e;
    text-align: center;
    line-height: 25px;
    border-radius: 4px;
    color: #fff;
    &.active {
      background: #0094f6;
    }
  }
}
</style>
