<template>
  <div id="app">
    <div
      class="top-meng"
      v-if="
        $route.path != '/my' &&
          $route.path != '/notice' &&
          $route.path != '/welfare'
      "
    ></div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <van-popup v-model="show" round class="person-pop">
      <div class="pop-info person" v-if="personData">
        <img
          class="top-avator"
          v-if="personData.headImg"
          :src="imgBaseUrl + personData.headImg"
          alt=""
        />
        <img
          class="top-avator"
          v-else
          src="@/assets/image/icon_home_default avatar.png"
          alt=""
        />
        <div class="head-info">
          <h2 v-if="userInfo.mobilePhone == personData.mobilePhone">
            {{ personData.mobilePhone }}
          </h2>
          <h2 v-else>{{ personData.mobilePhone | strAbb }}</h2>
        </div>
        <!-- <div class="cell-box">
          <label>Number of units:</label>
          <span>{{personData.parentId}}</span>
        </div> -->
        <div class="cell-box line05" v-if="personData.level != 1">
          <label>{{ $t('sa.txt57') }}:</label>
          <span>{{
            personData.level == 2 ? 'Subordinate' : 'Indirect subordinate'
          }}</span>
        </div>
        <div class="cell-box line05" v-if="personData.parentId != 0">
          <label>{{ $t('sa.txt58') }}:</label>
          <span>{{ personData.parentPhone | strAbb }}</span>
        </div>
        <div class="cell-box line05" v-if="personData.level == 1">
          <label>{{ $t('sa.txt63') }}:</label>
          <span>{{
            personData && personData.childrenList
              ? personData.childrenList.length
              : 0
          }}</span>
        </div>
        <div class="cell-box line05">
          <label>{{ $t('sa.txt60') }}:</label>
          <!-- 昨日收益 -->
          <span>Rp {{ personData | filterMoney('yes') }}</span>
        </div>
        <div class="cell-box line05">
          <label>{{ $t('sa.txt61') }}:</label>
          <!-- 总收益 -->
          <span class="green">Rp {{ personData | filterMoney }}</span>
        </div>
        <div class="submit-btn" @click="submit">{{ $t('sys.confirm') }}</div>
      </div>
    </van-popup>

    <!-- <van-popup
      v-model="showUpgraded"
      class="person-pop"
      lock-scroll
      :close-on-click-overlay="false"
    >
      <div class="pop-info">
        <h1>The server is being upgraded</h1>
        <p>
          Server sedang ditingkatkan, mungkin perlu dipulihkan pada jam 2 pagi,
          jadi pantau terus
        </p>
      </div>
    </van-popup> -->
  </div>
</template>

<script>
import { bus } from '@/utils/bus'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      show: false,
      personData: null,
      showUpgraded: true,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    cssSkin() {
      return this.$store.getters.getCssSkin()
    },
  },
  created() {
    let _theme = localStorage.getItem('theme')
    if (_theme) {
      this.theme = _theme
    } else {
      this.theme = this.cssSkin
    }
    bus.$off('showPerson')
    bus.$on('showPerson', data => {
      this.personData = data
      this.show = true
    })
    // this.getUrlImage()
  },
  filters: {
    filterMoney(item, type = '') {
      let rate = 1
      if (item.level == 2) {
        rate = 0.1
      }
      // else if (item.level == 3) {
      //   rate = 0.15
      // }
      let key = type ? 'yesterdayContribution' : 'totalContribution'
      return Math.floor(item[key] * rate)
    },
  },
  mounted() {
    // let theme = localStorage.getItem('t_theme') || 'dark'
    // if (window.webkit) {
    //   window.webkit.messageHandlers.setTheme.postMessage(theme)
    // } else if (window.appInterface) {
    //   window.appInterface.setTheme(theme)
    // }
    // this.$store.dispatch('user/query')
  },
  methods: {
    // ...mapActions({
    //   getUrlImage: 'getUrlImage',
    // }),
    submit() {
      this.show = false
    },
  },
}
</script>
