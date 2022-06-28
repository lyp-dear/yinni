<template>
  <div class="login-tab">
    <div
      class="btn"
      @click.stop="tabClick(1)"
      :class="{ active: type == 'EMAIL' }"
    >
      {{ $t('reglogin.txt21') }}
    </div>
    <div
      class="btn"
      @click.stop="tabClick(0)"
      :class="{ active: type == 'PHONE' }"
    >
      {{ $t('reglogin.txt20') }}
    </div>
  </div>
  <!-- <p class="contact green" style="text-align:center" @click="switchToPhone">
    {{ switchType == 'PHONE' ? $t('reglogin.txt21') : $t('reglogin.txt20') }}
  </p> -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'switchlogin',
  data() {
    return {
      type: 'PHONE',
    }
  },
  computed: {
    ...mapGetters({
      switchType: 'getSwitchType',
    }),
  },
  created() {
    this.type = this.switchType
  },
  methods: {
    ...mapMutations({
      setSwitchType: 'SET_SWITCH_TYPE',
    }),
    tabClick(tab) {
      this.type = tab == 0 ? 'PHONE' : 'EMAIL'
      this.setSwitchType(this.type)
    },
    switchToPhone() {
      this.setSwitchType(this.switchType == 'PHONE' ? 'EMAIL' : 'PHONE')
    },
  },
}
</script>
<style lang="less" scoped>
.login-tab {
  display: flex;
  align-items: center;
  .btn {
    font-weight: 500;
    font-size: 18px;
    color: #191b1d;
    &:nth-of-type(1) {
      margin-right: 34px;
    }
    &.active {
      font-weight: 500;
      font-size: 24px;
      color: #0094f6;
    }
  }
}
</style>
