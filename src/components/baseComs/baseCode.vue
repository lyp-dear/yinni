<template>
  <div class="base-input" :class="{ click: isClick, error: isError }">
    <div class="input-box">
      <input
        class="ipt"
        :type="type"
        :value="value"
        :placeholder="$t('reset.txt5')"
        :name="name"
        @click="iptClick"
        @blur="iptBlur"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div class="class-code">
      <img @click="getCodeImg" :src="image" alt="" />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'baseCode',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: String,
    placeholder: String,
    name: String, //name 名称
    disabled: {
      type: Boolean,
      default: false,
    }, //是否禁用
    isError: {
      type: Boolean,
      default: false,
    },
    sendData: Object, //发送地址
    // error: String   //错误提示
  },
  data() {
    return {
      isClick: false,
      image: '',
    }
  },
  created() {
    this.getCodeImg()
  },
  mounted() {},
  methods: {
    ...mapActions({
      codeImg: 'user/codeImg',
    }),
    iptClick(e) {
      this.isClick = true
    },
    iptBlur(e) {
      this.isClick = false
    },
    getCodeImg() {
      this.codeImg().then(res => {
        console.log(res)
        let data = res.data.image.replace(/[\r\n]/g, '')
        this.image = 'data:image/png;base64,' + data
        sessionStorage.setItem('sessionId', res.data.sessionId)
      })
    },
  },
}
</script>
