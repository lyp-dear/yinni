<template>
  <modMain :title="$t('my.txt13')" class="setting">
    <div class="form-group">
      <van-form>
        <template v-if="userInfo.username">
          <div class="head-avatar">
            <label>{{ $t('my.txt29') }}</label>
            <van-uploader
              :after-read="afterRead"
              accept="image/*"
              :max-count="1"
            >
              <div class="avatar">
                <template v-if="!userInfo || !userInfo.headImg">
                  <img src="@/assets/image/sun/logo.png" alt="" />
                </template>
                <template v-else>
                  <img :src="imgBaseUrl + userInfo.headImg" alt="" />
                </template>
                <van-icon name="arrow van-cell__right-icon" />
              </div>
            </van-uploader>
          </div>
        </template>
        <van-cell
          v-if="userInfo && userInfo.username"
          :title="$t('my.txt33')"
          @click="bankCards"
          is-link
        />
        <van-cell :title="$t('my.txt30')" to="/reset" is-link />
      </van-form>
      <div v-if="userInfo && userInfo.username" class="btn-box btn-fixed">
        <base-btn
          :btnTitle="$t('my.txt28')"
          :disabled="false"
          @btnClick="btnQuitClick"
        ></base-btn>
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import client from '@/utils/http'

export default {
  data() {
    return {
      params: {
        dialog: false,
        sounds: true,
      },
      showPage: false,
      theme: localStorage.getItem('t_theme') || 'dark',
      utc: JSON.parse(localStorage.getItem('utc') || null),
      locale_name: localStorage.getItem('locale_name'),
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      isLogin: 'user/isLogin',
      // getcurrentGame: 'trade/getcurrentGame',
    }),
  },
  created() {
    // if (!this.locale_name) {
    //   this.getLocaleName()
    // }
    // if (localStorage.getItem('token')) {
    //   this._userconfigquery()
    // }
  },
  mounted() {
    // console.log('用户信息', this.userInfo)
  },
  methods: {
    ...mapActions('user', {
      logout: 'logout',
      setuserconfig: 'setuserconfig',
      userconfigquery: 'userconfigquery',
      updateUserBasic: 'updateUserBasic',
    }),
    ...mapMutations('user', {
      updateUser: 'UPDATE_USER',
      quitLogin: 'quitLogin',
    }),
    getLocaleName() {
      this.querylist().then(res => {
        let languageList = res.data || []
        let locale = localStorage.getItem('locale') || 'en_US'
        let langObj = languageList.find(d => d.locale == locale)
        this.locale_name = langObj.englishName
      })
    },
    bankCards() {
      this.$router.push('/bankcard')
    },
    async afterRead(files) {
      let vm = this
      this.$toast.loading({
        message: this.$t('load.txt4'),
        duration: 0,
        forbidClick: true,
      })
      let file = files.file

      console.log('上传file。。。。。。。。。。', file)
      let fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png']
      if (!fileTypes.includes(file.type)) {
        this.errDialog(this.$t('sys.imgErr'))
        return
      }
      if (file.size.toFixed(2) > 1024 * 1024 * 6) {
        this.errDialog(this.$t('sys.uploadSize'))
        return
      }
      console.log('开始上传。。。。。。。。。。', file)
      client
        .postFormData('/upload/s3', {
          file: file,
          folder: 'file',
        })
        .then(res => {
          console.log('上传返回信息。。。。。。。。。。', res)
          //更新用户头像信息
          if (res.code == 0) {
            vm.updateUserBasic({
              userId: this.userInfo.id,
              headImg: res.data,
            }).then(response => {
              if (response.code == 0) {
                vm.updateUser({
                  headImg: res.data,
                })
              }
            })
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {})
        .finally(res => {
          this.$toast.clear()
        })
    },
    btnQuitClick() {
      this.$dialog
        .confirm({
          title: '',
          message: this.$t('my.txt31'),
          cancelButtonText: this.$t('dialog.txt2'),
          confirmButtonText: this.$t('dialog.txt1'),
        })
        .then(() => {
          this.logout()
          localStorage.removeItem('token')
          localStorage.removeItem('USER_INFO')
          localStorage.clear()
          localStorage.setItem('_is_first_open', new Date().getTime())
          this.quitLogin()
          // this.$router.push('/')
          window.location.href = '/'
        })
        .catch(() => {
          // on cancel
        })
    },
  },
}
</script>
<style lang="less" scoped>
.setting {
  background: #f7f7f7;
  .form-group {
    padding-top: 20px;
    .head-avatar {
      margin-bottom: 16px;
      border-radius: 8px;
      label {
        color: #6c717d;
      }
    }
    /deep/ .van-cell {
      margin-bottom: 16px;
      border-radius: 8px;
      .van-cell__title {
        span {
          color: #6c717d;
        }
      }
    }
  }
}
</style>
