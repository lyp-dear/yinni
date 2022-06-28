<template>
  <div class="product">
    <!-- <div class="product-banner" @click="gousdt">
      <img src="@/assets/image/otc/advertise.png" alt="" />
    </div> -->
    <div class="product-tit">{{ $t('index.txt19') }}</div>
    <div class="product-container">
      <div class="product-info">
        <div class="prduct-name">
          <p>{{ $t('index.txt20') }}</p>
        </div>
        <div class="product-icon">
          <img src="@/assets/image/cons/icon1.png" alt="" />
        </div>
      </div>
      <div class="product-info">
        <div class="prduct-name">
          <p>{{ $t('index.txt21') }}</p>
        </div>
        <div class="product-icon">
          <img src="@/assets/image/cons/icon2.png" alt="" />
        </div>
      </div>
      <div class="product-info">
        <div class="prduct-name">
          <p>{{ $t('index.txt23') }}</p>
        </div>
        <div class="product-icon">
          <img src="@/assets/image/cons/icon3.png" alt="" />
        </div>
      </div>
      <div class="product-info">
        <div class="prduct-name">
          <p>{{ $t('index.txt24') }}</p>
        </div>
        <div class="product-icon">
          <img src="@/assets/image/cons/icon4.png" alt="" />
        </div>
      </div>
      <div class="product-info">
        <div class="prduct-name">
          <p>{{ $t('index.txt25') }}</p>
        </div>
        <div class="product-icon">
          <img src="@/assets/image/cons/icon9.png" alt="" />
        </div>
      </div>
      <div class="product-info">
        <div class="prduct-name">
          <p>{{ $t('index.txt26') }}</p>
        </div>
        <div class="product-icon">
          <img src="@/assets/image/cons/icon10.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gousdt() {
      let url = 'https://tether.to/'
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
.product {
  margin-top: 20px;
  .product-banner {
    width: 100%;
    margin-bottom: 16px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .product-tit {
    font-size: 16px;
    color: #121212;
    font-weight: 500;
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
    & > div {
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      margin-top: 16px;
      padding-right: 20px;

      &:nth-of-type(2n) {
        position: relative;
        padding-left: 20px;
        padding-right: 0;

        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 30px;
          background: #e6e6e6;
          top: 4px;
          left: 0;
        }
      }
      .prduct-name {
        p {
          font-size: 14px;
          color: #000000;
          font-weight: 500;
          &:nth-of-type(2) {
            margin-top: 8px;
            font-size: 12px;
            color: #8b8c8d;
          }
        }
      }
      .product-icon {
        flex: 0 0 34px;
        width: 34px;
        margin-left: auto;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
