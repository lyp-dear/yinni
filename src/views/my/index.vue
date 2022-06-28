<template>
  <div class="my-main">
    <div class="head" @click="jumbTo">
      <div class="info">
        <template v-if="!userInfo.headImg">
          <img
            src="@/assets/image/my/icon_mrtx_nor@2x.png"
            class="artx"
            alt=""
          />
        </template>
        <template v-else>
          <img :src="imgBaseUrl + userInfo.headImg" alt="" class="artx" />
        </template>
        <div class="neal">
          <div class="name" v-show="userInfo.source == 1">
            {{ userInfo.nickname || userInfo.username }}
            <img
              @click.stop="$router.push('/memberLevel')"
              :src="vipImg"
              alt=""
            />
          </div>
          <div class="idnum">
            UID<span> {{ isLogin ? userInfo.uid || '--' : '--' }}</span>
          </div>
        </div>
      </div>
      <span class="right-arrow" v-show="userInfo.source == 1"></span>
    </div>
    <div class="pannl">
      <div class="blance">
        <span
          >{{
            disk == 'simulate'
              ? $t('userswitching.practiceBalance')
              : $t('userswitching.balance')
          }}(USDT)</span
        >
        <div
          class="eyes"
          :class="{ hiddle: !isShowBlance }"
          @click="setBlanceState"
        ></div>
      </div>
      <div class="blance-total">
        <span v-if="isShowBlance">{{
          isLogin ? personalMsgKey[0].value : '--'
        }}</span>
        <span v-else>*******</span>
      </div>
      <div class="deposit">
        <template v-if="userInfo.source == 1">
          <div class="btn dep" @click="toinMoney">{{ $t('bill.deposit') }}</div>
          <div class="btn with" @click="towithdrawal">
            {{ $t('bill.withdraw') }}
          </div>
        </template>
        <template v-else>
          <div class="btn dep" @click="$router.push('/register')">
            {{ $t('home.register') }}
          </div>
          <div class="btn with" @click="$router.push('/login')">
            {{ $t('home.login') }}
          </div>
        </template>
      </div>
    </div>
    <div class="cell-main">
      <div class="cell-box" @click="$router.push('/transactions')">
        <div class="left-content">
          <div class="icon-img tran">
            <!-- <img src="@/assets/image/my/icon_me_transactions@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.transactions') }}</div>
        </div>
        <span class="right-arrow"></span>
      </div>
      <div class="cell-box" @click="tocoupon">
        <div class="left-content">
          <div class="icon-img coupon" :class="{ point: isShowPoint }">
            <!-- <img src="@/assets/image/my/icon_me_coupon@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.coupon') }}</div>
        </div>
        <span class="right-arrow"></span>
      </div>
      <div class="cell-box" @click="$router.push('/announcement')">
        <div class="left-content">
          <div class="icon-img ann" :class="{ point: isShowNoticPoint }">
            <!-- <img src="@/assets/image/my/icon_me_announcement@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.announcement') }}</div>
        </div>
        <span class="right-arrow"></span>
      </div>
      <div class="cell-box" @click="totradeSetting">
        <div class="left-content">
          <div class="icon-img trade">
            <!-- <img src="@/assets/image/icon/icon_me_trade setting@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.tradeSetting') }}</div>
        </div>
        <span class="right-arrow"></span>
      </div>
      <div class="cell-box marb20" @click="toSetting">
        <div class="left-content">
          <div class="icon-img set">
            <!-- <img src="@/assets/image/my/icon_me_setting@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.setting') }}</div>
        </div>
        <span class="right-arrow"></span>
      </div>
      <div class="cell-box" @click="$router.push('/problem')">
        <div class="left-content">
          <div class="icon-img how">
            <!-- <img src="@/assets/image/my/icon_me_how to play@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.help') }}</div>
        </div>
        <span class="right-arrow"></span>
      </div>
      <div class="cell-box" @click="$router.push('/service')">
        <div class="left-content">
          <div class="icon-img ser">
            <!-- <img src="@/assets/image/my/icon_me_kf@2x.png" alt="" /> -->
          </div>
          <div class="label">{{ $t('user.service') }}</div>
        </div>

        <span class="right-arrow"></span>
      </div>
    </div>
    <div class="version">
      <!-- App version 1.0.0 -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { bus } from '@/utils/bus'
