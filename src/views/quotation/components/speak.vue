<template>
  <div class="speak">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation2.jpeg" alt="" />
          </div>
          <p class="name">Veronica Rodriguez</p>
          <p class="user-txt">
            {{ $t('index.txt12') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation3.jpeg" alt="" />
          </div>
          <p class="name">John Alonzo</p>
          <p class="user-txt">
            {{ $t('index.txt13') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Amol Suryavanshi</p>
          <p class="user-txt">
            {{ $t('index.txt14') }}
          </p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation5.jpeg" alt="" />
          </div>
          <p class="name">Melvin Reyes</p>
          <p class="user-txt">
            {{ $t('index.txt15') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation6.jpeg" alt="" />
          </div>
          <p class="name">Jasmine Santos</p>
          <p class="user-txt">
            {{ $t('index.txt16') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Prabahkar Sharma</p>
          <p class="user-txt">
            {{ $t('index.txt17') }}
          </p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Vishal Bhasin</p>
          <p class="user-txt">
            {{ $t('index.txt18') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Kunal Sethi</p>
          <p class="user-txt">
            {{ $t('index.txt19') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Himani Tondan</p>
          <p class="user-txt">
            {{ $t('index.txt20') }}
          </p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Ruchika Singh</p>
          <p class="user-txt">
            {{ $t('index.txt21') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Mehak Rawat</p>
          <p class="user-txt">
            {{ $t('index.txt22') }}
          </p>
        </div>
        <div>
          <div class="img-box">
            <img src="@/assets/image/home/nation1.jpeg" alt="" />
          </div>
          <p class="name">Bhakti Naringrekar</p>
          <p class="user-txt">
            {{ $t('index.txt42') }}
          </p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.speak {
  margin-top: 10px;
  /deep/.my-swipe {
    .van-swipe__indicators {
      .van-swipe__indicator {
        &.van-swipe__indicator--active {
          background: #0094f6 !important;
        }
      }
    }
  }
  .my-swipe .van-swipe-item {
    display: flex;
    background: #f4f5f8;
    & > div {
      flex: 1;
      margin-right: 6px;
      background: #fff;
      border-radius: 6px;
      padding: 0 10px;
      padding-bottom: 10px;
      height: 300px;
      &:nth-of-type(3) {
        margin-right: 0;
      }
      .img-box {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        overflow: hidden;
        border: 1px solid #0094f6;
        border-radius: 100%;
        img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }
      .name {
        font-size: 14px;
        color: #333333;
      }
      .user-txt {
        font-size: 12px;
        color: #999db2;
        text-align: left;
        margin-top: 10px;
        height: 200px;
      }
    }
  }
}
</style>
