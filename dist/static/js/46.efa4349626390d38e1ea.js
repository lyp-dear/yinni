webpackJsonp([46],{JLHl:function(t,a){},nIZ3:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("Dd8w"),l=s.n(i),e=s("NYxO"),v={computed:l()({},Object(e.c)({userInfo:"user/userInfo"})),data:function(){return{item:null,endTime:null}},mounted:function(){this.item=JSON.parse(this.$route.query.data);var t=this.item.auditTime.replace(/\-/g,"/"),a=new Date(t).getTime();this.endTime=this.addDay(this.item.cycle,a)},methods:{addDay:function(t,a){return a+864e5*t}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("modMain",{staticClass:"contract",attrs:{title:t.$t("index.txt24")}},[t.item?s("div",{staticClass:"contract-main"},[s("div",{staticClass:"contract-info"},[s("div",{staticClass:"label-value"},[s("div",{staticClass:"label w200"},[t._v(t._s(t.$t("contract.txt13"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.userInfo.uid))])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt1"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.userInfo.username))])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt2"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.item.randomId))])])]),t._v(" "),s("div",{staticClass:"contract-info"},[s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt3"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v("OKe")])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt1"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v("OKe Group")])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt2"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.item.randomId))])])]),t._v(" "),s("div",{staticClass:"contract-info"},[s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("index.txt24"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v("\n          "+t._s(t.$utils.currencyType)+t._s(t.$utils.getkStr(t.item.amount))+"\n        ")])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt4"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.item.auditTime))])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt5"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v("\n          "+t._s(t._f("dateFormat")(t.endTime,"yyyy-MM-dd HH:mm:ss"))+"\n        ")])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("index.txt26"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.item.cycle/30)+t._s(t.$t("index.txt27")))])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label w200"},[t._v(t._s(t.$t("contract.txt9"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v("\n          "+t._s(t.$utils.currencyType)+"\n          "+t._s(t.$utils.getkStr(t.item.amount*t.item.returnRate*t.item.cycle))+"\n        ")])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label w200"},[t._v(t._s(t.$t("conDetail.txt6"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.$t("conDetail.txt7")))])]),t._v(" "),s("div",{staticClass:"label-value"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("conDetail.txt10"))+":")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.$t("conDetail.txt8")))])])]),t._v(" "),s("div",{staticClass:"bot"},[t._v(t._s(t.$t("conDetail.txt9"))+":"+t._s(t.item.auditTime))])]):t._e(),t._v(" "),s("div",{staticClass:"signature"})])},staticRenderFns:[]};var _=s("VU/8")(v,c,!1,function(t){s("JLHl")},"data-v-43a742c0",null);a.default=_.exports}});