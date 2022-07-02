<template>
  <modMain :title="$t('reset.txt1')">
    <div class="login-main padTop20">
      <!-- <div class="mobile-mail">
        <span>{{checkType?$t('home.switchMobile') : $t('home.switchEmail')}}</span>
        <span class="active" @click="checkClick">{{checkType?$t('home.switchEmail') : $t('home.switchMobile')}}</span>
      </div> -->
      <!-- <switch-tab /> -->
      <!-- <template v-if="checkType">
        <base-phone v-model.trim="form.phone" :placeholder="$t('home.enterMobile')"></base-phone>
      </template>
      <template v-else>
        <base-input v-model.trim="form.email" :isError="isErrorEmail" :placeholder="$t('home.enterEmail')"></base-input>
      </template> -->
<!--      <p class="form-title">{{ $t('reset.txt2') }}</p>-->
      <base-phone
        v-model.trim="form.username"
        v-if="true"
        type="text"
        :placeholder="checkType ? $t('reglogin.txt2') : $t('reglogin.txt1')"
      ></base-phone>
      <base-send
        v-model.trim="form.username"
        v-if="true"
        type="text"
        :placeholder="checkType ? $t('reglogin.txt2') : $t('reglogin.txt1')"
      ></base-send>
      <base-input
        v-model.trim="form.username"
        :isError="isErrorEmail"
        :placeholder="$t('reglogin.txt1')"
      ></base-input>

      <base-code
        ref="imgCode"
        v-model.trim="imgCode"
        :isError="isErrorCode"
      ></base-code>
      <div class="btn-wrap">
        <base-btn
          :btnTitle="$t('reset.txt4')"
          :disabled="disabled"
          @btnClick="btnClick"
        ></base-btn>
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import BaseSend from "../../components/baseComs/baseSend";
export default {
  components: {BaseSend},
  data() {
    return {
      isShowOrgCode: false,
      isAgree: false,
      isErrorEmail: false,
      isErrorCode: false,
      imgCode: '',
      form: {
        username: '',
        type: '',
        areaCode: '62',
        isfrom: 'reset',
      },
    }
  },
  computed: {
    ...mapGetters({
      checkType: 'getCheckType',
    }),
    areaItem() {
      return this.$store.getters.getAreaCode()
    },
    disabled() {
      let disabled = false
      disabled = this.form.username == '' || this.imgCode == ''
      return disabled
    },
  },
  beforeRouteEnter(to, from, next) {
    // ...
    next(vm => {
      vm.form.username = localStorage.getItem('reset_username') || ''
    })
  },
  beforeRouteLeave(to, from, next) {
    // ...
    if (to.path == '/areacode') {
      localStorage.setItem('reset_username', this.form.username)
    } else {
      localStorage.removeItem('reset_username')
    }
    next()
  },
  methods: {
    ...mapMutations({
      setCheckType: 'SET_PLAT_TYPE',
    }),
    ...mapActions('user', {
      verifyUsername: 'verifyUsername',
    }),
    checkClick() {
      let type = !this.checkType
      this.setCheckType(type)
    },
    async btnClick() {
      let isPhone = this.form.username.indexOf('@') == -1
      this.form.type = isPhone ? 'PHONE' : 'EMAIL'
      this.form.areaCode = isPhone ? this.areaItem.code : ''
      if (!isPhone) {
        this.isErrorEmail = !this.onFailed({
          name: 'email',
          value: this.form.username,
        })
      } else {
        if (
          this.form.username.length < 5 ||
          !/^[0-9]*$/.test(this.form.username)
        ) {
          // 请输入正确的手机号码
          this.errDialog(this.$t('reglogin.txt14'))
          return
        }
      }
      if (!isPhone && this.isErrorEmail) return
      let res = await this.verifyUsername({
        username: this.form.username,
      })
      if (res.code == 0) {
        if (!res.data) {
          // 该账户不存在
          this.errDialog(this.$t('reset.txt6'))
          return
        }
      } else {
        this.errDialog(res.msg || this.$t('reglogin.txt18'))
        return
      }
      let res2 = await this.verify(this.imgCode)
      if (res2.data) {
        this.$router.push({
          path: '/verification',
          query: {
            data: JSON.stringify(this.form),
          },
        })
      } else {
        this.isErrorCode = true
        this.errDialog(this.$t('reset.txt7'))
        this.imgCode = ''
        this.$refs.imgCode.getCodeImg()
      }
    },
  },
}
</script>
