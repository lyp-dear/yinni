<template>
  <div class="banner">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :stop-propagation="false"
    >
      <van-swipe-item @click="toService('tggroup')">
        <img src="@/assets/image/cons/banner3.png" alt=""
      /></van-swipe-item>
      <van-swipe-item @click="toGo('/contract')">
        <img src="@/assets/image/cons/banner1.png" alt=""
      /></van-swipe-item>
      <van-swipe-item @click="toGo('/notice', 1)">
        <img src="@/assets/image/cons/banner2.png" alt="" />
      </van-swipe-item>
      <!-- <van-swipe-item @click="toGo('/about')">
        <img src="@/assets/image/otc/banner3.png" alt=""
      /></van-swipe-item> -->
    </van-swipe>
  </div>
</template>

<script>
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
  methods: {
    toGo(path, active) {
      if (path == '/notice') {
        this.$router.push({
          path: path,
          query: {
            active: active,
          },
        })
      } else {
        this.$router.push(path)
      }
    },
  },
}
</script>
<style lang="less" scoped>
.banner {
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  .my-swipe {
    .van-swipe-item {
      img {
        width: 100%;
        height: 166px;
        object-fit: cover;
      }
    }
  }
}
</style>
