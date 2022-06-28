<template>
  <div class="task-bg">
    <div class="task-title">
      <p>{{ tit }}</p>
      <!-- <p v-if="isDownload">
        Download App
      </p> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tit: {
      type: String,
      default: '',
    },
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.task-bg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 230px;

  background: linear-gradient(180deg, #0094f6 0%, rgba(0, 153, 255, 0) 100%);
  .task-title {
    display: flex;
    align-items: center;
    p {
      font-weight: 500;
      font-size: 24px;
      padding: 17px 16px;
      color: #fff;
    }
  }
}
</style>
