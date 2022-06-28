<template>
  <modMain :title="$t('card.txt1')" class="bankcard">
    <div class="bankcard-v">
      <template v-if="bankcards.length == 0">
        <div class="add-content">
          <img
            @click="$router.push('/addcard')"
            src="@/assets/image/home/addCard.png"
            alt=""
          />
          <p class="title">{{ $t('card.txt2') }}</p>
        </div>
      </template>
      <template v-else>
        <div class="content">
          <div class="bank-list" v-for="item in bankcards">
            <div class="card">
              <div class="card-info">
                <div class="card-logo">
                  <!-- <img src="@/assets/image/bink.png" alt="" /> -->
                </div>
                <div class="card-bank">
                  <p>{{ item.bankName }}</p>
                  <p>{{ userInfo.name }}</p>
                  <p class="card-value">
                    {{ item.bankCardId.substring(0, 4) }} **** ****
                    {{
                      item.bankCardId.substring(
                        item.bankCardId.length - 4,
                        item.bankCardId.length
                      )
                    }}
                  </p>
                </div>
              </div>
              <div class="card-btn">
                <van-icon name="edit" @click="updateBank(item)" />
                <van-icon name="delete-o" @click="deleteBank(item)" />
              </div>
              <!-- 
              <p class="card-value">
                {{ item.bankCardId.substring(0, 4) }} **** ****
                {{
                  item.bankCardId.substring(
                    item.bankCardId.length - 4,
                    item.bankCardId.length
                  )
                }}
              </p> -->
            </div>
          </div>
          <div class="add-btn-box" @click="$router.push('/addcard')">
            {{ $t('card.txt2') }}
          </div>
        </div>
      </template>
    </div>
    <loadding v-if="showLoadding" />
  </modMain>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      showLoadding: false,
      bankcards: [],
    }
  },
  created() {
    this.showLoadding = true
    this._getBankCard()
  },
  methods: {
    ...mapActions({
      getBankCard: 'bankCard/getBankCard',
      delBank: 'bankCard/deleteBank',
    }),
    updateBank(item) {
      this.$router.push({
        path: '/addcard',
        query: { card: JSON.stringify(item) },
      })
    },
    _getBankCard() {
      this.getBankCard().then(res => {
        if (res.code == 0) {
          this.bankcards = res.data
        }
        this.showLoadding = false
      })
    },
    deleteBank(item) {
      this.$dialog
        .confirm({
          title: '',
          message: this.$t('card.txt3'),
          cancelButtonText: this.$t('dialog.txt2'),
          confirmButtonText: this.$t('dialog.txt1'),
        })
        .then(() => {
          this.delBank({ id: item.id }).then(res => {
            this._getBankCard()
          })
        })
        .catch(() => {
          // on cancel
        })
    },
  },
}
</script>
