<template>
  <div class="base-input" :class="{ click: isClick, error: isError }">
    <div class="left-quhao">
      <div class="areacode rfont" v-if="areaItem">
        <!-- <span class="iti-flag" :class="areaItem.area"> </span> -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAANlBMVEUAAAAISf8ISv8ISv8HSv8GSf8AQP8ISP8ISv8HSv8HSv8ISv8HS/8IS/8FSv8HSv8ISv8IS/+AacQ+AAAAEXRSTlMAP8CA8FAQIOCQsGDQoDBvnyO5QAYAAAC7SURBVEjH7dTLDsIgEEBRYHiVtur9/5/VwTbaGrBxaXo3kObQsGHM2eGSXYvfbfG8ykP/xOjZlm1Hhyrcmp71qamjh+nyftyDa/IBcqxMRK762/TwY4s7CLpe0GbdCgwtDpgdt+C6fL3MWK8VwXf557eTn/zkP/N15h3jhaVUX/nU4lmFLkvWmBHmFi/PoRKKq+l+AmlxC1w3U/DWHZID4MQuBcnozGsWJ/bNppdssQ+mXwriloqEaP6oOx52E4rxyUnyAAAAAElFTkSuQmCC" alt="">
        <span> +{{ areaItem.code }} </span>
      </div>
      <!-- <i class="icons-down"></i> -->
    </div>
    <div class="input-box">
      <input
        class="ipt"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @click="iptClick"
        @blur="iptBlur"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'baseInput',
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
    // error: String   //错误提示
  },
  computed: {
    areaItem() {
      let item = localStorage.getItem('areaItem') || null
      return item ? JSON.parse(item) : { area: 'id', code: '62' }
    },
  },
  data() {
    return {
      isClick: false,
      isShowPwd: true,
      typePwd: '',
    }
  },
  created() {
    this.typePwd = this.type
  },
  methods: {
    iptClick(e) {
      this.isClick = true
    },
    iptBlur(e) {
      this.isClick = false
    },
  },
}
</script>
<style lang="less" scoped>
.base-input{
  height: 46px;
  background-image: linear-gradient(180deg,#002962,#00376a);
  border: 1px solid #005983;
  border-radius: 6px;
  .left-quhao{
    padding-left: 0px;
    .areacode{
      display: flex;
      align-items: center;
      img{
        display: block;
        width: 19px;
        height: 19px;
      }
      span{
        padding-left: 5px;
        color: #fff;
        font-size: 17px;
        font-weight: bold;
      }
    }
    &::after {
      content: '';
      height: 19px;
      position: absolute;
      right: 0;
      top: 8px;
      width: 0px;
      //background-color: @txt2Color;
    }
  }
  .input-box{
    input{
      padding-left: 0px;
      font-size: 17px;
      color: #fff;
      font-family: inherit;
      font-weight: bold;
    }
  }
}
</style>
