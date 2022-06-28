<template>
  <div class="share-friend">
    <div class="share-friend-main">
      <div class="share-link">
        <div class="title">{{ $t('task.txt71') }}</div>

        <div class="my-money">
          <div class="my-money-info">
            <p>{{ $t('task.txt72') }}({{ $utils.currencyType }})</p>
            <p>{{ $utils.getPstr(treeData.totalIncomeContribution || 0) }}</p>
          </div>
          <div class="my-money-info">
            <p>{{ $t('task.txt73') }}</p>
            <p>
              {{
                treeData && treeData.childrenList
                  ? treeData.childrenList.length
                  : 0
              }}
            </p>
          </div>
        </div>
        <!-- <div class="btn" @click="share()">{{ $t('task.txt70') }}</div> -->

        <base-btn
          :btnTitle="$t('task.txt70')"
          :disabled="disabled"
          @btnClick="share()"
        ></base-btn>
      </div>
      <div class="my-rule">
        <p class="rule-title">{{ $t('task.txt107') }}</p>
        <div class="rule-txt">
          <p v-for="(item, index) in 4" :key="index">
            {{ $t(`task.txt108[${index}]`) }}
          </p>
        </div>
      </div>
      <div class="my-rule" style="margin-top:10px">
        <p class="rule-title">{{ $t('task.txt109') }}</p>
        <div class="rule-txt">
          <p v-for="(item, index) in 4" :key="index">
            {{ $t(`task.txt110[${index}]`) }}
          </p>
        </div>
      </div>
    </div>
    <sharePopup :show="showShare" @close="close" :link="link"> </sharePopup>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      link: '',
      showShare: false,
      treeData: null,
      treeData: {
        totalContribution: 0,
        yesterdayContribution: 0,
        mobilePhone: '',
      },
      childrenCount: 0,
      secondNodes: [],
      animatedTop: false,
      scrollTimer: null, // 存款消息滚动定时器
      broadData: [],
      disabled: false,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    ispt() {
      let locale = localStorage.getItem('locale') || 'zh_CN'
      return locale == 'zh_CN'
    },
  },
  mounted() {
    if (this.userInfo && this.userInfo.username) {
      this.getData()
    }
    this.link =
      'https://m.sunpowers.online/#/invite' +
      '?code=' +
      this.userInfo.symbolCode
  },
  methods: {
    ...mapActions({
      queryUserTreeNode: 'user/queryUserTreeNode',
    }),
    share() {
      let _ver = Number(localStorage.getItem('app_version') || 0)
      if (_ver >= 103) {
        this.showShare = true
      } else {
        if (window.appInterface) {
          this.shareApp()
        } else {
          this.showShare = true
        }
      }
    },
    close() {
      this.showShare = false
    },
    shareApp(s = '') {
      let _content = `${this.$t('task.txt66')}：${this.link}`
      if (window.webkit) {
        window.webkit.messageHandlers.shareSocial.postMessage(_content)
      } else if (window.appInterface) {
        window.appInterface.shareSocial(_content)
      }
    },
    getData() {
      let params = {
        queryUserId: this.userInfo.id,
        isDirect: false,
      }
      this.queryUserTreeNode({}).then(res => {
        if (res.code == 0) {
          if (res.code == 0) {
            this.treeData = res.data[0]
            if (this.treeData) {
              this.secondNodes = this.treeData.childrenList || []
              let total = 0
              this.secondNodes.forEach(item => {
                total =
                  Number(total) + Number((item.totalContribution || 0) * 0.1)

                // console.log('total=', total)
                this.childrenCount += item.childrenList
                  ? item.childrenList.length
                  : 0
                // this.secondNodes[symbol] = item.childrenList
                item.threeNodes = item.childrenList || []
                // item.threeNodes.forEach(d => {
                //   total += d.totalContribution * 0.03
                // })
              })
              this.treeData.totalIncomeContribution = this.treeData.totalContribution
              this.treeData.totalIncome =
                (this.treeData.totalContribution || 0) + Number(total)
            }
          }
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.share-friend {
  padding: 0 12px;
  padding-bottom: 60px;
  /deep/ .single-content {
  }
  // .share-bg {
  //   width: 100%;
  //   background: url('../../assets/image/otc/intivebg.jpg') no-repeat;
  //   background-size: cover;
  //   padding-top: 80px;
  //   padding-bottom: 80px;
  //   .h1-title {
  //     font-size: 30px;
  //     font-weight: 500;
  //     color: #fff;
  //     text-align: center;
  //     line-height: 30px;
  //   }
  // }
  .share-friend-main {
    margin-top: 20px;
    .share-link {
      margin-bottom: 10px;
      border: 0.6px solid #e6e6e6;
      background: #fff;
      border-radius: 10px;
      padding: 21px 11px 14px 11px;
      .title {
        font-size: 18px;
        color: #000000;
        font-weight: 500;
        text-align: center;
      }

      .my-money {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 31px;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 20px;
        .my-money-info {
          p {
            color: #000;
            font-size: 14px;
            text-align: center;
            &:nth-of-type(2) {
              color: #fe7a15;
              font-size: 24px;
              margin-top: 4px;
            }
          }
          &:nth-of-type(1) {
            padding-right: 45px;
            position: relative;
            &::after {
              position: absolute;
              content: '';
              width: 1px;
              height: 34px;
              background: rgba(0, 0, 0, 0.1);
              right: 0;
              top: 0;
            }
          }
          &:nth-of-type(2) {
            padding-left: 45px;
          }
        }
      }
    }
    .my-rule {
      margin-bottom: 10px;
      border: 0.6px solid #e6e6e6;
      background: #fff;
      border-radius: 10px;
      padding: 21px 11px 14px 11px;
      .rule-title {
        font-weight: 500;
        font-size: 12px;
        color: #000000;
      }
      .rule-txt {
        margin-top: 4px;
        p {
          font-size: 10px;
          color: #000000;
          font-weight: 400;
          line-height: 18px;
        }
      }
    }
  }
}
</style>
