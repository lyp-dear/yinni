<template>
  <modMain :title="$t('my.txt5')" class="noPadding in-withdrwawl">
    <div class="price-box">
      <p>
        <span>{{ $t('withdrawal.txt18') }}</span>
        <span
          >{{ $t('my.txt1') }}{{ $utils.currencyType
          }}{{ $utils.getkStr(balanceNumber) }}</span
        >
      </p>
      <div class="price-input">
        <input type="text" v-model="usdtNum" :placeholder="minAmountText" />
        <div class="price-type">IDR</div>
        <div class="price-all" @click="allPrice">
          {{ $t('withdrawal.txt19') }}
        </div>
      </div>
      <p class="price-fee">
        <span> {{ $t('withdrawal.txt2') }}</span>
        <span> {{ feeRate }}%</span>
      </p>
    </div>
    <p class="choose-card-tit">{{ $t('withdrawal.txt4') }}</p>
    <div class="choose-card" @click="chooseCard">
      <div class="card-name">{{ bankNameCard.name }}</div>
      <div class="card-number">{{ bankNameCard.bankCardId }}</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="tips">
      <h3>{{ $t('task.txt109') }}</h3>

      <p>1: {{ $t('withdrawal.txt6') }}.</p>

      <p>2: {{ $t('withdrawal.txt9') }}.</p>
      <p>3: {{ $t('faq.txt17') }}.</p>
      <p>
        {{ $t('withdrawal.txt10') }}
        <a href="javascript:void(0)" @click="toService('whats')">Telegram</a>
      </p>
    </div>
    <!-- <div class="withdrwawl-top">
      <div class="top-main">
        <p>{{ $t('my.txt1') }}</p>
        <p>{{ $utils.getkStr(balanceNumber) }}</p>
      </div>
    </div>
    <div class="withdrawal-main">
      <div class="withdrawal-input-box">
        <div class="withdrawal-input">
          <div class="input-right">
            <input type="text" v-model="usdtNum" :placeholder="minAmountText" />
          </div>
          <div class="input-left">INR</div>
        </div>
        <div class="desc">
          {{ $t('withdrawal.txt2') }}{{ feeRate }}% {{ $t('withdrawal.txt3')
          }}{{ $utils.currencyType }}{{ this.usdtNum - feeMoney }}
        </div>
      </div>

      <div class="choose-card">
        <div class="choose-title">{{ $t('withdrawal.txt4') }}</div>
        <div class="card-list">
          <van-radio-group
            v-model="bankCardId"
            v-for="(item, index) in bankcards"
            :key="index"
          >
            <van-cell-group>
              <van-cell clickable>
                <template #title>
                  <img src="require('@/assets/image/xapp/scan.png')" alt="" />
                  <p class="custom-title">{{ item.bankCardId }}</p>
                </template>
                <template #right-icon>
                  <van-radio :name="item.id" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <router-link tag="p" to="/addCard" class="add-card">
            <van-icon name="add-o" /><span>{{ $t('withdrawal.txt5') }}</span>
          </router-link>
        </div>
      </div>
      <div class="choose-card">
        <div class="choose-title">{{ $t('withdrawal.txt11') }}</div>
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
                  <img src="@/assets/image/home/with2.png" alt="" />
                  <div>
                    <p class="custom-title">{{ item.displayName }}</p>
                    <p class="custom-desc">{{ item.description }}</p>
                  </div>
                </template>
                <template #right-icon>
                  <van-radio :name="item.id" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </div>
    </div> -->

    <div class="inver-btn">
      <p>
        <span> {{ $t('withdrawal.txt3') }}</span>
        <span> {{ $utils.currencyType }}{{ this.usdtNum - feeMoney }} </span>
      </p>
      <van-button class="btn" :loading="isLoading" @click="buy">{{
        $t('my.txt5')
      }}</van-button>
    </div>
    <loadding v-if="showLoadding" />
    <van-action-sheet
      v-model="showCardList"
      :actions="bankcards"
      :cancel-text="$t('dialog.txt2')"
      :description="$t('withdrawal.txt4')"
      close-on-click-action
      @select="choosebank"
    />
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
    feeRate() {
      if (this.currentitem) {
        let rate = this.currentitem.exchangeRateList.find(
          d => d.currency == 'IDR'
        )

        return (rate.feeRate + rate.taxRate) * 100
      } else {
        return '0.00'
      }
    },
    feeMoney() {
      if (this.usdtNum) {
        let rate = this.currentitem.exchangeRateList.find(
          d => d.currency == 'IDR'
        )

        return (this.usdtNum * (rate.feeRate + rate.taxRate)).toFixed(0)
      } else {
        return '0.00'
      }
    },
    minAmount() {
      if (this.currentitem) {
        let { minAmount, maxAmount, vipMinAmount } = this.currentitem
        return minAmount
      } else {
        return '0:00'
      }
    },

    minAmountText() {
      let str = ''
      if (this.currentitem) {
        let { minAmount, maxAmount, vipMinAmount } = this.currentitem
        let amount = minAmount
        str =
          this.$utils.currencyType +
          amount +
          '-' +
          this.$utils.currencyType +
          maxAmount
      }

      return str
    },
  },
  created() {},
  data() {
    return {
      radio: '',
      balanceNumber: 0,
      bankcards: [],
      showLoadding: false,
      bankCardId: 0,
      cashTypes: 'WITHDRAW_OTC',

      bankList: [],
      currentitem: null,
      usdtNum: '',
      isLoading: false,
      showCardList: false,

      bankNameCard: {
        name: '',
        bankCardId: '',
      },
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getQueryUser()
    })
  },
  methods: {
    ...mapActions({
      queryAccountList: 'user/queryAccountList',
      queryDisplayList: 'user/queryDisplayList',
      applyBurse: 'user/applyBurseOtc',
      getBankCard: 'bankCard/getBankCard',
    }),
    chooseCard() {
      this.showCardList = true
    },
    choosebank(action, index) {
      this.bankCardId = action.id
      this.bankNameCard = {
        name: action.bankName,
        bankCardId: action.bankCardId,
      }
    },
    allPrice() {
      this.usdtNum = this.balanceNumber
    },
    buy() {
      let { id, maxAmount } = this.currentitem
      if (this.usdtNum * 1 < Number(this.minAmount)) {
        this.errDialog(
          `${this.$t('withdrawal.txt12')}` +
            this.minAmount +
            this.$utils.currencyType
        )
        return
      }
      if (this.usdtNum * 1 > Number(maxAmount)) {
        this.errDialog(
          `${this.$t('withdrawal.txt13')}` +
            this.$utils.currencyType +
            maxAmount
        )
        return
      }

      let params = {
        passagewayId: this.radio, //通道ID
        targetCurrency: 'IDR', //到账币种
        reqNum: this.usdtNum,
        bindId: this.bankCardId,
      }

      let _this = this
      this.isLoading = true
      this.applyBurse(params)
        .then(res => {
          this.isLoading = false
          if (res.code == 0) {
            _this.$router.push({
              path: 'result-success',
              query: {
                type: 2,
              },
            })
          } else {
            if (res.code == 5025) {
              this.$dialog.alert({
                title: this.$t('withdrawal.txt14'),
                message: this.$t('withdrawal.txt9'),
              })
            } else {
              _this.errDialog(res.msg)
            }
          }
        })
        .catch(err => {
          this.showpass = false
          this.isLoading = false

          if (err.code == '4105') {
            this.$dialog.alert({
              title: this.$t('withdrawal.txt14'),
              message: this.$t('withdrawal.txt9'),
            })
          } else {
            this.errDialog(err.msg)
          }
        })
    },
    _getBankCard() {
      this.showLoadding = true
      this.getBankCard()
        .then(res => {
          if (res.code == 0) {
            // this.bankcards = res.data
            let arr = res.data
            arr.map(item => {
              let obj = Object.assign({}, item)
              obj.name = obj.bankCardId
              this.bankcards.push(obj)
            })
            this.bankCardId = res.data[0].id
            this.bankNameCard = {
              name: res.data[0].bankName,
              bankCardId: res.data[0].bankCardId,
            }
          }
          this.showLoadding = false
        })
        .catch(res => {
          this.showLoadding = false
        })
    },
    getList() {
      let params = {
        cashTypes: this.cashTypes,
      }
      this.queryDisplayList(params).then(res => {
        this.bankList = res.data
        this.currentitem = res.data[0]
        this.radio = res.data[0].id
      })
    },
    async getQueryUser() {
      if (this.userInfo && this.userInfo.username) {
        await this.queryAccountList()
        await this._getBankCard()
        await this.getList()

        this.balanceNumber =
          this.userAccount.balance - this.userAccount.freezeCapital
      }
    },
    chooseBank(item) {
      this.radio = item.id
      this.currentitem = Object.assign({}, item)
    },
  },
}
</script>
<style lang="less" scoped>
.in-withdrwawl {
  /deep/ .single-content {
    padding-bottom: 100px !important;
    background: #f3f3f3;
    .choose-card,
    .price-box,
    .tips {
      background: #fff;
      border-radius: 12px;
      padding: 20px 16px;
      margin-top: 20px;
    }
    .choose-card-tit {
      margin: 20px 0 8px 16px;
      color: #16141f;
    }
    .choose-card {
      margin-top: 0;
      display: flex;
      align-items: center;
      .card-number {
        flex: 1;
        text-align: right;
        margin-right: 10px;
      }
      .van-icon {
        margin-left: auto;
      }
    }
    .tips {
      h3 {
        color: #16141f;
        font-size: 16px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
        color: #16141f;
        line-height: 20px;
        font-weight: 500;
      }
    }
  }
}
</style>
