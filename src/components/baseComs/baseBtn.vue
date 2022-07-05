<template>
  <div class="base-btn">
    <button
      :class="{ 'no-round': !round, isSelect: isSelect }"
      v-if="btnTitle"
      :disabled="disabled"
      @click="$emit('btnClick')"
    >
      {{ btnTitle }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'baseInput',
  props: {
    btnTitle: String, //button标题
    disabled: {
      type: Boolean,
      default: true,
    }, //是否禁用
    round: {
      type: Boolean,
      default: true,
    },
    isSelect: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="less" scoped>
.base-btn {
  margin-left: 0px;
  button {
    background-color: rgb(0, 163, 254);
    border-radius: 6px;
  }
  .isSelect {
    background-color: #00a3fe;
    border: 0.5px solid #fff;
    border-radius: 6px;
    border: none;
  }
}
</style>
