webpackJsonp([45],{"Eb0+":function(t,e){},WKGb:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("bOdI"),r=s.n(n),o=s("NYxO"),l={data:function(){var t;return t={link:"",showShare:!1,treeData:null},r()(t,"treeData",{totalContribution:0,yesterdayContribution:0,mobilePhone:""}),r()(t,"childrenCount",0),r()(t,"secondNodes",[]),r()(t,"animatedTop",!1),r()(t,"scrollTimer",null),r()(t,"broadData",[]),t},computed:i()({},Object(o.c)({userInfo:"user/userInfo"}),{ispt:function(){return"zh_CN"==(localStorage.getItem("locale")||"zh_CN")}}),mounted:function(){this.userInfo&&this.userInfo.username&&this.getData(),this.link="https://in.sunpoweronline.live/#/invite?code="+this.userInfo.symbolCode},methods:i()({},Object(o.b)({queryUserTreeNode:"user/queryUserTreeNode"}),{share:function(){Number(localStorage.getItem("app_version")||0)>=103?this.showShare=!0:window.appInterface?this.shareApp():this.showShare=!0},close:function(){this.showShare=!1},shareApp:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this.$t("task.txt66")+"："+this.link;window.webkit?window.webkit.messageHandlers.shareSocial.postMessage(t):window.appInterface&&window.appInterface.shareSocial(t)},getData:function(){var t=this;this.userInfo.id;this.queryUserTreeNode({}).then(function(e){if(0==e.code&&0==e.code&&(t.treeData=e.data[0],t.treeData)){t.secondNodes=t.treeData.childrenList||[];var s=0;t.secondNodes.forEach(function(e){s=Number(s)+Number(.1*(e.totalContribution||0)),t.childrenCount+=e.childrenList?e.childrenList.length:0,e.threeNodes=e.childrenList||[]}),t.treeData.totalIncomeContribution=t.treeData.totalContribution,t.treeData.totalIncome=(t.treeData.totalContribution||0)+Number(s)}})}})},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modMain",{staticClass:"share-friend noPadding",attrs:{title:t.$t("task.txt70")}},[s("div",{staticClass:"share-bg"},[s("p",{staticClass:"h1-title"},[s("i",[t._v("Arbitrage to earn money with friends")])]),t._v(" "),s("div",{staticClass:"share-friend-main"},[s("div",{staticClass:"my-box"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("task.txt71")))]),t._v(" "),s("div",{staticClass:"my-money"},[s("div",{staticClass:"my-money-info"},[s("p",[t._v(t._s(t.$t("task.txt72"))+"("+t._s(t.$utils.currencyType)+")")]),t._v(" "),s("p",[t._v(t._s(t.$utils.getPstr(t.treeData.totalIncomeContribution||0)))])]),t._v(" "),s("div",{staticClass:"my-money-info"},[s("p",[t._v(t._s(t.$t("task.txt73")))]),t._v(" "),s("p",[t._v("\n              "+t._s(t.treeData&&t.treeData.childrenList?t.treeData.childrenList.length:0)+"\n            ")])])]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(t.$t("task.txt106")))]),t._v(" "),s("div",{staticClass:"my-rule"},[s("p",{staticClass:"rule-title"},[t._v(t._s(t.$t("task.txt107")))]),t._v(" "),s("div",{staticClass:"rule-txt"},t._l(4,function(e,a){return s("p",{key:a},[t._v("\n              "+t._s(t.$t("task.txt108["+a+"]"))+"\n            ")])}),0)]),t._v(" "),s("div",{staticClass:"my-rule",staticStyle:{"margin-top":"10px"}},[s("p",{staticClass:"rule-title"},[t._v(t._s(t.$t("task.txt109")))]),t._v(" "),s("div",{staticClass:"rule-txt"},t._l(4,function(e,a){return s("p",{key:a},[t._v("\n              "+t._s(t.$t("task.txt110["+a+"]"))+"\n            ")])}),0)])])])]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){return t.share()}}},[t._v(t._s(t.$t("task.txt70")))]),t._v(" "),s("sharePopup",{attrs:{show:t.showShare,link:t.link},on:{close:t.close}})],1)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(t){s("Eb0+")},"data-v-5123c6be",null);e.default=u.exports}});