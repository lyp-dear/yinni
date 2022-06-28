<template>
  <modMain title="Detail" class="noPadding">
    <div class="activity-detail"></div>
    <audio controls loop autoplay ref="au" hidden="true">
      <source src="@/assets/image/home/music.mp3" type="audio/mpeg" />
    </audio>
  </modMain>
</template>
<script>
export default {
  mounted() {
    this.handleCanplay()
  },
  methods: {
    handleCanplay() {
      this.$refs.au.addEventListener('canplay', () => {
        this.$refs.au.play()
      })
    },
  },
}
</script>
<style lang="less" scoped>
.activity-detail {
  width: 100%;
  height: 1540px;
  background: url('./../../assets/image/home/activitydetail.png') no-repeat;
  background-size: 100% 100%;
}
</style>
