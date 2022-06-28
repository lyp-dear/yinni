<template>
  <div class="upload-mian">
    <div class="upload-mian-left">
      <p>{{ title }}</p>
      <p>{{ $t('task.txt59') }}</p>
    </div>
    <div class="upload-main-right">
      <van-uploader
        :disabled="disabled"
        :after-read="afterRead"
        accept="image/*"
        :max-count="1"
      >
        <van-image
          width="100"
          height="100"
          v-if="sunshineImg"
          :src="imgBaseUrl + sunshineImg"
        >
          <template v-slot:error>Gagal untuk memuat</template>
        </van-image>
        <div class="uload-btn" v-else></div>
      </van-uploader>
    </div>
  </div>
</template>
<script>
import client from '@/utils/http'

export default {
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    imgUrl: {
      type: String,
      default: '',
    },
    showError: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    this.sunshineImg = this.imgUrl
    console.log(this.sunshineImg)
  },
  data() {
    return {
      sunshineImg: '',
    }
  },
  methods: {
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
          type: 'WHATS_APP',
          folder: 'file',
        })
        .then(res => {
          if (res.code == 0) {
            this.$toast.clear()
            this.errDialog(this.$t('dialog.txt6'))
            this.sunshineImg = res.data
            this.$emit('uploadSuccess', this.sunshineImg)
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {
          this.$toast.clear()
        })
    },
  },
}
</script>
<style lang="less" scoped>
.upload-mian {
  background: #ffffff;
  box-shadow: 0px 7px 43px 0px rgba(30, 30, 30, 0.05);
  border-radius: 10px;
  padding: 16px 14px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  .upload-mian-left {
    p {
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      &:nth-of-type(2) {
        font-size: 14px;
        color: #b7b7ba;
        margin-top: 8px;
      }
    }
  }
  .upload-main-right {
    margin-left: auto;
    /deep/.van-uploader .uload-btn {
      width: 55px;
      height: 55px;
      background: url('../../../assets/image/home/upload-btn.png') no-repeat;
      background-size: cover;
    }
    /deep/.van-uploader .get {
      width: 55px;

      object-fit: contain;
    }
  }
}
</style>
