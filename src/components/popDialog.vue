<template>
  <div class="dialog">
    <van-popup v-model="currentShow" class="popdialog" get-container="html">
      <div class="main">
        <div class="main-top">{{ $t('dialog.txt9') }}</div>
        <slot></slot>
        <div class="pop-btn">
          <van-button round type="info" @click="$emit('popcon')">{{
            conTxt
          }}</van-button>
          <van-button round type="info" @click="$emit('popcan')" v-if="isCan">{{
            $t('dialog.txt2')
          }}</van-button>
        </div>
      </div>
      <div class="cancle-btn" @click="$emit('popcan')"></div>
    </van-popup>
  </div>
</template>
<script>
export default {
  props: {
    isCan: {
      type: Boolean,
      default: false,
    },
    conTxt: {
      type: String,
      default() {
        return this.$t('dialog.txt1')
      },
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show() {
      this.currentShow = this.show
    },
  },
  data() {
    return {
      currentShow: false,
    }
  },
}
</script>
<style lang="less" scoped>
.dialog {
}
</style>
