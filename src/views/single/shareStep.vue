<template>
  <modMain :title="$t('task.txt48')" class="noPadding share-step">
    <div class="time-box">
      <div>{{ $t('task.txt53') }}:</div>
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </div>
    <van-steps :active="active" active-color="#5754fd">
      <van-step
        >{{ $t('task.txt49') }}
        <p v-if="receiveQuantity >= 1">({{ $t('task.txt54') }})</p></van-step
      >
      <van-step
        >{{ $t('task.txt50') }}
        <p v-if="receiveQuantity >= 2">({{ $t('task.txt54') }})</p></van-step
      >
      <van-step
        >{{ $t('task.txt51') }}
        <p v-if="receiveQuantity >= 3">({{ $t('task.txt54') }})</p></van-step
      >
      <van-step
        >{{ $t('task.txt52') }}
        <p v-if="receiveQuantity >= 4">({{ $t('task.txt54') }})</p></van-step
      >
    </van-steps>
    <div class="upload-box">
      <Uplod
        :title="$t('task.txt62')"
        :disabled="fridisabled"
        @uploadSuccess="uploadSuccess1"
        :imgUrl="imgUrl1"
      ></Uplod>
      <p class="error" v-if="!fridisabled && showError == false">
        {{
          showError
            ? ''
            : 'Unggah gambar yang salah, harap unggah ulang gambar yang benar'
        }}
      </p>
      <Uplod
        :title="$t('task.txt63')"
        :disabled="secdisabled"
        @uploadSuccess="uploadSuccess2"
        :imgUrl="imgUrl2"
      ></Uplod>
      <p class="error" v-if="!secdisabled && showError == false">
        {{
          showError
            ? ''
            : 'Unggah gambar yang salah, harap unggah ulang gambar yang benar'
        }}
      </p>
      <Uplod
        :title="$t('task.txt64')"
        :disabled="thrdisabled"
        @uploadSuccess="uploadSuccess3"
        :imgUrl="imgUrl3"
      ></Uplod>
      <p class="error" v-if="!thrdisabled && showError == false">
        {{
          showError
            ? ''
            : 'Unggah gambar yang salah, harap unggah ulang gambar yang benar'
        }}
      </p>
      <Uplod
        :title="$t('task.txt65')"
        :disabled="foudisabled"
        @uploadSuccess="uploadSuccess4"
        :imgUrl="imgUrl4"
      ></Uplod>
      <p class="error" v-if="!foudisabled && showError == false">
        {{
          showError
            ? ''
            : 'Unggah gambar yang salah, harap unggah ulang gambar yang benar'
        }}
      </p>
    </div>
    <div class="rule-img" @click="showImg = true">
      <!-- <img :src="images[0]" alt="" /> -->
      <p>{{ $t('task.txt102') }}</p>
    </div>
    <div class="rule-box">
      <div class="rule-title">{{ $t('contract.txt14') }}:</div>
      <div class="rule-txt">
        <p>1: {{ $t('task.txt55') }}</p>
        <p>2: {{ $t('task.txt56') }}</p>
        <p>3:{{ $t('task.txt57') }}</p>
        <p>4: {{ $t('task.txt58') }}</p>
      </div>
    </div>

    <sharePopup :show="showShare" @close="close" :link="link"> </sharePopup>
    <div class="inver-btn">
      <div class="btn" @click="share()">{{ $t('task.txt48') }}</div>
    </div>
    <van-image-preview v-model="showImg" :images="images"> </van-image-preview>
  </modMain>
