<template>
  <div>
    <div class="thmem trade">
      <div class="how-head">
        <div class="left">
          <img src="@/assets/image/icon/icon_htp_rhdl@2x.png" alt="">
          {{$t('user.howToRegister')}}
        </div>
        <div class="more" @click="more(registers)">{{$t('user.more')}}</div>
      </div>
      <div class="how-content">
        <div class="box-main">
          <template v-for="item in registers">
            <div class="box" @click="itemClick(item)">
              <img v-if="lang=='zh'" :src="imgBaseUrl+item.coverImg" alt="">
              <img v-else :src="imgBaseUrl+item.coverImgEn" alt="">
              <p>{{lang=='zh'?item.title:item.titleEn}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="thmem trade">
      <div class="how-head">
        <div class="left">
          <img src="@/assets/image/icon/icon_htp_rhcz@2x.png" alt="">
          {{$t('user.howToDw')}}
        </div>
        <div class="more" @click="more(recharges)">{{$t('user.more')}}</div>
      </div>
      <div class="how-content">
        <div class="box-main">
          <template v-for="item in recharges">
            <div class="box" @click="itemClick(item)">
              <img v-if="lang=='zh'" :src="imgBaseUrl+item.coverImg" alt="">
              <img v-else :src="imgBaseUrl+item.coverImgEn" alt="">
              <p>{{lang=='zh'?item.title:item.titleEn}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="thmem trade">
      <div class="how-head">
        <div class="left">
          <img src="@/assets/image/icon/icon_htp_rhjy@2x.png" alt="">
          {{$t('user.howToTrade')}}
        </div>
        <div class="more" @click="more(games)">{{$t('user.more')}}</div>
      </div>
      <div class="how-content">
        <div class="box-main">
          <template v-for="item in games">
            <div class="box" @click="itemClick(item)">
              <img v-if="lang=='zh'" :src="imgBaseUrl+item.coverImg" alt="">
              <img v-else :src="imgBaseUrl+item.coverImgEn" alt="">
              <p>{{lang=='zh'?item.title:item.titleEn}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      params: {
        page: 1,
        size: 100
      },
      games: [],
      recharges: [],
      registers: []
    }
  },
  mounted() {
    this.lang = localStorage.getItem('locale') || 'en'
    this.getData()
  },
  methods: {
    ...mapActions('system', {
      helpImagePage: 'helpImagePage'
    }),
    getData() {
      this.helpImagePage(this.params).then(res => {
        console.log('图文帮助', res)
        console.log('图文帮助浅醉', this.imgBaseUrl)
        if (res && res.code == 0) {
          let data = res.data.records
          this.games = data.filter(d => d.symbol == 'Game')
          this.recharges = data.filter(d => d.symbol == 'Recharge')
          this.registers = data.filter(d => d.symbol == 'Register')
        }
      })
    },
    itemClick(item) {
      localStorage.setItem('HELPCONTENT', JSON.stringify(item))
      this.$router.push('/help')
    },
    more(data) {
      localStorage.setItem('MOREHELP', JSON.stringify(data))
      this.$router.push('/howToTrade')
    }
  }
}
</script>
