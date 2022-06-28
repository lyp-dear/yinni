<template>
  <div class="help-container help-one">
    <div class="title">Bagaimana cara mengundang teman?</div>
    <div class="help-main">
      <div class="text-box">
        <p>
          Langkah pertama:<br />
          Klik "tombol undang" di aplikasi, salin tautannya dan kirimkan ke
          teman"
        </p>
        <p>
          Langkah kedua:<br />
          Beritahu teman Anda untuk mendaftar untuk menerima hak penggunaan 180
          hari dari generator fotovoltaik kecil senilai Rp100K
        </p>
        <p>
          Langkah ketiga:<br />
          Teman-teman daftarkan aplikasinya melalui tautan, Anda bisa
          mendapatkan Rp300
        </p>
      </div>
      <div class="img-box">
        <img src="@/assets/image/xapp/land/help7.png" alt="" />
      </div>

      <div class="small-title">Membuat video youtube:</div>
      <div class="text-box">
        <p>
          Langkah pertama: <br />
          Rekam video dan perkenalkan aplikasi untuk menghasilkan uang dengan
          masuk setiap hari
        </p>
        <p>
          Langkah kedua:<br />
          Publikasikan video di YouTube, balas tautan undangan Anda di area
          komentar, dan tempelkan tautan ke atas
        </p>
      </div>
      <div class="img-box">
        <img src="@/assets/image/xapp/land/help8.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.help-container {
  padding: 15px 16px;
  background: #fff;
  min-height: 100%;
  .title {
    font-size: 22px;
    line-height: 28px;

    color: #1a1f2d;
    padding-bottom: 15px;
    border-bottom: 1px solid #f2f2f2;
  }
}
.help-one {
  .help-main {
    margin-top: 15px;
    p {
      font-size: 15px;
      line-height: 19px;

      color: #6c717d;
    }
    .small-title {
      margin-top: 20px;
      font-size: 20px;
      line-height: 26px;
      color: #1a1f2d;
      margin-bottom: 10px;
    }
    .text-box {
      p {
        // margin-bottom: 10px;
        &:nth-of-type(1) {
          margin-bottom: 10px;
        }
      }
    }
    .img-box {
      margin: 20px 0;
    }
  }
}
</style>
