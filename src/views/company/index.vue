<template>
  <modMain title="About SunPower">
    <div class="main company-wrap">
      <!-- <div class="top-new">
      <i class="icon-lab"></i>
      <van-swipe class="company-swiper" :autoplay="3000" indicator-color="white" vertical :show-indicators="false">
        <template v-for="item in news">
          <van-swipe-item>
            <a href="javascript:void(0)">{{item.title}}</a>
          </van-swipe-item>
        </template>
      </van-swipe>
    </div> -->
      <!-- <div class="news-main" v-show="showNews">
      <template v-for="(item,idx) in news">
        <p>{{idx+1}}.{{item.title}}</p>
      </template>
    </div> -->
      <!-- <div class="gw">
      <div class="gw-box">
        <p v-html="$t('sa.txt92')">
        </p>
      </div>
      <div class="gw-box">
        <p v-html="$t('sa.txt93')">
        </p>
      </div>
      <div class="gw-box">
        <p v-html="$t('sa.txt94')">
        </p>
      </div>
    </div> -->
      <div class="silder silder1">
        <!-- {{ $t('sa.txt95') }} -->
        <div class="box" style="margin-top:20px">
          <div class="top">
            <img src="@/assets/image/sun/logobg.png" alt="" />
          </div>
          <div class="bot">
            <!-- <h2>{{ $t('sa.txt96') }}</h2> -->
            <!-- <p>{{ $t('sa.txt97') }}</p> -->
            <p class="title">Profil Perusahaan</p>
            <p>
              SunPower Corporation adalah perusahaan publik yang berkantor pusat
              di San Jose, California. Perusahaan ini menjual, memasang, dan
              membiayai produk surya seperti panel, baterai, perangkat keras
              perakitan, dan perangkat lunak pemantauan. Perusahaan ini
              didirikan pada tahun 1985 oleh profesor teknik elektro Stanford
              Richard Swanson. Cypress Semiconductor membeli saham mayoritas di
              perusahaan pada tahun 2002. SunPower tumbuh pesat dan go public
              pada tahun 2005. Pada tahun 2007, SunPower mengakuisisi
              PowerLight, menggandakan ukuran perusahaan. Total membeli saham
              pengendali di SunPower pada 2011 seharga $1,37 miliar. Pada tahun
              2019, SunPower mengumumkan pemisahan operasi manufakturnya menjadi
              perusahaan bernama Maxeon Solar Technologies, Ltd.<br />
            </p>
          </div>
        </div>

        <div class="box" style="margin-top:20px">
          <div class="top">
            <img src="@/assets/image/sun/about8.png" alt="" />
          </div>
          <div class="bot">
            <p>
              Teknologi fotovoltaik SunPower dirancang, diproduksi dan
              dipasarkan oleh Maxeon Solar Technologies, pemimpin global dalam
              inovasi energi surya. Dibangun di atas fondasi 35 tahun solusi
              energi surya revolusioner, Maxeon dipisahkan dari US SunPower
              Corporation. Kami menjual produk SunPower * di lebih dari 100
              negara melalui jaringan penjualan global lebih dari 1.100 mitra
              penjualan dan pemasangan di seluruh dunia.
            </p>
          </div>
        </div>
        <div class="box" style="margin-top:20px">
          <div class="top">
            <img src="@/assets/image/sun/about9.png" alt="" />
          </div>
          <div class="bot">
            <p class="desc">
              Company name on VAT Registration: <br />
              SUNPOWER CORPORATION UK LIMITED<br />
              VAT number: GB 911925727<br />
              VAT ID: 911-925-727<br />
              Jurisdiction of VAT number: United Kindom (UK)<br />
              Issuing Authority of VAT number: HMRC (HM Revenue & Customs)
              <br />
              VAT status: Valid VAT Number <br />
              Address on VAT Registration: SIXTH AND SEVENTH FLOOR,THE<br />
              170 MIDSUMMER BOULEVARD
              <br />
              CENTRAL MILTON KEYNES
              <br />
              MILTON KEYNES <br />
              MK9 1FE <br />
              Period when VAT number issued: Issued before November 2009
              <br />
              Last checked by us: 2021-12-13<br />
              SUNPOWER CORPORATION UK's VAT Number is GB911925727
            </p>
          </div>
        </div>
        <div class="box" style="margin-top:20px">
          <div class="top">
            <img src="@/assets/image/sun/about10.jpg" alt="" />
          </div>
          <div class="bot">
            <p class="desc">
              SUNSOL SP. Z O.O.ul. Ludwik Mierosławskiego 2180-430 Gdańsk <br />
              NIP: 957-109-07-68 <br />
              REGON:36629174900000 <br />
              KRS:0000657340 <br />
              VII Departemen Pendaftaran Pengadilan Nasional di Gdańsk<br />
              Modal saham: PLN 250.000
            </p>
          </div>
        </div>
        <!-- <div class="box">
        <div class="top">
          <img src="@/assets/image/xapp/rec3.png" alt="" />
        </div>
        <div class="bot">
          <h2>{{ $t('sa.txt98') }}</h2>
          <p>{{ $t('sa.txt99') }}</p>
        </div>
      </div> -->
      </div>
    </div>
  </modMain>
</template>
<script>
export default {
  data() {
    return {
      showNews: false,
      news: [
        {
          path: '/new1',
          title: 'Afternoon review: the index opened high and went low in...',
        },
        {
          path: '/new2',
          title: 'China Daily News market broke out 19 shares, net profit...',
        },
        {
          path: '/new3',
          title: 'Boiling! A news from Energy Bureau, BIPV goes against the...',
        },
        {
          path: '/new4',
          title:
            'Full screen limit! The state enlarges and recruits the photov...',
        },
      ],
    }
  },
}
</script>
