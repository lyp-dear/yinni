<template>
  <div class="main lucky">
    <!-- <div class="guang guang1"></div>
    <div class="guang guang2"></div> -->
    <div class="luck-img">
      <img
        class="lucky-draw"
        src="@/assets/image/lucky/lucky-draw.png"
        alt=""
      />
    </div>
    <div class="top-main">
      <div class="top-new">
        <i class="icon-laba"></i>
        <!-- <div class="n-swiper" ref="swiper">
          <p v-for="item in news"><a src="javascript:void(0)">{{item.title}}</a></p>
        </div> -->
        <van-swipe
          class="company-swiper"
          :autoplay="3000"
          indicator-color="white"
          vertical
          :show-indicators="false"
        >
          <template v-for="item in news">
            <van-swipe-item>
              <a src="javascript:void(0)">{{ item.title }}</a>
            </van-swipe-item>
          </template>
        </van-swipe>
      </div>
    </div>
    <!-- 大转盘抽奖 -->
    <div class="wheel" style="position:relative;z-index:1;">
      <LuckyWheel
        ref="LuckyWheel"
        width="346px"
        height="346px"
        :defaultConfig="defaultConfig"
        :blocks="blocks"
        :prizes="prizes"
        :buttons="buttons"
        @start="startCallBack"
        @end="endCallBack"
      />
    </div>
    <div class="yinying">
      <img height="12" src="@/assets/image/lucky/yinying.png" alt="" />
    </div>
    <div class="draw-btn" @click="startCallBack">{{ $t('sa.txt38') }}</div>
    <p
      class="red"
      v-if="luckyDraws > 0"
      style="font-size: 16px; text-align: center; margin-top: 5px;"
    >
      {{ luckyDraws }} sorteio de prêmios gratuito
    </p>
    <div class="bot-btn">
      <img src="@/assets/image/lucky/bot.png" alt="" />
      <div class="tips">
        <h3>{{ $t('sa.txt156') }}:</h3>
        <p>
          1.{{ $t('sa.txt157') }}<br />
          2.{{ $t('sa.txt158') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // showNews: false,
      news: [],
      defaultConfig: {
        speed: 15,
      },
      blocks: [
        {
          padding: '10px',
          background: '#009638',
        },
        {
          padding: '8px',
          imgs: [
            {
              src: require('@/assets/image/lucky/img_k.png'),
              height: 333,
              top: -3,
            },
          ],
        },
        {
          padding: '0px',
          background: '#fff',
        },
      ],
      prizes: [
        {
          background: '#B3A271',
          fonts: [
            {
              text: '1 Rp',
              fontColor: '#fff',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },
        {
          background: '#FFF8C6',
          fonts: [
            {
              text: '2 Rp',
              fontColor: '#31272A',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },
        {
          background: '#393435',
          fonts: [
            {
              text: '1.5 Rp',
              fontColor: '#FBE3A5',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },
        {
          background: '#B3A271',
          fonts: [
            {
              text: '5 Rp',
              fontColor: '#fff',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },
        {
          background: '#393435',
          fonts: [
            {
              text: '10 Rp',
              fontColor: '#FBE3A5',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },
        {
          background: '#FFF8C6',
          fonts: [
            {
              text: '50 Rp',
              fontColor: '#31272A',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },

        {
          background: '#B3A271',
          fonts: [
            {
              text: '500 Rp',
              fontColor: '#FFFFFF',
              fontWeight: 600,
              top: 30,
              fontSize: 20,
            },
          ],
        },
        {
          background: '#C93B37',
          fonts: [
            {
              text: '2000 \n Rp',
              fontColor: ' #FBE3A5',
              wordWrap: false,
              fontWeight: 600,
              top: 20,
              fontSize: 20,
            },
          ],
        },
        // {
        //   imgs: [{
        //     src: require('@/assets/image/lucky/img_pan.png'),
        //     height: 319,
        //     width: 319,
        //     top: 7
        //   }]
        // }
      ],
      buttons: [
        // {
        //   imgs: [
        //     {
        //       src: require('@/assets/image/lucky/icon_s.png'),
        //       width: 135,
        //       top: -65
        //     }
        //   ],
        // }
        { radius: '80px', background: '#281618' },
        { radius: '60px', background: '#dbcf8d' },
        {
          imgs: [
            {
              src:
                localStorage.getItem('locale') == 'en_US'
                  ? require('@/assets/image/lucky/icon_s.png')
                  : require('@/assets/image/lucky/icon_pt.png'),
              width: 135,
              top: -70,
            },
          ],
        },
      ],
      prize: ['1', '2', '1.5', '5', '10', '50', '500', '2000'],
      resultIndex: 0,
      newIndex: 0,
      timmer: null,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    luckyDraws() {
      return this.userInfo && this.userInfo.luckyDraws
        ? this.userInfo.luckyDraws
        : 0
    },
  },
  activated() {
    if (this.userInfo && this.userInfo.username) {
      this.$store.dispatch('user/query')
    }
  },
  created() {
    this.news = this.getbroadData()
  },
  beforeRouteEnter(to, from, next) {
    // ...
    if (window.appInterface) {
      window.appInterface.setStatusColor('#009638')
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    // ...
    if (window.appInterface) {
      window.appInterface.setStatusColor('#ffffff')
    }
    next()
  },
  methods: {
    ...mapActions({
      luckyDraw: 'user/luckyDraw',
    }),
    ...mapMutations({
      updateLucky: 'user/updateLucky',
    }),
    startCallBack() {
      if (this.userInfo && this.userInfo.username) {
        this.luckyDraw().then(res => {
          if (res.code == 0) {
            if (this.luckyDraws > 0) {
              this.updateLucky()
            }
            let index = this.prize.findIndex(d => d == res.data)
            this.resultIndex = index
            this.$refs.LuckyWheel.play()
            this.stop()
          } else {
            this.errDialog(res.msg)
          }
        })
      } else {
        this.$router.push('/login')
      }
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
          break
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
          break
        default:
          return 0
          break
      }
    },
    getbroadData(n = 20) {
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push(this.buildObj())
      }
      return arr
    },
    buildObj() {
      let random = () => {
        let demo = ''
        //这里取的是4位，所以for循环4次
        for (let i = 0; i < 9; i++) {
          //设置随机数范围,这设置为0 ~ 9
          let a = Math.floor(Math.random() * 9)
          //拼接字符串
          demo += a
        }
        return '****' + demo.substring(7, 9)
      }
      let n = this.randomNum(1, 50) // 1-50随机数
      let pre = [12, 14, 15, 16, 21, 23, 25, 31, 43, 85]
      let idx = this.randomNum(0, 9)
      // 12（CTBC电话公司）、14（巴西电信）、15（TELEFÔNICA）、16（CETERP）、21（ENBRATEL）、23（INTELIG）、25（GVT）、31（TELEMAR）、43（SERCOMTEL）、85（VÉSPER）
      let price = this.prize[this.randomNum(0, 7)]
      let name = pre[idx] + random()
      let lang = localStorage.getItem('locale') || 'en_US'
      // 用户88***888   邀请了6个好友,领取了3R$
      // 用户88***888   下级收益提成xxR$
      // let idxs = Math.floor(Math.random(0,2))
      let obj = {
        title:
          this.$t('sa.txt477') +
          ` ${name} ${
            lang == 'en_US' ? 'draws to get ' : 'sorteios para obter'
          } Rp${price}`,
      }
      return obj
    },
    endCallBack(data) {
      console.log(data)

      let txt = this.prize[this.resultIndex]
      this.$dialog
        .alert({
          message: this.$t('sa.txt161') + txt + 'Rp',
          confirmButtonText: this.$t('sys.confirm'),
        })
        .then(() => {
          // on close
        })
      // this.$toast.success()
    },
    stop() {
      setTimeout(() => {
        // this.resultIndex = Math.random() * 8 >> 0
        // console.log(this.resultIndex)
        this.$refs.LuckyWheel.stop(this.resultIndex)
      }, 1000)
    },
  },
  beforeDestroy() {
    this.timmer && clearInterval(this.timmer)
  },
}
</script>
