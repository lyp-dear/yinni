<template>
  <div class="help-container help-one">
    <div class="title">{{ $t('faq.txt27') }}</div>
    <div class="help-main">
      <div class="img-box">
        <img src="@/assets/image/otc/power6.jpg" alt="" />
      </div>
      <div class="small-title">
        {{ $t('faq.txt28') }}
      </div>
      <div class="img-box">
        <img src="@/assets/image/otc/power1.jpg" alt="" />
      </div>
      <p>{{ $t('faq.txt29') }}</p>
      <div class="img-box">
        <img src="@/assets/image/otc/power2.jpg" alt="" />
      </div>
      <p>{{ $t('faq.txt30') }}</p>
      <div class="img-box">
        <img src="@/assets/image/otc/power3.jpg" alt="" />
      </div>
      <p>{{ $t('faq.txt31') }}</p>
      <div class="img-box">
        <img src="@/assets/image/otc/power4.jpg" alt="" />
      </div>
      <p>
        {{ $t('faq.txt32') }} <br /><br />
        {{ $t('faq.txt33') }}<br /><br />
      </p>
      <div class="img-box">
        <img src="@/assets/image/otc/power5.jpg" alt="" />
      </div>
      <p>
        {{ $t('faq.txt34') }}<br /><br />
        {{ $t('faq.txt35') }}
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.help-container {
  padding: 15px 16px;
  background: #fff;
  min-height: 100%;
  .title {
    font-size: 16px;
    line-height: 20px;

    color: #1a1f2d;
    padding-bottom: 15px;
    border-bottom: 1px solid #f2f2f2;
  }
}
.img-box {
  border: 2px solid #22b156;
  border-radius: 8px;
  overflow: hidden;
}
.help-one {
  .help-main {
    margin: 15px 0;
    p {
      font-size: 10px;
      line-height: 19px;
      margin-top: 10px;

      color: #6c717d;
    }
    .small-title {
      font-size: 14px;
      line-height: 26px;
      color: #1a1f2d;
      margin-bottom: 10px;
    }
    .text-box {
      p {
        margin-bottom: 10px;
      }
    }
    .price-box {
      margin-top: 10px;
      p {
        font-size: 15px;
        line-height: 19px;
        color: #eb1d2a;
        margin-bottom: 10px;
      }
    }
    .pro-box {
      margin-top: 10px;
      p {
        margin-bottom: 10px;
        font-size: 15px;
        color: #1a1f2d;
      }
    }
  }
}
</style>
