<template>
  <modMain
    :title="$t('gift.txt1')"
    class="gift"
    isSave
    isSee
    :btnTxt="$t('gift.txt4')"
    @seeImg="showNotic = true"
  >
    <div class="gift-main">
      <div class="wrapper">
        <div class="open-has" :class="[isOpen ? 'opened' : '']">
          <div class="mod-chest">
            <div
              class="chest-close"
              @click="showPassowrd"
              :class="[isShowGift ? 'shake' : '', isOpenShow ? 'show' : '']"
              ref="chestClose"
            >
              <div class="gift"></div>
              <!-- <div class="tips">
              <i class="arrow"></i>
            </div> -->
            </div>
            <div class="chest-open" :class="[!isOpenShow ? 'show' : '']">
              <div class="mod-chest-cont open-cont">
                <div class="content">
                  <div class="gift-icon">
                    <img src="@/assets/image/cons/gift.jpeg" alt="" />
                  </div>
                  <p>+{{ $utils.currencyType }}{{ giftMoney }}</p>
                  <router-link tag="div" to="/income" class="btn">{{
                    $t('gift.txt7')
                  }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="data-box">
      <div class="animatedTop" ref="broadDom">
        <div class="list-box " v-for="(item, index) in broadData" :key="index">
          <!-- <img src="@/assets/image/xapp/avator.png" alt=""> -->
          <!-- <img :src="item.src" alt=""> -->
          <div class="info">
            <p>
              UID:{{ item.uid.substring(0, 2) }} ****{{
                item.uid.substring(6, 8)
              }}
              Dapatkan hadiah
            </p>
            <p>+ {{ $utils.currencyType }}{{ item.amount }}</p>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="isShowPass">
      <div class="showpass-main">
        <p>{{ $t('gift.txt2') }}</p>
        <div class="showpass-input">
          <base-input
            v-model.trim="password"
            type="text"
            :placeholder="$t('gift.txt3')"
          ></base-input>
        </div>
        <base-btn
          :btnTitle="$t('dialog.txt1')"
          :disabled="disabled"
          @btnClick="showGift"
        ></base-btn>
      </div>
    </van-popup>

    <van-popup v-model="showNotic" class="notic-pop">
      <div class="notic-info">
        <div class="title" style="margin:10px 0">{{ $t('gift.txt5') }}</div>
        <p v-for="(item, index) in 5" :key="index">
          {{ $t(`gift.txt6[${index}]`) }}
        </p>
      </div>
      <div class="btn" @click="confirme">{{ $t('dialog.txt1') }}</div>
    </van-popup>
  </modMain>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    disabled() {
      if (this.password) {
        return false
      } else {
        return true
      }
    },
  },
  created() {
    // this.broadData = this.getbroadData()
    this.getOrder()
  },
  mounted() {
    this.$nextTick(() => {})
  },
  data() {
    return {
      showNotic: false,
      isShowGift: false,
      isOpen: false,
      isOpenShow: true,
      isOpenGift: false,
      isShowPass: false,
      password: '',
      animatedTop: false,
      scrollTimer: null, // 存款消息滚动定时器
      broadData: [],
      giftMoney: 0,
    }
  },
  methods: {
    ...mapActions({
      exchageGift: 'user/exchageGift',
      orderJoin: 'order/orderJoin',
    }),

    getOrder() {
      let params = {
        page: 1,
        size: 300,
      }
      this.orderJoin(params).then(res => {
        if (res.code == 0) {
          this.broadData = res.data.records

          this.$nextTick(_ => {
            this.showScroll()
          })
        }
      })
    },
    showScroll() {
      this.animatedTop = true
      let vm = this
      let x = 0,
        dom = this.$refs.broadDom
      let liHeight = dom.children[0].offsetHeight
      let liLen = vm.broadData.length

      let fun = () => {
        dom.style.bottom = -x + 'px'
        x++
        // if (x % (liHeight * 4) == 0) {
        //   this.broadData = [...this.getbroadData(4), ...this.broadData]
        // }
        // this.broadData = [this.buildObj(), ...this.broadData]
        // if (x % (liHeight * liLen) == 0) {
        //   this.broadData = [...this.broadData, ...this.broadData];
        // }
      }
      this.scrollTimer = setInterval(fun, 100)
    },

    confirme() {
      this.showNotic = false
    },
    showPassowrd() {
      this.isShowPass = true
    },
    showGift() {
      this.isShowPass = false
      let params = {
        password: this.password,
      }
      this.exchageGift(params).then(res => {
        this.password = ''
        if (res.code == 0) {
          this.giftMoney = res.data
          this.$nextTick(_ => {
            this.startGift()
          })
        } else {
          this.showDialog(res.msg)
        }
      })
    },
    startGift() {
      let that = this
      this.isShowGift = true
      this.$refs.chestClose.addEventListener(
        'webkitAnimationEnd',
        () => {
          this.isOpen = true
          setTimeout(function() {
            that.isOpenShow = false
          }, 200)
        },
        false
      )
    },
  },
}
</script>
<style lang="less" scoped>
.gift {
  background: #fff;
  .mod-chest-cont {
    .gift-icon {
      width: 100px;
      margin: 10px auto;
      img {
        width: 100%;
      }
    }
    p {
      color: #fa4868;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 500;
    }
    .btn {
      width: 120px;
      height: 30px;
      background: #0094f6;
      line-height: 30px;
      color: #fff;
      border-radius: 8px;
      margin: 0 auto 20px auto;
    }
  }

  .gift-main {
    background: #fff;
    padding-bottom: 160px;
    border: 0.6px solid #e6e6e6;
    border-radius: 4px;
    margin-top: 20px;
  }
}
.showpass-main {
  width: 300px;
  background: #fff;
  padding: 20px 30px;
  box-sizing: border-box;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
  .showpass-input {
    margin-top: 10px;
  }
}
.data-box {
  height: 230px;
  position: relative;
  border: 0.6px solid #e6e6e6;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  margin-top: 20px;
  .list-box {
    margin-bottom: 10px;
    .info {
      display: flex;
      padding: 0 20px;
      p {
        &:nth-of-type(2) {
          margin-left: auto;
          color: #fe7a15;
        }
      }
    }
  }
}
.wrapper {
  width: 100%;

  position: relative;
  padding-top: 40px;
}
.open-body {
  width: 100%;
}
.open-body .bg.rotate {
  -webkit-animation: rotate 10s infinite linear;
}
.open-has {
  position: relative;
  z-index: 2;
  // height: 200px;
  width: 320px;
  margin: 0px auto;
}
.open-has .title-close {
  opacity: 1;
  -webkit-transition: all 0.5s;
  width: 100%;
  text-align: center;
}
.open-has .title-open {
  opacity: 0;
  -webkit-transition: all 0.5s;
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  width: 100%;
}
.open-has h3 {
  color: #865500;
  font-size: 15px;
  text-align: center;
  padding-top: 75px;
  padding-bottom: 33px;
}
.open-has h3 .user {
  color: #ff5400;
  margin: 0px 5px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  position: relative;
  white-space: nowrap;
  vertical-align: top;
}
.open-has .title-close .user {
}
.mod-chest .chest-close .tips {
  width: 166px;
  height: 60px;
  background: url(../../assets/image/cons/txt-tips-open.png) 0px 0px no-repeat;
  background-size: 190px auto;
  // position: absolute;
  // left: 70px;
  // top: 145px;
  -webkit-transition: all 0.5s;
}
.mod-chest .chest-close .tips .arrow {
  width: 26px;
  height: 60px;
  background: url(../../assets/image/cons/txt-tips-open.png) right 0px no-repeat;
  background-size: 190px auto;
  position: absolute;
  display: block;
  top: 0px;
  right: -28px;
  -webkit-animation: move 0.7s linear infinite alternate;
}
// .mod-chest .chest-close:after {
//   width: 320px;
//   height: 300px;
//   position: absolute;
//   top: -100px;
//   left: -61px;
//   content: '';
//   display: block;
// }
.mod-chest .chest-close:active {
  -webkit-transform: scale(1.05);
  -webkit-transition: all 0.3s;
}
.mod-chest .chest-close.shake .gift {
  -webkit-animation: shake 1.2s linear;
  -webkit-animation-fill-mode: forwards;
}
.mod-chest .chest-close.shake .tips {
  opacity: 0;
}
.mod-chest .chest-open {
}
.mod-chest .chest-open.blur:after {
  width: 320px;
  height: 68px;
  background: url(../../assets/image/cons/chest-open-blur.png) no-repeat 0px 0px;
  background-size: 320px auto;
  position: relative;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: -5px;
  content: '';
  display: block;
}
.open-has.opened .title-open {
  opacity: 1;
}
.open-has.opened .title-close {
  opacity: 0;
}
/*.open-has.opened .mod-chest{-webkit-transform:translate(0px,150px);}*/
.open-has.opened .mod-chest .chest-open {
  -webkit-transform: translate(0px, 150px);
}
.open-has .mod-chest-cont {
  padding: 10px 0px 50px;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  -webkit-transform: translate(
    0px,
    30px
  ); /*-webkit-transition:all .3s .3s;-webkit-transition:all .3s .3s cubic-bezier(.53,1.5,.69,1.81);*/
  z-index: 9;
  -webkit-animation-fill-mode: forwards;
}
.open-has .chest-open.show .mod-chest-cont {
  /*-webkit-transform:translate(0px,0px);opacity: 1;*/
  -webkit-animation: move2 0.2s 0s linear;
  -webkit-animation-fill-mode: forwards;
}
.open-has .mod-chest-cont .gift {
  color: #ff6000;
  font-size: 24px;
  line-height: 30px;
  padding-bottom: 30px;
}
.open-has .mod-chest-cont .gift .icon {
  width: 58px;
  height: 0px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.open-has .mod-chest-cont .gift img {
  width: 75px;
  height: 50px;
  // // position: absolute;
  // top: -28px;
  // left: -5px;
}
.open-none {
  position: relative;
  z-index: 2;
  height: 450px;
  width: 320px;
  margin: 0px auto;
}
.open-none .mod-chest {
  height: 150px;
}
.open-none h3 {
  font-size: 15px;
  color: #865500;
  text-align: center;
  padding-top: 35px;
  padding-bottom: 40px;
}
.open-none .func {
  padding: 18px 35px 30px;
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes move {
  0% {
    -webkit-transform: translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(0px, -5px);
  }
}
@-webkit-keyframes move2 {
  0% {
    -webkit-transform: translate(0px, 30px);
    opacity: 0;
  }
  70% {
    -webkit-transform: translate(0px, -20px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0px, 0px);
    opacity: 1;
  }
}

@-webkit-keyframes shake {
  0% {
    transform: scale(1);
    -webkit-transform: scale3d(1, 1, 1);
  }

  6% {
    -webkit-transform: scale(0.9) rotate(-8deg);
    -webkit-transform: scale3d(1, 1, 1) rotate(0, 0, 1, -8deg);
  }

  18%,
  30%,
  42% {
    -webkit-transform: scale(1.1) rotate(8deg);
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 8deg);
  }

  12%,
  24%,
  36%,
  48% {
    -webkit-transform: scale(1.1) rotate(-8deg);
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -8deg);
  }
  54% {
    -webkit-transform: scale(1);
    -webkit-transform: scale3d(1, 1, 1);
  }

  60% {
    -webkit-transform: scale(1);
    -webkit-transform: scale3d(1, 1, 1);
  }

  80% {
    -webkit-transform: scale(1) translate(0px, 150px);
    -webkit-transform: scale3d(1, 1, 1) translate3d(0px, 150px, 0);
  }
  90% {
    -webkit-transform: scale(1) translate(0px, 130px);
    -webkit-transform: scale3d(1, 1, 1) translate3d(0px, 130px, 0);
  }
  100% {
    -webkit-transform: scale(1) translate(0px, 0);
    -webkit-transform: scale3d(1, 1, 1) translate3d(0px, 150px, 0);
  }
}

