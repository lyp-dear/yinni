<template>
  <div class="verification done">
    <img src="@/assets/image/home/withsuccess.png" alt="" />
    <p class="mark">{{ $t('withdrawal.txt15') }}</p>
    <p class="desc">{{ $t('withdrawal.txt16') }}</p>
    <div class="btn" @click="btnClick('/my')">{{ $t('withdrawal.txt17') }}</div>
    <!-- <div class="btn-box btn-fixed">
      <base-btn
        :btnTitle="$t('bill.complete')"
        :disabled="false"
        @btnClick="btnClick('/my')"
      ></base-btn>
      <base-btn
        :btnTitle="$t('bill.viewrecord')"
        :disabled="false"
        class="deposit"
        @btnClick="btnClick('/inOutList')"
      ></base-btn>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    btnClick(path) {
      this.$router.replace({
        path: path,
      })
    },
  },
}
</script>
