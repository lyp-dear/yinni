<template>
  <div class="help-container help-one">
    <div class="chare" style="margin-bottom:30px">
      <div class="title">{{ $t('faq.txt9') }}</div>
      <div class="help-main">
        <div class="text-box">
          <p>1:{{ $t('faq.txt10') }}</p>
          <div class="img-box">
            <img src="@/assets/image/otc/helpdep1.jpg" alt="" />
          </div>
          <p>2:{{ $t('faq.txt11') }}</p>
          <div class="img-box">
            <img src="@/assets/image/otc/helpdep2.jpg" alt="" />
          </div>
          <p>3:{{ $t('faq.txt12') }}</p>
          <div class="img-box">
            <img src="@/assets/image/otc/helpdep3.jpg" alt="" />
          </div>
          <p>4:{{ $t('faq.txt13') }}</p>
        </div>
      </div>
    </div>
    <div class="title">{{ $t('my.txt5') }}</div>
    <div class="help-main">
      <div class="text-box">
        <p>1:{{ $t('faq.txt14') }}</p>
        <div class="img-box">
          <img src="@/assets/image/otc/helpwith1.jpg" alt="" />
        </div>
        <p>2:{{ $t('faq.txt15') }}</p>
        <div class="img-box">
          <img src="@/assets/image/otc/helpwith2.jpg" alt="" />
        </div>
        <p>3:{{ $t('faq.txt16') }}</p>
        <p>4:{{ $t('faq.txt17') }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.help-container {
  padding: 15px 16px;
  background: #fff;
  min-height: 100%;
  .title {
    font-size: 22px;
    line-height: 28px;

    color: #1a1f2d;
    padding-bottom: 15px;
    border-bottom: 1px solid #f2f2f2;
  }
}
.help-one {
  .help-main {
    .help-video {
      video {
        width: 100%;
      }
    }
    margin-top: 15px;
    p {
      font-size: 15px;
      line-height: 19px;

      color: #6c717d;
    }
    .small-title {
      margin-top: 20px;
      font-size: 20px;
      line-height: 26px;
      color: #1a1f2d;
    }
    .text-box {
      p {
        margin-bottom: 10px;
      }
    }
    .img-box {
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }
}
</style>
