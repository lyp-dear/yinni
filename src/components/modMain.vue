<template>
  <div class="single-main">
    <div class="single-nav" :class="{ line05: showLine }" v-if="!isFromPhone">
      <van-nav-bar
        safe-area-inset-top
        fixed
        :title="title"
        :left-arrow="leftArrow"
        @click-left="onClickLeft"
      >
        <!-- <template #left>
          <div class="left-back" v-if="leftArrow">
            <img src="@/assets/image/icon/icon_back@2x.png" alt="">
            <span>{{ $t('sys.back') }}</span>
          </div>
        </template> -->
        <template #right>
          <i
            v-if="isShowRightIcon"
            class="icon i-tanchuang_cancel"
            @click="onClickRight"
          ></i>
          <slot name="title"></slot>
          <slot name="right"></slot>
          <div class="top-fiexd" v-if="from == 'assets'">
            <topTabs :tabs="tabs" @itemClick="itemClick"></topTabs>
          </div>
          <div
            v-if="isSave"
            class="right-btn"
            :class="{ activity: activity }"
            @click="rightBtnClick"
          >
            <!-- {{ isSee ? $t('task.txt105') : $t('reset.txt21') }} -->
            {{ btnTxt }}
          </div>
        </template>
      </van-nav-bar>
      <!-- <template v-if="tabs&&tabs.length>0">
        <top-tabs :tabs="tabs" @itemClick="itemClick" :offetTop="44"></top-tabs>
      </template> -->
      <h2 class="page-title" v-if="!title && pageTitle">{{ pageTitle }}</h2>
    </div>
    <div class="single-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { bus } from '@/utils/bus'
export default {
  props: {
    active: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    pageTitle: {
      type: String,
      default: '',
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
    isShowRightIcon: {
      type: Boolean,
      default: true,
    },
    isAddBank: {
      type: Boolean,
      default: false,
    },
    showLogin: {
      type: Boolean,
      default: false,
    },
    showRegister: {
      type: Boolean,
      default: false,
    },
    showLine: {
      type: Boolean,
      default: false,
    },
    from: {
      type: String,
      default: '',
    },
    isSave: {
      type: Boolean,
      default: false,
    },
    activity: {
      type: Boolean,
      default: false,
    },
    isSee: {
      type: Boolean,
      default: false,
    },
    btnTxt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFromPhone: false,
      tabs: [
        {
          title: this.$t('sa.txt26'),
          index: 0,
        },
        {
          title: this.$t('sa.txt27'),
          index: 1,
        },
      ],
    }
  },
  beforeMount() {
    // let phone = this.$route.query.phone || sessionStorage.getItem('t_app')
    // this.isFromPhone = !!phone
    // if (this.isFromPhone && window.webkit) {
    //   window.webkit.messageHandlers.setNavTitle.postMessage(this.title)
    // } else if (this.isFromPhone && window.appInterface) {
    //   window.appInterface.setNavTitle(this.title)
    // }
  },
  methods: {
    itemClick(idx) {
      this.$emit('tabClick', idx)
    },
    rightBtnClick() {
      if (this.from == 'inMoney') {
        bus.$emit('showRechargeInfo')
      }
      if (this.activity) {
        this.$emit('save')
      }
      if (this.isSee) {
        this.$emit('seeImg')
      }
    },
    onClickLeft() {
      // if (this.from == 'inMoney') {
      //   bus.$emit('showRechargeInfo')
      // }
      // if (this.from == 'coupon') {
      //   bus.$emit('closeCoupon')
      //   return
      // }
      // if (this.from == 'payCpf') {
      //   bus.$emit('closeCpf')
      //   return
      // }
      if (this.leftArrow) {
        let backPath = this.$route.query.backPath || ''
        let path = this.$route.path //verfication2
        if (backPath != '') {
          this.$router.push(backPath)
        } else if (path == '/setting' || path == '/paymethods') {
          this.$router.push('/my')
        } else if (path == '/deposit' || path == '/withdrawal') {
          // this.$router.push('/paymethods')
          this.$router.back(-1)
        } else if (path == '/login' || path == '/register') {
          this.$router.push('/')
        } else {
          this.$router.back(-1)
        }
      }
    },
    onClickRight() {
      this.$router.go(-1)
    },
  },
}
</script>
