<template>
  <modMain class="income noPadding" :title="$t('income.txt1')">
    <!-- <div class="top-fiexd">
      <topTabs :tabs="tabs" @itemClick="itemClick" />
    </div> -->
    <div class="income-top-fixed">
      <!-- <topTabs :tabs="tabs" @itemClick="itemClick" /> -->
      <div
        v-for="(item, index) in tabs"
        :key="index"
        @click="itemClick(index)"
        :class="[index == oType ? 'active' : '']"
      >
        <div class="icon">
          <van-icon :name="item.name" />
        </div>
        <p>{{ item.title }}</p>
      </div>
    </div>

    <div class="income-main">
      <van-list
        v-if="incomeData && incomeData.length > 0"
        v-model="isUpLoading"
        :finished="upFinished"
        :immediate-check="false"
        offset="20"
        @load="onLoadList"
        :loading-text="$t('load.txt1')"
        :finished-text="$t('load.txt2')"
      >
        <div
          class="list"
          v-for="(item, index) in incomeData"
          :key="index"
          @click="godetail(item)"
        >
          <div class="time">{{ item.gmtCreate }}</div>
          <div class="list-type">
            {{ ifNe(item.type) ? $t('income.txt5') : $t('income.txt6') }}
          </div>
          <div class="list-share-type">
            {{ getStatusText(item.type, item.remark) }}
          </div>
          <div class="list-amount" :class="ifNe(item.type) ? 'active' : ''">
            {{ ifNe(item.type) ? '-' : '+' }}{{ $utils.getkStr(item.amount) }}
          </div>
        </div>
        <!-- <div
          class="list"
          v-for="(item, index) in incomeData"
          :key="index"
          @click="godetail(item)"
        >
          <div class="list-icon">
            <img
              v-if="
                item.type == 'CREDIT_INVITE_REGISTER' ||
                  item.type == 'CREDIT_INVITE_WAGER'
              "
              src="@/assets/image/home/invite.png"
              alt=""
            />
            <img
              v-else-if="
                item.type == 'DEBIT_WITHDRAW_OTC' ||
                  item.type == 'FREEZE_WITHDRAW_OTC' ||
                  item.type == 'UNFREEZE_WITHDRAW_OTC'
              "
              src="@/assets/image/home/with.png"
              alt=""
            />
            <img
              v-else-if="item.type == 'CREDIT_PAYMENT'"
              src="@/assets/image/home/deposit.png"
              alt=""
            />

            <img
              v-else-if="
                item.type == 'CREDIT_PROFIT' ||
                  item.type == 'CREDIT_LOGIN_PROFIT' ||
                  item.type == 'CREDIT_SUBORDINATE' ||
                  item.type == 'CREDIT_REGISTER_GIFT' ||
                  item.type == 'CREDIT_MOVEMENT' ||
                  item.type == 'CREDIT_INVESTMENT_GIFT' ||
                  item.type == 'CREDIT_SUNSHINE'
              "
              src="@/assets/image/home/award.png"
              alt=""
            />
            <img v-else src="@/assets/image/home/other.png" alt="" />
          </div>
          <div class="left">
            <p>{{ getStatusText(item.type, item.remark) }}</p>
            <p>{{ item.gmtCreate }}</p>
          </div>
          <div class="right">
            <p :class="ifNe(item.type) ? 'red' : 'green'">
              {{ ifNe(item.type) ? '-' : '+' }}{{ $utils.getkStr(item.amount) }}
            </p>
            <p>
              {{ ifNe(item.type) ? $t('income.txt5') : $t('income.txt6') }}
            </p>
          </div>
        </div> -->
      </van-list>
      <no-data
        v-else-if="!isShowLoadding && (!incomeData || incomeData.length == 0)"
      ></no-data>

      <!-- <loadding v-if="isShowLoadding"></loadding> -->
    </div>
  </modMain>
