<template>
  <div class="base-input" :class="{ click: isClick, error: isError }">
    <div class="input-box">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAPFBMVEUAAAAISv8AQP8HSv8FSv8ITP8HS/8ISv8ISv8ISv8IS/8ISP8HSv8HSv8GSf8ISv8HS/8HSv8GSv8IS//Z60kCAAAAE3RSTlMAgBDwMEDQwGDgoCCwkFCfcG9P4DpT2gAAAQ9JREFUSMft1MlSxSAQBVCmMGe8//+vPqQ6iE1MXLiw9C7DId0MhfjPT0Yd6zw9tGZ3KNHZqzt7zAEfYqW5pGnPjZ3T9HqMihhL47E2YTZHszOfUMdst0S1RI2SbcSdT4OqMgByxC/2Tv5K7tfvcA+sjzhpWHXHU69veNSm1yICvrft4wy8POnrPduAWM5cF0/6PRpIjBsgCPKSNA3wADDkSZfIUpYnls/kmxYBWAZ8ArQi37SvvfDYs2raTq3abee/5zsmqSZPBsKnoQXUOU/SgBUUWrUbWmonq06zevwSnp3UE/4iEi+x1z2ZwfTw/3CHULsGEJhm/QcUx1+v64ZqwsM3O8kAWC+eZzLij+cNzJUV0DudF6QAAAAASUVORK5CYII=" alt="">
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
      image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzhuangjiba.com%2Fd%2Ffile%2Fhelp%2F2018%2F08%2Fcfdefaddb3f47d78f8c66a7de28720aa.png&refer=http%3A%2F%2Fzhuangjiba.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659183693&t=d95e96aaadb5492b7c5f6a774c4874fc',
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
        console.log(res,"图形验证码")
        // this.image = 'data:image/png;base64,' + res.data.image
        sessionStorage.setItem('sessionId', res.data.sessionId)
      })
    },
  },
}
</script>
<style lang="less" scoped>
.base-input{
  background-image: linear-gradient(180deg,#002962,#00376a);
  border: 1px solid #005983;
  border-radius: 6px;
  .input-box{
    display: flex;
    align-items: center;
    img{
      display: block;
      width: 19px;
      height: 19px;
    }
    input{
      font-size: 17px;
      color: #fff;
      font-family: inherit;
      font-weight: bold;
    }
  }
  .class-code{
    img{
      width: 128px;
      height: 38px;
    }
  }
}
</style>
