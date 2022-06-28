<template>
  <div
    style="display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;    flex-direction: column;"
  >
    <van-button type="primary" @click="btnRegister">test</van-button>
    <p style="margin-top:15px;">开始注册：{{ regMsg }}</p>
    <div
      style="display: flex;
    height: 300px;
    overflow: auto;
    width: 355px;
    flex-wrap: wrap;"
    >
      <span style="display:block;" v-for="name in usernameList"
        >{{ name }}&nbsp;&nbsp;</span
      >
    </div>
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
        password: '123456',
        password2: '123456',
        registerType: 'PHONE',
        authorityType: 'CLIENT',
        platform: 'H5',
        areaCode: '62',
        source: 1,
        symbolCode: null, //邀请码
      },
      code: '', //短信验证码
      imgCode: '',
      bannerList: null,
      usernameList: [],
      regMsg: '',
    }
  },

  methods: {
    ...mapActions('user', {
      register: 'register',
      login: 'login',
      verifyUsername: 'verifyUsername',
      codeVerify: 'codeVerify',
    }),

    btnRegister() {
      for (let index = 0; index < 6; index++) {
        this.getrom()
      }
    },
    getrom() {
      let vm = this
      for (let i = 0; i < 5; i++) {
        ;(function(self, index) {
          let form = {
            username: '',
            password: '123456',
            password2: '123456',
            registerType: 'PHONE',
            authorityType: 'CLIENT',
            platform: 'H5',
            areaCode: '91',
            source: 1,
            symbolCode: '49161247',
          }
          form.username = '222222' + Math.floor(Math.random(0, 100000) * 100000)
          console.log(form.username)
          vm.usernameList.push(form.username)
          if (index == 99) {
            vm.regMsg = 'success'
          }
          self.register(form)
        })(vm, i)
      }
    },
  },
}
</script>
