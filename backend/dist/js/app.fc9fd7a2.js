(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],f=0,u=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar",{attrs:{lang:e.lang},on:{"switch-lang":e.switchLang}}),n("main",{staticClass:"content"},[n("div",{staticClass:"container is-max-desktop p-2"},[n("b-message",{staticClass:"is-info mb-2",attrs:{title:"en"===e.lang?"Welcome!":"Добро пожаловать! ","aria-close-label":"en"===e.lang?"Close message":"Закрыть"}},["en"===e.lang?n("div",[n("p",[e._v("Welcome to the World News Aggregator, a single source that compiles unabridged, up-to-date articles about world news from the BBC, AP, and Reuters in one place.")]),n("p",[e._v("This site will always be accessible, but if you want to access other websites blocked by the government, you can follow these instructions to set up a free VPN (Virtual Private Network).")]),n("ol",[n("li",[e._v("Download and install the "),n("a",{attrs:{href:"https://psiphon.ca/en/download.html?psiphonca",target:"_blank"}},[e._v(" Psiphon app")]),e._v(" that matches your device type. ")]),n("li",[e._v("Open the app and Connect.")]),n("li",[e._v('You can change the server region by opening settings (the gear icon) and changing the "Select server region" setting. ')]),n("li",[e._v("You are now free to browse sites unrestricted.")])])]):e._e(),"ru"===e.lang?n("div",[n("p",[e._v("Добро пожаловать в Агрегатор мировых новостей, единый ресурс, который представляет полные и актуальные статьи о мировых новостях от надежных независимых источников.")]),n("p",[e._v("Этот сайт всегда будет доступен, а если вы хотите получить доступ к другим веб-сайтам, заблокированным правительством, вы можете настроить бесплатную VPN (виртуальную частную сеть), следуя этим инструкциям.")]),n("ol",[n("li",[e._v("Загрузите и установите приложение "),n("a",{attrs:{href:"https://psiphon.ca/ru/download.html?psiphonca",target:"_blank"}},[e._v(" Psiphon")]),e._v(" для вашего устройства. ")]),n("li",[e._v("Запустите приложение и нажмите «Старт».")]),n("li",[e._v("Вы можете изменить страну сервера, открыв настройки (значок шестеренки) и кликнув «Выбор региона сервера». ")]),n("li",[e._v("Теперь вы можете свободно просматривать веб-сайты без ограничений.")])]),n("p",[e._v("Для просмотра подробной инструкции пройдите по "),n("a",{attrs:{href:"https://www.currenttime.tv/block",target:"_blank"}},[e._v("ссылке")]),e._v(".")])]):e._e()]),e._l(e.articles,(function(t,s){return n("Article",{key:"article-"+s,attrs:{title:t.title,link:t.link,content:t.content,source:t.source,timestamp:t.date,loading:e.loading,lang:e.lang,open:"open"===e.openCards[s],index:s},on:{"switch-open":e.switchOpen}})}))],2)]),n("Footer",{attrs:{lang:e.lang}})],1)},r=[],i=n("1da1"),o=(n("96cf"),n("cb29"),n("d3b7"),n("159b"),n("7db0"),n("9911"),n("a4d3"),n("e01a"),n("4de4"),n("4e82"),n("ac1f"),n("1276"),n("caad"),n("2532"),n("c740"),n("a434"),n("99af"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-navbar",{attrs:{"mobile-burger":!1},scopedSlots:e._u([{key:"brand",fn:function(){return[s("b-navbar-item",[s("b-navbar-item",[s("img",{attrs:{src:n("f1dc"),alt:"World News Aggregator Logo"}})]),s("b-navbar-item",{class:{"p-0":e.isMobile}},[e.isMobile?s("strong",[e._v("WNA")]):s("strong",[e._v(e._s("en"===e.lang?"World News Aggregator":"Агрегатор мировых новостей"))])])],1),s("b-navbar-item",{attrs:{tag:"div"}},[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-primary",on:{click:e.switchLang}},[s("strong",[e._v(e._s("en"===e.lang?"русский ":"English"))])])])])]},proxy:!0}])})}),l=[],c={name:"Navbar",props:{lang:{type:String,default:"en"}},data:function(){return{isMobile:window.innerWidth<768}},methods:{switchLang:function(){this.$emit("switch-lang")}}},d=c,f=n("2877"),u=Object(f["a"])(d,o,l,!1,null,"4cbcb24e",null),b=u.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer has-background-grey-dark has-text-light p-3"},[n("p",[e._v(e._s("en"===e.lang?"World News Aggregator":"Агрегатор мировых новостей"))])])},p=[],h={name:"Footer",props:{lang:{type:String,default:"en"}}},j=h,m=Object(f["a"])(j,g,p,!1,null,"1c9d5fc6",null),v=m.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-collapse",{staticClass:"card mb-4",attrs:{animation:"slide","aria-id":"contentIdForA11y3",open:e.open},on:{open:function(t){return e.$emit("switch-open",e.index)}},scopedSlots:e._u([{key:"trigger",fn:function(t){return[n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3","aria-expanded":t.open}},[n("div",{staticClass:"is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center ml-3"},[e.loading?e._e():n("a",{staticClass:"card-header-title m-0 pb-0 pl-2",attrs:{href:e.link,target:"_blank"}},[e._v(e._s(e.title))]),e.loading?e._e():n("div",{staticClass:"is-flex is-flex-direction-row is-marginless is-paddingless"},[n("span",{staticClass:"subtitle m-0 px-2"},[e._v(e._s(e.source)+" - ")]),"en"===e.lang?n("vue-moments-ago",{staticClass:"subtitle",attrs:{prefix:"posted",suffix:"ago",date:e.timestamp,lang:"en"}}):e._e(),"ru"===e.lang?n("span",{staticClass:"subtitle"},[e._v(" "+e._s(e.timestamp.toLocaleString("ru-RU")))]):e._e()],1),n("b-skeleton",{attrs:{size:"is-medium",width:"75%",active:e.loading}})],1),n("a",{staticClass:"card-header-icon"},[t.open?n("div",[n("svg",{staticClass:"svg-inline--fa fa-angle-down",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-down",role:"img","xmlns:href":"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[n("path",{attrs:{fill:"#363636",d:"M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"}})])]):n("div",[n("svg",{staticClass:"svg-inline--fa fa-angle-up",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-up",role:"img","xmlns:href":"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[n("path",{attrs:{fill:"#363636",d:"M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"}})])])])])]}}])},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[e.loading?e._e():n("div",e._l(e.content,(function(t,s){return n("p",{key:"paragraph-"+s},[e._v(e._s(t))])})),0),n("b-skeleton",{attrs:{size:"is-medium",active:e.loading,count:3}})],1)])])},_=[],y=(n("a9e3"),n("523e")),k={name:"Article",components:{VueMomentsAgo:y["a"]},props:{lang:{type:String,default:"en"},loading:{type:Boolean,default:!0},title:{type:String,default:"Title"},timestamp:{default:(new Date).toLocaleDateString()},source:{type:String,default:"Source"},content:{type:String||Array,default:"This is sample content."},link:{type:String,default:""},open:{type:Boolean,default:!1},index:{type:Number}}},C=k,x=Object(f["a"])(C,w,_,!1,null,"927ece44",null),A=x.exports,z=n("bc3a"),S=n.n(z),O=n("083c"),P=n.n(O),N={name:"App",components:{Navbar:b,Footer:v,Article:A},data:function(){return{loading:!0,skeleton_length:20,articles:new Array(this.skeleton_length).fill(-1),lang:"en",eng_sources:["ap","bbc","reuters"],openCards:new Array(this.skeleton_length).fill("closed")}},mounted:function(){localStorage.getItem("lang")&&(this.lang=localStorage.getItem("lang")),this.loadArticles()},methods:{loadArticles:function(){if(this.articles=new Array(this.skeleton_length).fill(-1),this.openCards=new Array(this.skeleton_length).fill("closed"),this.loading=!0,"en"===this.lang)for(var e=0;e<this.eng_sources.length;e++)this.makeApiCall(this.eng_sources[e]);else"ru"===this.lang&&this.makeApiCall("bbc_ru")},makeApiCall:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:S.a.get("/rss_feed?source="+e).then((function(e){P.a.parseStringPromise(e.data).then((function(e){e.rss.channel[0].item.forEach((function(n){!t.articles.find((function(e){return e.link===n.link[0]}))&&n.description&&t.articles.unshift({title:n.title[0],description:n.description[0],content:t.parseContent(n.description[0]),date:new Date(n.pubDate[0]),link:n.link[0],source:e.rss.channel[0].title[0]})})),t.articles=t.articles.filter((function(e){return-1!==e&&e.content.length>0})),t.articles.sort((function(e,t){return t.date-e.date})),t.openCards=new Array(t.articles.length).fill("closed"),t.loading=!1})).catch((function(e){console.log(e),t.$buefy.toast.open({duration:5e3,message:"en"===t.lang?"Something went wrong trying to load news articles.":"Что-то пошло не так. Пожалуйста, повторите попытку позже",position:"is-bottom",type:"is-danger"})}))}));case 1:case"end":return n.stop()}}),n)})))()},switchLang:function(){"en"===this.lang?(this.lang="ru",localStorage.setItem("lang","ru")):"ru"===this.lang&&(this.lang="en",localStorage.setItem("lang","en")),this.loadArticles()},switchOpen:function(e){"open"===this.openCards[e]?this.$set(this.openCards,e,"closed"):this.$set(this.openCards,e,"open")},parseContent:function(e){var t=e.split(/[<].*?[>]/);t=t.filter((function(e){return!e.toLowerCase().includes("read more")&&!e.includes("Warning: ")&&e.length>0&&e!==e.toUpperCase()}));var n=t.findIndex((function(e){return e.toLowerCase().includes("send us your questions")}));n>-1&&t.splice(n,t.length-1);var s=t.findIndex((function(e){return e.includes("WATCH: ")}));s>-1&&t.splice(s,t.length-1);var a=[],r=0;return t.forEach((function(e,n){"."!==e.charAt(e.length-1)&&'"'!==e.charAt(e.length-1)&&"?"!==e.charAt(e.length-1)&&"!"!==e.charAt(e.length-1)&&(a.includes(n)||(r=n),t[r]=t[r].concat(t[n+1]),a.push(n+1))})),t=t.filter((function(e,t){return!a.includes(t)})),t}}},L=N,M=(n("034f"),Object(f["a"])(L,a,r,!1,null,null,null)),I=M.exports,W=n("289d"),$=(n("5abe"),n("ecee")),E=n("c074"),T=n("ad3d");$["c"].add([E["f"],E["e"],E["b"],E["c"],E["a"],E["d"],E["g"],E["j"],E["i"],E["h"]]),s["a"].component("vue-fontawesome",T["a"]),s["a"].use(W["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(I)}}).$mount("#app")},"85ec":function(e,t,n){},f1dc:function(e,t,n){e.exports=n.p+"img/ru-rss.460735b3.png"}});
//# sourceMappingURL=app.fc9fd7a2.js.map