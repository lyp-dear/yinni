<template>
  <modMain :title="$t('card.txt16')" class="noPadding">
    <div class="area-main">
      <div class="area-country">
        <MyUl
          v-for="(itme, key) in comAreaData"
          :class="key"
          :item="itme"
          :isCountry="isCountry"
          :key="key"
        ></MyUl>
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import areaCode from '@/assets/js/commonJs/areaCode'
import { countriesName } from '@/assets/js/commonJs/data-cn'
import MyUl from './components/MyUL'
// import { jump } from "@/assets/js/commonJs/scrollTop";
export default {
  props: {
    isCountry: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MyUl,
  },
  data() {
    return {
      areaCode: areaCode,
      comAreaData: null,
      codeList: [],
    }
  },
  computed: {
    cptAsideList() {
      let list = []
      let obj = this.areaCode
      list = Object.keys(obj)
      list[0] = 'Hot'
      return list
    },
  },
  created() {
    this.getBankCode()
  },
  methods: {
    ...mapActions({
      bankCode: 'bankCard/bankCode',
    }),
    getBankCode() {
      this.bankCode().then(res => {
        this.codeList = res.data
        this.comAreaData = this.combData()
      })
    },
    iptClick(value) {
      if (value == '') {
        this.areaCode = areaCode
        this.comAreaData = this.combData()
      } else {
        this.searchData(value.toUpperCase())
      }
    },
    searchData(val) {
      // this.areaCode = areaCode.filter(d => d[0].toLowerCase().indexOf(val) > -1 || d[2].indexOf(val) > -1)
      // debugger
      this.comAreaData = this.combData(val)
    },
    combData(val = '') {
      let obj = {
        // hot: {
        //   name: 'Hot',
        //   list: [],
        // },
      }
      // let hot = ['id']
      console.log(val)
      for (let i = 0; i < this.codeList.length; i++) {
        let item = this.codeList[i]
        let str = item.name
        let first = str.substr(0, 1)
        // let nameCN = countriesName[i] // 中文的国家名称
        let phoneCodes = '' // item.length > 4 ? item[4][0] : ''

        if (val) {
          let d = String(val)
          let isCludes = item.name.indexOf(d) > -1
          console.log(isCludes)
          if (isCludes) {
            let first = item.name.substr(0, 1)
            if (!obj[first]) {
              obj[first] = {
                name: first,
                list: [],
              }
            }
            obj[first].list.push({
              label: item.name,
              id: item.id,
              code: item.code,
            })
          }
        } else {
          if (!obj[first]) {
            obj[first] = {
              name: first,
              list: [],
            }
          }
          obj[first].list.push({
            label: item.name,
            id: item.id,

            code: item.code,
          })
        }
        // for (let j = 0; j < hot.length; j++) {
        //   if (hot[j] == item[1]) {
        //     obj.hot.list.push({
        //       label: item[0],
        //       area: item[1],
        //       code: item[2] + phoneCodes,
        //     })
        //   }
        // }
      }
      return obj
    },
    // jump(key) {
    //   this.$vux.toast.show({
    //     time: 1000,
    //     text: key,
    //     position: "top",
    //     type: "text"
    //   });
    //   if (key == "热门") {
    //     key = "hot";
    //   }
    //   jump(`.${key}`);
    // }
  },
}
</script>
