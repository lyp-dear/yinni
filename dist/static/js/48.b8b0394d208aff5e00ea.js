webpackJsonp([48],{KkOk:function(t,i){},NPjy:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Dd8w"),a=e.n(s),n=e("NYxO"),o={data:function(){return{isUpLoading:!1,upFinished:!1,isDownLoading:!1,isShowLoadding:!1,pullingText:this.$t("sys.pullingText"),loosingText:this.$t("sys.loosingText"),loadingText:this.$t("sys.uploadding"),tabs:[{title:this.$t("index.txt38"),index:0,name:"balance-list-o"},{title:this.$t("my.txt2"),index:1,name:"friends-o"}],params:{page:1,size:1e3,type:["CREDIT_INVITE_REGISTER"]},incomeData:null,total:0,oType:0}},computed:a()({},Object(n.c)({userInfo:"user/userInfo"})),mounted:function(){this.itemClick(0)},methods:a()({},Object(n.b)({queryStatementPage:"user/queryStatementPage",myOrder:"order/myOrder"}),{ifNe:function(t){return["DEBIT_LUCKY_DRAW","DEBIT_WAGER","DEBIT_WITHDRAW_OTC","FREEZE_WITHDRAW_OTC","DEBIT_BUY_GOOD"].includes(t)},godetail:function(t){switch(t.type){case"CREDIT_PROFIT":case"CREDIT_REGISTER_GIFT":case"DEBIT_WAGER":this.$router.push({path:"/contract"});break;case"CREDIT_SUNSHINE":case"CREDIT_INVITE_REGISTER":case"CREDIT_INVITE_WAGER":case"CREDIT_SUBORDINATE":case"CREDIT_LOGIN_PROFIT":this.$router.push({path:"/welfare"});break;case"DEBIT_BUY_GOOD":this.$router.push({path:"/contract"});break;case"CREDIT_PAYMENT":this.$router.push({path:"/deposit"})}},getStatusText:function(t,i){var e=JSON.parse(i),s="";switch(t){case"CREDIT_PAYMENT":s=this.$t("sa.txt137");break;case"CREDIT_PROFIT":s=this.$t("income.txt8");break;case"CREDIT_LOGIN_PROFIT":s=this.$t("income.txt3");break;case"CREDIT_INVITE_REGISTER":s=this.$t("income.txt9");break;case"CREDIT_INVITE_WAGER":s=this.$t("income.txt10");break;case"CREDIT_SUBORDINATE":s=this.$t("income.txt11");break;case"DEBIT_WAGER":s=this.$t("income.txt12");break;case"DEBIT_LUCKY_DRAW":s=this.$t("sa.txt136");break;case"DEBIT_WITHDRAW_OTC":s=this.$t("income.txt13");break;case"FREEZE_WITHDRAW_OTC":s=this.$t("income.txt14");break;case"UNFREEZE_WITHDRAW_OTC":s=this.$t("income.txt15");break;case"CREDIT_REGISTER_GIFT":s=this.$t("income.txt16");break;case"DEBIT_BUY_GOOD":s=this.$t("income.txt17");break;case"CREDIT_MOVEMENT":s=this.$t("income.txt18");break;case"CREDIT_INVESTMENT_GIFT":s=this.$t("income.txt19");break;case"CREDIT_LUCKY_DRAW":s=this.$t("income.txt37");break;case"CREDIT_SUNSHINE":if(e&&e.data){var a=e.data.args||"";s="WHATS_APP"==a?this.$t("income.txt20"):"TWITTER"==a?this.$t("income.txt21"):"YOUTUBE"==a?this.$t("income.txt22"):"FACE_BOOK"==a?this.$t("income.txt23"):"JOIN_TG_GROUP"==a?this.$t("income.txt24"):"SUB_TG_CHANNEL"==a?this.$t("income.txt25"):"SHARECHAT"==a?this.$t("income.txt26"):"MOJ"==a?this.$t("income.txt27"):"ZALO"==a?this.$t("income.txt26"):"TIKTOK"==a?this.$t("income.txt27"):"SUNSHINE_RECHARGE"==a?this.$t("income.txt31"):"SUNSHINE_PROFIT"==a?this.$t("income.txt30"):"SUNSHINE_WITHDRAWAL"==a?this.$t("income.txt34"):"SHARE_MUL_GROUP"==a?this.$t("income.txt35"):"TELEGRAM"==a?this.$t("income.txt36"):this.$t("income.txt187")}break;default:s=this.$t("income.txt33")}return s},itemClick:function(t){this.oType=t,this.params.type=0==t?["CREDIT_ACTIVITY_WAGER","DEBIT_BUY_GOOD","CREDIT_PROFIT","CREDIT_PAYMENT","DEBIT_LUCKY_DRAW","CREDIT_LUCKY_DRAW","FREEZE_WITHDRAW_OTC","DEBIT_WAGER","DEBIT_WITHDRAW_OTC","UNFREEZE_WITHDRAW_OTC","CREDIT_REGISTER_GIFT","CREDIT_SUNSHINE","CREDIT_MOVEMENT","CREDIT_REGISTER_GIFT","CREDIT_INVESTMENT_GIFT"]:["CREDIT_INVITE_REGISTER","CREDIT_INVITE_WAGER","CREDIT_SUBORDINATE"],this.params.page=1,this.params.size=30,this.incomeData=[],this.getData(),this.$nextTick(function(){window.scrollTo(0,0)})},getData:function(){var t=this;this.queryStatementPage(this.params).then(function(i){0==i.code?(t.total=Number(i.data.total||0),t.loadFinished(i.data.records)):t.errDialog(i.msg)})},loadFinished:function(t){if(this.upFinished=!1,null==t||0===t.length)return this.upFinished=!0,this.isDownLoading=!1,this.isUpLoading=!1,void(this.isLoading=!1);t.length<this.params.size&&(this.upFinished=!0),1===this.params.page?this.incomeData=t:this.incomeData=this.incomeData.concat(t),this.incomeData.length>=this.total&&(this.upFinished=!0),this.isDownLoading=!1,this.isUpLoading=!1,this.isLoading=!1},onDownRefresh:function(){var t=this;this.params.page=1,setTimeout(function(){t.incomeData=[],t.upFinished=!1,t.isDownLoading=!0,t.isUpLoading=!0,t.getData()},1e3)},onLoadList:function(){var t=this;this.params.page+=1,setTimeout(function(){t.isUpLoading=!0,t.getData()},1e3)}})},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("modMain",{staticClass:"income noPadding",attrs:{title:t.$t("income.txt1")}},[e("div",{staticClass:"income-top-fixed"},t._l(t.tabs,function(i,s){return e("div",{key:s,class:[s==t.oType?"active":""],on:{click:function(i){return t.itemClick(s)}}},[e("div",{staticClass:"icon"},[e("van-icon",{attrs:{name:i.name}})],1),t._v(" "),e("p",[t._v(t._s(i.title))])])}),0),t._v(" "),e("div",{staticClass:"income-main"},[t.incomeData&&t.incomeData.length>0?e("van-list",{attrs:{finished:t.upFinished,"immediate-check":!1,offset:"20","loading-text":t.$t("load.txt1"),"finished-text":t.$t("load.txt2")},on:{load:t.onLoadList},model:{value:t.isUpLoading,callback:function(i){t.isUpLoading=i},expression:"isUpLoading"}},t._l(t.incomeData,function(i,s){return e("div",{key:s,staticClass:"list",on:{click:function(e){return t.godetail(i)}}},[e("div",{staticClass:"time"},[t._v(t._s(i.gmtCreate))]),t._v(" "),e("div",{staticClass:"list-type"},[t._v("\n          "+t._s(t.ifNe(i.type)?t.$t("income.txt5"):t.$t("income.txt6"))+"\n        ")]),t._v(" "),e("div",{staticClass:"list-share-type"},[t._v("\n          "+t._s(t.getStatusText(i.type,i.remark))+"\n        ")]),t._v(" "),e("div",{staticClass:"list-amount",class:t.ifNe(i.type)?"active":""},[t._v("\n          "+t._s(t.ifNe(i.type)?"-":"+")+t._s(t.$utils.getkStr(i.amount))+"\n        ")])])}),0):t.isShowLoadding||t.incomeData&&0!=t.incomeData.length?t._e():e("no-data")],1)])},staticRenderFns:[]};var T=e("VU/8")(o,c,!1,function(t){e("KkOk")},"data-v-23a63e65",null);i.default=T.exports}});