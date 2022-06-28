<template>
  <!-- <div class="share-group"></div> -->
  <modMain
    title="Group sharing"
    class="noPadding share-group"
    :btnTxt="$t('task.txt105')"
    @seeImg="showImg = true"
  >
    <div class="upload-group-box">
      <p>
        {{ $t('task.txt117') }}
      </p>
      <p>
        {{ $t('task.txt118') }}
      </p>
      <p style="color:red; margin-top:10px">
        {{ $t('task.txt119') }}
      </p>
      <div class="upload-group">
        <van-uploader
          v-model="fileList"
          :after-read="afterRead"
          :deletable="false"
          accept="image/*"
          max-count="4"
        />
      </div>
      <p class="error" v-if="showError == false">
        Unggah gambar yang salah, harap unggah yang benar besok
      </p>
      <p class="error" v-if="showError == true">
        Disetujui, silakan kembali ke daftar pencarian untuk mendapatkan hadiah
      </p>
    </div>
    <base-btn
      :btnTitle="$t('task.txt48')"
      :disabled="false"
      @btnClick="share()"
    ></base-btn>
    <sharePopup :show="showShare" @close="close" :link="link"> </sharePopup>
    <service></service>
    <van-image-preview v-model="showImg" :images="images" closeable>
    </van-image-preview>
  </modMain>
</template>

<script>
import client from '@/utils/http'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showImg: false,
      showShare: false,
      link: '',
      showError: null,

      fileList: [],
      type: 'WHATS_APP',
      uploadUrl: [],
      images: [require('@/assets/image/cons/WHATS_APP.jpg')],
    }
  },
  mounted() {
    this.link =
      'https://m.sunpowers.online/#/invite' +
      '?code=' +
      this.userInfo.symbolCode
    this.getLast()
  },
  methods: {
    ...mapActions({
      sunshineUrl: 'user/sunshineUrl',
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
        if (res.code === 0) {
          this.showError = res.data.enable

          if (this.isToday(res.data.gmtCreate)) {
            let arr = res.data.url.split(',')
            arr.map(item => {
              this.uploadUrl.push(item)
              this.fileList.push({
                url: this.imgBaseUrl + item,
              })
            })
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
        .postFormData('/upload/fs', {
          file: file,
          type: this.type,
          folder: 'file',
        })
        .then(res => {
          if (res.code == 0) {
            this.uploadUrl.push(res.data)
            this.errDialog('Berhasil diunggah, sistem sedang ditinjau')
            this.sunshine()
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {
          this.$toast.clear()
        })
    },
    sunshine() {
      let params = {
        url: this.uploadUrl.join(','),
        type: this.type,
      }
      this.sunshineUrl(params).then(res => {
        console.log(res)
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
  },
}
</script>

<style lang="less" scoped>
.share-group {
  background: #e5e5e5;
  padding: 40px 10px;
  .error {
    color: red !important;
    font-size: 12px;
    padding-top: 10px;
    text-align: center;
  }
  .upload-group-box {
    margin-top: 20px;
    background: #ffffff;
    border-radius: 15px;
    padding: 25px 15px;
    p {
      font-size: 12px;
      line-height: 17px;
      color: #191b1d;
      &:nth-of-type(2) {
        margin-top: 20px;
      }
    }
    .upload-group {
      margin-top: 10px;
      /deep/ .van-uploader {
        .van-uploader__preview {
          &:last-child {
            margin-right: 0;
          }
          .van-uploader__preview-image {
            width: 74px;
            height: 74px;
          }
        }
      }
    }
  }
}
</style>