</template>
<style lang="less" scoped>
.income-top-fixed {
  background: #ffffff;
  box-shadow: 0px 1px 20px 0px rgba(173, 173, 173, 0.4);
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  z-index: 9;
  & > div {
    flex: 1;
    text-align: center;
    font-weight: 500;
    color: #727272;
    &.active {
      color: #0094f6;
    }
    p {
      margin-top: 6px;
    }
  }
}
.income-main {
  margin-top: 90px;
  // margin-top: 54px;
  // margin-top: calc(54px + constant(safe-area-inset-top));
  // margin-top: calc(54px + env(safe-area-inset-top));
  padding: 0 12px;

  .list {
    background: #fff;
    padding: 12px;
    box-shadow: 2px 8px 13px 0px rgba(164, 164, 164, 0.4);
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
}
</style>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      isUpLoading: false, // 上拉加载更多
      upFinished: false, //上拉加载完毕
      isDownLoading: false, // 下拉刷新
      isShowLoadding: false,
      pullingText: this.$t('sys.pullingText'),
      loosingText: this.$t('sys.loosingText'),
      loadingText: this.$t('sys.uploadding'),
      tabs: [
        {
          title: this.$t('index.txt38'),
          index: 0,
          name: 'balance-list-o',
        },
        {
          title: this.$t('my.txt2'),
          index: 1,
          name: 'friends-o',
        },
      ],
      params: {
        page: 1,
        size: 1000,
        type: ['CREDIT_INVITE_REGISTER'],
      },
      incomeData: null,
      total: 0,
      oType: 0,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  mounted() {
    this.itemClick(0)
  },
  methods: {
    ...mapActions({
      queryStatementPage: 'user/queryStatementPage',
      myOrder: 'order/myOrder',
    }),
    ifNe(type) {
      //  CREDIT_INVITE_REGISTER, CREDIT_INVITE_WAGER, CREDIT_LOGIN_PROFIT, CREDIT_LUCKY_DRAW, CREDIT_PAYMENT, CREDIT_PROFIT, CREDIT_SUBORDINATE, DEBIT_LUCKY_DRAW, DEBIT_WAGER, DEBIT_WITHDRAW_OTC, FREEZE_WITHDRAW_OTC, UNFREEZE_WITHDRAW_OTC
      let negs = [
        'DEBIT_LUCKY_DRAW',
        'DEBIT_WAGER',
        'DEBIT_WITHDRAW_OTC',
        'FREEZE_WITHDRAW_OTC',
        'DEBIT_BUY_GOOD',
      ]
      return negs.includes(type)
    },
    godetail(item) {
      let type = item.type
      switch (type) {
        case 'CREDIT_PROFIT':
          this.$router.push({
            path: '/contract',
          })

          break
        case 'CREDIT_REGISTER_GIFT':
          this.$router.push({
            path: '/contract',
          })

          break
        case 'DEBIT_WAGER':
          this.$router.push({
            path: '/contract',
          })
          break
        case 'CREDIT_SUNSHINE':
          this.$router.push({
            path: '/welfare',
          })
          break
        case 'CREDIT_INVITE_REGISTER':
          this.$router.push({
            path: '/welfare',
          })
          break
        case 'CREDIT_INVITE_WAGER':
          this.$router.push({
            path: '/welfare',
          })
          break
        case 'CREDIT_SUBORDINATE':
          this.$router.push({
            path: '/welfare',
          })
          break
        case 'CREDIT_LOGIN_PROFIT':
          this.$router.push({
            path: '/welfare',
          })
          break
        case 'DEBIT_BUY_GOOD':
          this.$router.push({
            path: '/contract',
          })
          break
        case 'CREDIT_PAYMENT':
          this.$router.push({
            path: '/deposit',
          })
          break
      }
    },
    getStatusText(type, remark) {
      let jsopRemark = JSON.parse(remark)
      let txt = ''
      switch (type) {
        case 'CREDIT_PAYMENT':
          txt = this.$t('sa.txt137') //存款
          break
        case 'CREDIT_PROFIT':
          txt = this.$t('income.txt8') //发电收益
          break
        case 'CREDIT_LOGIN_PROFIT':
          txt = this.$t('income.txt3') // 登录收益
          break
        case 'CREDIT_INVITE_REGISTER':
          txt = this.$t('income.txt9') // 邀请注册奖励
          break
        case 'CREDIT_INVITE_WAGER':
          txt = this.$t('income.txt10') //邀请投注奖励
          break
        // case 'CREDIT_LUCKY_DRAW':
        //   txt = this.$t('sa.txt136') //抽奖盈利
        // break
        case 'CREDIT_SUBORDINATE':
          txt = this.$t('income.txt11') //下级收益
          break
        case 'DEBIT_WAGER':
          txt = this.$t('income.txt12') //投注
          break
        case 'DEBIT_LUCKY_DRAW':
          txt = this.$t('sa.txt136') //抽奖活动扣除
          break
        case 'DEBIT_WITHDRAW_OTC':
          txt = this.$t('income.txt13') //提款
          break
        case 'FREEZE_WITHDRAW_OTC':
          txt = this.$t('income.txt14') //提款冻结
          break
        case 'UNFREEZE_WITHDRAW_OTC':
          txt = this.$t('income.txt15') //提款解冻
          break
        case 'CREDIT_REGISTER_GIFT':
          txt = this.$t('income.txt16') //注册赠送
          break
        case 'DEBIT_BUY_GOOD':
          txt = this.$t('income.txt17') //商品预购
          break
        case 'CREDIT_MOVEMENT':
          txt = this.$t('income.txt18') //活动投资奖励
          break
        case 'CREDIT_INVESTMENT_GIFT':
          txt = this.$t('income.txt19') //活动投资
          break
        case 'CREDIT_LUCKY_DRAW':
          txt = this.$t('income.txt37') //活动投资
          break
        case 'CREDIT_SUNSHINE':
          if (jsopRemark && jsopRemark.data) {
            let fromType = jsopRemark.data.args || ''
            if (fromType == 'WHATS_APP') {
              txt = this.$t('income.txt20')
            } else if (fromType == 'TWITTER') {
              txt = this.$t('income.txt21')
            } else if (fromType == 'YOUTUBE') {
              txt = this.$t('income.txt22')
            } else if (fromType == 'FACE_BOOK') {
              txt = this.$t('income.txt23')
            } else if (fromType == 'JOIN_TG_GROUP') {
              txt = this.$t('income.txt24')
            } else if (fromType == 'SUB_TG_CHANNEL') {
              txt = this.$t('income.txt25')
            } else if (fromType == 'SHARECHAT') {
              txt = this.$t('income.txt26')
            } else if (fromType == 'MOJ') {
              txt = this.$t('income.txt27')
            } else if (fromType == 'ZALO') {
              txt = this.$t('income.txt26')
            } else if (fromType == 'TIKTOK') {
              txt = this.$t('income.txt27')
            } else if (fromType == 'SUNSHINE_RECHARGE') {
              txt = this.$t('income.txt31')
            } else if (fromType == 'SUNSHINE_PROFIT') {
              txt = this.$t('income.txt30')
            } else if (fromType == 'SUNSHINE_WITHDRAWAL') {
              txt = this.$t('income.txt34')
            } else if (fromType == 'SHARE_MUL_GROUP') {
              txt = this.$t('income.txt35')
            } else if (fromType == 'TELEGRAM') {
              txt = this.$t('income.txt36')
            } else {
              txt = this.$t('income.txt187')
            }
          }
          break
        default:
          txt = this.$t('income.txt33')
      }
      return txt
    },
    itemClick(type) {
      console.log(type)
      this.oType = type
      this.params.type =
        type == 0
          ? [
              'CREDIT_ACTIVITY_WAGER',
              'DEBIT_BUY_GOOD',
              'CREDIT_PROFIT',
              'CREDIT_PAYMENT',
              'DEBIT_LUCKY_DRAW',
              'CREDIT_LUCKY_DRAW',
              'FREEZE_WITHDRAW_OTC',
              'DEBIT_WAGER',
              'DEBIT_WITHDRAW_OTC',
              'UNFREEZE_WITHDRAW_OTC',
              'CREDIT_REGISTER_GIFT',
              'CREDIT_SUNSHINE',
              'CREDIT_MOVEMENT',
              'CREDIT_REGISTER_GIFT',
              'CREDIT_INVESTMENT_GIFT',
            ]
          : type == 1
          ? [
              'CREDIT_INVITE_REGISTER',
              'CREDIT_INVITE_WAGER',
              'CREDIT_SUBORDINATE',
            ]
          : [
              'CREDIT_INVITE_REGISTER',
              'CREDIT_INVITE_WAGER',
              'CREDIT_SUBORDINATE',
            ]
      this.params.page = 1
      this.params.size = 30
      this.incomeData = []
      this.getData()
      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    },
    getData() {
      // this.isShowLoadding = true
      // this.params.uidList = [this.userInfo.id]

      this.queryStatementPage(this.params).then(res => {
        // this.isShowLoadding = false
        if (res.code == 0) {
          // this.incomeData = res.data.records || []
          this.total = Number(res.data.total || 0)
          this.loadFinished(res.data.records)
        } else {
          this.errDialog(res.msg)
        }
      })
    },
    loadFinished(rows) {
      this.upFinished = false
      // this.isLoading = true
      if (rows == null || rows.length === 0) {
        // 加载结束
        this.upFinished = true
        this.isDownLoading = false
        this.isUpLoading = false
        this.isLoading = false
        return
      }
      if (rows.length < this.params.size) {
        // 最后一页不足size条的情况
        this.upFinished = true
      }
      // 处理数据
      if (this.params.page === 1) {
        this.incomeData = rows
      } else {
        this.incomeData = this.incomeData.concat(rows)
      }
      //如果列表数据条数>=总条数，不再触发滚动加载
      if (this.incomeData.length >= this.total) {
        this.upFinished = true
      }
      this.isDownLoading = false
      this.isUpLoading = false
      this.isLoading = false
      console.log(rows)
    },
    // 下拉刷新
    onDownRefresh() {
      this.params.page = 1
      // this.isShowLoadding = true
      setTimeout(() => {
        this.incomeData = []
        this.upFinished = false // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
        this.isDownLoading = true
        this.isUpLoading = true
        this.getData()
      }, 1000)
    },
    // 上拉加载请求方法
    onLoadList() {
      this.params.page += 1
      // this.isShowLoadding = true
      setTimeout(() => {
        this.isUpLoading = true
        this.getData()
      }, 1000)
    },
  },
}
</script>
