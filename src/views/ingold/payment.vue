<template>
  <modMain :title="title" class="noPadding" from="payMent">
    <div class="payment-content">
      <p v-for="text in content.split('||')">{{text}}</p>
    </div>
  </modMain>
</template>
<script>
import textJson from '../../utils/text'
export default {
  data() {
    return {
      locale: localStorage.getItem('locale') || 'en_US',
      content: '',
      title: ''
    }
  },
  created() {
    this.title = this.$t('deposit.paymentpolicy')
    this.content = this.locale == 'zh_CN' ? textJson['payment'].zh : textJson['payment'].en
  },
}
</script>
