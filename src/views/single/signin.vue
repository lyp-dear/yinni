<template>
  <div class="invite-main">
    <div class="login-main">
      <div class="login-container">
        <div class="login-title">
          <switch-login />
        </div>

        <basePhone
          v-model.trim="form.username"
          v-if="switchType == 'PHONE'"
          :placeholder="$t('reglogin.txt2')"
        ></basePhone>
        <base-input
          v-model.trim="form.username"
          v-if="switchType == 'EMAIL'"
          :isError="isErrorEmail"
          :placeholder="$t('reglogin.txt3')"
        ></base-input>
        <base-input
          v-model.trim="form.password"
          :isError="isErrorPwd"
          type="password"
          :placeholder="$t('reglogin.txt4')"
        ></base-input>
        <base-input
          v-model.trim="form.password2"
          :isError="isErrorPwd"
          type="password"
          :placeholder="$t('reglogin.txt5')"
        ></base-input>
        <base-code
          ref="imgCode"
          v-if="switchType == 'PHONE'"
          v-model="imgCode"
          :isError="isErrorCode"
        ></base-code>
        <baseSend
          type="text"
          :sendData="form"
          v-model="code"
          :placeholder="$t('reglogin.txt6')"
          ref="sendPhone"
          v-if="switchType == 'EMAIL'"
          :isError="isErrorCode"
        ></baseSend>
        <div class="register-agree">
          <span
            class="agree-icon"
            :class="{ tongyi: isAgree }"
            @click="isAgree = !isAgree"
          ></span>
          <p class="agree-txt">
            {{ $t('reglogin.txt19') }}
            <span @click="openXy(1)">{{ $t('reglogin.txt8') }}</span>
          </p>
        </div>
        <div class="btn-wrap reg">
          <base-btn
            :btnTitle="$t('my.txt16')"
            :disabled="disabled"
            @btnClick="btnRegister"
          ></base-btn>
        </div>
        <group-service ref="groupService"></group-service>
        <!-- <p class="contact green" @click="toService">
          Jika Anda tidak dapat menerima kode verifikasi SMS, klik untuk
          menghubungi layanan pelanggan
        </p> -->
      </div>
      <!-- <fb-google v-if="$route.query.facebook" /> -->
      <download :checkType="checkType"></download>
    </div>
    <loadding v-if="isShowLoadding"></loadding>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      isShowLoadding: false,
      isErrorEmail: false,
      isErrorPwd: false,
      isErrorCode: false,
      isShowOrgCode: false,
      isAgree: true,
      form: {
        username: '',
        password: '',
        password2: '',
        registerType: 'PHONE',
        authorityType: 'CLIENT',
        platform: 'H5',
        areaCode: '62',
        verifyCode: '',
        source: 1,
        symbolCode: null, //邀请码
        sessionId: '',
      },
      code: '', //短信验证码
      // imgCode: '',
      bannerList: null,
      wathsrls: '',
    }
  },
  created() {
    let symbolCode = this.$route.query.code || ''
    localStorage.setItem('u_symbolCode', symbolCode)
  },
  computed: {
    ...mapGetters({
      checkType: 'getCheckType',
      switchType: 'getSwitchType', // 邮箱 or 手机
      getcurrentGame: 'trade/getcurrentGame',
    }),
    areaItem() {
      return this.$store.getters.getAreaCode()
    },
    cssSkin() {
      return this.$store.getters.getCssSkin()
    },
    disabled() {
      if (this.isEmail) {
        let disabled =
          this.form.username == '' ||
          this.form.password == '' ||
          this.form.password2 == ''
        return disabled || this.code == ''
      } else {
        let disabled =
          this.form.username == '' ||
          this.form.password == '' ||
          this.form.password2 == ''
        return disabled || this.imgCode == ''
      }
    },
    loginDisabled() {
      return this.form.username == '' || this.form.password == ''
    },
    isEmail() {
      return this.switchType === 'EMAIL'
    },
  },
  methods: {
    ...mapActions('user', {
      register: 'register',
      login: 'login',
      verifyUsername: 'verifyUsername',
      codeVerify: 'codeVerify',
      _verifyCode: 'verifyCode',
    }),
    getImgCode() {
      this.$refs.imgCode.getCodeImg()
    },
    swiperClick(item) {
      let url = item.skipUrl
      if (url) {
        window.open(url, '_blank')
      }
    },
    goLogin() {
      this.$router.replace('/login')
    },
    async btnRegister() {
      this.form.sessionId = sessionStorage.getItem('sessionId') || ''

      if (!this.isAgree) {
        this.errDialog(this.$t('reglogin.txt13'))
        return
      }

      // if (this.imgCode == '') {
      //   this.errDialog('Kode verifikasi grafis tidak boleh kosong')
      //   return
      // }
      this.form.registerType = this.switchType
      this.form.areaCode = this.isEmail ? null : this.areaItem.code
      if (this.isEmail) {
        this.isErrorEmail = !this.onFailed({
          name: 'email',
          value: this.form.username,
        })
        if (this.isErrorEmail) return
      } else {
        let fz = this.form.username.substring(0, 1)
        if (fz == 0) {
          this.form.username = this.form.username.substr(1)
        }
        if (
          this.form.username.length < 10 ||
          this.form.username.length > 11 ||
          !/^[0-9]*$/.test(this.form.username)
        ) {
          this.isErrorMobile = true
          this.errDialog(this.$t('reglogin.txt14'))
          return
        }
      }
      if (this.form.password != this.form.password2) {
        this.errDialog(this.$t('reglogin.txt15'))
        return
      }
      if (this.isEmail) {
        if (this.code == '') {
          this.errDialog(this.$t('reglogin.txt16'))
          this.isErrorCode = true
          return
        }
      } else {
        if (this.imgCode == '') {
          this.errDialog(
            this.$t('Silakan masukkan kode verifikasi gambar yang benar')
          )
          this.isErrorCode = true
          return
        }
      }

      // this.isErrorPwd = !this.onFailed({
      //   name: 'password',
      //   value: this.form.password,
      // })
      // if (this.isErrorPwd) return

      if (!this.isEmail) {
        let fz = this.form.username.substring(0, 1)
        if (fz == 0) {
          this.form.username = this.form.username.substr(1)
        }
      }

      //验证是否有注册

      let res = await this.verifyUsername({
        username: this.form.username,
      })
      let isok = false
      if (res.code == 0) {
        if (res.data) {
          isok = false
          this.errDialog(this.$t('reglogin.txt17'))
          return
        } else {
          isok = true
        }
      } else {
        isok = false
        this.errDialog(res.msg || this.$t('reglogin.txt18'))
        return
      }
      let isCodeVerify = false

      if (this.isEmail) {
        let params = {
          mobilePhone: this.form.username,
          code: this.isEmail ? this.code : this.imgCode,
        }
        let rs = await this.codeVerify(params)
        if (rs && rs.code == 0) {
          isCodeVerify = true
        } else {
          isCodeVerify = false
          this.errDialog(rs.msg)
        }
      } else {
        let params = {
          sessionId: this.form.sessionId,
          code: this.imgCode,
        }
        let resImgCode = await this._verifyCode(params)
        if (resImgCode.code == 0) {
          isCodeVerify = true
          if (!resImgCode.data) {
            this.errDialog('Silakan masukkan kode verifikasi gambar yang benar')
            this.getImgCode()
            return
          }
        } else {
          isCodeVerify = false
        }
      }

      if (isok && isCodeVerify) {
        await this._register()
      }
    },
    _register() {
      this.isShowLoadding = true
      if (this.isEmail) {
        this.form.verifyCode = this.code
      } else {
        this.form.verifyImageCode = this.imgCode
      }
      // this.form.sessionId = sessionStorage.getItem('sessionId') || ''
      // this.form.verifyImageCode = this.imgCode
      this.form.symbolCode = localStorage.getItem('u_symbolCode') || null
      // this.form.verifyCode = this.code
      let obj = Object.assign({}, this.form)
      obj.platform = 'H5'
      let str = this.encrypt(JSON.stringify(obj))
      this.register(str).then(res => {
        this.isShowLoadding = false
        if (res.code == 0) {
          localStorage.setItem('logo_username', this.form.username)
          this.toLogin(this.form)
        } else {
          this.errDialog(res.msg)
          this.getImgCode()
        }
      })
    },
    async toLogin(postData = null) {
      this.isShowLoadding = true
      let obj = postData || this.form
      let res = await this.login(obj)
      this.isShowLoadding = false
      localStorage.setItem('logo_username', obj.username)
      if (res.code === 0) {
        this.$router.replace({
          path: '/',
        })
      } else if (res.code === 1017) {
        this.errDialog(res.msg)
      } else {
        this.errDialog(res.msg)
      }
    },
    onLogin() {
      this.$router.push('/signin-success')
    },
    //打开注册协议
    openXy(type) {
      this.$router.push({
        path: '/xieyi',
        query: {
          type,
        },
      })
    },
  },
  beforeDestroy() {
    this.isShowLoadding = false
  },
}
</script>
<style lang="less" scoped>
.invite-main {
  // padding: 0 20px;

  height: 100%;
  .login-main {
    padding: 0 20px;
    .login-title {
      padding: 30px 0;
      color: #0094f6;
      font-size: 24px;
      font-weight: 500;
    }
    // .base-input {
    //   &:nth-of-type(1) {
    //     margin-bottom: 0;
    //   }
    // }
    .btn-wrap {
      &.reg {
        margin-bottom: 124px;
      }
      &.login {
        margin-bottom: 190px;
      }
    }
    .forgot {
      text-align: right;
      span {
        color: #66717c;
        font-size: 14px;
      }
    }
  }
}
</style>
