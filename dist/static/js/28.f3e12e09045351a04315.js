webpackJsonp([28],{"5lc5":function(t,s,i){t.exports=i.p+"static/img/gift.6366258.jpeg"},I8Zs:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Dd8w"),o=i.n(a),n=i("NYxO"),e={computed:{disabled:function(){return!this.password}},created:function(){this.getOrder()},mounted:function(){this.$nextTick(function(){})},data:function(){return{showNotic:!1,isShowGift:!1,isOpen:!1,isOpenShow:!0,isOpenGift:!1,isShowPass:!1,password:"",animatedTop:!1,scrollTimer:null,broadData:[],giftMoney:0}},methods:o()({},Object(n.b)({exchageGift:"user/exchageGift",orderJoin:"order/orderJoin"}),{getOrder:function(){var t=this;this.orderJoin({page:1,size:300}).then(function(s){0==s.code&&(t.broadData=s.data.records,t.$nextTick(function(s){t.showScroll()}))})},showScroll:function(){this.animatedTop=!0;var t=0,s=this.$refs.broadDom;s.children[0].offsetHeight,this.broadData.length;this.scrollTimer=setInterval(function(){s.style.bottom=-t+"px",t++},100)},confirme:function(){this.showNotic=!1},showPassowrd:function(){this.isShowPass=!0},showGift:function(){var t=this;this.isShowPass=!1;var s={password:this.password};this.exchageGift(s).then(function(s){t.password="",0==s.code?(t.giftMoney=s.data,t.$nextTick(function(s){t.startGift()})):t.showDialog(s.msg)})},startGift:function(){var t=this,s=this;this.isShowGift=!0,this.$refs.chestClose.addEventListener("webkitAnimationEnd",function(){t.isOpen=!0,setTimeout(function(){s.isOpenShow=!1},200)},!1)}})},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("modMain",{staticClass:"gift",attrs:{title:t.$t("gift.txt1"),isSave:"",isSee:"",btnTxt:t.$t("gift.txt4")},on:{seeImg:function(s){t.showNotic=!0}}},[a("div",{staticClass:"gift-main"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"open-has",class:[t.isOpen?"opened":""]},[a("div",{staticClass:"mod-chest"},[a("div",{ref:"chestClose",staticClass:"chest-close",class:[t.isShowGift?"shake":"",t.isOpenShow?"show":""],on:{click:t.showPassowrd}},[a("div",{staticClass:"gift"})]),t._v(" "),a("div",{staticClass:"chest-open",class:[t.isOpenShow?"":"show"]},[a("div",{staticClass:"mod-chest-cont open-cont"},[a("div",{staticClass:"content"},[a("div",{staticClass:"gift-icon"},[a("img",{attrs:{src:i("5lc5"),alt:""}})]),t._v(" "),a("p",[t._v("+"+t._s(t.$utils.currencyType)+t._s(t.giftMoney))]),t._v(" "),a("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/income"}},[t._v(t._s(t.$t("gift.txt7")))])],1)])])])])])]),t._v(" "),a("div",{staticClass:"data-box"},[a("div",{ref:"broadDom",staticClass:"animatedTop"},t._l(t.broadData,function(s,i){return a("div",{key:i,staticClass:"list-box "},[a("div",{staticClass:"info"},[a("p",[t._v("\n            UID:"+t._s(s.uid.substring(0,2))+" ****"+t._s(s.uid.substring(6,8))+"\n            Dapatkan hadiah\n          ")]),t._v(" "),a("p",[t._v("+ "+t._s(t.$utils.currencyType)+t._s(s.amount))])])])}),0)]),t._v(" "),a("van-popup",{model:{value:t.isShowPass,callback:function(s){t.isShowPass=s},expression:"isShowPass"}},[a("div",{staticClass:"showpass-main"},[a("p",[t._v(t._s(t.$t("gift.txt2")))]),t._v(" "),a("div",{staticClass:"showpass-input"},[a("base-input",{attrs:{type:"text",placeholder:t.$t("gift.txt3")},model:{value:t.password,callback:function(s){t.password="string"==typeof s?s.trim():s},expression:"password"}})],1),t._v(" "),a("base-btn",{attrs:{btnTitle:t.$t("dialog.txt1"),disabled:t.disabled},on:{btnClick:t.showGift}})],1)]),t._v(" "),a("van-popup",{staticClass:"notic-pop",model:{value:t.showNotic,callback:function(s){t.showNotic=s},expression:"showNotic"}},[a("div",{staticClass:"notic-info"},[a("div",{staticClass:"title",staticStyle:{margin:"10px 0"}},[t._v(t._s(t.$t("gift.txt5")))]),t._v(" "),t._l(5,function(s,i){return a("p",{key:i},[t._v("\n        "+t._s(t.$t("gift.txt6["+i+"]"))+"\n      ")])})],2),t._v(" "),a("div",{staticClass:"btn",on:{click:t.confirme}},[t._v(t._s(t.$t("dialog.txt1")))])])],1)},staticRenderFns:[]};var r=i("VU/8")(e,c,!1,function(t){i("WkIq")},"data-v-3d7c8177",null);s.default=r.exports},WkIq:function(t,s){}});