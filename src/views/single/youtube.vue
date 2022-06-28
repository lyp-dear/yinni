<template>
  <modMain :title="$t('task.txt48')" class="share-you">
    <div class="share-main">
      <p>1: {{ $t('task.txt92') }}.</p>
      <p>2: {{ $t('task.txt93') }}.</p>
      <p>3:{{ $t('task.txt94') }}.</p>
      <p>4: {{ $t('task.txt95') }}t.</p>
    </div>
    <div class="share-main">
      <p>{{ $t('task.txt96') }}</p>
      <div class="input">
        <input type="text" v-model="url" :placeholder="$t('task.txt97')" />
      </div>
      <p class="error" v-if="showError == false">
        {{
          showError
            ? ''
            : 'Unggah gambar yang salah, harap unggah ulang gambar yang benar'
        }}
      </p>
    </div>
    <div class="inver-btn">
      <div class="btn" @click="saveYoutube">{{ $t('load.txt5') }}</div>
    </div>
  </modMain>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      url: '',
      showError: true,
    }
  },
  created() {
    this.url = localStorage.getItem('sun_shine_img2') || ''
    this.getLast()
  },
  methods: {
    ...mapActions({
      sunshineYoutube: 'user/sunshineYoutube',
      sunshineLast: 'user/sunshineLast',
    }),
    getLast() {
      let params = {
        type: 'YOUTUBE',
      }
      this.sunshineLast(params).then(res => {
        if (res.code === 0) {
          this.showError = res.data.enable
        }
      })
    },
    saveYoutube() {
      let isUrl = /^https?:\/\/([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+/.test(this.url)

      if (!isUrl) {
        this.errDialog(this.$t('task.txt98'))
        return
      }
      this.sunshineYoutube({ url: this.url }).then(res => {
        if (res.code == 0) {
          localStorage.setItem('sun_shine_img2', this.url)
          this.showDialog(this.$t('task.txt99'))
          this.getLast()
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.error {
  color: red !important;
  font-size: 12px;
  text-align: left;
}
.share-you {
  .share-main {
    margin-top: 20px;
    background: #fff;
    box-shadow: 0px 3px 32px 0px rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 10px 13px;
    position: relative;
    p {
      color: #666;
      line-height: 18px;
      margin-top: 10px;
    }
    .input {
      margin-top: 10px;
      height: 40px;
      background: #f6f7fb;
      input {
        height: 100%;
        padding-left: 10px;
      }
    }
  }
}
</style>
