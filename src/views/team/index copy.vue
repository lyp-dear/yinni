<template>
  <!-- <modMain :title="$route.meta.title"> -->
  <div class="main mission">
    <h1>Missão</h1>
    <img class="top-bg" src="@/assets/image/xapp/xins/ac-bg.png" alt="" />
    <div class="content">
      <div class="mis-box fc">
        <h2>Recompensas de Convite({{ isMissCnt1 }}/6)</h2>
        <div class="p-main">
          <img
            v-for="d in isMissCnt1"
            src="@/assets/image/xapp/xins/icon_ok.png"
            alt=""
          />
          <img
            v-for="d in 6 - isMissCnt1"
            src="@/assets/image/xapp/xins/icon_nook.png"
            alt=""
          />
        </div>
        <div
          class="p-btn"
          @click="onClick('INVITE')"
          :class="{ disable: isMiss1, goto: !isMiss1 && isMissCnt1 < 6 }"
        >
          {{
            isMiss1
              ? $t('sa.getting')
              : !isMiss1 && isMissCnt1 >= 6
              ? 'Coleção Rp3'
              : !isMiss1 && isMissCnt1 < 6
              ? $t('sa.goto')
              : $t('sa.getting')
          }}
        </div>
        <p>Convide 6 amigos para receber a recompensa RS3</p>
      </div>
      <div class="mis-box">
        <div class="left">
          <img src="@/assets/image/xapp/xins/icon_logo_03.png" alt="" />
          <div class="mid">
            <h2>Bónus de ingresso</h2>
            <p>Prêmios:+ 0.2Rp</p>
          </div>
        </div>
        <div
          class="right"
          :class="{ disable: isMiss2 }"
          @click="onClick('SIGN_IN')"
        >
          {{ isMiss2 ? $t('sa.getting') : $t('sa.get') }}
        </div>
      </div>
      <div class="mis-box">
        <div class="left">
          <img src="@/assets/image/xapp/xins/icon_logo_01.png" alt="" />
          <div class="mid">
            <h2>Incentivos ao investimento</h2>
            <p>Jogue Rp100 por 10 entrada de sorteio</p>
          </div>
        </div>
        <div
          class="right"
          :class="{ disable: isMiss3, goto: !isMiss3 && isMissCnt3 <= 0 }"
          @click="onClick('INVESTMENT')"
        >
          {{ isMiss3 ? $t('sa.getting') : $t('sa.get') }}
        </div>
      </div>
      <div class="mis-box">
        <div class="left">
          <img src="@/assets/image/xapp/xins/icon_logo_02.png" alt="" />
          <div class="mid">
            <h2>Procedimentos de Upload</h2>
            <p>Prêmios:+5Rp</p>
          </div>
        </div>
        <div
          class="right"
          :class="{ disable: isMiss4, goto: !isMiss4 && isMissCnt4 <= 0 }"
          @click="onClick('SUNSHINE')"
        >
          {{ isMiss4 ? $t('sa.getting') : $t('sa.get') }}
        </div>
      </div>

      <div class="mis-box">
        <div class="left">
          <img src="@/assets/image/tab/tab_team_nor.png" alt="" />
          <div class="mid">
            <h2>Minha Equipe</h2>
            <p>Veja os membros da minha equipe</p>
          </div>
        </div>
        <div class="right goto" @click="$router.push('/myTeam')">
          Ir para ver
        </div>
      </div>
      <div class="mis-box fc">
        <h3>Descrição.</h3>
        <p class="tips">
          1. as tarefas são refrescadas às 0:00 diariamente<br />
          2. cada tarefa pode ser recolhida uma vez por dia<br />
          3. por favor contacte o serviço de apoio ao cliente se tiver alguma
          dúvida.
        </p>
      </div>
    </div>
  </div>
  <!-- </modMain> -->
</template>
<script>
import { bus } from '@/utils/bus'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isMissCnt1: 0,
      isMissCnt2: 0,
      isMissCnt3: 0,
      isMissCnt4: 0,
      countList: [],
      statusList: [],
      isMiss1: false,
      isMiss2: false,
      isMiss3: false,
      isMiss4: false,
    }
  },
  async activated() {
    await this.getData()
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  beforeRouteEnter(to, from, next) {
    if (window.appInterface) {
      window.appInterface.setStatusColor('#FF3456')
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (window.appInterface) {
      window.appInterface.setStatusColor('#ffffff')
    }
    next()
  },
  methods: {
    ...mapActions({
      // userMission: 'user/userMission',
      award: 'user/award', // 领取奖励
      awardStatus: 'user/awardStatus', // 查看是否领取状态
    }),
    getData() {
      this.awardStatus().then(res => {
        this.statusList = res.data || null
        this.isMiss1 = this.isHasGet('INVITE')
        this.isMiss2 = this.isHasGet('SIGN_IN')
        this.isMiss3 = this.isHasGet('INVESTMENT')
        this.isMiss4 = this.isHasGet('SUNSHINE')
      })
    },
    getCount() {
      this.awardQueryCount({
        activityType: 'INVITE,SIGN_IN,INVESTMENT,SUNSHINE',
      }).then(res => {
        this.countList = res.data || []
      })
    },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    isHasGet(type) {
      //是否获得
      if (!this.statusList || this.statusList.length == 0) return false
      let obj = this.statusList.find(d => d.activityType == type)
      if (obj) {
        if (type == 'INVITE') {
          this.isMissCnt1 = obj.missionCount >= 6 ? 6 : obj.missionCount
        } else if (type == 'SIGN_IN') {
          this.isMissCnt2 = obj.missionCount
        } else if (type == 'INVESTMENT') {
          this.isMissCnt3 = obj.missionCount
        } else if (type == 'SUNSHINE') {
          this.isMissCnt4 = obj.missionCount
        }
        return obj.status
      } else {
        return false
      }
    },
    onClick(type) {
      if (this.isLogin()) {
        if (type == 'INVITE' && !this.isMiss1) {
          if (this.isMissCnt1 >= 6) {
            this.paward(type)
          } else {
            this.toShare()
          }
        } else if (type == 'SIGN_IN' && !this.isMiss2) {
          this.paward(type)
        } else if (type == 'INVESTMENT' && !this.isMiss3) {
          if (this.isMissCnt3 > 0) {
            this.paward(type)
          } else {
            this.$router.push('/contract')
          }
        } else if (type == 'SUNSHINE' && !this.isMiss4) {
          if (this.isMissCnt4 > 0) {
            this.paward(type)
          } else {
            this.$router.push('/misUpload')
          }
        }
      }
    },
    paward(type) {
      this.award({ activityType: type }).then(res => {
        if (res.code == 0) {
          let receiveAmount = 0
          if (type == 'INVITE') {
            this.isMiss1 = true
            receiveAmount = 3
          } else if (type == 'SIGN_IN') {
            this.isMiss2 = true
            receiveAmount = 0.2
          } else if (type == 'INVESTMENT') {
            this.isMiss3 = true
            receiveAmount = 1
          } else if (type == 'SUNSHINE') {
            this.isMiss4 = true
            receiveAmount = 5
            localStorage.removeItem('sun_shine_img')
          }
          this.showDialog(this.$t('sa.reAmout') + receiveAmount)
        } else {
          this.errDialog(res.msg)
        }
      })
    },
  },
}
</script>
<style>
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
