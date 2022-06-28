<template>
  <div class="home">
    <div class="home-top">
      <div class="downarea" @click="downLoad" v-if="!isApp">
        <div class="downarea-logo">
          <img src="@/assets/image/sun/logo.png" alt="" />
        </div>
        <div class="downarea-name">sunpower.link</div>
        <div class="downarea-btn">
          Download
        </div>
      </div>
      <div class="banner">
        <img src="@/assets/image/sun/banner.jpg" alt="" />
      </div>
      <div class="intive-about">
        <router-link tag="div" to="/notice">
          <div class="intive-about-icon">
            <img src="@/assets/image/sun/icon1.png" alt="" />
          </div>
          <div class="intive-about-text">
            {{ $t('task.txt107') }}
          </div>
        </router-link>
        <router-link tag="div" to="/about">
          <div class="intive-about-icon">
            <img src="@/assets/image/sun/icon2.png" alt="" />
          </div>
          <div class="intive-about-text">
            {{ $t('my.txt10') }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="home-video-desc">
      <div class="home-video">
        <p>NIP:957-109-07-68</p>
        <video src="@/assets/image/sun/video.mp4" controls></video>
      </div>
      <div class="home-desc">
        <div class="home-desc-box">
          <h5>mereka sama</h5>
          <p>
            Keputusan untuk beralih ke tenaga surya sederhana untuk Anda.
            Memilih panel terbaik bisa tampak membingungkan.<br /><br />Tidak
            semua panel surya diciptakan sama. Selama hampir 35 tahun, kami
            telah merancang dan membuat sel surya tercanggih.<br /><br />Kami
            percaya tenaga surya dapat menginspirasi mimpi dan teknologi kami
            akan menginspirasi kepercayaan Anda. Kami menuntut lebih dari diri
            kami sendiri karena pelanggan kami berhak mendapatkan semua manfaat
            dari penggunaan energi surya yang lebih baik.
          </p>
          <img src="@/assets/image/sun/about1.png" alt="" />
        </div>
        <div class="home-desc-box">
          <h5>menetapkan batas-batas baru</h5>
          <p>
            Kami percaya catatan belum dibuat.<br /><br />Perintis tenaga surya
            yang paling giat memilih teknologi SunPower® untuk memecahkan rekor
            dunia untuk perjalanan darat, laut dan udara.<br /><br />Teknologi
            surya inovatif yang sama persis tersedia untuk Anda - di rumah,
            bisnis, atau pembangkit listrik Anda.
          </p>
          <img src="@/assets/image/sun/about2.png" alt="" />
        </div>
        <div class="home-desc-box">
          <h5>Para ahli mempercayai kami</h5>
          <p>
            Pelajari mengapa teknologi sel surya SunPower disukai oleh
            perusahaan terbesar di dunia dan pakar top.<br /><br />Kami tidak
            dipercaya karena teknologi fotovoltaik hanyalah salah satu kegiatan
            kami. Itu saja yang kami lakukan. Kami bangga dengan masa lalu kami.
            Sejak 1985, kami telah memasang lebih dari 35 juta panel surya
            SunPower. Ini seperti melepas knalpot dari sekitar 17 juta mobil.<br /><br />Kami
            juga bersemangat tentang visi kami untuk masa depan. Teknologi
            SunPower telah mendapatkan 900 paten dan membelanjakan lebih banyak
            untuk R&D daripada perusahaan lain di industri ini.
          </p>
          <img src="@/assets/image/sun/about3.png" alt="" />
        </div>
        <div class="home-desc-box">
          <h5>Berikan dampak positif bagi dunia</h5>
          <p>
            Setiap hari, pionir dan inovator di seluruh dunia mempercayai
            keandalan dan kinerja terdepan dari teknologi SunPower untuk membuat
            dunia menjadi tempat yang lebih baik. Dalam brosur informasi tentang
            teknologi kami, kami menampilkan banyak organisasi dan aplikasi
            inovatif yang membantu dunia bergerak lebih cepat dan orang-orang
            melangkah lebih jauh dari yang dapat mereka bayangkan.
          </p>
          <img src="@/assets/image/sun/about4.png" alt="" />
        </div>
        <div class="home-desc-box">
          <h5>Produk unik</h5>
          <p>
            Percaya diri dan simpan. Seperti yang kita semua tahu, teknologi
            kita telah melampaui stratosfer. Namun di Bumi, teknologi SunPower
            yang sama dapat digunakan untuk membantu mengurangi tagihan listrik
            untuk rumah dan bisnis.<br /><br />
            Spore dachy bez sporego budżetu? Ograniczone miejsce i duże
            zapotrzebowanie na energię? SunPower ma na to sposób.<br /><br />Nasza
            obszerna oferta paneli oferuje imponującą gamę niezawodnych
            rozwiązań zaprojektowanych pod kątem optymalnej wydajności,
            maksymalnych oszczędności i długoterminowej trwałości. Ponieważ
            SunPower jest producentem Tier 11 z niemal 35 latami doświadczenia w
            branży, dokonujesz najlepszego wyboru na najbliższe dziesiątki lat.
          </p>
          <img src="@/assets/image/sun/about5.png" alt="" />
        </div>
        <div class="home-desc-box">
          <h5>Surya Tepercaya</h5>
          <p>
            Czy wybrana przez Ciebie firma z branży fotowoltaicznej utrzyma
            działalność dłużej niż okres gwarancji, jaką oferuje? Od 35 lat
            technologia SunPower przekracza granice innowacyjności na polu
            energii słonecznej, zapewniając rekordową wydajność i niezrównaną
            niezawodność, która wspiera pozytywną zmianę całego świata.
          </p>
          <img src="@/assets/image/sun/about6.png" alt="" />
        </div>
        <div class="home-desc-box">
          <h5>Kekuatan untuk masa depan yang lebih baik</h5>
          <p>
            Benar, semua sel fotovoltaik menghasilkan energi bersih, tetapi
            teknologi kami tidak berhenti di situ. Kami meningkatkan standar
            untuk keberlanjutan dan menjadi kekuatan regeneratif bagi lingkungan
            dan masyarakat. Teknologi SunPower - dari Cradle hingga Cradle
            Certified™ SunPower Maxeon DC panel hingga menjadi satu-satunya
            produsen panel surya yang disetujui melalui program Declare Label -
            memimpin industri dalam perlindungan lingkungan.<br /><br />
            Cradle to Cradle Certified™ adalah merek sertifikasi yang
            dilisensikan oleh Cradle to Cradle Products Innovation Institute.
            Cradle to Cradle Certified™ adalah program sertifikasi multi-segi
            yang mengevaluasi produk dan bahan untuk kesehatan manusia dan
            keselamatan lingkungan, desain tahan masa depan dan produksi
            berkelanjutan.
          </p>
          <img src="@/assets/image/sun/about7.png" alt="" />
        </div>
      </div>
    </div>
    <van-popup v-model="showNotic" class="notic-pop">
      <div class="notic-info">
        <div class="title">A harus melihat untuk pengguna baru</div>
        <p class="desc">
          <!-- {{ $t('index.txt45') }} -->
          <!-- <span> {{ $utils.currencyType }}200000 </span> +
          <span> {{ $utils.currencyType }}60000</span> -->
        </p>
        <p>{{ $t('index.txt46[0]') }}</p>
        <p>{{ $t('index.txt46[1]') }}</p>
        <p>{{ $t('index.txt46[2]') }}</p>
      </div>
      <div class="btn" @click="confirme">{{ $t('dialog.txt1') }}</div>
    </van-popup>
  </div>

  <!-- <div class="home">
    <top-bg :tit="$t('index.txt1')"> </top-bg>
    <div class="downapp" @click="downLoad" v-if="!isApp">
      Download App
    </div>
    <div class="home-container">
      <banner></banner>
      <notice></notice>
      <whitdraw-box v-if="userAccount"></whitdraw-box>
      <div class="home-about">
        <div class="about-tit">{{ $t('index.txt2') }}</div>
        <div class="home-about-container">
          <router-link tag="div" to="/about" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon1.png" alt="" />
            </div>
            <p>{{ $t('index.txt2') }}</p>
          </router-link>
          <router-link tag="div" to="/contract" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon2.png" alt="" />
            </div>
            <p>{{ $t('index.txt3') }}</p>
          </router-link>
          <router-link tag="div" to="/gift" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon3.png" alt="" />
            </div>
            <p>{{ $t('index.txt4') }}</p>
          </router-link>
          <router-link
            tag="div"
            :to="{
              path: '/notice',
              query: {
                active: 1,
              },
            }"
            class="home-about-info"
          >
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon4.png" alt="" />
            </div>
            <p>{{ $t('index.txt6') }}</p>
          </router-link>
          <div @click="toService('tggroup')" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon4.png" alt="" />
            </div>
            <p>Tham gia nhóm</p>
          </div>
          <div @click="toService('whats')" class="home-about-info">
            <div class="about-info-icon">
              <img src="@/assets/image/cons/h-about-icon6.png" alt="" />
            </div>
            <p>{{ $t('index.txt7') }}</p>
          </div>
        </div>
      </div>
      <div class="otc-merchant">
        <div class="merchant-tit">
          <p>{{ $t('index.txt8') }}</p>
          <van-tag round type="primary" size="large">{{
            $t('index.txt9')
          }}</van-tag>
        </div>

        <div class="merchant-container">
          <template v-if="redItem.length > 0">
            <div
              class="asset-info"
              v-for="(item, index) in redItem"
              :key="index"
            >
              <div class="asset-img">
                <van-image
                  width="100%"
                  lazy-load
                  :src="imgBaseUrl + item.imgUrl"
                />
              </div>
              <div class="asset-bot">
                <div class="asset-name">
                  <span>
                    {{ item.name }}
                  </span>
                  <span>{{ $t('product.txt14') }}</span>
                </div>
                <div class="asset-params">
                  <div class="asset-params-left">
                    <p>{{ $t('product.txt6') }}</p>
                    <p>
                      {{ $utils.currencyType }}
                      {{ $utils.getkStr(item.actualPrice * item.returnRate) }}
                    </p>
                  </div>
                  <div class="asset-params-center">
                    <p>{{ $t('product.txt16') }}</p>
                    <p>{{ item.description }}</p>
                  </div>
                  <div class="asset-params-right">
                    <p>{{ $t('product.txt17') }}</p>
                    <p>
                      {{ $utils.currencyType
                      }}{{ $utils.getkStr(item.actualPrice) }}
                    </p>
                  </div>
                </div>
                <div class="asset-time">
                  <p>{{ $t('product.txt7') }}:{{ item.cycle }}</p>
                  <p>{{ $t('product.txt20') }}:{{ $t('product.txt21') }}</p>
                </div>
                <div class="asset-rate">
                  <p>{{ $t('product.txt22') }}</p>
                  <van-progress
                    :pivot-text="(item.returnRate * 100).toFixed(1) + '%'"
                    :percentage="(item.returnRate * 100).toFixed(1)"
                  />
                </div>
                <div class="asset-desc">{{ $t('product.txt23') }}</div>
                <base-btn
                  :btnTitle="$t('product.txt24')"
                  :disabled="false"
                  @btnClick="showBuy(item)"
                ></base-btn>
              </div>
            </div>
          </template>
          <van-skeleton title :row="6" v-else />
        </div>
      </div>

      <product></product>
      <operate></operate>
    </div>

  
  </div> -->
