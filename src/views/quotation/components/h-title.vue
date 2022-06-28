<template>
  <div class="h-title">
    {{ title }}
  </div>
</template>
<style lang="less" scoped>
.h-title {
  font-size: 16px;
  padding-left: 10px;
  background: url('../../../assets/image/home/titlebg.png') no-repeat left top;
  background-size: 4px 16px;
}
</style>
<script>
export default {
  props: {
    title: String,
  },
}
</script>
