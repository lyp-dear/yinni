<template>
  <div class="base-input" :class="{ click: isClick, error: isError }">
    <div class="input-box">
      <img v-if="type == 'password'" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAOVBMVEUAAAAITP8ISv8AQP8HSv8HSv8HSv8GSf8ISv8HSv8FSv8HS/8HS/8ISP8IS/8ISv8GSv8ISv8IS/9cr4fpAAAAEnRSTlMAQMAQkPCwUODQMO9wIKB/8mDtBu1WAAAAxUlEQVRIx+2U2w7CIBAFC1ug0Is6//+xamJCtUu3vmrnqYTp5hBO6E6OI5eYGf3FHbLTyItebDtSGYpl90BOcycuPn1jvltlSAH6fX2A+PavM4YHWSUzxk/v+w68cdBpvQb2dP8RNkMx9M/1D+rSexSufmr2VieXjT1XW/G1mmc1pqQBNnkCtLqdaksb7ZA0r3LCsK8vjNu9tu7B/Ym+EDpbrzip3wLhu1v1SmcW3Z+z0plCC/2pvNEkaI9HiUEf/Qh5YnIHjVQYHn8OdwkAAAAASUVORK5CYII=" alt="">
      <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAPFBMVEUAAAAISv8ITP8ISv8HSv8AQP8HS/8ISv8ISP8HSv8ISv8GSf8HS/8FSv8HSv8IS/8ISv8HSv8HSv8IS/95DGjdAAAAE3RSTlMAgEDA8BBw3yCQYFDQMLCg4M9v2wDu2QAAAOxJREFUSMfdlNsOhCAMBaFFLl53d/7/X9fEGDVEwFfnjWTSlEOLeRHdbw4E/XVNtgQ2gjTYPQe+ak+A66OJwweYavoI49Z0N0Oo9C/g4n5lB0NZt5DOB1vW53NBAS3rCvJAT+DPmS7V1PXorJp85FCGhuAtexzebSlV34mw2PQFxoZ5VHY0mga8OwasCemtF/N2JrFnYjHz5LgipcoB2nVh5aPXZm4nvwvgst281ZfV7kyz7kBMsy5385pU9QtOV0x9MZUDU/lUnuuTiHgYZSXTW6+aYKjq+f/VrufsFaK1/VWfS3rO4CDnZQv+B0ygFh1Hqdi/AAAAAElFTkSuQmCC" alt="">
      <input
        class="ipt"
        :type="typePwd"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        @click="iptClick"
        @blur="iptBlur"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div v-if="type == 'password'" class="action">
      <img
        v-if="typePwd == 'password'"
        @click="typePwd = 'text'"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7ZVRbtpAEEBnNin95Qj0BM0Ngkulqn/9bUgLPgHkBMAJQk9go4b0l3z1I0WGEzQ3qHuC5rMiZaczi20ZChi7EeFjn4S82LO7T+PZMYDFYrFYLBaLxWKxWCyWDLzhuOtfjy/hwPCuxu20l4oHCNACgraIw4EgLohwyV7v4nuJMAFcyJXFO4ProAFPDMs2xUXGpP9cxPcTYbde8zmgawJI+08pHcl6MhYn98ObUfwMV4MHw3GHInFE1WycOQPYI6uyjXqtl36uVidIQDrTUvSwJ2SvbbKCWjcxLS1Fv4+DyHv0zQGDzbLRsy2LXN22uSwWLQUxJETHfe+E8KiiwQkCcVbpZCFE7Ub99adN8WrrakfHIxE1Y6IKav3DH44970tQgf8V9YKyySro77Gs7KXV0c22eRszLFJIFIgo/w35N+FfMxXik1K9vBn3Pt9WQakqArZYtGxuEvTZRHptJetN4i6yNJs5rvs29LyvFSyVOsvieMdxEyKagtIhzJ6Fruvcm3U4iwC/y1AqVZHgJctUk2waUZoopbofz15No7WDLGncVXYpRhZ/Xlr6AuXEV4i+iP6zboa0yisryD0iiGqN7kxH4WzJmG/cp0JlzPNpZF67vA2G95isyibr8p5mjpwZdlk9L8fpPxzgZckmsQCn0dXnFiSnugcZDIbfWgTYJ1MasPaDFJWeYzIt0ou+7MTPlzJMen5j6jFDdmFsNgUNego7kuoAW0spyTS7IOnR0rZQgEXvlHYEYbNee5FnLrfFX3wpHxNUzs9rPyEnCgqgYH4aDSeQH5OxOVKhA1tImFCZzdActJxzAabpNfJSSJhry/RS/fCwc/0mzNQovUZeignLa+U2lXkw12A+KsgtjkwLtBwcfwEcZ2V9YbFbwwAAAABJRU5ErkJggg==
