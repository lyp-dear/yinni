<template>
  <div class="coincharging ctb-main">
    <!-- <div class="pay-title">
      <span>{{$t('deposit.pleasedeposit[0]')}} {{$route.query.amount}}USDT {{$t('deposit.pleasedeposit[1]')}}</span>
    </div> -->
    <div class="erc-box">
      <label>USDT</label>
      <span>{{ displayName }}</span>
    </div>
    <textarea id="input" class="txtCopyAddress"></textarea>
    <div class="coincharging-main">
      <div class="code-main">
        <div class="tab-title">
          <span>{{ $t('deposit.chainName') }}</span>
          <i class="icon-chain" @click="openInfo"></i>
        </div>
        <div class="tab-coins line05">
          <span
            :class="{ active: idx == currentIdx }"
            v-for="(item, idx) in displayList"
            @click="setDefaultData(item, idx)"
            >{{ item.displayName }}</span
          >
        </div>
        <div class="code-wrap">
          <div id="qrcode" class="qrcode" ref="qrcode"></div>
        </div>
        <!-- <div class="bg-btn">{{$t('deposit.saveQR')}}</div> -->
      </div>
      <div class="coincharging-address">
        <!-- 充币地址 -->
        <p>{{ $t('deposit.depositAddress') }}</p>
        <p class="address">{{ address }}</p>
        <div
          class="copy"
          v-clipboard:copy="address"
          　v-clipboard:success="copy"
        >
          <!-- 复制地址 -->
          <span>{{ $t('deposit.copyAddress') }}</span>
        </div>
      </div>
    </div>
    <div class="tip-text">
      <h2>{{ $t('deposit.ruleDescription') }}</h2>
      <p>{{ ruleText1 }}</p>
      <p>{{ $t('deposit.rules[1]') }}</p>
      <p>{{ minAmountText }}</p>
      <p>{{ $t('deposit.rules[4]') }}</p>
      <!-- <p @click="$router.push('/whatToBuy')"><span>{{$t('deposit.rules[7]')}}</span><span>{{$t('deposit.rules[8]')}}</span></p> -->
      <com-service />
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    QRCode,
  },
  data() {
    return {
      address: '',
      isAndroid: false,
      isIOS: false,
      symbol: 'SYSTEM',
      czType: 1,
      currentBurseItem: null,
      minAmount: '',
      displayList: [],
      currentIdx: 0,
    }
  },

  created() {
    let { token } = this.$route.query
    if (token) {
      localStorage.setItem('token', token)
    }
  },
  mounted() {
    this.getAddress()
  },
  computed: {
    ...mapGetters({
      userinfo: 'user/userInfo',
    }),
    minAmountText() {
      let minAmount = this.minAmount
      // if (this.lang == "zh") {
      //   return `3.最小充币金额：${minAmount}USDT，小于最小金额的充币将不会上账且无法退回。`;
      // } else {
      //   return `3. Minimum deposit amount: ${minAmount}USDT. Deposits smaller than the minimum amount will not be posted and cannot be returned.`;
      // }
      return `3.${this.$t('deposit.rules[2]')}${minAmount}USDT.${this.$t(
        'deposit.rules[3]'
      )}`
    },
    displayName() {
      if (this.displayList && this.displayList.length > 0) {
        return this.displayList[this.currentIdx].displayName
      }
      return ''
    },
    ruleText1() {
      // let zh_text = `1.请勿将上述地址存款任何非${this.displayName}-USDT，否则将不可找回。,`
      // let en_text = `1.Do not deposit any non-${this.displayName}-USDT at the above address,otherwise it will not be retrieved`
      // return this.lang == "zh" ? zh_text : en_text
      return `1.${this.$t('deposit.rules[0]')}${this.displayName}${this.$t(
        'deposit.rules[9]'
      )}`
    },
  },
  methods: {
    ...mapActions({
      otcUrl: 'user/otcPay', //查询用户钱包列表,
      queryDisplayList: 'user/queryDisplayList',
      place_order: 'user/place_order', //支付请求
    }),
    openInfo() {
      this.$dialog
        .alert({
          message: this.$t('dialog.chainInfo'),
          confirmButtonText: this.$t('sys.gotit'),
          messageAlign: 'left',
        })
        .then(() => {
          // on close
        })
    },
    getAddress() {
      let params = {
        cashTypes: 'PAYMENT_COIN', // 钱包充币
      }
      this.queryDisplayList(params).then(res => {
        console.log('充币地址', res)
        if (res.code == 0 && res.data && res.data.length > 0) {
          this.displayList = res.data || [] //.find(d => d.cashType == 'PAYMENT_COIN')
          if (this.displayList.length > 0) {
            this.setDefaultData(this.displayList[0])
          }
        }
      })
    },
    setDefaultData(coinObj, idx = 0) {
      this.currentIdx = idx
      this.minAmount = coinObj.minAmount
      let params = {
        passagewayId: coinObj.id,
        reqMoney: 0,
        reqNum: 0,
      }
      this.postOrder(params)
    },
    postOrder(params) {
      this.place_order(params).then(res => {
        console.log(res)
        this.address = res.data ? res.data.content : ''
        this.qrcode()
      })
    },
    // getData() {
    //   this.queryBurseList().then((res) => {
    //     console.log("充币地址", res);
    //     this.burseList = res || [];
    //     if (this.burseList.length > 0) {
    //       this.currentBurseItem = this.burseList[0];
    //       this.getUrl();
    //     }
    //   });
    // },
    // chooseItem(item) {
    //   this.currentBurseItem = item;
    //   this.address = "";
    //   this.getUrl();
    // },
    qrcode() {
      this.$refs.qrcode.innerHTML = ''
      if (this.address == '') return
      let qrcode = new QRCode('qrcode', {
        width: 120, // 设置宽度
        height: 120, // 设置高度
        colorDark: '#333333', // 二维码颜色
        colorLight: '#ffffff', // 二维码背景色
        correctLevel: QRCode.CorrectLevel.M,
      })
      qrcode.makeCode(this.address)
    },
    saveQRcode() {
      //保存成功
      this.errDialog(this.$t('sys.saved'))
    },
    // 获取地址
    // getUrl() {
    //   let { channelId, payId } = this.currentBurseItem;
    //   let params = {
    //     channelId,
    //     id: payId,
    //   };
    //   console.log("获取充币二维码地址参数", this.currentBurseItem);
    //   this.otcUrl(params)
    //     .then((res) => {
    //       if (res) {
    //         console.log("获取充币二维码地址", res);
    //         if (res && res.code == 0) {
    //           this.address = res.data.content;
    //         }
    //         this.qrcode();
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

    andCopy(val) {
      let text = val.text
      if (window.appInterface) {
        window.appInterface.copyAddress(val)
      }
    },
    copy(val) {
      // this.andCopy(val);
      this.showDialog(this.$t('home.copySuccess'))
    },
  },
}
</script>