export default {
  data() {
    return {
      config,
      disk: localStorage.getItem('t_diskinfo'),
    }
  },
  computed: {
    ...mapState({
      isShowBlance: 'isShowBlance',
    }),
    ...mapGetters({
      userInfo: 'user/userInfo',
      isLogin: 'user/isLogin',
      personalMsgKey: 'account/personalMsgKey',
    }),
    vipImg() {
      let imgStr = 'vip_1'
      if (this.userInfo.level == 3) {
        imgStr = 'vip_3'
      } else if (this.userInfo.level == 2) {
        imgStr = 'vip_2'
      } else {
        imgStr = 'vip_1'
      }
      return require(`@/assets/image/my/icon_me_${imgStr}@2x.png`)
    },
    hasNewObj() {
      return this.$store.getters.getShowDot()
    },
    isShowPoint() {
      return this.hasNewObj && this.hasNewObj.hasNewLuckyMoney
    },
    isShowNoticPoint() {
      return this.hasNewObj && this.hasNewObj.hasNewNotice
    },
  },
  methods: {
    ...mapMutations({
      setBlance: 'SET_BLANCE_STATE',
    }),
    setBlanceState() {
      let isShowBlance = !this.isShowBlance
      this.setBlance(isShowBlance)
    },
    towithdrawal() {
      if (!this.checkAccount()) return
      if (!this.userInfo.surname) {
        this.$dialog
          .confirm({
            message: this.$t('dialog.kycMsg'), //'请先进行kyc认证',
            showCancelButton: true,
            confirmButtonText: this.$t('sys.goVerification'),
            cancelButtonText: this.$t('sys.cancel'),
          })
          .then(res => {
            this.$router.push({
              path: '/verfication',
            })
          })
          .catch(() => {
            return
          })
        return
      }
      if (!this.userInfo.password) {
        this.$dialog
          .confirm({
            message: this.$t('dialog.firstSetPayPwd'), //'请先设置支付密码',
            showCancelButton: true,
            confirmButtonText: this.$t('dialog.gotoSet'),
            cancelButtonText: this.$t('sys.cancel'),
          })
          .then(res => {
            this.$router.push({
              path: '/updatePayPwd',
            })
          })
          .catch(() => {
            return
          })
        return
      }
      this.$router.push('/withdrawal')
    },
    toSetting() {
      if (!this.checkAccount(true)) return
      this.$router.push('/setting')
    },
    tocoupon() {
      if (!this.checkAccount()) return
      this.$router.push('/coupon')
    },
    totradeSetting() {
      // if (!this.checkAccount()) return
      this.$router.push('/tradeSetting')
    },
    checkAccount(isSet = false) {
      if (this.userInfo.source == 1) {
        let disk = localStorage.getItem('t_diskinfo')
        if (disk == 'simulate') {
          this.$dialog
            .confirm({
              message: this.$t('sys.toreal'), //'请先切换至真实账户',
              confirmButtonText: this.$t('sys.switch'),
              cancelButtonText: this.$t('sys.cancel'),
            })
            .then(res => {
              console.log('res', res)
              if (res == 'confirm') {
                this.disk = 'actual'
                bus.$emit('chargeAccountType', false)
              } else {
                return false
              }
              return false
            })
          return false
        } else {
          return true
        }
      } else {
        if (isSet) {
          return true
        } else {
          this.$router.push('/login')
          return false
        }
      }
    },
    toinMoney() {
      if (!this.checkAccount()) return
      this.$router.push('/deposit')
    },
    jumbTo() {
      this.userInfo.source == 1 && this.$router.push('/personal')
    },
  },
}
</script>
