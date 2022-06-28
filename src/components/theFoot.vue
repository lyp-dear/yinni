<template>
  <van-tabbar v-model="active" active-color="#4975EE">
    <template v-for="item in footNavList">
      <van-tabbar-item :to="item.path">
        <template #icon="props">
          <img :src="props.active ? item.icon.inactive : item.icon.active" />
          <span>{{ item.name }}</span>
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>
<script>
export default {
  name: 'theFoot',
  computed: {
    theme() {
      return this.$store.getters.getCssSkin()
    },
    isShowDot() {
      let hasNewObj = this.$store.getters.getShowDot()
      if (hasNewObj) {
        return hasNewObj.hasNewLuckyMoney || hasNewObj.hasNewNotice
      } else {
        return true
      }
    },
  },

  data() {
    return {
      active: 0,
      footNavList: [
        {
          name: this.$t('index.txt36'), //公司
          path: '/home',
          icon: {
            active: require('@/assets/image/tab/tab_home_nor.png'),
            inactive: require('@/assets/image/tab/tab_home_sel.png'),
          },
        },
        {
          name: this.$t('index.txt37'), //交易
          path: '/contract',
          icon: {
            active: require('@/assets/image/tab/tab_buy_nor.png'),
            inactive: require('@/assets/image/tab/tab_buy_sel.png'),
          },
        },
        {
          name: this.$t('index.txt38'), //活动
          path: '/notice',
          icon: {
            active: require('@/assets/image/tab/tab_gg_nor.png'),
            inactive: require('@/assets/image/tab/tab_gg_sel.png'),
            // active: require('@/assets/image/tab/tab_liwu_nor.png'),
            // inactive: require('@/assets/image/tab/tab_liwu_sel.png'),
          },
        },
        {
          name: this.$t('index.txt39'), //团队
          path: '/welfare',
          icon: {
            // active: require('@/assets/image/tab/tab_team_nor.png'),
            // inactive: require('@/assets/image/tab/tab_team_sel.png'),
            active: require('@/assets/image/tab/tab_liwu_nor.png'),
            inactive: require('@/assets/image/tab/tab_liwu_sel.png'),
          },
        },
        {
          name: this.$t('index.txt40'), //我的
          path: '/my',
          icon: {
            active: require('@/assets/image/tab/tab_me_sel.png'),
            inactive: require('@/assets/image/tab/tab_me_sel-1.png'),
          },
        },
      ],
    }
  },
  watch: {
    $route() {
      let { path } = this.$route
      if (
        path == '/home' ||
        path == '/about' ||
        path == '/technique' ||
        path == '/operation'
      ) {
        this.active = 0
      } else if (path == '/contract') {
        this.active = 1
      } else if (path == '/notice') {
        this.active = 2
      } else if (path == '/welfare') {
        this.active = 3
      } else {
        this.active = 4
      }
    },
  },
  created() {
    let { path } = this.$route
    if (
      path == '/home' ||
      path == '/about' ||
      path == '/technique' ||
      path == '/operation'
    ) {
      this.active = 0
    } else if (path == '/contract') {
      this.active = 1
    } else if (path == '/notice') {
      this.active = 2
    } else if (path == '/welfare') {
      this.active = 3
    } else {
      this.active = 4
    }
  },
}
</script>
