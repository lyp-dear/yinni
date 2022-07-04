<template>
<!--  <modMain-->
<!--    :title="checkType ? $t('my.txt16') : $t('my.txt17')"-->
<!--    class="noPadding register-login"-->
<!--  >-->
  <div class="noPadding register-login">
    <div class="login-main">
      <div class="login-container">
        <div class="login-title">
          <img src="https://www.tslpowersun.com/img/logo.79cde429.png" alt="">
          <p>พันธมิตรการลงทุนพลังงานแสงอาทิตย์ของคุณ</p>
        </div>
        <!-- <base-country v-if="!checkType"></base-country> -->
        <base-phone
          v-model.trim="form.username"
          v-if="switchType == 'PHONE'"
          type="text"
          :placeholder="checkType ? $t('reglogin.txt2') : $t('reglogin.txt1')"
        ></base-phone>
<!--        <base-input-->
<!--          v-model.trim="form.username"-->
<!--          v-show="switchType == 'EMAIL' && !checkType"-->
<!--          type="text"-->
<!--          :placeholder="$t('reglogin.txt1')"-->
<!--        ></base-input>-->
<!--        <base-input-->
<!--          v-model.trim="form.username"-->
<!--          type="text"-->
<!--          v-show="switchType == 'EMAIL' && checkType"-->
<!--          :isError="isErrorEmail"-->
<!--          :placeholder="$t('reglogin.txt3')"-->
<!--        ></base-input>-->
        <base-input
          v-model.trim="form.password"
          :isError="isErrorPwd"
          type="password"
          :placeholder="$t('reglogin.txt4')"
          v-show="!checkType"
        ></base-input>
        <base-code
          ref="imgCode"
          v-model="imgCode"
          :isError="isErrorCode"
          v-if="switchType == 'PHONE'"
        ></base-code>
        <template v-if="checkType">
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
          <base-input
            v-model.trim="form.password2"
            :isError="isErrorPwd"
            type="invite"
            :placeholder="'48666375'"
            :disabled ="true"
          ></base-input>
<!--          <base-code-->
<!--            ref="imgCode"-->
<!--            v-model="imgCode"-->
<!--            :isError="isErrorCode"-->
<!--            v-if="switchType == 'PHONE'"-->
<!--          ></base-code>-->
<!--          <baseSend-->
<!--            type="text"-->
<!--            :sendData="form"-->
<!--            v-model="code"-->
<!--            v-else-->
<!--            :placeholder="$t('reglogin.txt6')"-->
<!--            ref="sendPhone"-->
<!--            :isError="isErrorCode"-->
<!--          ></baseSend>-->
        </template>
        <!-- <base-country></base-country> -->
        <!-- <template v-if="switchType == 'PHONE'">
          <base-code
            ref="imgCode"
            v-model="imgCode"
            :isError="isErrorCode"
          ></base-code>
        </template> -->
        <template v-if="!checkType">
          <div class="forgot">
            <p>
              <!-- <span @click="checkClick">{{ $t('my.txt16') }}</span> -->
              <span @click="$router.push('/reset')">{{
                $t('reglogin.txt9')
              }}</span>
            </p>
          </div>
        </template>
        <div class="btn-wrap" :class="[checkType ? 'reg' : 'login']">
          <template v-if="checkType">
            <base-btn
              :btnTitle="$t('my.txt16')"
              :disabled="false"
              @btnClick="btnRegister"
              :isSelect="false"
            ></base-btn>
            <base-btn
              :btnTitle="$t('my.txt17')"
              :disabled="false"
              @btnClick="switchLoginOrResigter(false)"
            ></base-btn>
          </template>
          <template v-else>
            <base-btn
              :btnTitle="$t('my.txt17')"
              :disabled="false"
              @btnClick="btnLogin"
              :isSelect="false"
            ></base-btn>
            <base-btn
              :btnTitle="$t('my.txt16')"
              :disabled="false"
              @btnClick="switchLoginOrResigter(true)"
            ></base-btn>
          </template>

          <!-- <p class="contact green"  @click="toService">
          Jika Anda tidak dapat menerima kode verifikasi SMS, klik untuk
          menghubungi layanan pelanggan
        </p> -->
