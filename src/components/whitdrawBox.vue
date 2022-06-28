<template>
  <div class="whitdraw-box">
    <div
      @click="toGo('/withdrawal')"
      class="withdraw-btn "
      v-if="userAccount.balance - userAccount.freezeCapital > 1000000"
    >
      {{ $t('my.txt5') }}
    </div>
    <router-link tag="div" to="/welfare" class="withdraw-btn " v-else>
      {{ $t('my.txt36') }}
    </router-link>
    <div class="whitdrawpro-main">
      <div class="whitdraw-top">
        <div class="avatar-name">
          <div class="name-balance">
            <p v-if="userAccount">
              {{ $t('my.txt1') }}
              {{
                $utils.getkStr(userAccount.balance - userAccount.freezeCapital)
              }}({{ $utils.currencyType }})
            </p>
          </div>
        </div>
        <router-link tag="div" to="/income" class="detail"
          >{{ $t('faq.txt8') }}<van-icon name="arrow"
        /></router-link>
      </div>
      <div class="whitdraw-progress">
        <van-circle
          v-model="currentRate"
          :rate="rate"
          layer-color="rgba(91, 186, 255, 0.99)"
          :stroke-width="60"
          color="#fff"
        >
          <div slot="default" class="circle-txt">{{ rate }}%</div>
        </van-circle>
      </div>

      <p
        class="desc"
        v-if="userAccount.balance - userAccount.freezeCapital >= 1000000"
      >
        Bây giờ bạn có thể giải nén {{ $utils.currencyType
        }}{{ userAccount.balance - userAccount.freezeCapital }}
      </p>
      <p class="desc" v-else>
        Bạn vẫn cần {{ $utils.currencyType
        }}{{ 1000000 - userAccount.balance - userAccount.freezeCapital }} để rút
        tiền, chia sẻ nhiệm vụ để kiếm thêm
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      userAccount: 'user/userAccount',
      isBindBank: 'bankCard/isBindBank',
    }),
  },
  data() {
    return {
      currentRate: 100,
      rate: 0,
      isWithdrawTime: false,
    }
  },
  mounted() {
    this._getWtime()
    this.getRate()
  },
  methods: {
    ...mapActions({
      getWtime: 'bankCard/getWtime',
    }),
    _getWtime() {
      this.getWtime().then(res => {
        if (res.code == 0) {
          this.isWithdrawTime = res.data
        }
      })
    },
    toGo(path) {
      if (!this.isBindBank && path == '/withdrawal') {
        if (!this.isWithdrawTime) {
          this.errDialog(this.$t('my.txt27'))
          return
        }
        this.$dialog
          .confirm({
            title: '',
            message: this.$t('dialog.txt8'),
            cancelButtonText: this.$t('dialog.txt2'),
            confirmButtonText: this.$t('dialog.txt7'),
          })
          .then(() => {
            this.$router.push({
              path: '/addcard',
              query: {
                from: 'withdrawal',
              },
            })
          })
          .catch(() => {
            // on cancel
          })
        return
      }
      this.$router.push({
        path: path,
      })
    },
    getRate() {
      if (this.userAccount) {
        this.rate =
          this.userAccount.balance - this.userAccount.freezeCapital >= 1000000
            ? 100
            : (
                ((this.userAccount.balance - this.userAccount.freezeCapital) /
                  1000000) *
                100
              ).toFixed(2)
      } else {
        this.rate = 0
      }
    },
  },
}
</script>
<style lang="less" scoped>
.whitdraw-box {
  margin: 20px 0 40px 0;
  position: relative;
  .withdraw-btn {
    // width: 146px;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(
      0deg,
      rgba(91, 186, 255, 0.99) 0%,
      #ffffff 100%
    );
    box-shadow: 2px 8px 51px 0px rgba(91, 186, 255, 0.99);
    border-radius: 20px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    color: #0697ff;
    white-space: nowrap;
  }
  .whitdrawpro-main {
    background-image: linear-gradient(
      90deg,
      rgba(91, 186, 255, 0.99) 0%,
      #0697ff 93%
    );
    border-radius: 14px;
    padding: 12px 16px;
    .whitdraw-top {
      display: flex;
      align-items: center;
      .avatar-name {
        display: flex;
        align-items: center;

        .avatar {
          flex: 0 0 30px;
          width: 30px;
          height: 30px;
          overflow: hidden;
          border-radius: 100%;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
        p {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          &:nth-of-type(2) {
            margin-top: 4px;
          }
        }
      }
      .detail {
        margin-left: auto;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        i {
          vertical-align: top;
        }
      }
    }
    .whitdraw-progress {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      .circle-txt {
        line-height: 100px;
        color: #fff;
        font-size: 20px;
      }
    }
    .desc {
      font-size: 12px;
      color: #fff;
      margin: 10px 0 30px 0;
      text-align: center;
      font-weight: 500;
    }
  }
}
</style>
