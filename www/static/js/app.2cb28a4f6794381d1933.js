webpackJsonp([1],{"/Zhu":function(t,e){},AqkA:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("j5iW"),s=i("8OAG"),r=(i("wj+B"),i("VC+z"),i("VXnA"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{sliding:""}},[e("f7-nav-left",[e("f7-link",{attrs:{"icon-f7":"icon-bars","panel-open":"left"}})],1),this._v(" "),e("f7-nav-title",[this._v("\n      Home\n    ")])],1),this._v(" "),e("f7-block-title",[this._v(this._s(this.title))]),this._v(" "),e("f7-block",{attrs:{inner:""}})],1)},staticRenderFns:[]}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{attrs:{name:"about"}},[i("f7-navbar",{attrs:{sliding:""}},[i("f7-nav-left",[i("f7-link",{attrs:{"icon-f7":"icon-bars","panel-open":"left"}})],1),t._v(" "),i("f7-nav-title",[t._v("\n      About\n    ")])],1),t._v(" "),i("f7-block-title",[t._v(t._s(t.title))]),t._v(" "),i("f7-block",{attrs:{inner:""}},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")]),t._v(" "),i("f7-list",[i("f7-list-item",{attrs:{link:"/about/another/",title:"Another Page"}})],1)],1)},staticRenderFns:[]},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{attrs:{name:"services"}},[i("f7-navbar",{attrs:{sliding:""}},[i("f7-nav-left",[i("f7-link",{attrs:{"icon-f7":"icon-bars","panel-open":"left"}})],1),t._v(" "),i("f7-nav-title",[t._v("\n      Services\n    ")])],1),t._v(" "),i("f7-block-title",[t._v(t._s(t.title))]),t._v(" "),i("f7-block",{attrs:{inner:""}},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")])],1)},staticRenderFns:[]},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",{attrs:{name:"another"}},[e("f7-navbar",{attrs:{"back-link":"Back",sliding:""}},[e("f7-nav-title",[this._v("\n      Another\n    ")])],1),this._v(" "),e("f7-block-title",[this._v(this._s(this.title))]),this._v(" "),e("f7-block",{attrs:{inner:""}},[this._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")])],1)},staticRenderFns:[]},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Not found","back-link":"Back"}}),this._v(" "),e("f7-block",{attrs:{strong:""}},[e("p",[this._v("Sorry")]),this._v(" "),e("p",[this._v("Requested content not found.")])])],1)},staticRenderFns:[]},f=[{path:"/",component:i("VU/8")({name:"Home",data:function(){return{title:"Dramatic Feedback"}}},r,!1,null,null,null).exports},{path:"/about/",component:i("VU/8")({name:"About",data:function(){return{title:"About Page"}}},l,!1,null,null,null).exports},{path:"/services/",component:i("VU/8")({name:"Services",data:function(){return{title:"Services Page"}}},o,!1,null,null,null).exports},{path:"/about/another/",component:i("VU/8")({name:"Another",data:function(){return{title:"Another Page"}}},c,!1,null,null,null).exports},{path:"(.*)",component:i("VU/8")({},u,!1,null,null,null).exports}],m={name:"LeftPanel",data:function(){return{isMaterial:window.isMaterial,isiOS:window.isiOS}},computed:{pageStyle:function(){return this.isiOS?"background-color: white;":""},panelEffect:function(){return this.isiOS?"reveal":"cover"}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-panel",{attrs:{left:"",reveal:t.isiOS,effect:t.panelEffect}},[i("f7-navbar",{attrs:{title:"Menu"}}),t._v(" "),i("f7-page",{style:t.pageStyle},[i("f7-block-title",[t._v("Links")]),t._v(" "),i("f7-list",[i("f7-list-item",{attrs:{link:"/",title:"Home","link-view":"#main-view","panel-close":"","reload-all":""}}),t._v(" "),i("f7-list-item",{attrs:{link:"/about/",title:"About","link-view":"#main-view","panel-close":"","reload-all":""}}),t._v(" "),i("f7-list-item",{attrs:{link:"/services/",title:"Services","link-view":"#main-view","panel-close":"","reload-all":""}})],1)],1)],1)},staticRenderFns:[]};var v={name:"App",components:{"left-panel-view":i("VU/8")(m,p,!1,function(t){i("AqkA")},"data-v-990b8430",null).exports},methods:{handleBackButton:function(){return document.querySelector(".panel-left.panel-active")?this.$f7.panel.close():document.querySelector(".modal-in")?this.$f7.popover.close():this.$f7.views.main.router.history.length>1?this.$f7.views.main.router.back():window.navigator.app.exitApp()}},computed:{isiOS:function(){return this.$theme.ios}},created:function(){document.addEventListener("backbutton",this.handleBackButton)}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("f7-statusbar"),this._v(" "),e("left-panel-view"),this._v(" "),e("f7-view",{attrs:{id:"main-view",url:"/",main:""}})],1)},staticRenderFns:[]};var h=i("VU/8")(v,d,!1,function(t){i("/Zhu")},null,null).exports;window.isMaterial=!a.a.device.ios,window.isiOS=a.a.device.ios,n.a.use(s.a,a.a);new n.a({el:"#app",template:"<app/>",framework7:{id:"io.framework7.testapp",name:"Framework7",theme:"auto",pushStateNoAnimation:!0,panel:{leftBreakpoint:960},routes:f},components:{app:h}})},"VC+z":function(t,e){},VXnA:function(t,e){},"wj+B":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2cb28a4f6794381d1933.js.map