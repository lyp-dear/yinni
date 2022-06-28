<template>
  <modMain title="VIP" class="noPadding vip-detail">
    <div class="top-bg"></div>
    <div class="detail-main">
      <div class="vip-card">
        <div class="card-title">OKe-VIP</div>
        <div class="card-desc">
          <p>{{ $t('vip.txt1') }}.</p>
          <p>{{ $t('vip.txt2') }}.</p>
        </div>
      </div>
      <p class="vip-desc">
        {{ $t('vip.txt3') }}
      </p>
      <div class="vip-service">
        <div class="service-title">{{ $t('vip.txt4') }}</div>
        <div class="vip-service-main">
          <div class="service-info">
            <div class="service-l">
              <img src="@/assets/image/home/vip5.png" alt="" />
            </div>
            <div class="service-r">
              <p>
                {{ $t('vip.txt5') }}
              </p>
            </div>
          </div>
          <div class="service-info">
            <div class="service-l">
              <img src="@/assets/image/home/vip6.png" alt="" />
            </div>
            <div class="service-r">
              <p>{{ $t('vip.txt6') }}</p>
            </div>
          </div>
          <div class="service-info">
            <div class="service-l">
              <img src="@/assets/image/home/vip7.png" alt="" />
            </div>
            <div class="service-r">
              <p>
                {{ $t('vip.txt7') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inver-btn">
      <div class="btn" @click="buy">
        {{ $t('vip.txt8') }}
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  methods: {
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    buy() {
      if (this.isLogin()) {
        this.$router.push('/contract')
      }
    },
  },
}
</script>
<style lang="less" scoped>
.vip-detail {
  background: #fff;
  position: relative;
  /deep/ .single-content {
    padding-bottom: 100px !important;
  }
  .top-bg {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 100%;
    height: 200px;
    background: #332e28;
  }
  .detail-main {
    position: relative;
    padding: 40px 14px 0 14px;
    margin-top: -200px;
    .vip-desc {
      color: #956a3d;
      font-size: 14px;
      text-align: center;
      margin: 30px;
      line-height: 18px;
    }
    .vip-card {
      background: linear-gradient(135deg, #f5dfb7 0%, #deb982 100%);
      border-radius: 5px;
      padding: 30px 20px 20px 20px;
      .card-title {
        font-size: 24px;
        color: #52370c;
        margin-bottom: 10px;
      }
      .card-desc {
        p {
          color: #956a3d;
          font-size: 12px;
          line-height: 14px;
          &:nth-of-type(2) {
            margin-top: 10px;
          }
        }
      }
    }
  }
  .vip-service {
    .service-title {
      color: #212121;
      font-size: 20px;
    }
    .vip-service-main {
      margin-top: 24px;
      .service-info {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .service-l {
          flex: 0 0 45px;
          width: 45px;
          margin-right: 12px;
          img {
            width: 45px;
          }
        }
        .service-r {
          p {
            font-size: 16px;
            color: #333;
          }
        }
      }
    }
  }
  .btn {
    background: #332e28;
    box-shadow: 0px 1px 10px 0px rgba(51, 46, 40, 0.51);
    color: #edd1a4;
  }
}
</style>
