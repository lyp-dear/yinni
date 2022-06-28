<template>
  <modMain
    :title="$route.query.card ? $t('card.txt4') : $t('card.txt5')"
    class="bank-card"
  >
    <div class="card-container">
      <!-- <div class="title">
        {{ $route.query.card ? $t('card.txt4') : $t('card.txt5') }}
      </div> -->
      <div class="card-box">
        <div class="card-info">
          <p class="label">{{ $t('card.txt6') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('card.txt7')"
              v-model="form.name"
            />
          </div>
          <p>{{ $t('card.txt7') }}</p>
        </div>
        <div class="card-info">
          <p class="label">{{ $t('card.txt8') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('card.txt9')"
              v-model="form.mobilePhone"
            />
          </div>
          <p>{{ $t('card.txt9') }}</p>
        </div>
        <!-- <div class="card-info">
          <p class="label">IFSC Code</p>
          <div class="card-input">
            <input
              type="text"
              placeholder="Please enter the IFSC code"
              v-model="form.branchName"
            />
          </div>
        </div> -->
        <div class="card-info">
          <p class="label">{{ $t('card.txt10') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('card.txt11')"
              v-model="form.bankName"
              readonly
              @click="focusCode"
            />
          </div>
        </div>
        <div class="card-info">
          <p class="label">{{ $t('card.txt12') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('card.txt13')"
              v-model="form.bankCardId"
            />
          </div>
        </div>
      </div>
      <button class="btn" @click="btnClick">{{ $t('load.txt5') }}</button>
    </div>
    <loadding v-if="isShowLoadding"></loadding>
  </modMain>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      isShowBirthday: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2099, 10, 1),
      currentDate: new Date(),
      form: {
        id: null,
        name: '',
        // surname: '',
        // cpfCode: '',
        mobilePhone: '',
        bankCardId: '',
        bankName: '',
        bankCode: '',
        // birthday: '',
      },
      isSaved: false,
      isShowLoadding: false,
    }
  },
  computed: {
    ...mapGetters('user', {
      userInfo: 'userInfo',
    }),
  },
  watch: {
    $route() {
      this.form.name = this.userInfo.name
      this.form.mobilePhone = this.userInfo.mobilePhone
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.path == '/choiseBank') {
        let obj = JSON.parse(localStorage.getItem('BANK_INFO'))
        vm.form.id = obj.id
        vm.form.name = obj.name
        vm.form.mobilePhone = obj.mobilePhone
        vm.form.branchName = obj.branchName
      }
    })
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == '/choiseBank') {
      localStorage.setItem(
        'BANK_INFO',
        JSON.stringify({
          id: this.form.id,
          mobilePhone: this.form.mobilePhone,
          name: this.form.name,
          branchName: this.form.branchName,
        })
      )
    } else {
      localStorage.removeItem('BANK_INFO')
    }
    next()
  },
  created() {
    if (this.$route.query.card) {
      let card = JSON.parse(this.$route.query.card)
      this.form.id = card.id
      this.form.mobilePhone = card.mobilePhone
      this.form.name = this.userInfo.name
      this.form.bankCardId = card.bankCardId
      this.form.bankName = card.bankName
      this.form.bankCode = card.bankCode
    } else {
      this.form.name = this.userInfo.name
      this.form.mobilePhone = this.userInfo.mobilePhone
    }
    let bankCode = localStorage.getItem('bankCode') || null
    if (bankCode) {
      let item = JSON.parse(bankCode)
      this.form.bankName = item.label
      this.form.bankCode = item.code
    }
  },
  methods: {
    ...mapActions({
      addBank: 'bankCard/addBank',
      updateBank: 'bankCard/updateBank',
      getBankCard: 'bankCard/getBankCard',
    }),
    ...mapActions('user', {
      updateUserBasic: 'updateUserBasic',
    }),
    ...mapMutations('user', {
      updateUser: 'UPDATE_USER',
    }),
    focusCode() {
      // let addCard = JSON.stringify(this.form)
      // localStorage.setItem('addCard', addCard)
      this.$router.push('/choiseBank')
    },
    hideBirthdayPopup() {
      this.isShowBirthday = false
    },
    confirmDate(value) {
      this.form.birthday = moment(value).format('MM-DD-yyyy')
      this.hideBirthdayPopup()
    },

    btnClick() {
      //   let time = this.form.birthday.replace(/-/g, '/')
      //   var d = new Date(time)
      //   //得到1970年一月一日到现在的秒数
      //   this.form.birthday = d.getTime()
      // this.form.birthday = moment(this.form.birthday).format('yyyy-MM-DD')
      if (this.form.name == '') {
        this.errDialog(this.$t('card.txt7'))
        return
      }
      if (this.form.mobilePhone == '') {
        this.errDialog(this.$t('card.txt14'))

        return
      }
      if (this.form.bankName == '') {
        this.errDialog(this.$t('card.txt11'))

        return
      }
      if (this.form.bankCardId == '') {
        this.errDialog(this.$t('card.txt13'))
        return
      }

      if (this.isSaved) return
      this.isSaved = true
      if (this.form.id) {
        this.update()
      } else {
        this.addNew()
      }
    },
    addNew() {
      let postForm = {
        name: this.form.name,
      }
      this.updateUserBasic(postForm).then(res => {
        this.isShowLoadding = false
        if (res && res.code == 0) {
          this.updateUser(postForm)
        } else {
          this.errDialog(res.msg)
        }
      })
      this.addBank(this.form).then(res => {
        this.successBack(res)
      })
    },

    async update() {
      let postForm = {
        name: this.form.name,
      }
      await this.updateUserBasic(postForm).then(res => {
        if (res && res.code == 0) {
          this.updateUser(postForm)
        } else {
          this.errDialog(res.msg)
        }
      })
      await this.updateBank(this.form).then(res => {
        this.successBack(res)
      })
    },

    successBack(res) {
      if (res && res.code == 0) {
        this.isShowLoadding = false

        localStorage.removeItem('addCard')
        localStorage.removeItem('bankCode')
        localStorage.removeItem('bankId')

        this.getBankCard()
        this.isSaved = false
        this.showDialog(this.$t('card.txt15'))
        let { from } = this.$route.query
        if (from && from == 'withdrawal') {
          this.$router.push({
            path: '/withdrawal',
          })
        } else {
          this.$router.push({
            path: '/bankcard',
            query: {
              backPath: '/setting',
            },
          })
        }
      } else {
        this.isSaved = false
        this.errDialog(res.msg)
      }
    },
  },
  beforeDestroy() {
    this.isSaved = false
  },
}
</script>

<style lang="less" scoped></style>
