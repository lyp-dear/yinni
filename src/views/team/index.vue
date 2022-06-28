<template>
  <!-- <modMain :title="$route.meta.title"> -->

  <!-- </modMain> -->
  <div class="task">
    <top-bg :tit="$t('index.txt39')"></top-bg>
    <div class="task-content">
      <div class="intive-box">
        <div class="intive-left">
          <img src="@/assets/image/home/intive.png" alt="" />
        </div>
        <div class="intive-right">
          <p>{{ $t('task.txt2') }}</p>
          <div class="intive-btn" @click="goShare">
            {{ $t('task.txt24') }}
          </div>
          <p>{{ $t('task.txt106') }}</p>
        </div>
      </div>
      <div class="daily-box" style="padding-bottom:0">
        <div class="daily-title">
          {{ $t('task.txt115') }} ({{ $t('task.txt4')
          }}{{ $utils.currencyType }}5000)
        </div>
        <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/otc/Group.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt122') }}({{ count11 }}/1)</p>
              <p>{{ $t('task.txt117') }}</p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}2000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('SHARE_MUL_GROUP')"
              :class="isAward11 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward11 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward11 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
        <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/otc/Tiktok.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }} Tiktok ({{ count5 }}/1)</p>
              <p>
                {{ $t('task.txt28') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}10000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('TIKTOK')"
              :class="isAward5 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward5 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward5 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
        <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/cons/Zalo.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }} Zalo ({{ count12 }}/1)</p>
              <p>
                {{ $t('task.txt14') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}2000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('ZALO')"
              :class="isAward12 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward6 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward12 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
        <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/WhatsApp@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }} WhatsApp ({{ count6 }}/1)</p>
              <p>
                {{ $t('task.txt14') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}2000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('WHATS_APP')"
              :class="isAward6 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward6 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward6 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div>
        <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Facebook@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }} Facebook ({{ count3 }}/1)</p>
              <p>
                {{ $t('task.txt14') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('FACE_BOOK')"
              :class="isAward3 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward3 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward3 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div>

        <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Telegram@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }} Telegram ({{ count4 }}/1)</p>
              <p>
                {{ $t('task.txt14') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }} 1000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('TELEGRAM')"
              :class="isAward4 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward4 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward4 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div>
        <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/otc/income.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>SunPower Show</p>
              <p>
                {{ $t('task.txt120') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('SUNSHINE_PROFIT')"
              :class="isAward10 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward10 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward10 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div>
        <div class="daily-title">
          {{ $t('task.txt116') }} ({{ $t('task.txt4')
          }}{{ $utils.currencyType }}8000)
        </div>
        <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Telegram@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt5') }}({{ count2 }}/1)</p>
              <p>{{ $t('task.txt6') }}</p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}5000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('JOIN_TG_GROUP')"
              :class="isAward2 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward2 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward2 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt12')
              }}
            </div>
          </div>
        </div>
        <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/YouTobe@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }} Youtube ({{ count13 }}/1)</p>
              <p>
                {{ $t('task.txt27') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}3000</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('YOUTUBE')"
              :class="isAward13 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward13 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward13 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div>

        <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/invite.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt2') }}</p>
              <p>{{ $t('task.txt3') }}</p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
            </div>
            <div class="task-info-btn" @click="goShare">
              {{ $t('task.txt24') }}
            </div>
          </div>
        </div> -->

        <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Telegram@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt10') }}({{ count7 }}/1)</p>
              <p>{{ $t('task.txt11') }}</p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
            </div>

            <div
              class="task-info-btn"
              @click="onClick('SUB_TG_CHANNEL')"
              :class="isAward7 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward7 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward7 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt41')
              }}
            </div>
          </div>
        </div> -->
      </div>
      <!-- <div class="daily-box">
        <div class="daily-task-main">
          <div class="task-info">
            <div class="task-info-icon">
              <img src="@/assets/image/home/sign.png" alt="" />
            </div>
            <div class="task-info-txt-btn">
              <div class="txt-box">
                <p>{{ $t('task.txt8') }}({{ count1 }}/1)</p>
                <p>{{ $t('task.txt9') }}</p>
                <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
              </div>
              <div
                class="task-info-btn"
                @click="onClick('SIGN_IN')"
                :class="isAward1 == 'RECEIVED' ? 'disabled' : ''"
              >
                {{
                  isAward1 == 'WAITING_RECEIVE'
                    ? $t('task.txt38')
                    : isAward1 == 'RECEIVED'
                    ? $t('task.txt39')
                    : $t('task.txt38')
                }}
              </div>
            </div>
          </div>

          <div class="task-info">
            <div class="task-info-icon">
              <img src="@/assets/image/home/dep.png" alt="" />
            </div>
            <div class="task-info-txt-btn">
              <div class="txt-box">
                <p>{{ $t('task.txt15[0]') }}{{ $t('task.txt42') }}</p>
                <p>
                  {{ $t('task.txt16[0]') }}{{ $t('task.txt42')
                  }}{{ $t('task.txt16[1]') }}
                </p>
                <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
              </div>
              <div
                class="task-info-btn"
                @click="onClick('SUNSHINE_RECHARGE')"
                :class="isAward8 == 'RECEIVED' ? 'disabled' : ''"
              >
                {{
                  isAward8 == 'WAITING_RECEIVE'
                    ? $t('task.txt38')
                    : isAward8 == 'RECEIVED'
                    ? $t('task.txt39')
                    : $t('task.txt7')
                }}
              </div>
            </div>
          </div>
          <div class="task-info">
            <div class="task-info-icon">
              <img src="@/assets/image/home/wt.png" alt="" />
            </div>
            <div class="task-info-txt-btn">
              <div class="txt-box">
                <p>{{ $t('task.txt15[0]') }}{{ $t('task.txt43') }}</p>
                <p>
                  {{ $t('task.txt16[0]') }}{{ $t('task.txt43')
                  }}{{ $t('task.txt16[1]') }}
                </p>
                <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}1000</p>
              </div>
              <div
                class="task-info-btn"
                @click="onClick('SUNSHINE_WITHDRAWAL')"
                :class="isAward9 == 'RECEIVED' ? 'disabled' : ''"
              >
                {{
                  isAward9 == 'WAITING_RECEIVE'
                    ? $t('task.txt38')
                    : isAward9 == 'RECEIVED'
                    ? $t('task.txt39')
                    : $t('task.txt7')
                }}
              </div>
            </div>
          </div>
          
        </div>
      </div> -->
      <!-- <div class="time-box"> -->
      <!-- <div class="time-title">{{ $t('task.txt47') }}</div> -->

      <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Discord@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }}Discord (0/1)</p>
              <p>
                {{ $t('task.txt14[0]') }}Discord
                {{ $t('task.txt14[1]') }}Discord{{ $t('task.txt14[2]') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}5</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('DISCORD')"
              :class="isAward4 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward4 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward4 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
      <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Snapchat@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }}Snapchat (0/1)</p>
              <p>
                {{ $t('task.txt14[0]') }}Snapchat
                {{ $t('task.txt14[1]') }}Snapchat {{ $t('task.txt14[2]') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}5</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('SNAPCHAT')"
              :class="isAward5 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward5 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward5 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
      <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/WhatsApp@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }}WhatsApp (0/1)</p>
              <p>
                {{ $t('task.txt14[0]') }}WhatsApp
                {{ $t('task.txt14[1]') }}WhatsApp {{ $t('task.txt14[2]') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}5</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('WHATS_APP')"
              :class="isAward6 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward6 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward6 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
      <!-- <div class="task-info">
          <div class="task-info-icon">
            <img src="@/assets/image/home/Moj@2x.png" alt="" />
          </div>
          <div class="task-info-txt-btn">
            <div class="txt-box">
              <p>{{ $t('task.txt13') }}Moj (0/1)</p>
              <p>
                {{ $t('task.txt14[0]') }}Moj {{ $t('task.txt14[1]') }}Moj
                {{ $t('task.txt14[2]') }}
              </p>
              <p>{{ $t('task.txt4') }}{{ $utils.currencyType }}5</p>
            </div>
            <div
              class="task-info-btn"
              @click="onClick('MOJ')"
              :class="isAward13 == 'RECEIVED' ? 'disabled' : ''"
            >
              {{
                isAward13 == 'RECEIVED'
                  ? $t('task.txt39')
                  : isAward13 == 'WAITING_RECEIVE'
                  ? $t('task.txt38')
                  : $t('task.txt7')
              }}
            </div>
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { bus } from '@/utils/bus'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      statusList: [],

      count1: 0,
      isAward1: false,

      count2: 0,
      isAward2: false,

      count3: 0,
      isAward3: false,

      count4: 0,
      isAward4: false,

      count5: 0,
      isAward5: false,

      count6: 0,
      isAward6: false,

      count7: 0,
      isAward7: false,

      count8: 0,
      isAward8: false,

      count9: 0,
      isAward9: false,
      count10: 0,
      isAward10: false,
      count11: 0,
      isAward11: false,

      count12: 0,
      isAward12: false,

      count13: 0,
      isAward13: false,
      nowData: null,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  mounted() {
    this.getData()
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
  },
  methods: {
    ...mapActions({
      // userMission: 'user/userMission',
      award: 'user/award', // 领取奖励
      awardStatus: 'user/awardStatus', // 查看是否领取状态
    }),
    goShare() {
      if (this.isLogin()) {
        this.$router.push({
          path: '/notice',
          query: {
            active: 1,
          },
        })
      }
    },
    getData() {
      if (!this.userInfo || !this.userInfo.username) {
        return
      }
      this.awardStatus().then(res => {
        this.statusList = res.data || null
        this.isAward1 = this.isHasGet('SIGN_IN')
        this.isAward2 = this.isHasGet('JOIN_TG_GROUP')
        this.isAward3 = this.isHasGet('FACE_BOOK')
        this.isAward4 = this.isHasGet('TELEGRAM')
        this.isAward5 = this.isHasGet('TIKTOK')
        this.isAward6 = this.isHasGet('WHATS_APP')
        // this.isAward7 = this.isHasGet('SUB_TG_CHANNEL')
        this.isAward8 = this.isHasGet('SUNSHINE_RECHARGE')
        this.isAward9 = this.isHasGet('SUNSHINE_WITHDRAWAL')
        this.isAward10 = this.isHasGet('SUNSHINE_PROFIT')
        this.isAward11 = this.isHasGet('SHARE_MUL_GROUP')
        this.isAward12 = this.isHasGet('ZALO')
        this.isAward13 = this.isHasGet('YOUTUBE')
      })
    },
    isHasGet(type) {
      //是否获得
      if (!this.statusList || this.statusList.length == 0) return false
      let obj = this.statusList.find(d => d.activityType == type)
      if (obj) {
        if (type == 'SIGN_IN') {
          this.count1 = obj.receiveQuantity
        } else if (type == 'JOIN_TG_GROUP') {
          this.count2 = obj.receiveQuantity
        } else if (type == 'FACE_BOOK') {
          this.count3 = obj.receiveQuantity
          localStorage.removeItem('sun_shine_img1')
        } else if (type == 'TELEGRAM') {
          this.count4 = obj.receiveQuantity
          localStorage.removeItem('sun_shine_img6')
        } else if (type == 'TIKTOK') {
          this.count5 = obj.receiveQuantity
        } else if (type == 'SUNSHINE_RECHARGE') {
          this.count8 = obj.receiveQuantity
        } else if (type == 'SUNSHINE_WITHDRAWAL') {
          this.count9 = obj.receiveQuantity
        } else if (type == 'SUNSHINE_PROFIT') {
          this.count10 = obj.receiveQuantity
        } else if (type == 'SHARE_MUL_GROUP') {
          this.count11 = obj.receiveQuantity
        } else if (type == 'WHATS_APP') {
          this.count6 = obj.receiveQuantity
          localStorage.removeItem('sun_shine_img4')
          this.nowData = obj
        } else if (type == 'YOUTUBE') {
          this.count13 = obj.receiveQuantity
        }

        return obj.status
      }
    },
    onClick(type) {
      // if (this.isLogin()) {
      if (this.isAward1 != 'RECEIVED' && type == 'SIGN_IN') {
        this.paward('SIGN_IN')
      } else if (this.isAward2 != 'RECEIVED' && type == 'JOIN_TG_GROUP') {
        if (this.isAward2 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward3 != 'RECEIVED' && type == 'FACE_BOOK') {
        if (this.isAward3 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward4 != 'RECEIVED' && type == 'TELEGRAM') {
        //  else if (this.isAward4 == 'RECEIVED') {
        //   this.$router.push({
        //     path: '/notice',
        //     query: {
        //       active: 1,
        //     },
        //   })
        // }
        if (this.isAward4 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward5 != 'RECEIVED' && type == 'TIKTOK') {
        if (this.isAward5 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward6 != 'RECEIVED' && type == 'WHATS_APP') {
        if (this.isAward6 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/shareGroup',
            query: {
              title: 'share',
              type,
              nowData: this.nowData ? JSON.stringify(this.nowData) : '',
            },
          })
        }
      } else if (this.isAward8 != 'RECEIVED' && type == 'SUNSHINE_RECHARGE') {
        if (this.isAward8 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward9 != 'RECEIVED' && type == 'SUNSHINE_WITHDRAWAL') {
        if (this.isAward9 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward10 != 'RECEIVED' && type == 'SUNSHINE_PROFIT') {
        if (this.isAward10 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward11 != 'RECEIVED' && type == 'SHARE_MUL_GROUP') {
        if (this.isAward11 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/shareGroup',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward12 != 'RECEIVED' && type == 'ZALO') {
        if (this.isAward12 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      } else if (this.isAward13 != 'RECEIVED' && type == 'YOUTUBE') {
        if (this.isAward13 == 'WAITING_RECEIVE') {
          this.paward(type)
        } else {
          this.$router.push({
            path: '/upload',
            query: {
              title: 'share',
              type,
            },
          })
        }
      }
      // }
    },

    paward(type, finishCount = 1) {
      this.award({ activityType: type, finishCount }).then(res => {
        if (res.code == 0) {
          let receiveAmount = 0
          if (type == 'SIGN_IN') {
            receiveAmount = 1000
            this.count1 = 1
            this.isAward1 = 'RECEIVED'
          } else if (type == 'JOIN_TG_GROUP') {
            receiveAmount = 5000
            this.isAward2 = 'RECEIVED'
            localStorage.removeItem('sun_shine_img5')
          } else if (type == 'FACE_BOOK') {
            receiveAmount = 1000
            this.getData()
            localStorage.removeItem('sun_shine_img1')
          } else if (type == 'TELEGRAM') {
            receiveAmount = 1000
            this.getData()
            localStorage.removeItem('sun_shine_img6')
          } else if (type == 'TIKTOK') {
            receiveAmount = 10000
            this.getData()
            localStorage.removeItem('sun_shine_img7')
          } else if (type == 'WHATS_APP') {
            receiveAmount = 2000
            this.getData()
          } else if (type == 'SUNSHINE_RECHARGE') {
            receiveAmount = 1000
            this.getData()
            localStorage.removeItem('sun_shine_img10')
          } else if (type == 'SUNSHINE_WITHDRAWAL') {
            receiveAmount = 1000
            this.getData()
            localStorage.removeItem('sun_shine_img11')
          } else if (type == 'SUNSHINE_PROFIT') {
            receiveAmount = 1000
            this.getData()
            localStorage.removeItem('sun_shine_img12')
          } else if (type == 'SHARE_MUL_GROUP') {
            receiveAmount = 10000
            this.getData()
            // localStorage.removeItem('sun_shine_img13')
          } else if (type == 'ZALO') {
            receiveAmount = 2000
            this.getData()
          } else if (type == 'YOUTUBE') {
            receiveAmount = 3000
            localStorage.removeItem('sun_shine_img2')

            this.getData()
          }
          this.$toast({
            message: this.$utils.currencyType + receiveAmount,
            icon: require('@/assets/image/cons/logo.png'),
          })
        } else {
          this.errDialog(res.msg)
        }
      })
    },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
  },
}
</script>
<style lang="less" scoped>
.task {
  min-height: 100%;
  background: #fff;
  position: relative;

  .task-content {
    // padding: 130px 13px 20px 16px;
    // position: fixed;
    padding: 60px 16px 0 16px;
    position: relative;
    z-index: 2;
    .intive-box {
      background: #ffffff;
      box-shadow: 0px 8px 32px rgba(0, 63, 121, 0.25);
      border-radius: 16px;
      padding: 12px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      position: relative;
      &::after {
        content: '';
        width: 82px;
        height: 24px;
        background: url('./../../assets/image/home/hot.png') no-repeat;
        position: absolute;
        top: 0;
        right: 0;
        background-size: cover;
      }
      .intive-left {
        flex: 0 0 144px;
        width: 144px;
        img {
          width: 100%;
        }
      }
      .intive-right {
        margin-top: 10px;
        p {
          color: #000;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          &:nth-of-type(2) {
            margin-top: 6px;
            color: #fe7a15;
          }
        }
        .intive-btn {
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          color: #fff;
          background: linear-gradient(93.47deg, #5ebbff 2.86%, #0094ff 100%);
          box-shadow: 0px 4px 11px -3px rgba(0, 63, 121, 0.25);
          border-radius: 43px;
          width: 132px;
          height: 32px;
          line-height: 32px;
          margin: 14px auto 0 auto;
        }
      }
    }
    .daily-box {
      // background: #fffeff;
      // box-shadow: 0px 3px 32px 0px rgba(0, 0, 0, 0.19);
      // border-radius: 20px;
      // padding: 20px 13px;
      // position: relative;
      // .daily-title {
      //   font-size: 18px;
      //   color: #272a29;
      //   font-weight: 500;
      // }
    }
    .daily-title {
      margin-bottom: 27px;
      font-size: 18px;
      color: #0094f6;
      font-weight: 500;
    }
    .time-box {
      margin-top: 35px;
      .time-title {
        font-size: 18px;
        color: #272a29;
        font-weight: 500;
        margin-bottom: 30px;
      }
    }

    .task-info {
      display: flex;
      margin-bottom: 16px;
      &:last-of-type {
        margin-bottom: 0;
      }
      .task-info-icon {
        flex: 0 0 40px;
        width: 40px;
        margin-right: 8px;
        img {
          width: 40px;
        }
      }
      .task-info-txt-btn {
        padding-bottom: 18px;
        border-bottom: 1px solid #f6f3f7;
        display: flex;
        flex: 1;
        .txt-box {
          flex: 1;
          p {
            font-weight: 500;
            font-size: 16px;
            color: #000;
            line-height: 15px;
            &:nth-of-type(2) {
              font-weight: 500;
              font-size: 12px;
              margin: 6px 0;
            }
            &:nth-of-type(3) {
              color: #fda94f;
              font-size: 16px;
              font-weight: 500;
            }
          }
        }
        .task-info-btn {
          background: linear-gradient(93.47deg, #5ebbff 2.86%, #0094ff 100%);
          box-shadow: 0px 4px 11px -3px rgba(0, 63, 121, 0.25);
          border-radius: 14px;
          padding: 0 10px;
          height: 32px;

          color: #fffeff;
          text-align: center;
          line-height: 32px;
          margin-left: 10px;
          font-weight: 500;
          font-size: 16px;
          &.disabled {
            background: #cad4df;
            box-shadow: 0px 4px 11px -3px rgba(0, 63, 121, 0.25);
          }
        }
      }
    }
  }
}
</style>
