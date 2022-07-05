<template>
  <modMain
    :title="title + ' ' + $t('task.txt48')"
    class="noPadding share-up-main"
    :btnTxt="$t('task.txt105')"
    @seeImg="showImg = true"
  >
    <div class="upload-box">
      <template>
        <p v-if="type == 'JOIN_TG_GROUP'">
          {{ $t('task.txt111') }}
        </p>
        <p v-else-if="type == 'SUNSHINE_PROFIT'">
          {{ $t('task.txt120') }}
        </p>
        <p v-else-if="type == 'YOUTUBE'">{{ $t('task.txt114') }}</p>
        <p v-else-if="type == 'TIKTOK'">{{ $t('task.txt123') }}</p>

        <p v-else>
          <!-- {{ $t('task.txt103[0]') }} {{ title }} {{ $t('task.txt103[1]') }} -->
          {{ $t('task.txt14') }}
        </p>
      </template>
      <template>
        <p v-if="type == 'YOUTUBE'">
          {{ $t('task.txt95') }}
        </p>
        <p v-else-if="type == 'TIKTOK'">
          {{ $t('task.txt124') }}
        </p>
        <p v-else-if="type == 'JOIN_TG_GROUP'">
          {{ $t('task.txt112') }}
        </p>
        <p v-else-if="type == 'SUNSHINE_PROFIT'">
          {{ $t('task.txt121') }}
        </p>

        <p v-else>
          {{ $t('task.txt104[0]') }}{{ title }}{{ $t('task.txt104[1]')
          }}{{ title }}{{ $t('task.txt104[2]') }}
        </p>
      </template>
      <!-- <p style="color:red; margin-top:10px">
        {{ $t('task.txt119') }}
      </p> -->
      <div class="shart-youtube" v-if="type == 'YOUTUBE'">
        <base-input
          v-model="videourl"
          type="text"
          :placeholder="$t('task.txt96')"
        ></base-input>
      </div>
      <div class="upload-btn share-img" v-else>
        <van-uploader
          :after-read="afterRead"
          accept="image/*"
          :deletable="false"
          :max-count="1"
          :disabled="sunshineImg"
        >
        </van-uploader>
        <p class="error" v-if="showError == false">
          Unggah gambar yang salah, harap unggah yang benar besok
        </p>
        <p class="error" v-if="showError == true">
          Disetujui, silakan kembali ke daftar pencarian untuk mendapatkan
          hadiah
        </p>
      </div>
    </div>

    <base-btn
      v-if="type == 'JOIN_TG_GROUP'"
      btnTitle="Join"
      :disabled="false"
      @btnClick="toService('tggroup')"
    ></base-btn>
    <base-btn
      v-else-if="type != 'YOUTUBE'"
      :btnTitle="$t('task.txt48')"
      :disabled="false"
      @btnClick="share()"
    ></base-btn>

    <base-btn
      v-else
      :btnTitle="$t('load.txt5')"
      :disabled="loginDisabled"
      @btnClick="saveYoutube"
    ></base-btn>
    <sharePopup :show="showShare" @close="close" :link="link"> </sharePopup>
    <van-image-preview v-model="showImg" :images="images" closeable>
    </van-image-preview>
    <!-- <service></service> -->
  </modMain>
</template>
<script>
import client from '@/utils/http'
import mixinsSerivce from '@/mixins/service'

