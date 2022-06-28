<template>
  <!-- <div class=".comment-container">
    <h1>Revisão do usuário</h1>
    <div class="box" v-for="item in list">
      <div class="top">
        <p>
          <span class="h1">{{ item.title }}</span>
          <span>Feb 7</span>
        </p>
        <p>
          <span class="star">
            <template v-for="d in 5">
              <van-icon name="star" />
            </template>
          </span>
          <span>{{ item.author }}</span>
        </p>
      </div>
      <div class="mid">
        <p class="coms">{{ item.problem }}</p>
        <p class="name">
          <span>Resposta do desenvolvedor</span>
        </p>
        <p>
          {{ item.answer }}
          <a v-if="item.link" class="green" :href="item.link" target="_blank"
            >{{ item.link }}
          </a>
        </p>
      </div>
    </div>
  </div> -->
  <div class="comment-container">
    <div class="comment-info" v-for="(item, index) in list" :key="index">
      <div class="name-data">
        <div class="name">{{ item.title }}</div>
        <div class="data">Feb 7</div>
      </div>
      <div class="star-info">
        <div>
          <template v-for="d in 5">
            <van-icon name="star" />
          </template>
        </div>
        <div>{{ item.author }}</div>
      </div>
      <p class="comment-text">
        {{ item.problem }}
      </p>
      <p class="comment-text">
        {{ item.answer }}
        <a v-if="item.link" class="green" :href="item.link" target="_blank"
          >{{ item.link }}
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Hebat, dapatkan manfaatnya',
          author: 'Adriana',
          problem:
            'kolega saya merekomendasikan saya untuk mengajukan uang, saya mencobanya dan sangat senang bahwa saya benar-benar dapat menerimanya tanpa menggunakan satu sen pun. Berapa lama kampanye ini akan berlangsung? Saya akan membagikannya dengan lebih banyak teman',
          answer:
            'Terima kasih atas dukungan Anda, perusahaan kami telah menyiapkan hadiah Rp 1000JT untuk semua pengguna baru, pertama dilayani, aktivitas akan berhenti ketika hadiah dikeluarkan, harap ingat untuk masuk setiap hari untuk menerima hadiah dan ikuti berita kami untuk mendapatkan berita terbaru',
          link: 'https://t.me/mysolarpower',
        },
        {
          title: 'Nyata dan valid, gratis untuk diterima',
          author: 'Fernanda',
          problem:
            'Sangat nyaman, tidak ada instalasi, Anda dapat mengumpulkan setiap hari, saya ingin menyewa mesin surya dengan lebih banyak energi, ketika saya menghitung berapa lama saya dapat menghasilkan keuntungan, saya akan berinvestasi',
          answer:
            'Hai, Saya akan merekomendasikan Anda opsi berikut dan memberi Anda informasi terperinci.1, panel fotovoltaik 20kW, senilai Rp 400K, menghasilkan energi 20kw/hari, hasil harian Rp 30.8K, hanya perlu 20 hari untuk menguntungkan.2, panel fotovoltaik 1.48kw, senilai Rp 100K, menghasilkan energi 1.48kw/hari, output harian Rp 2500, hanya membutuhkan 19 hari untuk menjadi menguntungkan. Untuk paket paket lainnya, kunjungi official',
          link: 'https://t.me/joinchat/gQ3I4pXaSUViZDVl',
        },
        {
          title: 'bagus, keluarga saya menggunakannya',
          author: 'Magda',
          problem:
            'Saya telah mengundang semua keluarga dan teman-teman saya untuk mendaftar, saya sekarang mendapatkan hadiah Rp 400K setiap hari dengan berbaring, yang penting saya tidak mengeluarkan biaya sepeser pun, dapatkah seseorang membantu saya mengetahui kapan saya bisa mendapatkan iPhone 12pro?',
          answer:
            'Saya dapat menjawab pertanyaan ini, jika Anda dapat mengundang 1000 pengguna baru, maka setelah 7 hari, orang-orang dari apple express akan mengetuk pintu Anda, silakan buka saluran resmi',
          link: '',
        },
        {
          title: 'di luar imajinasi',
          author: 'Rafael ',
          problem:
            'Rp 100K untuk mengumpulkan jujur ​​saya hanya datang untuk mencobanya. Tapi saya tidak punya cukup uang untuk menyewa panel fotovoltaik yang lebih besar',
          answer:
            'Terima kasih atas umpan balik Anda, Anda dapat berbagi dengan teman yang lebih besar untuk mendapatkan hadiah, tidak ada batasan hadiah, undang 60 pengguna lagi dan Anda dapat memiliki panel fotovoltaik 5-20kw yang sangat bagus',
          link: '',
        },
        {
          title: 'Eu recebi-osaya menerimanya',
          author: 'Teresa ',
          problem:
            'Saya ingin tahu apakah uang untuk menyewa panel fotovoltaik benar-benar akan dikembalikan, saya berencana untuk menyewa panel fotovoltaik kekuatan penuh, yang akan menghabiskan banyak uang.',
          answer:
            'Hai, sewa akan dikembalikan, panel fotovoltaik daya penuh akan menguntungkan hanya dalam 15 hari dan pemilik akan memiliki pendapatan selama 180 hari.',
          link: '',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.comment-container {
  margin-top: 35px;
  .comment-info {
    padding: 15px 20px 20px 20px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 16px;
    .name-data {
      display: flex;
      .name {
        font-weight: 500;
        font-size: 16px;
        flex: 4;
      }
      .data {
        flex: 1;
        font-size: 15px;
        color: #85858a;
        text-align: right;
      }
    }
    .star-info {
      display: flex;
      margin-top: 4px;
      & > div {
        flex: 1;
        &:nth-of-type(1) {
          color: #ee8834;
        }
        &:nth-of-type(2) {
          text-align: right;
          color: #85858a;
          font-size: 15px;
        }
      }
    }
    .comment-text {
      margin-top: 11px;
      color: #000;
      font-size: 15px;
      line-height: 15px;
    }
  }
}
</style>
