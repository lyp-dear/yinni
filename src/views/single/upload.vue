<template>
  <modMain title="Bagikan manfaat" class="noPadding">
    <div class="main mission mis-upload">
      <div class="content">
        <div class="mis-box fc">
          <p class="tips">
            1: Setelah penarikan/isi ulang berhasil, kirim tangkapan layar ke
            grup Telegram<br /><br />
            2: Tangkapan layar grup Telegram yang mengirim catatan, menunggu
            ulasan untuk menerima hadiah
          </p>
        </div>
        <div class="mis-box upload-box">
          <div class="upload-btn share-img">
            <van-uploader
              :after-read="afterRead"
              accept="image/*"
              :max-count="1"
            >
              <img
                v-if="sunshineImg"
                class="get"
                :src="imgBaseUrl + sunshineImg"
                alt=""
              />
              <img v-else src="@/assets/image/xapp/xins/upload.png" alt="" />
            </van-uploader>
          </div>
        </div>
        <div class="service-app" @click="toService">
          <img src="@/assets/image/xapp/xins/tg.png" alt="" />
          <p>{{ $t('sa.txt77') }} {{ $t('sa.txt177') }}</p>
        </div>
      </div>
    </div>
  </modMain>
</template>
<script>
import mixinsSerivce from '@/mixins/service'
import client from '@/utils/http'
export default {
  mixins: [mixinsSerivce],
  data() {
    return {
      sunshineImg: null,
    }
  },
  created() {
    this.sunshineImg = localStorage.getItem('sun_shine_img')
  },
  methods: {
    async afterRead(files) {
      this.$toast.loading({
        message: this.$t('sys.uploadding'),
        duration: 0,
        forbidClick: true,
      })
      let file = files.file
      console.log('上传file。。。。。。。。。。', file)
      let fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png']
      if (!fileTypes.includes(file.type)) {
        this.errDialog(this.$t('sys.imgErr'))
        return
      }
      if (file.size.toFixed(2) > 1024 * 1024 * 6) {
        this.errDialog(this.$t('sys.uploadSize'))
        return
      }
      console.log('开始上传。。。。。。。。。。', file)
      client
        .postFormData('/upload/sunshine', {
          file: file,
          folder: 'file',
          type: 'SUNSHINE',
        })
        .then(res => {
          console.log('上传返回信息。。。。。。。。。。', res)
          if (res.code == 0) {
            this.sunshineImg = res.data
            localStorage.setItem('sun_shine_img', res.data)
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {})
        .finally(res => {
          this.$toast.clear()
        })
    },
    toService() {
      let _url = 'https://t.me/joinchat/gQ3I4pXaSUViZDVl'
      if (window.webkit) {
        window.webkit.messageHandlers.openBrowser.postMessage(_url)
      } else if (window.appInterface) {
        if (typeof window.appInterface.openBrowser === 'function') {
          window.appInterface.openBrowser(_url)
        } else if (typeof window.appInterface.goToBrowser === 'function') {
          window.appInterface.goToBrowser(_url)
        } else {
          window.location.href = _url
        }
      } else {
        window.location.href = _url
      }
    },
  },
}
</script>
