<template>
  <div class="server-box" @click="toService('whats')">
    <p class="server-txt">
      If you have any questions, please contact customer service!
    </p>
    <p><img src="@/assets/image/home/Telegram@2x.png" alt="" />CS</p>
  </div>
</template>
<script>
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
}
</script>
<style lang="less" scoped>
.server-box {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  p {
    color: #000;
    font-weight: 500;
    margin-left: 10px;
    font-size: 12px;
    &:nth-of-type(2) {
      flex: 0 0 80px;
      text-align: center;
      margin-left: 10px;
      background: #0094f6;
      height: 30px;
      line-height: 30px;
      border-radius: 4px;
      // padding: 0 20px;
      margin-right: 10px;
      color: #fff;

      img {
        width: 20px;
        margin-right: 6px;
      }
    }
  }
}
</style>
