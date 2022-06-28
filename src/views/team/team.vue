<template>
  <modMain :title="$route.meta.title || ''" class="team-main">
    <div class="main team">
      <div class="content">
        <div class="top-box">
          <div class="top">
            <!-- 直接的邀请人数 -->
            <p>
              {{ $t('sa.txt40') }}:<span class="green">{{
                treeData && treeData.childrenList
                  ? treeData.childrenList.length
                  : 0
              }}</span>
            </p>
            <!-- <p>
              {{ $t('sa.txt41') }}:<span class="green">{{
                childrenCount
              }}</span>
            </p> -->
          </div>
          <div class="bot col">
            <p>
              <span class="green">{{
                $utils.getPstr(treeData.totalIncome || 0)
              }}</span
              >{{ $t('sa.txt39') }}
              <!-- 团队收益 -->
            </p>
            <p>
              <span class="green">{{
                $utils.getPstr(treeData.totalIncomeContribution || 0)
              }}</span
              >{{ $t('sa.txt43') }}
              <!-- 总佣金 -->
            </p>
          </div>
        </div>

        <div class="level-wrap">
          <div class="level level1">
            <div class="level-box" @click="showPerson(treeData)">
              <img
                v-if="treeData && treeData.headImg"
                :src="imgBaseUrl + treeData.headImg"
                alt=""
              />
              <img
                v-else
                src="@/assets/image/xapp/icon_home_default.png"
                alt=""
              />
              <div class="info">
                <p class="name">{{ treeData.mobilePhone }}</p>
                <p class="sy">
                  Rp
                  {{
                    treeData.totalContribution
                      ? $utils.getPstr(treeData.totalContribution)
                      : 0
                  }}
                </p>
              </div>
              <i class="line"></i>
            </div>
            <!-- <div class="btn-inivator" @click="toShare">
              <img src="@/assets/image/xapp/btn_inviter.png" alt="" />
              {{ $t('sa.txt11') }}
            </div> -->
          </div>
          <div class="level level2">
            <div class="subs">
              <h4>&nbsp;</h4>
              <p @click="toMore(2)">
                {{ $t('user.more') }} <i class="right-arrow"></i>
              </p>
            </div>
            <div class="levels">
              <template v-if="levelSecondData.length > 0">
                <template v-for="(item, idx) in levelSecondData">
                  <div class="level-box" @click="showPerson(item)">
                    <i class="line top h " :class="{ right: idx == 1 }"></i>
                    <img
                      v-if="item.headImg"
                      :src="imgBaseUrl + item.headImg"
                      alt=""
                    />
                    <img
                      v-else
                      src="@/assets/image/xapp/icon_home_default.png"
                      alt=""
                    />
                    <div class="info">
                      <p class="name">{{ item.mobilePhone | strAbb }}</p>
                      <p class="sy">
                        Rp
                        {{
                          item.totalContribution
                            ? $utils.getPstr(item.totalContribution)
                            : 0
                        }}
                      </p>
                    </div>
                    <!-- <i class="line"></i> -->
                  </div>
                  <div
                    v-if="levelSecondData.length == 1"
                    class="level-box"
                    @click="invitation()"
                  >
                    <i class="line top h right"></i>
                    <img src="@/assets/image/xapp/default-av.png" alt="" />
                    <div class="info">
                      <p class="name">{{ $t('sa.txt11') }}</p>
                    </div>
                    <!-- <i class="line"></i> -->
                  </div>
                </template>
              </template>
              <template v-else>
                <div
                  class="level-box"
                  v-for="(d, idx) in 2"
                  @click="invitation()"
                >
                  <i class="line top h" :class="{ right: idx == 1 }"></i>
                  <img src="@/assets/image/xapp/default-av.png" alt="" />
                  <div class="info">
                    <p class="name">{{ $t('sa.txt11') }}</p>
                  </div>
                  <!-- <i class="line"></i> -->
                </div>
              </template>
            </div>
            <!-- <div class="subs">
              <h4>{{ $t('sa.txt41') }}</h4>
              <p @click="toMore(3)">
                {{ $t('user.more') }} <i class="right-arrow"></i>
              </p>
            </div> -->
            <!-- <div class="levels level3">
              <template v-if="levelSecondData.length == 0">
                <div
                  class="level-box"
                  v-for="(d, idx) in 4"
                  @click="invitation()"
                >
                  <i class="line top" :class="{ h: idx % 2 == 0 }"></i>
                  <img src="@/assets/image/xapp/default-av.png" alt="" />
                  <div class="info">
                    <p class="name">{{ $t('sa.txt11') }}</p>
                  </div>
                </div>
              </template>
              <template v-else>
                <template v-if="levelSecondData.length == 1">
                  <template v-for="(three, index) in levelSecondData">
                    <template v-if="three.threeNodes.length > 0">
                      <template v-for="(item, idx) in getThreeNodeData(three)">
                        <div
                          class="level-box"
                          v-if="idx <= 1"
                          @click="showPerson(item)"
                        >
                          <i class="line top " :class="{ h: idx == 0 }"></i>
                          <img
                            v-if="item.headImg"
                            :src="imgBaseUrl + item.headImg"
                            alt=""
                          />
                          <img
                            v-else
                            src="@/assets/image/icon_home_default avatar.png"
                            alt=""
                          />
                          <div class="info">
                            <p class="name">{{ item.mobilePhone | strAbb }}</p>
                            <p class="sy">
                              {{
                                (item.totalContribution * 0.15).toFixed(2) || 0
                              }}Rp
                            </p>
                          </div>
                        </div>
                      </template>
                      <template v-if="three.threeNodes.length == 1">
                        <div class="level-box" @click="invitation()">
                          <i class="line top right"></i>
                          <img
                            src="@/assets/image/xapp/default-av.png"
                            alt=""
                          />
                          <div class="info">
                            <p class="name">{{ $t('sa.txt11') }}</p>
                          </div>
                        </div>
                      </template>
                    </template>
                    <template v-else>
                      <div
                        class="level-box"
                        v-for="(item, idx) in 2"
                        @click="invitation()"
                      >
                        <i class="line top" :class="{ h: idx % 2 == 0 }"></i>
                        <img src="@/assets/image/xapp/default-av.png" alt="" />
                        <div class="info">
                          <p class="name">{{ $t('sa.txt11') }}</p>
                        </div>
                      </div>
                    </template>
                  </template>
                  <div
                    class="level-box"
                    v-for="(item, idx) in 2"
                    @click="invitation()"
                  >
                    <i class="line top" :class="{ h: idx % 2 == 0 }"></i>
                    <img src="@/assets/image/xapp/default-av.png" alt="" />
                    <div class="info">
                      <p class="name">{{ $t('sa.txt11') }}</p>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <template v-for="(three, index) in levelSecondData">
                    <template v-if="three.threeNodes.length > 0">
                      <template v-for="(item, idx) in getThreeNodeData(three)">
                        <div
                          class="level-box"
                          v-if="idx <= 1"
                          @click="showPerson(item)"
                        >
                          <i class="line top " :class="{ h: idx == 0 }"></i>
                          <img
                            v-if="item.headImg"
                            :src="imgBaseUrl + item.headImg"
                            alt=""
                          />
                          <img
                            v-else
                            src="@/assets/image/icon_home_default avatar.png"
                            alt=""
                          />
                          <div class="info">
                            <p class="name">{{ item.mobilePhone | strAbb }}</p>
                            <p class="sy">
                              {{
                                (item.totalContribution * 0.15).toFixed(2) || 0
                              }}Rp
                            </p>
                          </div>
                        </div>
                      </template>
                      <template v-if="three.threeNodes.length == 1">
                        <div class="level-box" @click="invitation()">
                          <i class="line top right"></i>
                          <img
                            src="@/assets/image/xapp/default-av.png"
                            alt=""
                          />
                          <div class="info">
                            <p class="name">{{ $t('sa.txt11') }}</p>
                          </div>
                        </div>
                      </template>
                    </template>
                    <template v-else>
                      <div
                        class="level-box"
                        v-for="(item, idx) in 2"
                        @click="invitation()"
                      >
                        <i class="line top" :class="{ h: idx % 2 == 0 }"></i>
                        <img src="@/assets/image/xapp/default-av.png" alt="" />
                        <div class="info">
                          <p class="name">{{ $t('sa.txt11') }}</p>
                        </div>
                      </div>
                    </template>
                  </template>
                </template>
              </template>
              <p class="level-tip">{{ $t('sa.txt46') }}</p>
            </div> -->
          </div>
        </div>

        <p class="level-tip">{{ $t('sa.txt45') }}</p>
        <div class="btn-inivator" @click="toShare">
          <img src="@/assets/image/xapp/btn_inviter.png" alt="" />
          {{ $t('sa.txt11') }}
        </div>
        <div class="fisher">
          <div class="animatedTop" ref="broadDom">
            <div class="list-box " v-for="item in broadData">
              <!-- <img src="@/assets/image/xapp/avator.png" alt=""> -->
              <!-- <img :src="item.src" alt=""> -->
              <div class="info">
                <p>
                  <span>{{ item.name }}</span
                  ><span class="time">A minute ago</span>
                </p>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modMain>
