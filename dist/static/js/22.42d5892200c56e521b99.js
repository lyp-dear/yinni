webpackJsonp([22],{"+hfj":function(t,e){},EIAb:function(t,e){},Pbrk:function(t,e){},"e+iX":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("NYxO"),r=s("mvHQ"),o=s.n(r),c=s("woOf"),d=s.n(c),l={data:function(){return{level:["1","2","3","4","5"],orderData:[],parame:{page:1,size:100},isShowLoadding:!1,totalData:null}},mounted:function(){this.getOrderData(),this.$nextTick(function(){window.scrollTo(0,0)})},methods:i()({},Object(n.b)({orderUserList:"order/orderUserList",orderUserSta:"order/orderUserSta"}),{showBuy:function(t){var e=d()({},t);e.isBuy=!0,this.$router.push({path:"/investimento",query:{data:o()(e)}})},getTotal:function(){var t=this;this.orderUserSta().then(function(e){0==e.code&&(t.totalData=e.data)})},getOrderData:function(){var t=this;this.isShowLoadding=!0,this.orderUserList(this.parame).then(function(e){if(t.isShowLoadding=!1,t.getTotal(),0==e.code){e.data.records;t.orderData=e.data.records}else t.errDialog(e.msg)}).catch(function(e){t.isShowLoadding=!1})}})},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-otc"},[s("div",{staticClass:"balance-box"},[s("div",{staticClass:"balance-info"},[s("p",[t._v("\n        "+t._s(t.$utils.currencyType)+t._s(t.totalData?t.totalData.sumProfit:0)+"\n      ")]),t._v(" "),s("p",[t._v(t._s(t.$t("order.txt9")))])]),t._v(" "),s("div",{staticClass:"balance-info"},[s("p",[t._v("\n        "+t._s(t.$utils.currencyType)+t._s(t.totalData?t.totalData.perProfit:0)+"\n      ")]),t._v(" "),s("p",[t._v(t._s(t.$t("product.txt6")))])])]),t._v(" "),s("div",{staticClass:"order-list"},[s("div",{staticClass:"merchant-container"},t._l(t.orderData,function(e,a){return s("div",{key:a,staticClass:"asset-info"},[s("div",{staticClass:"asset-img"},[s("van-image",{attrs:{width:"100%","lazy-load":"",src:t.imgBaseUrl+e.imgUrl}})],1),t._v(" "),s("div",{staticClass:"asset-bot"},[s("div",{staticClass:"asset-name"},[s("span",[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),s("span",[t._v(t._s(t.$t("product.txt14")))])]),t._v(" "),s("div",{staticClass:"asset-params"},[s("div",{staticClass:"asset-params-left"},[s("p",[t._v(t._s(t.$t("product.txt6")))]),t._v(" "),s("p",[t._v("\n                "+t._s(t.$utils.currencyType)+"\n                "+t._s(t.$utils.getkStr(e.amount*e.returnRate))+"\n              ")])]),t._v(" "),s("div",{staticClass:"asset-params-center"},[s("p",[t._v(t._s(t.$t("order.txt9")))]),t._v(" "),s("p",[t._v(t._s(e.profit))])]),t._v(" "),s("div",{staticClass:"asset-params-right"},[s("p",[t._v(t._s(t.$t("product.txt17")))]),t._v(" "),s("p",[t._v("\n                "+t._s(t.$utils.currencyType)+t._s(t.$utils.getkStr(e.amount))+"\n              ")])])]),t._v(" "),s("div",{staticClass:"asset-time"},[s("p",[t._v(t._s(t.$t("product.txt7"))+":"+t._s(e.cycle))]),t._v(" "),s("p",[t._v(t._s(t.$t("product.txt20"))+":"+t._s(t.$t("product.txt21")))])]),t._v(" "),s("div",{staticClass:"asset-rate"},[s("p",[t._v(t._s(t.$t("product.txt22")))]),t._v(" "),s("van-progress",{attrs:{"pivot-text":(100*e.returnRate).toFixed(1)+"%",percentage:(100*e.returnRate).toFixed(1)}})],1),t._v(" "),s("base-btn",{attrs:{btnTitle:"WORKING"==e.status?t.$t("order.txt5"):t.$t("order.txt6"),disabled:!1},on:{btnClick:function(s){return t.$emit("goexchange",e)}}})],1)])}),0)]),t._v(" "),t.isShowLoadding?s("loadding"):t.isShowLoadding||t.orderData&&0!=t.orderData.length?t._e():s("no-data")],1)},staticRenderFns:[]};var v=s("VU/8")(l,u,!1,function(t){s("EIAb")},"data-v-62dbfa84",null).exports,h=s("bOdI"),p=s.n(h),_={data:function(){var t;return t={link:"",showShare:!1,treeData:null},p()(t,"treeData",{totalContribution:0,yesterdayContribution:0,mobilePhone:""}),p()(t,"childrenCount",0),p()(t,"secondNodes",[]),p()(t,"animatedTop",!1),p()(t,"scrollTimer",null),p()(t,"broadData",[]),p()(t,"disabled",!1),t},computed:i()({},Object(n.c)({userInfo:"user/userInfo"}),{ispt:function(){return"zh_CN"==(localStorage.getItem("locale")||"zh_CN")}}),mounted:function(){this.userInfo&&this.userInfo.username&&this.getData(),this.link="https://m.sunpowers.online/#/invite?code="+this.userInfo.symbolCode},methods:i()({},Object(n.b)({queryUserTreeNode:"user/queryUserTreeNode"}),{share:function(){Number(localStorage.getItem("app_version")||0)>=103?this.showShare=!0:window.appInterface?this.shareApp():this.showShare=!0},close:function(){this.showShare=!1},shareApp:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this.$t("task.txt66")+"："+this.link;window.webkit?window.webkit.messageHandlers.shareSocial.postMessage(t):window.appInterface&&window.appInterface.shareSocial(t)},getData:function(){var t=this;this.userInfo.id;this.queryUserTreeNode({}).then(function(e){if(0==e.code&&0==e.code&&(t.treeData=e.data[0],t.treeData)){t.secondNodes=t.treeData.childrenList||[];var s=0;t.secondNodes.forEach(function(e){s=Number(s)+Number(.1*(e.totalContribution||0)),t.childrenCount+=e.childrenList?e.childrenList.length:0,e.threeNodes=e.childrenList||[]}),t.treeData.totalIncomeContribution=t.treeData.totalContribution,t.treeData.totalIncome=(t.treeData.totalContribution||0)+Number(s)}})}})},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"share-friend"},[s("div",{staticClass:"share-friend-main"},[s("div",{staticClass:"share-link"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("task.txt71")))]),t._v(" "),s("div",{staticClass:"my-money"},[s("div",{staticClass:"my-money-info"},[s("p",[t._v(t._s(t.$t("task.txt72"))+"("+t._s(t.$utils.currencyType)+")")]),t._v(" "),s("p",[t._v(t._s(t.$utils.getPstr(t.treeData.totalIncomeContribution||0)))])]),t._v(" "),s("div",{staticClass:"my-money-info"},[s("p",[t._v(t._s(t.$t("task.txt73")))]),t._v(" "),s("p",[t._v("\n            "+t._s(t.treeData&&t.treeData.childrenList?t.treeData.childrenList.length:0)+"\n          ")])])]),t._v(" "),s("base-btn",{attrs:{btnTitle:t.$t("task.txt70"),disabled:t.disabled},on:{btnClick:function(e){return t.share()}}})],1),t._v(" "),s("div",{staticClass:"my-rule"},[s("p",{staticClass:"rule-title"},[t._v(t._s(t.$t("task.txt107")))]),t._v(" "),s("div",{staticClass:"rule-txt"},t._l(4,function(e,a){return s("p",{key:a},[t._v("\n          "+t._s(t.$t("task.txt108["+a+"]"))+"\n        ")])}),0)]),t._v(" "),s("div",{staticClass:"my-rule",staticStyle:{"margin-top":"10px"}},[s("p",{staticClass:"rule-title"},[t._v(t._s(t.$t("task.txt109")))]),t._v(" "),s("div",{staticClass:"rule-txt"},t._l(4,function(e,a){return s("p",{key:a},[t._v("\n          "+t._s(t.$t("task.txt110["+a+"]"))+"\n        ")])}),0)])]),t._v(" "),s("sharePopup",{attrs:{show:t.showShare,link:t.link},on:{close:t.close}})],1)},staticRenderFns:[]};var m={components:{MyOtc:v,exchange:s("VU/8")(_,f,!1,function(t){s("+hfj")},"data-v-646f9157",null).exports},computed:i()({},Object(n.c)({userInfo:"user/userInfo"})),data:function(){return{active:0,showPop:!1,popTxt:"",tabList:[{title:this.$t("order.txt2"),index:0},{title:this.$t("order.txt3"),index:1}]}},beforeRouteEnter:function(t,e,s){s(function(t){var e=t.$route.query.active||"";e&&(t.active=1,t.itemClick(Number(e)))})},beforeRouteLeave:function(t,e,s){this.active=0,s()},mounted:function(){},methods:i()({},Object(n.b)({orderUserList:"order/orderUserList"}),{itemClick:function(t){this.active=t},isToday:function(t){var e=new Date(t.toString().replace(/-/g,"/")),s=new Date;return e.setHours(0,0,0,0)==s.setHours(0,0,0,0)},goexchange:function(t){this.showPop=!0,"WORKING"==t.status?this.popTxt=this.$t("order.txt7"):this.popTxt=this.$t("order.txt8")},popcon:function(){this.showPop=!1},popcan:function(){this.showPop=!1}})},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"exchange-all"},[e("div",{staticClass:"exchange-container"},[e("div",{staticClass:"exchange-box"},[e("exchange")],1)]),this._v(" "),e("pop-dialog",{ref:"dia",attrs:{show:this.showPop},on:{popcan:this.popcan,popcon:this.popcon}},[e("p",{staticClass:"pop-txt"},[this._v("\n      "+this._s(this.popTxt)+"\n    ")])])],1)},staticRenderFns:[]};var x=s("VU/8")(m,b,!1,function(t){s("Pbrk")},"data-v-fd51197e",null);e.default=x.exports}});