</template>
<script>
import product from './components/product.vue'
import operate from './components/operate.vue'
import notice from './components/notice.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex'
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
  components: {
    product,
    operate,
    notice,
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      userAccount: 'user/userAccount',
    }),
  },

  data() {
    return {
      level: ['1', '2', '3', '4', '5'],

      buyLoading: false,
      showNotic: true,
      parame: {
        page: 1,
        size: 10,
      },
      orderData: [],
      redItem: [],
      isApp: '',
    }
  },
  mounted() {
    // this.getOrderData()
    // this.showAward()
    this.isApp = sessionStorage.getItem('appId')
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.getQueryUser()
  //   })
  // },
  methods: {
    ...mapActions({
      otcProduct: 'otcProduct',
    }),
    // async getQueryUser() {
    //   if (this.userInfo && this.userInfo.username) {
    //     await this.queryAccountList()
    //   }
    // },
    confirme() {},
    merchant() {
      this.errDialog('Not yet open')
    },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    showBuy(item) {
      this.buyLoading = true
      let obj = Object.assign({}, item)
      obj.isBuy = false
      if (this.isLogin()) {
        this.$router.push({
          path: '/investimento',
          query: {
            data: JSON.stringify(obj),
          },
        })
      }
      this.buyLoading = false
    },
    getOrderData() {
      this.otcProduct(this.parame).then(res => {
        if (res.code == 0) {
          let { records } = res.data
          // this.redItem = records.find(d => d.originalPrice == 100000)
          this.orderData = res.data.records
          this.redItem.push(this.orderData.find(d => d.actualPrice == 6000000))
          this.redItem.push(this.orderData.find(d => d.actualPrice == 8000000))
        } else {
          this.errDialog(res.msg)
        }
      })
    },
    confirme() {
      this.showNotic = false
    },
    showAward() {
      if (this.$route.path == '/home' && !sessionStorage.getItem('_t_notic')) {
        this.showNotic = true
        sessionStorage.setItem('_t_notic', 1)
      }
    },
    downLoad() {
      this.$utils.downApp()
    },
  },
}
</script>
<style lang="less" scoped>
.home {
  .home-top {
    background: #fff;
    padding: 10px;

    .downarea {
      display: flex;
      align-items: center;
      background: #fafafa;
      padding: 6px 0;
      border-radius: 4px;
      .downarea-logo {
        flex: 0 0 23px;
        width: 23px;
        margin-left: 10px;
        img {
          width: 100%;
        }
      }
      .downarea-name {
        color: #00a961;
        font-size: 12px;
        margin-left: 6px;
      }
      .downarea-btn {
        margin-left: auto;
        background: linear-gradient(180deg, #76c9fd, #39acf8);
        color: #fff;
        font-size: 12px;
        height: 28px;
        line-height: 28px;
        padding: 0 20px;
        border-radius: 4px;
        margin-right: 10px;
      }
    }
    .banner {
      margin-top: 10px;
      border-radius: 8px;
      overflow: hidden;
    }
    .intive-about {
      margin-top: 10px;
      display: flex;
      align-items: center;
      & > div {
        flex: 1;
        display: flex;
        align-items: center;
        background: #e5f3fe;
        color: #313131;
        font-size: 14px;
        padding: 10px;
        border-radius: 4px;
        justify-content: center;
        .intive-about-icon {
          flex: 0 0 40px;
          width: 40px;
          img {
            width: 100%;
          }
        }
        .intive-about-text {
          margin-left: 8px;
        }
        &:nth-of-type(1) {
          margin-right: 5px;
        }
        &:nth-of-type(2) {
          margin-left: 5px;
          background: #eceeff;
        }
      }
    }
  }
  .home-video-desc {
    padding: 20px 10px 10px 10px;
    background: #fff;
    .home-video {
      p {
        font-weight: 500;
        font-size: 14px;
        color: #1989fa;
        margin-bottom: 8px;
      }
      video {
        width: 100%;
      }
    }
    .home-desc {
      margin-top: 20px;
      .home-desc-box {
        h5 {
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
          font-size: 18px;
          margin-top: 30px;
        }
        p {
          color: #313131;
          font-size: 14px;
          line-height: 18px;
        }
        img {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