"
        alt=""
      />
      <img
        v-else
        @click="typePwd = 'password'"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPKSURBVHgB7ZhLehJBEMermogLN3gC8QTmBhLx8bnS7DQkwpwgyQmAE4ScYMA8XCauXMQIOYF4gznCmJVOQpfVPQ8mCUz3TFzO//uAYajp/k11TVU1AKVKlSpVqlQOIdxT7sFZA4Ro8EDPAHEVCGoAVIuG9/nN41l8JJpIKS+crVcTuIcKAStIRPGOATtzONsZ0QOGJyH6zsc1D3IqF7AGrVS6PGFjfpamQDhBIaYVKSdXV5e/HWfd1/buSQ2qj+oCVp6QugbVdbwKcw3zglsBu+6YJ5Y9Nt6OTvl8PBAVPN368OIX5JDrfqtjtdrlw06KYkB/GdxZ803XG4Hdo/EqIp2wV+v6BPHgV5f92ItFdQecQ4UQ10zezgR2D893EGEv/EZTAuk4rddT+I+KwMd8WNezEOw6m83BMvulwO7RuQqBbsgKg85mcxcyJ9ZhwzeI7WQ1AKf6Ri3idHR03iWAXjgd9J1Wswe2wGlYBNppt17uQxbs0XkHAfcyMobPnutneU6Pc3jGNyz2sqAFZMESdYywKmz4Q8NyuhKIDQouH3daTVTHbDLkV02F1uh43M4ay9l8NWBQR8/NDIrltg1mwm6+HGVN4H4Z11HSTwXL1/XarWZ/kV1quX0KxFNTNghXTDnhrqcTD7sH39/ngdV2UnajMBgug1XSvyFO+LAmqnLbNC4DDtOeTq+MBtaeEsKNDHo2sBGyLgK89EOTJc1m+oYonX8N0Bg/hCQH+qGOgYWcvbPx1AIMDfxp48WF0fR6JU6HdbDUzZWZtRPgRIh1KKD47rNkU8UWishLf9XAMqioEPBVj7DoycyQp99XrldNhrqrCwmsC0/E0lFsMrj6CjGwunuOLV0Ybgd5ljBMWaAbIpOtENGYaAUcZQo9Lslrx3Heegmwhr4Z5EMbaBkIlaONK5P2FAWB8RlJpzXF5Gy9OY1/u1Pp0iWSq06nvbE2sh0cVLso5Ug16TquOVTS7ah91ZzD3k4CC0vzjbpuaEb0JGFJVcu3tDRzbt8xFqJUs7WsEC1tfmybkWSypF1UqS5p0j0V5zK43De1o+zZQdxvZ1VNQ3s5b0Zs+9W80v02kBvndFPYmBv4W/0qFNjWLB73zi7GI5itm/pt6y0SPuS+gWAndboQ+HyXjdtJO5pjF5NvE7poP6byqtoFE11wjfcgeODFVS2sgH/Yk9UGkv4boBEvfQjK7agQPavSXgR4AXgDcvQGkThvw1AIPM0DGqsQcFqfj388V1v4cBuv0hrWYZ7e/PBFUw6BKW+fJkUgS5UqVapUqcL6Bw1XBB3DjC0EAAAAAElFTkSuQmCC"
        alt=""
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
    isSend: {
      type: Boolean,
      default: false,
    },
    // error: String   //错误提示
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
    console.log(this.type)
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
  background-image: linear-gradient(180deg,#002962,#00376a);
  border: 1px solid #005983;
  border-radius: 6px;
  padding-right: 0px;
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
}
</style>
