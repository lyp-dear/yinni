webpackJsonp([11],{C3qJ:function(t,e,s){t.exports=s.p+"static/img/SNAPCHAT.152b606.jpg"},CHO1:function(t,e,s){t.exports=s.p+"static/img/JOIN_TG_GROUP.1efec3a.jpg"},Cfu5:function(t,e,s){t.exports=s.p+"static/img/DISCORD.172731a.jpg"},YJIO:function(t,e,s){t.exports=s.p+"static/img/WHATS_APP.6ee397d.jpg"},"e/9K":function(t,e,s){t.exports=s.p+"static/img/TELEGRAM.48e3cdc.jpg"},"g+lP":function(t,e){},gPbv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Xxa5"),a=s.n(n),i=s("exGp"),o=s.n(i),r=s("Dd8w"),u=s.n(r),l=s("3pLw"),p=s("mrJ/"),h=s("NYxO"),c={mixins:[p.a],data:function(){return{videourl:"",sunshineImg:null,showShare:!1,link:"",showImg:!1,showError:null,imageUrls:[{type:"WHATS_APP",url:s("YJIO")},{type:"JOIN_TG_GROUP",url:s("CHO1")},{type:"JOIN_TG_GROUP",url:s("CHO1")},{type:"TELEGRAM",url:s("e/9K")},{type:"SUNSHINE_RECHARGE",url:s("hd/C")},{type:"SUNSHINE_WITHDRAWAL",url:s("nEk1")},{type:"SUNSHINE_PROFIT",url:s("YJIO")},{type:"DISCORD",url:s("Cfu5")},{type:"FACE_BOOK",url:s("kp16")},{type:"YOUTUBE",url:s("C3qJ")},{type:"ZALO",url:s("nJ96")}],images:[]}},computed:u()({},Object(h.c)({userInfo:"user/userInfo"}),{loginDisabled:function(){return!this.videourl},title:function(){var t="Facebook";return"FACE_BOOK"==this.type?t="Facebook":"JOIN_TG_GROUP"==this.type?t=this.$t("task.txt113"):"WHATS_APP"==this.type?t="WhatsApp":"YOUTUBE"==this.type?t="Youtube":"TELEGRAM"==this.type?t="Telegram":"SUNSHINE_PROFIT"==this.type?t="SunPower Show":"TIKTOK"==this.type?t="Tiktok":"ZALO"==this.type&&(t="Zalo"),t}}),created:function(){var t=this;this.type=this.$route.query.type||"",this.getLast();var e=this.imageUrls.find(function(e){return e.type==t.type});this.images.push(e.url)},mounted:function(){this.link="https://m.sunpowers.online/#/invite?code="+this.userInfo.symbolCode},methods:u()({},Object(h.b)({sunshineYoutube:"user/sunshineYoutube",sunshineLast:"user/sunshineLast"}),{isToday:function(t){var e=new Date(t.toString().replace(/-/g,"/")),s=new Date;return e.setHours(0,0,0,0)==s.setHours(0,0,0,0)},getLast:function(){var t=this,e={type:this.type};this.sunshineLast(e).then(function(e){0===e.code&&e.data&&(t.showError=e.data.enable,t.isToday(e.data.gmtCreate)&&(t.sunshineImg=e.data.url,"YOUTUBE"==t.type&&(t.videourl=e.data.url)))})},afterRead:function(t){var e=this;return o()(a.a.mark(function s(){var n;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(e.$toast.loading({message:e.$t("load.txt4"),duration:0,forbidClick:!0}),n=t.file,["image/jpeg","image/pjpeg","image/png"].includes(n.type)){s.next=7;break}return e.errDialog(e.$t("task.txt60")),s.abrupt("return");case 7:if(!(n.size.toFixed(2)>6291456)){s.next=10;break}return e.errDialog(e.$t("task.txt61")),s.abrupt("return");case 10:l.a.postFormData("/upload/sunshine",{file:n,type:e.type,folder:"file"}).then(function(t){0==t.code?(e.$toast.clear(),e.getLast(),e.sunshineImg=t.data,"FACE_BOOK"==e.type?localStorage.setItem("sun_shine_img1",e.sunshineImg):"YOUTUBE"==e.type?localStorage.setItem("sun_shine_img2",e.sunshineImg):"TWITTER"==e.type?localStorage.setItem("sun_shine_img3",e.sunshineImg):"WHATS_APP"==e.type?localStorage.setItem("sun_shine_img4",e.sunshineImg):"JOIN_TG_GROUP"==e.type?localStorage.setItem("sun_shine_img5",e.sunshineImg):"TELEGRAM"==e.type?localStorage.setItem("sun_shine_img6",e.sunshineImg):"SNAPCHAT"==e.type?localStorage.setItem("sun_shine_img7",e.sunshineImg):"WHATS_APP"==e.type?localStorage.setItem("sun_shine_img8",e.sunshineImg):"JOIN_TG_GROUP"==e.type?localStorage.setItem("sun_shine_img9",e.sunshineImg):"SUNSHINE_RECHARGE"==e.type?localStorage.setItem("sun_shine_img10",e.sunshineImg):"SUNSHINE_WITHDRAWAL"==e.type?localStorage.setItem("sun_shine_img11",e.sunshineImg):"SUNSHINE_PROFIT"==e.type?localStorage.setItem("sun_shine_img12",e.sunshineImg):"MOJ"==e.type&&localStorage.setItem("sun_shine_img13",e.sunshineImg),e.errDialog("Berhasil diunggah, sistem sedang ditinjau")):e.errDialog(t.msg)}).catch(function(t){e.$toast.clear()});case 11:case"end":return s.stop()}},s,e)}))()},share:function(){Number(localStorage.getItem("app_version")||0)>=103?this.showShare=!0:window.appInterface?this.shareApp():this.showShare=!0},shareApp:function(){var t=this,e=this.$t("task.txt66")+"："+this.link;window.webkit?window.webkit.messageHandlers.shareSocial.postMessage(e):window.appInterface?window.appInterface.shareSocial(e):this.$copyText(e).then(function(e){t.showDialog(t.$t("task.txt91"))},function(t){})},close:function(){this.showShare=!1},saveYoutube:function(){var t=this;/^https?:\/\/([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+/.test(this.videourl)?this.sunshineYoutube({url:this.videourl}).then(function(e){0==e.code&&(localStorage.setItem("sun_shine_img2",t.videourl),t.showDialog(t.$t("task.txt99")))}):this.errDialog(this.$t("task.txt98"))}})},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modMain",{staticClass:"noPadding share-up-main",attrs:{title:t.title+" "+t.$t("task.txt48"),btnTxt:t.$t("task.txt105")},on:{seeImg:function(e){t.showImg=!0}}},[s("div",{staticClass:"upload-box"},[["JOIN_TG_GROUP"==t.type?s("p",[t._v("\n        "+t._s(t.$t("task.txt111"))+"\n      ")]):"SUNSHINE_PROFIT"==t.type?s("p",[t._v("\n        "+t._s(t.$t("task.txt120"))+"\n      ")]):"YOUTUBE"==t.type?s("p",[t._v(t._s(t.$t("task.txt114")))]):"TIKTOK"==t.type?s("p",[t._v(t._s(t.$t("task.txt123")))]):s("p",[t._v("\n        "+t._s(t.$t("task.txt14"))+"\n      ")])],t._v(" "),["YOUTUBE"==t.type?s("p",[t._v("\n        "+t._s(t.$t("task.txt95"))+"\n      ")]):"TIKTOK"==t.type?s("p",[t._v("\n        "+t._s(t.$t("task.txt124"))+"\n      ")]):"JOIN_TG_GROUP"==t.type?s("p",[t._v("\n        "+t._s(t.$t("task.txt112"))+"\n      ")]):"SUNSHINE_PROFIT"==t.type?s("p",[t._v("\n        "+t._s(t.$t("task.txt121"))+"\n      ")]):s("p",[t._v("\n        "+t._s(t.$t("task.txt104[0]"))+t._s(t.title)+t._s(t.$t("task.txt104[1]"))+t._s(t.title)+t._s(t.$t("task.txt104[2]"))+"\n      ")])],t._v(" "),s("p",{staticStyle:{color:"red","margin-top":"10px"}},[t._v("\n      "+t._s(t.$t("task.txt119"))+"\n    ")]),t._v(" "),"YOUTUBE"==t.type?s("div",{staticClass:"shart-youtube"},[s("base-input",{attrs:{type:"text",placeholder:t.$t("task.txt96")},model:{value:t.videourl,callback:function(e){t.videourl=e},expression:"videourl"}})],1):s("div",{staticClass:"upload-btn share-img"},[s("van-uploader",{attrs:{"after-read":t.afterRead,accept:"image/*",deletable:!1,"max-count":1,disabled:t.sunshineImg}},[t.sunshineImg?s("van-image",{attrs:{width:"232",height:"149","lazy-load":"",src:t.imgBaseUrl+t.sunshineImg}}):s("div",{staticClass:"upload-bg"},[s("p",[t._v(t._s(t.$t("task.txt79")))])])],1),t._v(" "),0==t.showError?s("p",{staticClass:"error"},[t._v("\n        Unggah gambar yang salah, harap unggah yang benar besok\n      ")]):t._e(),t._v(" "),1==t.showError?s("p",{staticClass:"error"},[t._v("\n        Disetujui, silakan kembali ke daftar pencarian untuk mendapatkan\n        hadiah\n      ")]):t._e()],1)],2),t._v(" "),"JOIN_TG_GROUP"==t.type?s("base-btn",{attrs:{btnTitle:"Join",disabled:!1},on:{btnClick:function(e){return t.toService("tggroup")}}}):"YOUTUBE"!=t.type?s("base-btn",{attrs:{btnTitle:t.$t("task.txt48"),disabled:!1},on:{btnClick:function(e){return t.share()}}}):s("base-btn",{attrs:{btnTitle:t.$t("load.txt5"),disabled:t.loginDisabled},on:{btnClick:t.saveYoutube}}),t._v(" "),s("sharePopup",{attrs:{show:t.showShare,link:t.link},on:{close:t.close}}),t._v(" "),s("van-image-preview",{attrs:{images:t.images,closeable:""},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}}),t._v(" "),s("service")],1)},staticRenderFns:[]};var _=s("VU/8")(c,g,!1,function(t){s("g+lP")},"data-v-21873621",null);e.default=_.exports},"hd/C":function(t,e,s){t.exports=s.p+"static/img/SUNSHINE_RECHARGE.53dffb8.jpg"},kp16:function(t,e,s){t.exports=s.p+"static/img/FACE_BOOK.5944132.jpg"},nEk1:function(t,e,s){t.exports=s.p+"static/img/SUNSHINE_WITHDRAWAL.400e09d.jpg"},nJ96:function(t,e,s){t.exports=s.p+"static/img/ZALO.5bd2080.jpg"}});