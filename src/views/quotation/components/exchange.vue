<template>
  <div class="index-exchange">
    <div class="tit">{{ $t('index.txt44') }}</div>
    <div class="otc-banner">
      <div @click="goWeb('wazirx')">
        <img src="@/assets/image/otc/otc1.jpg" alt="" />
      </div>
      <div @click="goWeb('aax')">
        <img src="@/assets/image/otc/otc2.jpg" alt="" />
      </div>
      <div @click="goWeb('ok')">
        <img src="@/assets/image/otc/otc3.jpg" alt="" />
      </div>
      <div @click="goWeb('bian')">
        <img src="@/assets/image/otc/otc4.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goWeb(name) {
      let url = ''
      if (name == 'wazirx') {
        url = 'https://wazirx.com/'
      } else if (name == 'aax') {
        url = 'https://home.aax.com/'
      } else if (name == 'ok') {
        url = 'https://www.OKe.com/'
      } else if (name == 'bian') {
        url = 'https://www.binance.com/'
      } else {
        url = 'https://www.binance.com/'
      }
      if (window.appInterface) {
        window.appInterface.openBrowser(url)
      } else {
        window.location.href = url
      }
    },
  },
}
</script>
<style lang="less" scoped>
.index-exchange {
  margin: 20px 0;
  .tit {
    color: #121212;
    font-weight: 500;
    font-size: 16px;
  }
  .otc-banner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    & > div {
      flex: 0 0 49%;
      height: 60px;
      border: 0.6px solid #0094f6;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 6px;
      &:nth-of-type(2n) {
        margin-left: 1%;
      }

      img {
        width: 100%;
        height: 60px;
        object-fit: cover;
      }
    }
  }
}
</style>
