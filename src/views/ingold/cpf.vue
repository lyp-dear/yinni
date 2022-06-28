<template>
  <modMain :title="$t('cpf.txt1')" class="bank-card" from="payCpf">
    <div class="card-container">
      <div class="title">
        {{ $t('cpf.txt1') }}
      </div>
      <div class="card-box">
        <div class="card-info">
          <p class="label">{{ $t('cpf.txt4') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('cpf.txt7')"
              v-model="form.name"
            />
          </div>
          <p>{{ $t('card.txt7') }}</p>
        </div>
        <div class="card-info">
          <p class="label">{{ $t('cpf.txt5') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('cpf.txt8')"
              v-model="form.email"
            />
          </div>
          <p>{{ $t('card.txt17') }}</p>
        </div>
        <div class="card-info">
          <p class="label">{{ $t('cpf.txt6') }}</p>
          <div class="card-input">
            <input
              type="text"
              :placeholder="$t('cpf.txt9')"
              v-model="form.mobilePhone"
            />
          </div>
          <p>
            {{ $t('cpf.txt9') }}
          </p>
        </div>
      </div>
      <button class="btn" :disabled="disabled" @click="onSubmit">
        Submit
      </button>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import mixinsSerivce from '@/mixins/service'
export default {
  mixins: [mixinsSerivce],
  data() {
    return {
      locale: localStorage.getItem('locale') || 'en_US',
      form: {
        name: '',
        // surname: '',
        email: '',
        // cpfCode: '',
        mobilePhone: '',
      },
      type: '',
      wathsrls: [],
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    disabled() {
      return (
        this.form.name == '' ||
        this.form.email == '' ||
        this.form.mobilePhone == ''
      )
    },
  },
  created() {
    Object.keys(this.form).forEach(key => {
      this.form[key] = this.userInfo[key]
    })
    this.type = this.$route.query.type
    console.log(this.type)
  },
  methods: {
    cpfClick() {},
    ...mapActions('user', {
      updateUserBasic: 'updateUserBasic',
    }),
    ...mapMutations('user', {
      updateUser: 'UPDATE_USER',
    }),
    onSubmit() {
      console.log(1111)
      this.updateUserBasic(this.form).then(res => {
        console.log('更新认证信息', res)
        if (res && res.code == 0) {
          this.updateUser(this.form)
          // this.$emit('closeCpf')
          this.$router.go(-1)
        } else {
          this.errDialog(res.msg)
        }
      })
    },
  },
}
</script>
