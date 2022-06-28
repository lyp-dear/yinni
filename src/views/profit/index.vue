<template>
  <div class="main my-main">
    <div class="my-top">
      <div class="avatar-name">
        <div class="avatar">
          <template v-if="!userInfo.headImg">
            <img src="@/assets/image/sun/logo.png" alt="" />
          </template>
          <template v-else>
            <img :src="imgBaseUrl + userInfo.headImg" alt="" />
          </template>
        </div>
        <div class="name-uid">
          <template v-if="userInfo && userInfo.username">
            <p>
              <span> {{ userInfo.username || '--' }}</span>
            </p>
            <p>UID {{ userInfo.uid || '--' }}</p>
          </template>
          <template v-else>
            <p>{{ $t('my.txt34') }}</p>
          </template>
        </div>
      </div>
      <div class="my-money-box">
        <div class="my-money-info">
          <div class="icon">
            <img src="@/assets/image/otc/icon9.png" alt="" />
          </div>
          <p>{{ $t('my.txt1') }}</p>
          <p v-if="userAccount">
            {{
              $utils.getkStr(userAccount.balance - userAccount.freezeCapital)
            }}({{ $utils.currencyType }})
          </p>
          <van-loading
            type="spinner"
            v-else-if="userInfo.username != null"
            size="14"
          />
          <p v-else>0({{ $utils.currencyType }})</p>
        </div>
        <div class="my-money-info">
          <div class="icon">
            <img src="@/assets/image/otc/icon10.png" alt="" />
          </div>
          <p>{{ $t('my.txt2') }}</p>
          <p>
            {{ $utils.getkStr(incomeData.incomeTeam) }}({{
              $utils.currencyType
            }})
          </p>
        </div>
        <div class="my-money-info">
          <div class="icon">
            <img src="@/assets/image/otc/icon11.png" alt="" />
          </div>
          <p>{{ $t('my.txt35') }}</p>
          <p>
            <!-- {{ userAccount ? $utils.getkStr(userAccount.freezeCapital) : 0 }}({{
              $utils.currencyType
            }}) -->
            {{
              treeData && treeData.childrenList
                ? treeData.childrenList.length
                : 0
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="my-main-contaner">
      <div class="rec-with">
        <template v-if="userInfo && userInfo.username">
          <div @click="toGo('/deposit')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/depost.png" alt="" />
            </div>
            <p>{{ $t('my.txt4') }}</p>
          </div>
          <div @click="toGo('/withdrawal')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/withdraw.png" alt="" />
            </div>
            <p>{{ $t('my.txt5') }}</p>
          </div>
        </template>
        <template v-else>
          <div @click="$router.push('/register')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/reg-icon.png" alt="" />
            </div>
            <p>{{ $t('my.txt16') }}</p>
          </div>
          <div @click="$router.push('/login')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/login-icon.png" alt="" />
            </div>
            <p>{{ $t('my.txt17') }}</p>
          </div>
        </template>
      </div>

      <!-- <whitdraw-box v-if="userAccount"></whitdraw-box> -->
      <!-- <van-swipe
        class="my-swipe"
        :autoplay="7000"
        indicator-color="#0094F6"
        :stop-propagation="false"
      >
        <van-swipe-item style="background-color:none">
          <div class="activity-container" @click="toService('tggroup')">
            <div class="activity-main"></div>
          </div>
        </van-swipe-item>
      </van-swipe> -->
      <div class="link-box">
        <div class="link-main" @click="toPath('/income')">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon12.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt6') }}</div>
          <van-icon class="arrow" name="arrow" />
        </div>
        <div @click="toPath('/bankCard')" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon13.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt7') }}</div>
          <van-icon class="arrow" name="arrow" />
        </div>
        <router-link
          tag="div"
          :to="{ path: '/inOutList', query: { type: 2 } }"
          class="link-main"
        >
          <div class="link-icon">
            <img src="@/assets/image/otc/icon17.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt11') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
        <router-link
          tag="div"
          :to="{ path: '/inOutList', query: { type: 1 } }"
          class="link-main"
        >
          <div class="link-icon">
            <img src="@/assets/image/otc/icon18.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt12') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
        <router-link tag="div" to="/problem" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon14.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt8') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
      </div>
      <div class="link-box" style="margin-top:10px;">
        <div class="link-main" @click="toService('whats')">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon15.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt9') }}</div>
          <van-icon class="arrow" name="arrow" />
        </div>
        <router-link tag="div" to="/about" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon16.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt10') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
        <!-- <router-link tag="div" to="/recruitment" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/cons/logo.png" alt="" />
          </div>
          <div class="link-name">Rekrutmen SunPower</div>
          <van-icon class="arrow" name="arrow" />
        </router-link> -->
        <router-link tag="div" to="/setting" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon19.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt13') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-main {
  background: #f7f7f7;
  .my-top {
    width: 100%;
    height: 230px;
    background: url('./../../assets/image/otc/mebg.png') no-repeat;
    background-size: cover;
    padding: 20px 25px 0 25px;
    .avatar-name {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .avatar {
        flex: 0 0 72px;
        width: 72px;
        height: 72px;
        background: #fff;
        border-radius: 100%;
        margin-right: 8px;
        overflow: hidden;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .name-uid {
        p {
          font-size: 18px;
          color: #ffffff;
          font-weight: 500;
          &:nth-of-type(1) {
            display: flex;
            align-items: center;
            span {
              &:nth-of-type(1) {
                max-width: 120px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
              }
              &:nth-of-type(2) {
                font-size: 10px;
                color: #ff8f52;
                margin-left: 20px;
                flex: 0 0 60px;
                width: 60px;
                text-align: center;
                height: 20px;
                line-height: 20px;
                background: #fff0cd;
                border-radius: 20px;
              }
            }
          }
          &:nth-of-type(2) {
            margin-top: 8px;
          }
        }
      }
    }
    .my-money-box {
      display: flex;
      align-items: center;
      // justify-items: center;
      text-align: center;
      .my-money-info {
        flex: 1;
        .icon {
          width: 32px;
          height: 32px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 32px;
          }
        }
        p {
          font-size: 14px;
          color: #ffffff;
          margin-top: 10px;
        }
      }
    }
  }

  .my-main-contaner {
    padding: 0 14px;
    .rec-with {
      padding: 10px 0 16px 0;
      display: flex;
      & > div {
        flex: 1;
        background: #ffffff;
        border-radius: 20px;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .rec-icon {
          flex: 0 0 30px;
          width: 30px;
          img {
            width: 100%;
          }
        }
        p {
          font-size: 16px;
          color: #121212;
          font-weight: 600;
          margin-left: 12px;
        }
        &:nth-of-type(1) {
          margin-right: 7px;
        }
        &:nth-of-type(2) {
          margin-left: 7px;
        }
      }
    }
    .my-swipe {
      .activity-container {
        height: 92px;
        background: url('./../../assets/image/otc/jointg.png') no-repeat;
        background-size: cover;
        position: relative;
        .activity-main {
          position: absolute;
          left: 10px;
          top: 30px;
          p {
            color: #657fff;
            &:nth-of-type(2) {
              margin-top: 6px;
            }
          }
        }
      }
    }
    .link-box {
      background: #ffffff;
      border-radius: 10px;
      padding: 16px 24px;
      .link-main {
        padding-bottom: 12px;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .link-icon {
          flex: 0 0 20px;
          width: 20px;
          img {
            width: 100%;
          }
        }
        .link-name {
          margin-left: 10px;
          font-size: 16px;
          color: #4a4a4a;
          font-weight: 500;
        }
        .arrow {
          margin-left: auto;
          color: #cccccc;
          font-size: 16px;
        }
        &:last-of-type {
          border: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }
    }
  }
}
</style>
<script>
import { mapActions, mapGetters } from 'vuex'
import mixinsSerivce from '@/mixins/service'
export default {
  mixins: [mixinsSerivce],
  data() {
    return {
      showPopover: false,
      showPopover1: false,
      isShowBlance: false,
      isShowLoadding: false,
      news: [],
      incomeData: {
        incomeTeam: 0, //提成
        incomeToday: 0, // 今日收益
        incomeGrand: 0, // 累计收益
      },
      tgUrls: [],
      wathsrls: [],
      isApp: '',
      isWithdrawTime: false,
      treeData: null,
      treeData: {
        totalContribution: 0,
        yesterdayContribution: 0,
        mobilePhone: '',
      },
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getQueryUser()
    })
  },
  // beforeRouteLeave(to, from, next) {
  //   // ...
  //   if (window.appInterface) {
  //     window.appInterface.setStatusColor('#ffffff')
  //   }
  //   next()
  // },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      userAccount: 'user/userAccount',
      isBindBank: 'bankCard/isBindBank',
    }),
  },
  // activated() {
  //   if (this.userInfo && this.userInfo.username) {
  //     await this.queryAccountList()
  //     await this.getqueryIncome()
  //   }
  // },
  created() {
    this.isApp = sessionStorage.getItem('Revenue details')
  },
  methods: {
    ...mapActions({
      getUser: 'user/query',
      queryAccountList: 'user/queryAccountList',
      queryIncome: 'user/queryIncome',
      getBankCard: 'bankCard/getBankCard',
      getWtime: 'bankCard/getWtime',
      queryUserTreeNode: 'user/queryUserTreeNode',
    }),

    getData() {
      let params = {
        queryUserId: this.userInfo.id,
        isDirect: false,
      }
      this.queryUserTreeNode({}).then(res => {
        if (res.code == 0) {
          if (res.code == 0) {
            this.treeData = res.data[0]
            if (this.treeData) {
              this.secondNodes = this.treeData.childrenList || []
              let total = 0
              this.secondNodes.forEach(item => {
                total =
                  Number(total) + Number((item.totalContribution || 0) * 0.1)

                // console.log('total=', total)
                this.childrenCount += item.childrenList
                  ? item.childrenList.length
                  : 0
                // this.secondNodes[symbol] = item.childrenList
                item.threeNodes = item.childrenList || []
                // item.threeNodes.forEach(d => {
                //   total += d.totalContribution * 0.03
                // })
              })
              this.treeData.totalIncomeContribution = this.treeData.totalContribution
              this.treeData.totalIncome =
                (this.treeData.totalContribution || 0) + Number(total)
            }
          }
        }
      })
    },
    downLoad() {
      this.$utils.downApp()
    },

    _getWtime() {
      this.getWtime().then(res => {
        if (res.code == 0) {
          this.isWithdrawTime = res.data
        }
      })
    },
    // startStep() {
    //   let vm = this
    //   this.$nextTick(() => {
    //     let introJS = require('intro.js')
    //     introJS()
    //       .setOptions({
    //         nextLabel: '',
    //         doneLabel: 'Next',
    //         showBullets: false,
    //         overlayOpacity: 0.7,
    //         exitOnEsc: false,
    //         exitOnOverlayClick: false,
    //       })
    //       .start()
    //       .oncomplete(function() {
    //         vm.$router.push('/contract')
    //       })
    //   })
    // },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },

    toSharePage() {
      if (this.isLogin()) {
        // this.$router.push('/sharePage')
        this.$router.push('/product')
      }
    },
    toPath(path) {
      let _path = path
      if (this.isLogin()) {
        this.$router.push({
          path: _path,
        })
      }
    },
    toGo(path) {
      let _path = path
      if (this.isLogin()) {
        if (!this.isBindBank && path == '/withdrawal') {
          if (!this.isWithdrawTime) {
            this.errDialog(this.$t('my.txt27'))
            return
          }
          this.$dialog
            .confirm({
              title: '',
              message: this.$t('dialog.txt8'),
              cancelButtonText: this.$t('dialog.txt2'),
              confirmButtonText: this.$t('dialog.txt7'),
            })
            .then(() => {
              this.$router.push({
                path: '/addcard',
                query: {
                  from: 'withdrawal',
                },
              })
            })
            .catch(() => {
              // on cancel
            })
          return
        }
        this.$router.push({
          path: _path,
        })
      }
    },
    getLevelName(level) {
      if (!level || level == 0) {
        return 'Free'
      } else {
        return 'VIP' + level
      }
    },
    getqueryIncome() {
      this.queryIncome().then(res => {
        if (res.code == 0) {
          if (res.data) {
            this.incomeData.incomeGrand = res.data.incomeGrand || 0
            this.incomeData.incomeTeam = res.data.incomeTeam || 0
            this.incomeData.incomeToday = res.data.incomeToday || 0
          }
        }
      })
    },
    async getQueryUser() {
      if (this.userInfo && this.userInfo.username) {
        await this.getUser()
        await this.queryAccountList()
        await this.getqueryIncome()
        await this.getBankCard()
        await this._getWtime()
        await this.getData()
      }
    },
    setBlanceState() {
      this.isShowBlance = !this.isShowBlance
    },
    getbroadData(n = 20) {
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
      let n = this.randomNum(5, 50) // 1-50随机数
      let pre = [12, 14, 15, 16, 21, 23, 25, 31, 43, 85]
      let idx = this.randomNum(0, 9)
      // 12（CTBC电话公司）、14（巴西电信）、15（TELEFÔNICA）、16（CETERP）、21（ENBRATEL）、23（INTELIG）、25（GVT）、31（TELEMAR）、43（SERCOMTEL）、85（VÉSPER）
      let price = (n * 500).toFixed(0)
      let name = pre[idx] + random()
      let lang = localStorage.getItem('locale') || 'en_US'
      // 用户88***888   邀请了6个好友,领取了3R$
      // 用户88***888   下级收益提成R$xx
      let _title = ''
      _title = ` ${this.$t('sa.txt11')} ${n} ${this.$t('sa.txt47')} Rp ${price}`
      let obj = {
        title: name + _title,
      }
      return obj
    },
  },
}
</script>
