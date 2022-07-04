<template>
  <modMain :title="$t('my.txt4')" class="noPadding in-money" from="inMoney">
    <div class="price-box">
      <p>
        <span>{{ $t('depost.txt1') }}</span>
      </p>
      <div class="price-input">
        <input
          type="text"
          v-model="usdtNum"
          @focus="focus"
          @blur="blur"
          :placeholder="$t('depost.txt2')"
        />
        <div class="price-type">IDR</div>
      </div>
    </div>
    <div class="price-box">
      <p class="choose-tit">{{ $t('depost.txt20') }}</p>
      <div class="choose-money">
        <div
          class="price-box-info"
          :class="[index == activeIndex ? 'active' : '']"
          v-for="(item, index) in disPlayList"
          :key="index"
          @click="selectNum(item, index)"
        >
          {{ $utils.getkStr(item) }}
        </div>
      </div>
    </div>
    <p class="choose-card-tit">{{ $t('depost.txt3') }}</p>
    <div class="choose-card" @click="chooseCard">
      <div class="card-name">{{ bankNameCard.name }}</div>
      <van-icon class="arrow" name="arrow" />
    </div>

    <!-- <div class="balance-box">
      <div class="balance-main">
        <p>{{ $t('my.txt1') }}</p>
        <p>{{ $utils.getkStr(balanceNumber) }}</p>
      </div>
    </div>
    <div class="money-title">{{ $t('depost.txt1') }}</div>
    <div class="pay-input">
      <input
        class="ipt"
        type="text"
        v-model="usdtNum"
        @focus="focus"
        @blur="blur"
        :placeholder="$t('depost.txt2')"
      />
      <span>{{ currency }}</span>
    </div>

    <div class="price-box">

    </div>
    <div class="money-title">{{ $t('depost.txt3') }}</div>
    <div class="card-list">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell
            clickable
            @click="chooseBank(item)"
            v-for="(item, index) in bankList"
            :key="index"
          >
            <template #title>
              <img src="@/assets/image/home/dep.png" alt="" />
              <span class="custom-title">{{ item.displayName }}</span>
            </template>
            <template #right-icon>
              <van-radio :name="item.id" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <div class="tips">
        <h3>{{ $t('task.txt109') }}</h3>
        <p>1: {{ $t('depost.txt4') }}.</p>
        <p>2:{{ $t('faq.txt12') }}.</p>
        <p>3: {{ $t('faq.txt13') }}</p>
        <p>
          {{ $t('withdrawal.txt10') }}
          <a href="javascript:void(0)" @click="toService('whats')">Telegram</a>
        </p>
      </div>
    </div> -->

    <div class="inver-btn">
      <van-button class="btn" :loading="isLoading" @click="buy">{{
        $t('my.txt4')
      }}</van-button>
    </div>
    <van-action-sheet
      v-model="showCardList"
      :actions="bankList"
      :cancel-text="$t('dialog.txt2')"
      :description="$t('depost.txt3')"
      close-on-click-action
      @select="chooseBank"
    />
    <van-dialog
      v-model="showCpfInfo"
      :title="$t('cpf.txt1')"
      show-cancel-button
      :cancelButtonText="$t('cpf.txt2')"
      :confirm-button-text="$t('cpf.txt3')"
      cancelButtonColor="#1fbf75"
      @cancel="updateCpf"
      @confirm="sureCpf"
    >
      <div class="cpf-info" v-if="userInfo">
        <div class="item">
          <span>{{ $t('cpf.txt4') }}</span>
          <span>{{ userInfo.name }}</span>
        </div>
        <!-- <div class="item">
            <span>{{ $t('user.surname') }}</span>
            <span>{{ userInfo.surname }}</span>
          </div> -->
        <div class="item">
          <span>{{ $t('cpf.txt5') }}</span>
          <span>{{ userInfo.email }}</span>
        </div>
        <!-- <div class="item">
            <span>{{ $t('user.cpf') }}</span>
            <span>{{ userInfo.cpfCode || '-' }}</span>
          </div> -->
        <div class="item">
          <span>{{ $t('cpf.txt6') }}</span>
          <span>{{ userInfo.mobilePhone }}</span>
        </div>
      </div>
    </van-dialog>
  </modMain>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      userAccount: 'user/userAccount',
    }),

    disPlayList() {
      let arr = []

      if (this.currentitem) {
        arr = this.currentitem.selection.split(',')
      }
      return arr
    },
    minAmount() {
      // let minAmounts = [70, 60, 50, 40, 30, 0]
      if (this.currentitem) {
        return this.currentitem.minAmount
      }
      return 10 //minAmounts[this.userInfo.level]
    },
    maxAmount() {
      // let minAmounts = [70, 60, 50, 40, 30, 0]
      if (this.currentitem) {
        return this.currentitem.maxAmount
      }
      return 100 //minAmounts[this.userInfo.level]
    },
    currency() {
      if (this.currentitem) {
        return this.currentitem.exchangeRateList[0].currency
      }
      return ''
    },
    symbol() {
      if (this.currentitem) {
        return this.currentitem.exchangeRateList[0].symbol
      }
      return ''
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.getQueryUser()
  //   })
  // },
  data() {
    return {
      usdtNum: '',
      radio: '',
      balanceNumber: 0,
      cashTypes: 'PAYMENT_OTC',
      bankList: [],
      currentitem: null,
      needKyc: false, //是否需要kyc认证
      isLoading: false,
      showCpf: false,
      showCpfInfo: false,
      isSureCpf: false,
      buyLoading: false,

      showCardList: false,
      activeIndex: 0,

      bankNameCard: {
        name: '',
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapActions({
      // queryAccountList: 'user/queryAccountList',
      queryDisplayList: 'user/queryDisplayList',
      place_order: 'user/place_order', //支付请求
    }),
    // async getQueryUser() {
    //   if (this.userInfo && this.userInfo.username) {
    //     await this.queryAccountList()

    //     this.balanceNumber =
    //       this.userAccount.balance - this.userAccount.freezeCapital
    //   }
    // },
    chooseCard() {
      this.showCardList = true
    },
    focus() {
      this.scrollTop = document.scrollingElement.scrollTop
    },

    blur() {
      document.scrollingElement.scrollTo(0, this.scrollTop)
    },
    selectNum(item, index) {
      if (index == this.activeIndex) return
      this.activeIndex = index
      this.usdtNum = item
    },
    getList() {
      let params = {
        cashTypes: this.cashTypes,
      }
      this.queryDisplayList(params).then(res => {
        let arr = res.data
        arr.map(item => {
          let obj = Object.assign({}, item)
          obj.name = obj.displayName
          this.bankList.push(obj)
        })
        this.currentitem = res.data[0]
        this.radio = res.data[0].id
        this.usdtNum = this.currentitem.selection.split(',')[0]
        this.needKyc = this.currentitem.needKyc
        this.bankNameCard.name = res.data[0].displayName
      })
    },
    chooseBank(item) {
      this.radio = item.id
      this.currentitem = Object.assign({}, item)
      this.usdtNum = this.currentitem.selection.split(',')[0]
      this.needKyc = this.currentitem.needKyc
      this.bankNameCard.name = this.currentitem.displayName
    },
    buy() {
      if (Number(this.usdtNum) < this.minAmount * 1) {
        this.errDialog(
          `${this.$t('depost.txt5')}${this.symbol} ` + this.minAmount
        )
        return
      }
      if (Number(this.usdtNum) > this.maxAmount * 1) {
        this.errDialog(
          `${this.$t('depost.txt6')} ${this.symbol} ` + this.maxAmount
        )
        return
      }
      if (this.needKyc) {
        if (!this.isSureCpf) {
          if (!this.isCpf()) {
            // this.showCpf = true
            this.$router.push({
              path: '/cpf',
              query: {
                type: this.currentitem.displayName,
              },
            })
            return
          }
        }
      }

      let param = {
        passagewayId: this.currentitem.id, //'1407344680428896256',
        reqMoney: this.usdtNum,
        reqCurrency: this.currency,
      }
      // if (
      //   Number(this.usdtNum) < this.miniLimit ||
      //   Number(this.usdtNum) > this.maxLimit
      // ) {
      //   this.errDialog(this.buytext)
      //   return
      // }
      this.isLoading = true
      this.place_order(param)
        .then(res => {
          this.isLoading = false
          this.isSureCpf = false
          if (res && res.code == 0) {
            let obj = res.data
            if (!obj) return
            let { type, content } = obj
            if (type == 1) {
              //表示跳转支付页面
              this.$router.push({
                path: '/payiframe',
                query: {
                  src: content,
                },
              })
            } else if (type == 2) {
              //返回支付卡片信息
              // 跳转卡片信息
              sessionStorage.setItem('payData', JSON.stringify(res.data))
              // this.$router.push({ path: '/payDetail' })
            } else if (type == 4) {
              //新窗口打开存款链接 马甲包加一个跳转方法
              let _url = content
              if (window.webkit) {
                window.webkit.messageHandlers.openBrowser.postMessage(_url)
              } else if (window.appInterface) {
                window.appInterface.openBrowser(_url)
              } else {
                window.location.href = content
                // window.open(content, '_blank') // 此方法不兼容ios书签模式
                // this.$utils.openWindow(content)
              }
            } else if (type == 5) {
              this.formHTML = content
              this.$nextTick(() => {
                document.getElementById('pixForm').submit()
              })
              // this.$router.push({
              //   path: '/payiframe',
              //   query: {
              //     src: '/form?html=1',
              //   },
              // })
              // return
            } else {
              this.$router.push({ path: '/deposit' })
            }
          } else {
            this.errDialog(res.msg)
          }
          // else if (res.code == 5032) {
          //   this.dialogKyc()
          //   return
          // }
        })
        .catch(err => {
          this.isLoading = false
          this.isSureCpf = false
          this.errDialog(this.$t('load.txt6'))
        })
    },
    updateCpf() {
      // this.showCpf = true
      this.$router.push({
        path: '/cpf',
        query: {
          type: this.currentitem.displayName,
        },
      })
    },
    sureCpf() {
      this.showCpfInfo = false
      this.isSureCpf = true // CPF专享 这个点击确定才进行下一步
      this.buy()
    },
    isCpf() {
      let user = this.userInfo
      let cpfData = {
        name: '',
        mobilePhone: '',
        email: '',
        // cpfCode: '',
      }
      Object.keys(cpfData).forEach(key => {
        cpfData[key] = user[key]
      })
      console.log(cpfData)
      let arr = Object.keys(cpfData).filter(
        v => !cpfData[v] && typeof cpfData[v] !== 'number'
      )
      return arr.length <= 0 //true 代表认证过了
    },
  },
}
</script>
<style lang="less" scoped>
.in-money {
  /deep/ .single-content {
    padding-bottom: 100px !important;
    padding: 0 15px;
    .choose-card,
    .price-box,
    .tips {
      border-radius: 12px;
      padding: 20px 16px;
      margin-top: 20px;
      border: 1px solid #005983 !important;
      background-image: linear-gradient(180deg, #002962, #00376a) !important;
    }
    .choose-card-tit {
      margin: 20px 0 8px 16px;
      color: #fff;
    }
    .choose-card {
      display: flex;
      align-items: center;
      margin-top: 0;
      .van-icon {
        margin-left: auto;
      }
    }
    .choose-tit {
      color: #fff;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .choose-money {
      display: flex;
      flex-wrap: wrap;
      // margin-top: 20px;
      .price-box-info {
        flex: 0 0 31%;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;
        text-align: center;
        background: #f8f7fc;
        box-sizing: border-box;
        // border-right: 10px solid #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-of-type(3n) {
          // border-right: 0;
          margin-right: 0;
        }
        &.active {
          border: 1px solid #0094f6;
          color: #0094f6;
        }
      }
    }
  }
}
</style>
