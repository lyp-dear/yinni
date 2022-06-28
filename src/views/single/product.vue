<template>
  <modMain title="Product Order" class="product">
    <div class="p-top-box">
      <div
        class="imgs"
        :class="{ click: type == 'MILLIONS_SOLAR' }"
        @click="check(0)"
      >
        <img src="@/assets/image/xapp/product.png" alt="" />
        <p>Telah dipilih</p>
      </div>
      <div
        class="imgs"
        :class="{ click: type == 'TWO_MILLIONS_SOLAR' }"
        @click="check(1)"
      >
        <img src="@/assets/image/xapp/product2.png" alt="" />
        <p>Telah dipilih</p>
      </div>
    </div>
    <div class="top-box">
      <div class="ding">
        <span class="bj">Telah ditentukan</span>
        <span>Yang masih ada:5</span>
      </div>
      <h1>{{ proItem.title }}</h1>
      <h2 v-if="proStatus == ''">
        Diharapkan akan dipasang di lokasi dalam 15-25 hari
      </h2>
      <h2 v-else>Pemasangan di tempat diharapkan pada 7-8 2021</h2>
    </div>
    <div class="top-box">
      <h3>Pilih spesifikasi</h3>
      <div class="pro-choose">
        <div
          class="pro-item"
          :class="{ active: type == 'MILLIONS_SOLAR' }"
          @click="check(0)"
        >
          Sistem generator fotovoltaik 1000KW, Baterai 200AH
        </div>
        <div
          class="pro-item"
          :class="{ active: type == 'TWO_MILLIONS_SOLAR' }"
          @click="check(1)"
        >
          Sistem generator fotovoltaik 2000KW, Baterai 400AH
        </div>
      </div>
      <div class="step-main fr">
        <div class="step-box">
          <div class="step-img">
            <img
              v-if="stepNum > 0"
              class="okk"
              src="@/assets/image/xapp/okk.png"
              alt=""
            />
            <img src="@/assets/image/xapp/17663.png" alt="" />
          </div>
          <p>Bayar setoran</p>
        </div>
        <div class="step-box">
          <div class="step-img">
            <img
              v-if="stepNum > 1"
              class="okk"
              src="@/assets/image/xapp/okk.png"
              alt=""
            />
            <img src="@/assets/image/xapp/17664.png" alt="" />
          </div>
          <p>Beli peralatan</p>
        </div>
        <div class="step-box">
          <div class="step-img">
            <img
              v-if="stepNum > 2"
              class="okk"
              src="@/assets/image/xapp/okk.png"
              alt=""
            />
            <img src="@/assets/image/xapp/17665.png" alt="" />
          </div>
          <p>kirim lewat pos</p>
        </div>
        <div class="step-box">
          <div class="step-img">
            <img
              v-if="stepNum > 3"
              class="okk"
              src="@/assets/image/xapp/okk.png"
              alt=""
            />
            <img src="@/assets/image/xapp/17666.png" alt="" />
          </div>
          <p>Instalasi di tempat</p>
        </div>
      </div>
      <div class="tb-box">
        <div class="th">Spesifikasi</div>
        <div class="tr">
          <p>{{ proItem.title }}</p>
        </div>
        <div class="tr">
          <span>Harga:</span>
          <p>Rp {{ proItem.harga }}</p>
        </div>
        <div class="tr">
          <span>Merek:</span>
          <p>{{ proItem.merek }}</p>
        </div>
        <div class="tr">
          <span>Jenis:</span>
          <p>{{ proItem.Jenis }}</p>
        </div>
        <div class="tr">
          <span>Kekuasaan:</span>
          <p>{{ proItem.kekuasaan }}</p>
        </div>
        <div class="tr">
          <span>Model:</span>
          <p>{{ proItem.model }}</p>
        </div>
        <div class="tr">
          <span>Pendapatan harian:</span>
          <p>Rp {{ proItem.harian }}</p>
        </div>
      </div>
    </div>
    <div class="top-box" ref="iptBox" v-if="!form.id || isEdit">
      <div class="ip-box fr">
        <input type="text" v-model="form.name" placeholder="First Name" />
        <input type="text" v-model="form.surname" placeholder="last Name" />
      </div>
      <div class="ip-box fr">
        <input type="text" v-model="form.phone" placeholder="Nomor kontak" />
      </div>
      <div class="ip-box fr">
        <input
          type="text"
          v-model="form.streetName"
          placeholder="Alamat jalan"
        />
      </div>
      <div class="ip-box fr">
        <input type="text" v-model="form.urbanArea" placeholder="Pusat kota" />
        <input type="text" v-model="form.province" placeholder="Provinsi" />
      </div>
      <div class="ip-box fr">
        <input type="text" v-model="form.postCode" placeholder="Kode pos" />
        <input type="text" class="filter" />
      </div>
      <div class="ip-btn" @click="submit">Yakin</div>
    </div>
    <div class="top-box" v-else-if="itemData">
      <div class="upload-box" v-if="proStatus != ''">
        <template v-for="(item, idx) in 4">
          <van-uploader
            :key="idx"
            :after-read="afterRead"
            accept="image/*"
            :name="'proUpload' + idx"
            :max-count="1"
          >
            <div class="up-box">
              <img
                v-if="!form['picture' + idx]"
                src="@/assets/image/xapp/xins/upload2.png"
                alt=""
              />
              <img
                class="large"
                v-else
                :src="imgBaseUrl + form['picture' + idx]"
                alt=""
              />
            </div>
          </van-uploader>
        </template>
      </div>
      <p class="upload-txt">
        Foto-foto rumah (tanah kosong, atap) perlu diambil agar ada peralatan
        yang dapat dipasang
      </p>
      <div class="edit">
        <div class="btn" @click="isEdit = true">Modifikasi</div>
      </div>
      <div class="tb-box">
        <div class="tr">
          <span>Nama:</span>
          <p>{{ form.name + ' ' + form.surname }}</p>
        </div>
        <div class="tr">
          <span>Telepon:</span>
          <p>{{ form.phone }}</p>
        </div>
        <div class="tr fc">
          <span>Alamat:</span>
          <p>
            {{ form.province + form.urbanArea + form.postCode }}
          </p>
        </div>
        <div class="tr">
          <span>Kode pos:</span>
          <p>909877</p>
        </div>
      </div>
    </div>
    <div class="top-box pad0">
      <div class="bg-top">
        Membeli energi matahari, keuntungan kami
      </div>
      <div class="beli-box">
        <p>Memperoleh hak untuk menggunakan energi matahari selamanya</p>
      </div>
      <div class="beli-box">
        <p>
          Bayar deposit 30%, dan sisanya akan dipotong oleh pendapatan
        </p>
      </div>
      <div class="beli-box">
        <p>
          1: Untuk penggunaan di rumah<br />
          2: Jaringan Negara memulihkan kelebihan listrik sesuai dengan harga
          listrik sipil
        </p>
      </div>
      <div class="beli-box">
        <p>Penyimpanan energi listrik, penggunaan berkelanjutan tanpa limbah</p>
      </div>
      <div class="beli-box">
        <p>
          Pemeliharaan peralatan seumur hidup
        </p>
      </div>
      <div class="beli-box">
        <p>
          Jaminan kualitas produk, penggunaan berkelanjutan selama lebih dari 10
          tahun
        </p>
      </div>
      <div class="beli-box">
        <p>Perawatan rutin untuk memastikan daya peralatan yang stabil</p>
      </div>
    </div>
    <div class="btn-bot">
      <div class="btn" @click="buyClick">Dibekukan:{{ proItem.harga }}Rp</div>
    </div>
  </modMain>
