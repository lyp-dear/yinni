import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import zh from './zh.js'
import en from './en.js' // 英语
import fr from './fr.js' // 法语
import ja from './ja.js' // 日语
import pt from './pt.js' // 葡萄牙语
import vi from './vi.js' // 葡萄牙语
import ko from './ko.js' // 韩语kr
import es from './es.js' // 西班牙语kr
import id_id from './id.js' // 西班牙语kr
// 注册i18n实例并引入语言文件
// var queryString = item => {
//   var svalue = window.location.search.match(
//     new RegExp('[?&]' + item + '=([^&]*)(&?)', 'i')
//   )
//   return svalue ? svalue[1] : svalue
// }
// let locale = queryString('locale')
// let islocale = window.location.href.indexOf('locale') > -1
// let isZh = window.location.href.indexOf('locale=zh') > -1
// let locale = 'en_us'
// if (islocale) {
//   locale = isZh ? 'zh_cn' : 'en_us'
// } else {
//   locale = localStorage.getItem('locale') == 'zh' ? 'zh_cn' : 'en_us'
// }
let locale = 'id_ID'
let lang = locale.substring(0, 2)
const languageList = [
  'zh_CN',
  'en_US',
  'fr_FR',
  'ja_JP',
  'pt_BR',
  'ko_KR',
  'es_ES',
  'id_ID',
  'vi_VN',
]
let langIndex = languageList.findIndex(d => d.indexOf(lang) > -1)
if (langIndex > -1) {
  locale = 'id_ID'
} else {
  locale = 'id_ID'
}
localStorage.setItem('locale', 'id_ID')
const i18n = new VueI18n({
  locale: locale,
  messages: {
    zh_CN: zh,
    en_US: en,
    fr_FR: fr,
    ja_JP: ja,
    pt_BR: pt,
    ko_KR: ko,
    es_ES: es,
    id_ID: id_id,
    vi_VN: vi,
  },
})
// i18n.setLocaleMessage(locale, locale == 'zh_cn' ? zh : en)
export default i18n