<!--          <group-service ref="groupService"></group-service>-->
        </div>
        <template v-if="checkType">
          <div class="register-agree" @click="openXy(1)">
<!--            <span-->
<!--              class="agree-icon"-->
<!--              :class="{ tongyi: isAgree }"-->
<!--              @click="isAgree = !isAgree"-->
<!--            ></span>-->
            <div class="agree-txt">
              <span>{{"签署"}}</span>
              <span>{{"服务协议"}}</span>
              <span>{{ "和" }}</span>
              <span>{{ "用户条款" }}</span>
            </div>
          </div>
        </template>
      </div>
      <!-- <fb-google /> -->
<!--      <download :checkType="checkType"></download>-->
    </div>
    <loadding v-if="isShowLoadding"></loadding>
  </div>
</template>
<script>
// import validMixins from '../../mixins/validator' //有效性验证
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Download from '../../components/download.vue'
import switchLogin from '../../components/switchLogin.vue'

export default {
  components: { switchLogin, Download },
  // mixins: [validMixins],
  data() {
    return {
      inputType: 'text',
      isShowLoadding: false,
      isErrorMobile: false,
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
        email: '',
        sessionId: '',
      },
      code: '', //短信验证码
      // imgCode: '',
      bannerList: null,
      wathsrls: '',
    }
  },
  computed: {
    ...mapGetters({
      checkType: 'getCheckType', // 注册 or 登录
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
  watch: {
    checkType(newval, oldval) {
      localStorage.removeItem('password')
      this.form.password = ''
      if (this.checkType) {
        this.form.username = ''
      } else {
        this.form.username = localStorage.getItem('logo_username') || ''
      }
    },
  },
  created() {
    let pathName = this.$route.meta.pathName
    let type = pathName && pathName == 'register'
    this.setCheckType(type)
    let password = localStorage.getItem('password') || ''
    let username = localStorage.getItem('logo_username') || ''
    this.form.username = username
    this.form.password = password
  },
  mounted() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.path == '/verification' && from.query.data) {
        let data = JSON.parse(from.query.data)
        vm.form.username = data.username
        vm.form.password = data.password
      }
    })
  },
  beforeRouteLeave(to, from, next) {
    // ...
    if (to.path == '/areacode' || to.path == '/reset') {
      localStorage.setItem('logo_username', this.form.username)
      localStorage.setItem('password', this.form.password)
    }
    next()
  },
  methods: {
    ...mapActions('user', {
      register: 'register',
      login: 'login',
      verifyUsername: 'verifyUsername',
      // verifyBroker: 'verifyBroker',
      codeVerify: 'codeVerify',
      linkquery: 'linkquery',
      _verifyCode: 'verifyCode',
    }),
    ...mapMutations({
      setCheckType: 'SET_PLAT_TYPE',
      setSwitchType: 'SET_SWITCH_TYPE',
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
          this.errDialog(this.$t('reglogin.txt16'))
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
            this.errDialog('Kesalahan input kode verifikasi grafis')
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
      if (this.isEmail) {
        this.form.verifyCode = this.code
      } else {
        this.form.verifyImageCode = this.imgCode
      }
      let obj = Object.assign({}, this.form)
      obj.platform = 'H5'
      let str = this.encrypt(JSON.stringify(obj))
      this.register(str).then(res => {
        if (res.code == 0) {
          // this.showDialog(this.$t('dialog.regSuccess'))
          let loginform = {
            platform: 'H5',
            username: this.form.username,
            password: this.form.password,
            areaCode: this.form.areaCode,
            authorityType: 'CLIENT',
          }
          localStorage.removeItem('_is_first_open')
          localStorage.removeItem('password')
          this.toLogin(loginform)
        } else {
          this.errDialog(res.msg)
          this.getImgCode()
        }
      })
    },
    async btnLogin() {
      let isEmail = this.form.username.indexOf('@') > -1
      this.setSwitchType(isEmail ? 'EMAIL' : 'PHONE')
      if (isEmail) {
        this.form.registerType = 'EMAIL'
        this.isErrorEmail = !this.onFailed({
          name: 'email',
          value: this.form.username,
        })
        if (this.isErrorEmail) return
      } else {
        this.form.registerType = 'PHONE'
        if (
          this.form.username.length < 5 ||
          !/^[0-9]*$/.test(this.form.username)
        ) {
          this.isErrorMobile = true
          this.errDialog(this.$t('reglogin.txt14'))
          return
        }
      }
      this.form.areaCode = isEmail ? null : this.areaItem.code
      this.toLogin()
    },
    async toLogin(postData = null) {
      this.isShowLoadding = true
      // let obj = postData || this.form
      let obj = {
        "username": "15118090811",
        "password": "123456",
        "password2": "",
        "registerType": "PHONE",
        "authorityType": "CLIENT",
        "platform": "H5",
        "areaCode": "62",
        "verifyCode": "",
        "source": 1,
        "symbolCode": null,
        "email": "",
        "sessionId": ""
      };
      // let isEmail = this.form.username.indexOf('@') > -1
      // if (!isEmail) {
      //   let fz = obj.username.substring(0, 1)
      //   if (fz == 0) {
      //     obj.username = obj.username.substr(1)
      //   }
      // }
      let res = await this.login(obj)
      this.isShowLoadding = false
      localStorage.setItem('logo_username', obj.username)
      if (res.code === 0) {
        this.$router.replace({
          path: '/',
        })
        // let isFirstOpen = localStorage.getItem('_is_first_open')
        // if (!isFirstOpen) {
        //   this.$router.replace({
        //     path: '/helpfile',
        //   })
        // } else {

        // }
      } else if (res.code === 1017) {
        this.errDialog(res.msg)
      } else {
        this.errDialog(res.msg)
      }
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
    switchLoginOrResigter(isResigter) {
      if (isResigter) {
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
  beforeDestroy() {
    this.isShowLoadding = false
  },
}
</script>

<style lang="less" scoped>
.register-login {
  // padding: 0 20px;
  background: #002046;

  height: 100%;
  .login-main {
    padding: 0 20px;
    .login-title {
      img{
        display: block;
        padding-top: 50px;
        width: 187px;
        margin: 0 auto;
      }
      p{
        display: block;
        text-align: center;
        font-weight: 600;
        font-size: 22px;
        margin: 15px 0 37px;
        color: rgb(0, 163, 254);
      }
    }
    // .base-input {
    //   &:nth-of-type(1) {
    //     margin-bottom: 0;
    //   }
    // }
    .btn-wrap {
      &.reg {
        margin-bottom: 15px;
      }
      &.login {
        margin-bottom: 190px;
      }
    }
    .forgot {
      padding: 21px 0px;
      text-align: right;
      span {
        color: #848cad;
        font-size: 14px;
      }
    }
    .register-agree{
      &::before {
        display: inline-block;
        text-align: center;
        width: 9px;
        height: 9px;
        content: 'i';
        font-size: 3px !important;
        font-weight: bold;
        font-family: Helvetica, 'PingFang SC' ;
        border-radius: 50%;
        border: 2px solid #fff;
        color: #fff;
      }
    }
    .agree-txt{
      display: flex;
      justify-content: flex-start;
      span{
         padding-left: 5px;
         color: #848cad;
         &:nth-child(2){
           color: rgb(0, 163, 254);
         }
        &:nth-child(4){
          color: rgb(0, 163, 254);
        }
      }
    }
  }
}
</style>