</template>

<script>
import client from '@/utils/http'
import { mapActions } from 'vuex'
export default {
  name: 'XAppProduct',
  data() {
    return {
      products: [
        {
          type: 'MILLIONS_SOLAR',
          title: 'Sistem generator fotovoltaik 1000kw Baterai 200AH',
          harga: '12.000.000',
          merek: 'OKe',
          Jenis: 'Generator fotovoltaik',
          kekuasaan: '1000kw',
          model: '50cm*150cm*12',
          harian: '1.400.000',
        },
        {
          type: 'TWO_MILLIONS_SOLAR',
          title: 'Sistem generator fotovoltaik 2000kw Baterai 400AH',
          harga: '24.000.000',
          merek: 'OKe',
          Jenis: 'Generator fotovoltaik',
          kekuasaan: '2000kw',
          model: '50cm*150cm*24',
          harian: '2.800.000',
        },
      ],
      isEdit: false,
      itemData: null,
      type: 'MILLIONS_SOLAR', // MILLIONS_SOLAR千万  TWO_MILLIONS_SOLAR两千万
      proStatus: '',
      form: {
        id: null,
        name: '', // firstname
        surname: '', //lastname
        streetName: '', // 街道地址
        urbanArea: '', // 市
        province: '', // 省
        phone: '', //电话
        postCode: '', // 邮编
        picture0: null,
        picture1: null,
        picture2: null,
        picture3: null,
      },
    }
  },
  computed: {
    proItem() {
      return this.products.find(d => d.type == this.type)
    },
    stepNum() {
      if (this.itemData) {
        if (this.itemData.status == 'PAYMENT_SUCCESSFUL') {
          return 1
        } else if (this.itemData.status == 'PURCHASE_GOODS') {
          return 2
        } else if (this.itemData.status == 'SEND_POST_GOODS') {
          return 3
        } else if (this.itemData.status == 'HOME_INSTALLATION') {
          return 4
        }
      }
      return 0
    },
    fileList() {
      let arr = []
      for (let index = 0; index < 4; index++) {
        if (this.form['picture' + index]) {
          arr.push({ url: this.imgBaseUrl + this.form['picture' + index] })
        }
      }
      return arr
    },
    isDisable() {
      let {
        name,
        surname,
        streetName,
        urbanArea,
        province,
        phone,
        postCode,
      } = this.form
      return (
        name == '' ||
        surname == '' ||
        streetName == '' ||
        urbanArea == '' ||
        province == '' ||
        phone == '' ||
        postCode == ''
      )
    },
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions({
      purchaseGoods: 'order/purchaseGoods',
      createUserInfo: 'order/createUserInfo',
      purchaseGoodsBuy: 'order/purchaseGoodsBuy', // 购买
      puruploadImage: 'order/puruploadImage',
    }),
    check(type) {
      this.type = type == 0 ? 'MILLIONS_SOLAR' : 'TWO_MILLIONS_SOLAR'
    },
    async afterRead(files, fileName) {
      let idx = fileName.name.replace('proUpload', '')
      this.$toast.loading({
        message: this.$t('sys.uploadding'),
        duration: 0,
        forbidClick: true,
      })
      let file = files.file
      console.log('上传file。。。。。。。。。。', file)
      let fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png']
      if (!fileTypes.includes(file.type)) {
        this.errDialog(this.$t('sys.imgErr'))
        return
      }
      if (file.size.toFixed(2) > 1024 * 1024 * 6) {
        this.errDialog(this.$t('sys.uploadSize'))
        return
      }
      console.log('开始上传。。。。。。。。。。', file)
      client
        .postFormData('/upload/s3', {
          file: file,
          folder: 'file',
        })
        .then(res => {
          console.log('上传返回信息。。。。。。。。。。', res)
          if (res.code == 0) {
            let _imgurl = res.data
            let postImg = {
              id: this.form.id,
            }
            if (idx == 0) {
              postImg.picture0 = _imgurl
              this.form.picture0 = _imgurl
            } else if (idx == 1) {
              postImg.picture1 = _imgurl
              this.form.picture1 = _imgurl
            } else if (idx == 2) {
              postImg.picture2 = _imgurl
              this.form.picture2 = _imgurl
            } else if (idx == 3) {
              postImg.picture3 = _imgurl
              this.form.picture3 = _imgurl
            }
            this.saveImgUrl(postImg)
            // localStorage.setItem('sun_shine_img', res.data)
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(err => {})
        .finally(res => {
          this.$toast.clear()
        })
    },
    saveImgUrl(postImg) {
      this.puruploadImage(postImg).then(res => {})
    },
    getData() {
      this.purchaseGoods().then(res => {
        if (res.code == 0) {
          let data = res.data.records || []
          if (data.length > 0) {
            this.itemData = data[0]
            this.proStatus = this.itemData.status || ''
            Object.keys(this.form).forEach(key => {
              this.form[key] = this.itemData[key]
            })
          }
        }
      })
    },
    submit() {
      if (this.isDisable) {
        this.errDialog('Informasi kontak tidak boleh kosong')
        return
      }
      this.createUserInfo(this.form).then(res => {
        if (res.code == 0) {
          this.getData()
          this.isEdit = false
        }
      })
    },
    async buyClick() {
      if (this.isDisable) {
        this.$refs.iptBox.scrollIntoView()
        this.errDialog('Silahkan lengkapi alamat instalasi dan simpan.')
        return
      }
      if (this.isEdit) {
        await this.submit()
      }
      let postData = {
        id: this.form.id,
        type: this.type,
      }
      await this.purchaseGoodsBuy(postData).then(res => {
        if (res.code == 0) {
          this.showDialog(
            'Pembelian berhasil, silakan unggah foto-foto lingkungan instalasi'
          )
        } else {
          this.errDialog(res.msg)
        }
      })
    },
  },
}
</script>
