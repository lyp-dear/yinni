<template>
  <div class="nodata">
    <van-empty :description="$t('load.txt3')" :image="zanweitu" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      zanweitu: require('@/assets/image/cons/nodata.png'),
    }
  },
}
</script>
<style lang="less" scoped>
.nodata {
  /deep/ .van-empty {
    .van-empty__image {
      width: auto;
    }
  }
}
</style>
