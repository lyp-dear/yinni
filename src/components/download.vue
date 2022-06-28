<template>
  <div class="share-info">
    <div class="apps">
      <img src="@/assets/image/android.png" alt="" @click="downLoad" />
    </div>
    <p class="already" @click="checkClick">
      <template v-if="!checkType">
        {{ $t('reglogin.txt23[0]') }} <span>{{ $t('reglogin.txt23[1]') }}</span>
      </template>
      <template v-else>
        {{ $t('reglogin.txt24[0]') }} <span>{{ $t('reglogin.txt24[1]') }}</span>
      </template>
    </p>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    checkType: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },

  methods: {
    ...mapMutations({
      setCheckType: 'SET_PLAT_TYPE',
    }),
    downLoad() {
      this.$utils.downApp()
    },
    checkClick(type) {
      if (!this.checkType) {
        this.setCheckType(true)
        this.$router.replace({
          path: '/register',
        })
      } else {
        this.setCheckType(false)
        this.$router.replace({
          path: '/login',
        })
      }
    },
  },
}
</script>
<style lang="less" scoped>
.share-info {
  padding: 0 16px;

  .apps {
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 135px;
      height: 40px;
    }
  }
  .already {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    margin-top: 40px;
    color: #777f8a;
    span {
      color: #0094f6;
    }
  }
}
</style>
