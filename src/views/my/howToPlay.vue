<template>
  <modMain :title="$t('faq.txt1')" class="howTo noPadding">
    <div class="how-top"></div>
    <div class="how-bot">
      <div class="faq-main">
        <div class="faq-info" v-for="(item, index) in list" :key="index">
          <p>
            <span>Q</span>
            <span>{{ item.ques }}</span>
          </p>
          <p>
            <span>A</span>
            <span>{{ item.answer }}</span>
          </p>
        </div>
      </div>
    </div>
  </modMain>
</template>
<script>
// import webViewMixins from '@/mixins/webview.js'
export default {
  // mixins: [webViewMixins],
  components: {},
  data() {
    return {
      list: [
        {
          ques:
            '1: Pembiayaan bersama pertanian tenaga surya - cara untuk bisnis yang menguntungkan?',
          answer:
            'Selama beberapa dekade, telah ada pembicaraan tentang perlunya mengubah cara kita menggunakan energi di hampir setiap bidang kehidupan dan mematahkan pola produksi dan generasi bersihnya. Menurut data Kementerian Iklim, Indonesia akan berusaha untuk mencapai bagian 23% dari sumber energi terbarukan (RES) dalam produksi energi pada tahun 2030. Salah satu cara untuk mendapatkan energi berkelanjutan adalah dengan pembangkit listrik tenaga surya.',
        },
        {
          ques: '2:Apa yang diperoleh energi dari fotovoltaik?',
          answer:
            'Energi surya fotovoltaik adalah energi terbarukan, yang dihasilkan dari radiasi matahari dan diproduksi langsung oleh panel surya yang menangkap cahaya di siang hari dan mengubahnya menjadi listrik. Produksinya dilakukan di peternakan fotovoltaik besar atau di instalasi mikro dan mini yang dipasang oleh pelanggan individu, misalnya di atap rumah.',
        },
        {
          ques: '3: Apa itu peternakan surya?',
          answer:
            'Peternakan fotovoltaik adalah instalasi yang dirancang untuk menghasilkan energi matahari dalam skala besar, paling sering di tanah (lebih jarang di air), yang terdiri dari sejumlah besar panel surya yang saling berhubungan. Agar berfungsi dengan baik, diperlukan untuk menginstal i.a. beberapa inverter, ruang kontrol terpusat dan transformator tegangan tinggi.',
        },
        {
          ques: '4: Bagaimana cara kerja ladang tenaga surya?',
          answer:
            'Farma często składa się nawet z tysięcy paneli słonecznych połączonych ze sobą za pomocą przewodów elektrycznych pogrupowanych według kilku obszarów. W zależności od swoich właściwości, farmy fotowoltaiczne mają zdolność generowania dużej mocy i są coraz bardziej wydajnym źródłem czystej energii odnawialnej.',
        },
        {
          ques: '5: Bagaimana cara membangun ladang tenaga surya di lapangan?',
          answer:
            'Jika Anda mengetahui perkembangan industri pertanian tenaga surya, Anda akan setuju bahwa permintaan proyek tenaga surya skala utilitas telah meningkat tajam berkat dukungan pemerintah. Memulai bisnis tenaga surya membutuhkan pengetahuan mendalam tentang industri, produk yang tersedia, instalasi dan solusi untuk pemilik rumah dan bisnis. Ini juga melibatkan membangun hubungan dengan pemasok dan penasihat penjualan mereka.',
        },
        {
          ques:
            '6: Pembiayaan bersama untuk pembangkit listrik tenaga surya - dari mana mendapatkan dananya?',
          answer:
            'Mempertimbangkan meningkatnya permintaan akan sumber energi terbarukan (RES) dan pentingnya mereka dalam perlindungan lingkungan, Anda dapat mengajukan permohonan pendanaan untuk pembangunan instalasi fotovoltaik dari Program Operasional Regional untuk 2014-2020.',
        },
        {
          ques: '7: Agroenergi - apakah ini subsidi yang baik untuk petani?',
          answer:
            'Dana Nasional untuk Perlindungan Lingkungan dan Pengelolaan Air telah mengembangkan program subsidi, termasuk. untuk fotovoltaik untuk petani - Agroenergia. Sebagai bagian dari proyek ini, instalasi fotovoltaik yang sama sekali baru dapat dibangun, dengan daya total tidak melebihi 50 kW, tetapi tidak kurang dari 10 kW.',
        },
        {
          ques:
            '8: Apakah pembangunan pembangkit listrik tenaga surya menguntungkan?',
          answer:
            'Rancangan Kebijakan Energi Indonesia hingga 2040 memberikan dukungan untuk pengembangan sumber energi terbarukan. Oleh karena itu, dibenarkan untuk mengajukan pertanyaan tentang profitabilitas investasi semacam itu.',
        },
        {
          ques: '9: Apa manfaat dari pembangkit listrik tenaga surya?',
          answer:
            'Dalam hal energi terbarukan, energi surya memiliki banyak keuntungan, jadi berinvestasi di ladang tenaga surya adalah ide yang bagus. Pembangkit listrik tenaga surya memberikan manfaat yang sangat besar bagi semua kalangan, terutama para pengusaha yang membutuhkan listrik dalam jumlah besar. Berkat solusi ini, mereka mendapatkan energi bersih dan konstan 24 jam sehari tanpa batasan apa pun.',
        },
        {
          ques: '10: Berapa harga pengalaman 10 hari?',
          answer:
            'Untuk membiasakan semua orang dengan operasi dan manfaat produk energi baru, kami meluncurkan pengalaman produk 10 hari, dan di masa depan kami dapat menjadi mitra perusahaan kami dan menghasilkan lebih banyak.',
        },
        {
          ques:
            '11: Jika saya berinvestasi pada suatu produk dan menyesalinya, dapatkah saya menarik investasi saya?',
          answer:
            'Tentu saja, Anda dapat menarik investasi Anda dalam waktu 10 hari karena produk kami memberikan pengembalian yang signifikan dan dicari oleh banyak pengguna.',
        },
        {
          ques: '12:Apakah platform Anda aman?',
          answer:
            'Dana yang dibeli oleh pengguna diawasi oleh Bank Nasional Indonesia dan digunakan untuk menghasilkan listrik untuk rumah tangga dan perusahaan. Perusahaan telah menandatangani perjanjian pembelian listrik dengan Jaringan Negara Indonesia, dan semua panel fotovoltaik memiliki pendapatan yang stabil.',
        },
        {
          ques: '13:Waktu pemuatan, Waktu pembayaran?',
          answer:
            'Waktu pengisian: 7 * 24 jam, Tiba dalam 5 menit Waktu penarikan: Senin hingga Jumat, 9:00 hingga 17:00, Tiba dalam 2 jam',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.howTo {
  background: #f7f7f7;
  .how-top {
    width: 100%;
    height: 120px;
    background: #0094f6;
  }
  .how-bot {
    background: #0094f6;
    padding: 0 12px;
    position: relative;
    height: calc(100% - 80px);
    .faq-main {
      background: #fff;
      border-radius: 8px;
      padding: 20px 12px;
      position: fixed;
      top: 50px;
      left: 0;
      margin: 0 20px;
      height: calc(100% - 80px);

      overflow: auto;

      .faq-info {
        p {
          display: flex;
          &:nth-of-type(1) {
            align-items: center;
            margin-bottom: 10px;
            span {
              color: #000;
              font-size: 14px;

              &:nth-of-type(1) {
                flex: 0 0 20px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: #fff;
                background: #0094f6;
                margin-right: 10px;
                border-radius: 4px;
              }
            }
          }
          &:nth-of-type(2) {
            margin-bottom: 10px;

            span {
              color: #000;
              font-size: 12px;
              line-height: 20px;
              &:nth-of-type(1) {
                flex: 0 0 20px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: #000;
                background: #e2e2e2;
                margin-right: 10px;
                border-radius: 4px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
