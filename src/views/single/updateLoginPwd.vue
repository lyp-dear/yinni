<template>
  <modMain
    :title="$t('reset.txt1')"
    :isSave="true"
    @save="submitForm"
    :activity="!disabled"
  >
    <div class="login-main padTop20">
      <template v-if="!$route.query.verifyCode">
        <p class="ipt-title">{{ $t('reset.txt13') }}</p>
        <base-input
          type="password"
          v-model.trim="oldPassword"
          :isError="isErrorOldPwd"
          :placeholder="$t('reset.txt14')"
        ></base-input>
      </template>
      <p class="ipt-title">{{ $t('reset.txt15') }}</p>
      <base-input
        type="password"
        v-model.trim="newPassword"
        :isError="isErrorPwd1"
        name="newPasswor"
        :placeholder="$t('reset.txt16')"
      ></base-input>
      <p class="ipt-title">{{ $t('reset.txt17') }}</p>
      <base-input
        type="password"
        v-model.trim="newPassword2"
        :isError="isErrorPwd1"
        name="newPassword2"
        :placeholder="$t('reset.txt18')"
      ></base-input>
    </div>
    <div class="btn-box btn-fixed">
      <base-btn
        :disabled="disabled"
        @btnClick="submitForm"
        :btnTitle="$t('load.txt5')"
      ></base-btn>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      newPassword: '',
      newPassword2: '',
      oldPassword: '',
      isErrorOldPwd: false,
      isErrorPwd1: false,
      isErrorPwd2: false,
      username: '',
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    areaItem() {
      return this.$store.getters.getAreaCode()
    },
    disabled() {
      if (!this.$route.query.verifyCode) {
        return (
          this.newPassword == '' ||
          this.oldPassword == '' ||
          this.newPassword2 == ''
        )
      }
      return this.newPassword == '' || this.newPassword2 == ''
    },
  },
  methods: {
    ...mapActions({
      updateLoginPwd: 'user/updateLoginPwd',
      updateLoginPwd2: 'user/updateLoginPwd2',
    }),
    async submitForm() {
      this.isErrorPwd1 = this.isVaild(this.newPassword)
      this.isErrorPwd2 = this.isVaild(this.newPassword2)
      if (this.isErrorPwd1 || this.isErrorPwd2) return
      if (this.newPassword != this.newPassword2) {
        this.errDialog(this.$t('reset.txt19'))
        return
      }
      let postData = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        username: this.userInfo.username,
        areaCode: this.areaItem.code,
      }
      let { verifyCode, username } = this.$route.query
      if (verifyCode) {
        postData.verifyCode = verifyCode
        postData.username = username
        delete postData.oldPassword
      } else {
        this.isErrorOldPwd = this.isVaild(this.oldPassword)
      }
      let res = verifyCode
        ? await this.updateLoginPwd2(postData)
        : await this.updateLoginPwd(postData)
      if (res && res.code == 0) {
        this.showDialog(this.$t('reset.txt20'))
        this.$router.replace('/login')
      } else {
        this.errDialog(res.msg)
      }
    },
    isVaild(value) {
      return !this.onFailed({ name: 'password', value: value })
    },
  },
}
</script>
