<template>
  <div class="asset rank-main">
    <h1>{{ $t('sa.ranks') }}</h1>

    <div class="rank">
      <div class="tab line05">
        <span @click="setTabs(0)" :class="{ active: tabIdx == 0 }">{{
          $t('sa.txt51')
        }}</span>
        <span @click="setTabs(1)" :class="{ active: tabIdx == 1 }">{{
          $t('sa.txt52')
        }}</span>
      </div>
      <div class="top-tip">
        <span class="r1"></span>
        <span class="r2">{{ $t('sa.txt54') }}</span>
        <span class="r3">{{ $t('sa.txt55') }}</span>
        <span class="r4">{{ $t('sa.txt56') }}</span>
      </div>
      <div class="rank-list">
        <div class="list-box line05" v-for="(item, idx) in list">
          <div class="r1">
            <img v-if="idx == 0" src="@/assets/image/xapp/rank1.png" alt="" />
            <img
              v-else-if="idx == 1"
              src="@/assets/image/xapp/rank2.png"
              alt=""
            />
            <img
              v-else-if="idx == 2"
              src="@/assets/image/xapp/rank3.png"
              alt=""
            />
            <span v-else>{{ idx + 1 }}</span>
          </div>
          <div class="r2">
            <img v-if="item.headImg" :src="baseUrl + item.headImg" alt="" />
            <img
              v-else
              :src="require('@/assets/image/xapp/tx' + (idx + 1) + '.png')"
              alt=""
            />
          </div>
          <div class="r3">
            <p>{{ $t('sa.txt73') }}: {{ item.inviteNumber }}</p>
            <p>{{ $t('sa.txt55') }}: {{ item.amount }}</p>
          </div>
          <div class="r4">
            <span class="green">{{ item.income.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="top-box">
      <div class="top">
        <p>
          <span class="green">{{ cumulativeData }}</span
          ><span>{{ $t('sa.txt132') }} </span>
        </p>
        <p>
          <span class="green">{{ myIncome || 0 }}</span
          ><span
            >{{ tabIdx == 0 ? $t('sa.txt51') : $t('sa.txt52') }} revenue
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      tabIdx: 0,
      type: 'yesterday',
      cumulativeData: 0, //我的排名
      myIncome: 0,
      list: [],
      baseUrl: 'https://in.Tslenergyonline.live',
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  created() {
    this.setTabs(0)
  },
  methods: {
    ...mapActions({
      getIncomeRank: 'incomeRank',
      queryIncome: 'user/queryIncome',
      queryRank: 'user/queryRank',
      getBankCard: 'bankCard/getBankCard',
    }),
    getqueryIncome() {
      this.queryIncome().then(res => {
        let { incomeYesterday, incomeThirty } = res.data
        this.myIncome = this.tabIdx == 0 ? incomeYesterday : incomeThirty
      })
    },
    getIncomeData() {
      let params = {
        type: this.type,
        page: 1,
        size: 10,
      }
      this.getIncomeRank(params).then(res => {
        this.list = res.data.records
      })
    },
    getqueryRank() {
      let params = {
        rankType: this.type,
      }
      this.queryRank(params).then(res => {
        this.cumulativeData = res.data || 1562
      })
    },
    setTabs(idx) {
      this.type = idx == 0 ? 'yesterday' : 'thrityDay'
      this.tabIdx = idx
      this.getIncomeData()
      if (this.userInfo && this.userInfo.username) {
        this.getqueryRank()
        this.getqueryIncome()
        this.getBankCard()
      }
    },
  },
}
</script>
