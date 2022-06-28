<template>
  <div class="server-box">
    <div class="server-main" @click="toService('tggroup')">
      <div class="img-box">
        <img src="@/assets/image/home/Telegram@2x.png" alt="" />
      </div>
      <p>Group</p>
    </div>
    <div class="server-main" @click="toService('whats')">
      <div class="img-box">
        <img src="@/assets/image/home/Telegram@2x.png" alt="" />
      </div>
      <p>CS</p>
    </div>
  </div>
</template>

<script>
import mixinsSerivce from '@/mixins/service'
export default {
  name: 'groupService',
  mixins: [mixinsSerivce],
}
</script>
<style lang="less" scoped>
.server-box {
  // width: 44px;
  // height: 44px;
  // background: url('../assets/image/home/server.png') no-repeat;
  // background-size: cover;
  position: fixed;
  right: 16px;
  bottom: 82px;
  .server-main {
    margin-bottom: 10px;
  }
  img {
    width: 44px;
    height: 44px;
    margin: 0 auto;
  }
  p {
    margin-top: 4px;
    text-align: center;
  }
}
</style>
