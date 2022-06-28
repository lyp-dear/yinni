<template>
  <modMain title="Protocol" class="xieyi">
    <xieyiEn />
  </modMain>
</template>
<script>
import xieyiEn from './xieyi_en'
// import webViewMixins from '@/mixins/webview.js'
export default {
  // mixins: [webViewMixins],
  components: {
    xieyiEn,
  },
  data() {
    return {
      locale: localStorage.getItem('locale'),
    }
  },
}
</script>
<style lang="less">
.xieyi {
  .title {
    font-size: 14px;
  }
  p {
    line-height: 24px;
    font-size: 12px;
    &.title {
      margin-top: 15px;
    }
  }
  h2 {
    &.title {
      text-align: center;
      line-height: 30px;
      font-size: 18px;
    }
  }
  .indet {
    text-indent: 2em;
  }
}
</style>