import { mapActions, mapGetters } from 'vuex'
export default {
  mixins: [mixinsSerivce],
  data() {
    return {
      videourl: '',
      sunshineImg: null,
      showShare: false,
      link: '',
      showImg: false,
      showError: null,
      imageUrls: [
        {
          type: 'WHATS_APP',
          url: require('@/assets/image/cons/WHATS_APP.jpg'),
        },
        {
          type: 'JOIN_TG_GROUP',
          url: require('@/assets/image/cons/JOIN_TG_GROUP.jpg'),
        },
        {
          type: 'JOIN_TG_GROUP',
          url: require('@/assets/image/cons/JOIN_TG_GROUP.jpg'),
        },
        {
          type: 'TELEGRAM',
          url: require('@/assets/image/cons/TELEGRAM.jpg'),
        },
        {
          type: 'SUNSHINE_RECHARGE',
          url: require('@/assets/image/home/SUNSHINE_RECHARGE.jpg'),
        },
        {
          type: 'SUNSHINE_WITHDRAWAL',
          url: require('@/assets/image/home/SUNSHINE_WITHDRAWAL.jpg'),
        },
        {
          type: 'SUNSHINE_PROFIT',
          url: require('@/assets/image/cons/WHATS_APP.jpg'),
        },
        {
          type: 'DISCORD',
          url: require('@/assets/image/home/DISCORD.jpg'),
        },
        {
          type: 'FACE_BOOK',
          url: require('@/assets/image/cons/FACE_BOOK.jpg'),
        },
        {
          type: 'YOUTUBE',
          url: require('@/assets/image/home/SNAPCHAT.jpg'),
        },
        {
          type: 'ZALO',
          url: require('@/assets/image/cons/ZALO.jpg'),
        },
      ],
      images: [],
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    loginDisabled() {
      if (this.videourl) {
        return false
      } else {
        return true
      }
    },
    title() {
      let t = 'Facebook'
      if (this.type == 'FACE_BOOK') {
        t = 'Facebook'
      } else if (this.type == 'JOIN_TG_GROUP') {
        t = this.$t('task.txt113')
      } else if (this.type == 'WHATS_APP') {
        t = 'WhatsApp'
      } else if (this.type == 'YOUTUBE') {
        t = 'Youtube'
      } else if (this.type == 'TELEGRAM') {
        t = 'Telegram'
      } else if (this.type == 'SUNSHINE_PROFIT') {
        t = 'Tslenergy Show'
      } else if (this.type == 'TIKTOK') {
        t = 'Tiktok'
      } else if (this.type == 'ZALO') {
        t = 'Zalo'
      }
      return t
    },
  },
  created() {
    this.type = this.$route.query.type || ''

    this.getLast()
    let url = this.imageUrls.find(d => d.type == this.type)
    this.images.push(url.url)
    // this.sunshineImg = localStorage.getItem('sun_shine_img')
    // if (this.type == 'YOUTUBE') {
    //   this.videourl = localStorage.getItem('sun_shine_img2') || ''
    // } else if (this.type == 'FACE_BOOK') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img1')
    // } else if (this.type == 'TWITTER') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img3')
    // } else if (this.type == 'WHATS_APP') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img4')
    // } else if (this.type == 'JOIN_TG_GROUP') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img5')
    // } else if (this.type == 'TELEGRAM') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img6')
    // } else if (this.type == 'SNAPCHAT') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img7')
    // } else if (this.type == 'WHATS_APP') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img8')
    // } else if (this.type == 'SUB_TG_CHANNEL') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img9')
    // } else if (this.type == 'SUNSHINE_RECHARGE') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img10')
    // } else if (this.type == 'SUNSHINE_WITHDRAWAL') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img11')
    // } else if (this.type == 'SUNSHINE_PROFIT') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img12')
    // } else if (this.type == 'MOJ') {
    //   this.sunshineImg = localStorage.getItem('sun_shine_img13')
    // }
  },
  mounted() {
    this.link =
      'https://m.ustslenergy.com/#/invite' + '?code=' + this.userInfo.symbolCode
  },
  methods: {
    ...mapActions({
      sunshineYoutube: 'user/sunshineYoutube',
      sunshineLast: 'user/sunshineLast',
    }),
    isToday(date) {
      //Code goes here.
      var d = new Date(date.toString().replace(/-/g, '/'))
      var todaysDate = new Date()
      if (d.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
        return true
      } else {
        return false
      }
    },
    getLast() {
      let params = {
        type: this.type,
      }
      this.sunshineLast(params).then(res => {
        if (res.code === 0 && res.data) {
          this.showError = res.data.enable
          if (this.isToday(res.data.gmtCreate)) {
            this.sunshineImg = res.data.url
            if (this.type == 'YOUTUBE') {
              this.videourl = res.data.url
            }
          }
        }
      })
    },
    async afterRead(files) {
      this.$toast.loading({
        message: this.$t('load.txt4'),
        duration: 0,
        forbidClick: true,
      })
      let file = files.file
      console.log('上传file。。。。。。。。。。', file)
      let fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png']
      if (!fileTypes.includes(file.type)) {
        this.errDialog(this.$t('task.txt60'))

        return
      }
      if (file.size.toFixed(2) > 1024 * 1024 * 6) {
        this.errDialog(this.$t('task.txt61'))
        return
      }
      client
        .postFormData('/upload/sunshine', {
          file: file,
          type: this.type,
          folder: 'file',
        })
        .then(res => {
          console.log('上传返回信息。。。。。。。。。。', res)
          if (res.code == 0) {
            this.$toast.clear()
            this.getLast()
            this.sunshineImg = res.data
            if (this.type == 'FACE_BOOK') {
              localStorage.setItem('sun_shine_img1', this.sunshineImg)
            } else if (this.type == 'YOUTUBE') {
              localStorage.setItem('sun_shine_img2', this.sunshineImg)
            } else if (this.type == 'TWITTER') {
              localStorage.setItem('sun_shine_img3', this.sunshineImg)
            } else if (this.type == 'WHATS_APP') {
              localStorage.setItem('sun_shine_img4', this.sunshineImg)
            } else if (this.type == 'JOIN_TG_GROUP') {
              localStorage.setItem('sun_shine_img5', this.sunshineImg)
            } else if (this.type == 'TELEGRAM') {
              localStorage.setItem('sun_shine_img6', this.sunshineImg)
            } else if (this.type == 'SNAPCHAT') {
              localStorage.setItem('sun_shine_img7', this.sunshineImg)
            } else if (this.type == 'WHATS_APP') {
              localStorage.setItem('sun_shine_img8', this.sunshineImg)
            } else if (this.type == 'JOIN_TG_GROUP') {
              localStorage.setItem('sun_shine_img9', this.sunshineImg)
            } else if (this.type == 'SUNSHINE_RECHARGE') {
              localStorage.setItem('sun_shine_img10', this.sunshineImg)
            } else if (this.type == 'SUNSHINE_WITHDRAWAL') {
              localStorage.setItem('sun_shine_img11', this.sunshineImg)
            } else if (this.type == 'SUNSHINE_PROFIT') {
              localStorage.setItem('sun_shine_img12', this.sunshineImg)
            } else if (this.type == 'MOJ') {
              localStorage.setItem('sun_shine_img13', this.sunshineImg)
            }
            this.errDialog('Berhasil diunggah, sistem sedang ditinjau')
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {
          this.$toast.clear()
        })
    },
    share() {
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
    shareApp() {
      let _content = `${this.$t('task.txt66')}：${this.link}`
      if (window.webkit) {
        window.webkit.messageHandlers.shareSocial.postMessage(_content)
      } else if (window.appInterface) {
        window.appInterface.shareSocial(_content)
      } else {
        console.log(_content)
        this.$copyText(_content).then(
          e => {
            this.showDialog(this.$t('task.txt91'))
          },
          function(e) {
            console.log(e)
          }
        )
      }
    },

    close() {
      this.showShare = false
    },
    saveYoutube() {
      let isUrl = /^https?:\/\/([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+/.test(
        this.videourl
      )

      if (!isUrl) {
        this.errDialog(this.$t('task.txt98'))
        return
      }
      this.sunshineYoutube({ url: this.videourl }).then(res => {
        if (res.code == 0) {
          localStorage.setItem('sun_shine_img2', this.videourl)
          this.showDialog(this.$t('task.txt99'))
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.share-up-main {
  // background: #e5e5e5;
  /deep/ .single-content {
    padding: 12px 16px !important;
    .shart-youtube {
      margin-top: 22px;
    }
    .upload-box {
      border: 1px solid #005983 !important;
      background-image: linear-gradient(180deg, #002962, #00376a) !important;
      border-radius: 15px;
      padding: 25px 15px;
      p {
        font-size: 12px;
        line-height: 17px;
        color: #fff;
        &:nth-of-type(2) {
          margin-top: 20px;
        }
      }
      .upload-btn {
        margin-top: 22px;
        .error {
          color: red;
          font-size: 12px;
          padding-top: 10px;
          text-align: center;
        }
        .van-uploader {
          width: 100%;
          .van-uploader__wrapper {
            justify-content: center;
          }
          .upload-bg {
            width: 232px;
            height: 149px;
            background: url('./../../assets/image/home/uploadicon.png')
              no-repeat;
            background-size: cover;
            margin: 0 auto;
            p {
              font-weight: 500;
              font-size: 12px;
              color: #66717c;
              text-align: center;
              padding-top: 94px;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
