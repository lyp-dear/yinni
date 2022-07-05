<template>
  <modMain title="Rekrutmen Tslenergy" class="recruitment">
    <div class="recruitment-bg"></div>
    <div class="recruitment-main">
      <div class="tit">kami membutuhkanmu!</div>
      <div class="recruitment-info">
        <p class="recruitment-desc">
          Grup Tslenergy telah menyesuaikan tata letak bisnis globalnya, dan
          Tslenergy berencana untuk terus memperluas tim tenaga kerjanya di
          lokasi pelaksanaan proyek. Saat ini, lowongan pekerjaan kami sedang
          disesuaikan, dan posisi rekrutmen utama adalah sebagai berikut:
        </p>
        <div class="title">Posisi rekrutmen</div>

        <div class="recruitment-require">
          <div class="recruitment-txt">
            <van-divider
              :style="{
                color: '#2E40F7',
                borderColor: '#2E40F7',
                padding: '0 32px',
              }"
            >
              Panitera
            </van-divider>
            <p>
              100, di bawah usia 30 tahun, dapat menggunakan komputer dengan
              mahir, bergaji tinggi, prioritas wanita; kota kerja: Jakarta,
              Bandung.
            </p>
          </div>
          <div class="recruitment-txt">
            <van-divider
              :style="{
                color: '#2E40F7',
                borderColor: '#2E40F7',
                padding: '0 32px',
              }"
            >
              Administrator material
            </van-divider>
            <p>
              100 orang, di bawah usia 30 tahun, mahir menggunakan komputer,
              bergaji tinggi, Tidak ada batasan jenis kelamin; lokasi kerja
              tidak tetap dan akan disesuaikan dengan lokasi proyek konstruksi.
            </p>
          </div>

          <div class="recruitment-txt">
            <van-divider
              :style="{
                color: '#2E40F7',
                borderColor: '#2E40F7',
                padding: '0 32px',
              }"
            >
              Staf pemeliharaan peralatan
            </van-divider>
            <p>
              200 orang, di bawah usia 40 tahun, bergaji tinggi, tidak ada
              batasan jenis kelamin; lokasi kerja tidak tetap, dan akan
              disesuaikan dengan lokasi proyek konstruksi.
            </p>
          </div>
          <div class="recruitment-txt">
            <van-divider
              :style="{
                color: '#2E40F7',
                borderColor: '#2E40F7',
                padding: '0 32px',
              }"
            >
              Pengemudi peralatan
            </van-divider>
            <p>
              600 orang (memiliki SIM B2), berusia di bawah 50 tahun, bergaji
              tinggi, tidak ada batasan jenis kelamin; lokasi kerja tidak pasti,
              disesuaikan dengan lokasi proyek konstruksi.
            </p>
          </div>
          <div class="recruitment-txt">
            <van-divider
              :style="{
                color: '#2E40F7',
                borderColor: '#2E40F7',
                padding: '0 32px',
              }"
            >
              Manajer bisnis leasing
            </van-divider>
            <p>
              150 orang, di bawah usia 30 tahun, bergaji tinggi, tidak ada
              batasan jenis kelamin, harus berbicara bahasa Inggris; kota kerja:
              Jakarta, Bandung.
            </p>
          </div>
        </div>
        <div class="title">Waktu perekrutan</div>
        <div class="recruitment-require">
          <div class="recruitment-txt">
            <p>
              Posisi rekrutmen di atas sedang disusun, bergaji tinggi. Tslenergy
              akan membuka jendela pengiriman resume pada Maret 2022. Setelah
              jendela pengiriman resume dibuka, Tslenergy akan melakukan
              pemilihan atas CV dan mengadakan wawancara berdasarkan hasil
              pemilihan.
            </p>
          </div>
        </div>
        <div class="title">Proses rekrutmennya adalah sebagai berikut</div>
        <div class="recruitment-require">
          <div class="recruitment-txt">
            <p>
              1.Lanjutkan penyaringan.<br />
              2.Tinjauan data<br />
              3.Ujian tertulis profesional<br />
              4.Wawancara profesional.<br />
              Bagi yang berminat harap memperhatikan informasi yang dikirimkan
              oleh Tslenergy, Tslenergy menantikan anda untuk bergabung.
            </p>
          </div>
        </div>
      </div>
    </div>
  </modMain>
</template>
<style lang="less" scoped>
.recruitment {
  background: #303cf7;
  .recruitment-main {
    .tit {
      font-size: 30px;
      text-align: center;
      font-weight: 500;
      color: #fff;
      padding-top: 30px;
    }
    .recruitment-info {
      background: #fff;
      border-radius: 20px;
      padding: 15px 13px;
      margin-top: 50px;
      .title {
        background: #2e40f7;
        padding: 0 20px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin: 20px auto 0 auto;
        border-radius: 20px;
      }
      .recruitment-desc {
        font-size: 14px;
        text-align: left;
        // margin-bottom: 20px;
        line-height: 18px;
      }
      .recruitment-require {
        background: #eaeeff;
        border-radius: 20px;
        padding: 8px 12px 20px 12px;
        margin-top: 20px;
        color: #2e40f7;
        font-size: 14px;
        text-align: center;
        line-height: 16px;
        .recruitment-txt {
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