</template>
<script>
import Uplod from './components/upload.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { Uplod },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  data() {
    return {
      time: 0,
      showShare: false,
      link: '',
      fridisabled: false,
      secdisabled: false,
      thrdisabled: false,
      foudisabled: false,

      imgUrl1: '',
      imgUrl2: '',
      imgUrl3: '',
      imgUrl4: '',
      nowData: null,
      active: 0,
      receiveQuantity: 0,
      images: [require('@/assets/image/home/WHATS_APP.jpg')],
      showImg: false,
      showError: '',
    }
  },
  mounted() {
    this.link =
      'https://in.Tslenergyonline.live/#/invite' +
      '?code=' +
      this.userInfo.symbolCode
  },
  created() {
    this.imgUrl1 = localStorage.getItem('sun_shine_img14') || ''
    this.imgUrl2 = localStorage.getItem('sun_shine_img15') || ''
    this.imgUrl3 = localStorage.getItem('sun_shine_img16') || ''
    this.imgUrl4 = localStorage.getItem('sun_shine_img17') || ''

    this.nowData = this.$route.query.nowData
      ? JSON.parse(this.$route.query.nowData)
      : null

    if (this.nowData) {
      this.active = this.nowData.receiveQuantity - 1
      this.receiveQuantity = this.nowData.receiveQuantity
      var ntime = new Date().getTime()
      this.time = this.nowData.nextJoinTime - ntime
      if (this.nowData.receiveQuantity == 1) {
        this.fridisabled = true
        this.secdisabled = false
        this.thrdisabled = true
        this.foudisabled = true
      } else if (this.nowData.receiveQuantity == 2) {
        this.fridisabled = true
        this.secdisabled = true
        this.thrdisabled = false
        this.foudisabled = true
      } else if (this.nowData.receiveQuantity == 3) {
        this.fridisabled = true
        this.secdisabled = true
        this.thrdisabled = true
        this.foudisabled = false
      } else if (this.nowData.receiveQuantity == 4) {
        this.fridisabled = false
        this.secdisabled = true
        this.thrdisabled = true
        this.foudisabled = true
      }
    } else {
      this.fridisabled = false
      this.secdisabled = true
      this.thrdisabled = true
      this.foudisabled = true
    }
    this.getLast()
  },
  methods: {
    ...mapActions({
      sunshineYoutube: 'user/sunshineYoutube',
      sunshineLast: 'user/sunshineLast',
    }),
    uploadSuccess1(val) {
      localStorage.setItem('sun_shine_img14', val)
      this.getLast()
    },
    uploadSuccess2(val) {
      localStorage.setItem('sun_shine_img15', val)
      this.getLast()
    },
    uploadSuccess3(val) {
      localStorage.setItem('sun_shine_img16', val)
      this.getLast()
    },
    uploadSuccess4(val) {
      localStorage.setItem('sun_shine_img17', val)
      this.getLast()
    },
    getLast() {
      let params = {
        type: 'WHATS_APP',
      }
      this.sunshineLast(params).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.showError = res.data.enable
          console.log(this.showError)
        }
      })
    },
    close() {
      this.showShare = false
    },
    getType() {
      // https://in.Tslenergyonline.live/l9jo142n/sunshine/last?type=SUNSHINE_RECHARGE
    },
    share() {
      console.log(1111)
      let _ver = Number(localStorage.getItem('app_version') || 0)
      if (_ver >= 103) {
        this.showShare = true
      } else {
        if (window.appInterface) {
          this.shareApp()
        } else {
          this.showShare = true
        }
      }
    },
    shareApp(s = '') {
      let _content = `${this.$t('task.txt66')}：${this.link}`
      if (window.webkit) {
        window.webkit.messageHandlers.shareSocial.postMessage(_content)
      } else if (window.appInterface) {
        window.appInterface.shareSocial(_content)
      }
    },
  },
}
</script>
<style lang="less" scoped>
.error {
  color: red;
  font-size: 12px;
  padding: 0 10px 10px 10px;
}
.share-step {
  background: #f4f7fe;
  padding-top: 54px;
  /deep/ .single-content {
    padding: 0 10px;
    padding-bottom: 100px !important;
  }
  .time-box {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    line-height: 20px;
    padding: 10px 0;
    background: #ffffff;
    box-shadow: 0px 0px 9px 1px rgba(90, 87, 253, 0.26);
    border-radius: 5px;
    font-weight: 500;
    color: #5754fd;
    font-size: 14px;
    text-align: center;
    /deep/.van-count-down {
      color: #5754fd;
      font-size: 16px;
      margin-left: 10px;
    }
  }
  /deep/ .van-steps {
    background: none;
    .van-step__circle-container {
      background: none;
    }
  }
  .rule-img {
    margin-bottom: 10px;
    p {
      font-size: 12px;
      margin-top: 10px;
      color: #4948ff;
    }
  }
  .rule-box {
    background: #ffffff;
    box-shadow: 0px 2px 44px 0px rgba(196, 196, 196, 0.16);
    border-radius: 10px;
    padding: 25px 20px;
    .rule-title {
      color: #000000;
      font-weight: 500;
      font-size: 16px;
    }
    .rule-txt {
      margin-top: 10px;
      p {
        color: #b7b7ba;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