.chest-notice {
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  position: relative;
  color: #ff6000;
  padding-bottom: 10px;
}
.chest-notice input {
  position: relative;
  top: 3px;
}
.chest-btn {
  width: 100%;
  display: block;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffa200),
    to(#ffa200)
  );
  height: 44px;
  line-height: 44px;
  border-radius: 3px;
  font-size: 17px;
}
.chest-btn:active {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f09902),
    to(#f09902)
  );
}

.mod-chest-cont {
  background: url(../../assets/image/cons/open-bg-top.png) center top no-repeat,
    url(../../assets/image/cons/open-bg-bottom.png) center bottom no-repeat;
  background-size: 276px auto;
  width: 276px;
  margin: 27px auto 118px;
  position: relative;
}
.mod-chest-cont:before {
  width: 100%;
  position: absolute;
  top: 12px;
  bottom: 80px;
  left: 0px;
  content: '';
  background: #fff;
  border-left: #e59c00 1px solid;
  border-right: #e59c00 1px solid;
  box-sizing: border-box;
}
.mod-chest-cont .content {
  position: relative;
  z-index: 2;
  // padding: 13px;
}
.mod-chest-cont h3 {
  color: #865500;
  font-size: 15px;
}

.mod-chest {
  position: relative;
  width: 100%;
}
.mod-chest .chest-close {
  width: 320px;
  height: 135px;
  opacity: 0;
  position: relative;
  z-index: 1;
  // position: absolute;
  // left: 50%;
  // top: 0px;
}

.mod-chest .chest-close .gift {
  width: 320px;
  height: 135px;
  background: url(../../assets/image/cons/chest.png) no-repeat 0px 0px;
  background-size: 320px auto;
  position: absolute;
  left: 0;
  top: 0px;
}

.mod-chest .chest-open {
  width: 320px;
  height: 150px;
  background: url(../../assets/image/cons/chest.png) no-repeat 0px -137px;
  background-size: 320px auto;
  opacity: 0;
  position: relative;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 0px;
}
.mod-chest .chest-open .mod-chest-cont {
  position: absolute;
  bottom: -27px;
  left: 50%;
  margin-left: -138px;
}
.mod-chest .show {
  z-index: 2;
  opacity: 1;
}
</style>