</template>
<script>
import { bus } from '@/utils/bus'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      treeData: {
        totalContribution: 0,
        yesterdayContribution: 0,
        mobilePhone: '',
      },
      childrenCount: 0,
      secondNodes: [],
      animatedTop: false,
      scrollTimer: null, // 存款消息滚动定时器
      broadData: [],
    }
  },
  created() {
    this.broadData = this.getbroadData()
    if (this.userInfo && this.userInfo.username) {
      this.getData()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.showScroll()
    })
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
    levelSecondData() {
      if (this.secondNodes.length > 2) {
        return this.secondNodes.slice(0, 2)
      } else {
        return this.secondNodes
      }
    },
  },
  methods: {
    ...mapActions({
      queryUserTreeNode: 'user/queryUserTreeNode',
    }),
    ...mapMutations({
      setMoreData: 'user/setMoreData',
    }),
    // 获取三级
    getThreeNodeData(item) {
      if (item.threeNodes.length > 0) {
        let arr = item.threeNodes.slice(0, 2)
        return arr
      }
      return item.threeNodes || []
    },
    getData() {
      let params = {
        queryUserId: this.userInfo.id,
        isDirect: false,
      }
      this.queryUserTreeNode({}).then(res => {
        if (res.code == 0) {
          this.treeData = res.data[0]
          if (this.treeData) {
            this.secondNodes = this.treeData.childrenList || []
            let total = 0
            this.secondNodes.forEach(item => {
              total =
                Number(total) + Number((item.totalContribution || 0) * 0.1)

              // console.log('total=', total)
              this.childrenCount += item.childrenList
                ? item.childrenList.length
                : 0
              // this.secondNodes[symbol] = item.childrenList
              item.threeNodes = item.childrenList || []
              // item.threeNodes.forEach(d => {
              //   total += d.totalContribution * 0.03
              // })
            })
            this.treeData.totalIncomeContribution = total ? total : 0
            this.treeData.totalIncome =
              (this.treeData.totalContribution || 0) + Number(total)
          }
        }
      })
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
          break
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
          break
        default:
          return 0
          break
      }
    },
    getbroadData(n = 20) {
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push(this.buildObj())
      }
      return arr
    },
    buildObj() {
      let random = () => {
        let demo = ''
        //这里取的是4位，所以for循环4次
        for (let i = 0; i < 9; i++) {
          //设置随机数范围,这设置为0 ~ 9
          let a = Math.floor(Math.random() * 9)
          //拼接字符串
          demo += a
        }
        return '****' + demo.substring(7, 9)
      }
      let n = this.randomNum(5, 50) // 1-50随机数
      let pre = [12, 14, 15, 16, 21, 23, 25, 31, 43, 85]
      let idx = this.randomNum(0, 9)
      // 12（CTBC电话公司）、14（巴西电信）、15（TELEFÔNICA）、16（CETERP）、21（ENBRATEL）、23（INTELIG）、25（GVT）、31（TELEMAR）、43（SERCOMTEL）、85（VÉSPER）
      let price = (n * 500).toFixed(0)
      let name = pre[idx] + random()
      let lang = localStorage.getItem('locale') || 'en_US'
      // 用户88***888   邀请了6个好友,领取了3R$
      // 用户88***888   下级收益提成R$xx
      let idx2 = this.randomNum(0, 1)
      let price2 = this.randomNum(5, 100).toFixed(0) // 1-50随机数
      let _title = ''
      if (idx2 == 0) {
        _title = `${this.$t('sa.txt11')} ${n} ${this.$t('sa.txt47')} Rp${price}`
      } else {
        _title = `${this.$t('sa.txt48')} Rp${price2}`
      }
      let obj = {
        name: this.$t('sa.txt477') + name,
        time: lang == 'en_US' ? 'A minute ago' : 'satu menit yang lalu',
        text: _title,
        // src: require('@/assets/image/xapp/tx' + idx + '.jpg')
      }
      return obj
    },
    showPerson(data = {}) {
      bus.$emit('showPerson', data)
    },
    toMore(level) {
      let data = []
      if (level == 2) {
        data = this.secondNodes
      } else {
        let arr = []
        this.secondNodes.forEach(d => {
          arr.push(...d.threeNodes)
        })
        data = arr
      }
      this.setMoreData(data)
      this.$router.push({
        path: '/more',
      })
    },
    invitation() {
      this.toShare()
    },
    //滚动存款消息
    showScroll() {
      this.animatedTop = true
      let vm = this
      let x = 0,
        dom = this.$refs.broadDom
      let liHeight = dom.children[0].offsetHeight
      let liLen = vm.broadData.length

      let fun = () => {
        dom.style.bottom = -x + 'px'
        x++
        if (x % (liHeight * 4) == 0) {
          this.broadData = [...this.getbroadData(4), ...this.broadData]
        }
        // this.broadData = [this.buildObj(), ...this.broadData]
        // if (x % (liHeight * liLen) == 0) {
        //   this.broadData = [...this.broadData, ...this.broadData];
        // }
      }
      this.scrollTimer = setInterval(fun, 100)
    },
  },
  beforeDestroy() {
    this.scrollTimer && clearInterval(this.scrollTimer)
  },
}
</script>
<style>
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
