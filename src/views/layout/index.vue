<template>
  <div
    class="layout-main"
    :class="{
      pad15: isShowNav && $route.path != '/home',
    }"
  >
    <div class="top-fiexd" v-if="isShowNav">
      <topTabs :tabs="headMenu" @itemClick="itemClick" />
      <lucky-draw />
    </div>
    <div class="server-gift">
      <div>
        <van-icon name="service-o" @click="toService('whats')" />
      </div>
      <div @click="toService('tggroup')">
        <img src="@/assets/image/sun/telegram.png" alt="" />
      </div>
      <!-- <router-link tag="div" to="/gift">
        <van-icon name="gift-o" />
      </router-link> -->
    </div>
    <banner v-if="isShowNav && $route.path != '/technique'" />
    <keep-alive>
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
    <the-foot></the-foot>
  </div>
</template>

<script>
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
  data() {
    return {
      headMenu: [
        {
          path: '/home',
          title: this.$t('sa.txt2'),
          name: 'Quotation',
        },
        {
          path: '/about',
          title: this.$t('sa.txt3'),
          name: 'Company',
        },
        {
          path: '/technique',
          title: this.$t('sa.txt4'),
          name: 'Technique',
        },
        // {
        //   path: '/solar',
        //   name: 'Solar'
        // },
        {
          path: '/operation',
          title: this.$t('sa.txt5'),
          name: 'Operation',
        },
      ],
      isApp: '',
      isShowDown: true,
    }
  },
  computed: {
    isShowNav() {
      return false
    },
  },
  created() {
    this.isApp = sessionStorage.getItem('appId')
  },
  methods: {
    itemClick(idx) {
      this.$router.push({
        path: this.headMenu[idx].path,
      })
    },
  },
}
</script>
<style lang="less" scoped>
.server-gift {
  position: fixed;
  right: 4px;
  bottom: 50%;
  z-index: 999;
  & > div {
    width: 30px;
    height: 30px;
    border: 1px solid #0094f6;
    border-radius: 100%;
    text-align: center;
    line-height: 30px;
    margin-bottom: 10px;
    color: #0094f6;
    background: #fff;
    font-size: 20px;
    &:nth-of-type(2) {
      line-height: inherit;
    }
    img {
      width: 100%;
    }
  }
}
</style>
