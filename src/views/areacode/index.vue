<template>
  <modMain :title="title" class="noPadding">
    <country></country>
  </modMain>
</template>
<script>
import country from './country'
export default {
  components: {
    country,
  },
  data() {
    return {
      title: ''
    }
  },
  created() {
    let { from } = this.$route.query
    if (from && from == 'enterCountry') {
      this.title = this.$t('home.enterCountry')
    } else {
      this.title = this.$t('user.personalData')
    }
  }
};
</script>
