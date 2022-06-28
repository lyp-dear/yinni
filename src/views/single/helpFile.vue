<template>
  <div class="help-file">
    <img
      @click.stop="onStep"
      class="step1"
      v-show="step == 1"
      src="@/assets/image/otc/step1.png"
      alt=""
    />
    <img
      @click.stop="onStep"
      class="step1"
      v-show="step == 2"
      src="@/assets/image/otc/step2.png"
      alt=""
    />
    <img
      @click.stop="onStep"
      class="step1"
      v-show="step == 3"
      src="@/assets/image/otc/step3.png"
      alt=""
    />
    <img
      @click.stop="onStep"
      class="step1"
      v-show="step == 4"
      src="@/assets/image/otc/step4.png"
      alt=""
    />
    <img
      @click.stop="onStep"
      class="step5"
      v-show="step == 5"
      src="@/assets/image/otc/step5.png"
      alt=""
    />
    <img
      @click.stop="onStep"
      class="step6"
      v-show="step == 6"
      src="@/assets/image/otc/step6.png"
      alt=""
    />
    <img
      @click.stop="onStep"
      class="step7"
      v-show="step == 7"
      src="@/assets/image/otc/step7.png"
      alt=""
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    onStep() {
      if (this.step == 7) {
        localStorage.setItem('_is_first_open', new Date().getTime())
        this.$router.replace('/')
      }
      this.step = this.step + 1
    },
  },
}
</script>
<style lang="less">
.help-file {
  width: 100%;
  position: relative;
  img {
    display: inline-block;
    width: 100%;
  }
  .hands {
    width: 44px;
    position: absolute;
    animation: scaleDraw 0.5s linear 0s infinite alternate;
    top: 273px;
    right: 103px;
  }
  @keyframes scaleDraw {
    0% {
      top: 263px;
    }
    100% {
      top: 283px;
    }
  }
}
</style>
