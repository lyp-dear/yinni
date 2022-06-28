<template>
  <modMain :title="title" class="feedback">
    <div class="feedback-box">
      <div class="feedback-top" v-if="$route.query.type == 'feedback'">
        {{ $t('faq.txt24') }}
      </div>
      <div class="feedback-top" v-else>
        {{ $t('faq.txt25') }}
      </div>
      <div class="textarea-info">
        <textarea v-model="msg" :placeholder="$t('faq.txt26')"></textarea>
      </div>
    </div>
    <div class="inver-btn">
      <div class="btn" @click="showBuy">{{ $t('load.txt5') }}</div>
    </div>
  </modMain>
</template>
<script>
export default {
  computed: {
    title() {
      if (this.$route.query.type) {
        return this.$route.query.type == 'feedback'
          ? this.$t('faq.txt4')
          : this.$t('faq.txt5')
      }
    },
  },
  data() {
    return {
      msg: '',
    }
  },
  methods: {
    showBuy() {
      if (this.msg == '') {
        this.showDialog(this.$t('faq.txt22'))

        return
      }
      this.showDialog(this.$t('faq.txt23'))
    },
  },
}
</script>
<style lang="less" scoped>
.feedback {
  .feedback-box {
    padding-top: 20px;
    .feedback-top {
      width: 100%;
      height: 100px;
      background: #0094f6;
      padding: 30px 0 0 10px;
      color: #fff;
      font-size: 16px;
    }
  }
  .textarea-info {
    textarea {
      height: 200px;
      background: #fff;
      padding: 20px;
    }
  }
}
</style>
