webpackJsonp([1],{"/Zhu":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("j5iW"),s=n("8OAG"),o=(n("wj+B"),n("VC+z"),n("VXnA"),n("Xxa5")),r=n.n(o),l=n("exGp"),u=n.n(l),c=n("//Fk"),f=n.n(c),v={name:"Home",data:function(){return{title:"Dramatic Feed",authenticated:!1,user:"something"}},methods:{fsignIn:function(){this.authenticated=!0},oAuth:function(){return new f.a(function(t,e){window.plugins.googleplus.login({scopes:"https://www.googleapis.com/auth/spreadsheets",webClientId:"",offline:!0},function(e){t(e)},function(t){alert("error: "+t)})})},signIn:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.oAuth();case 2:t.user=e.sent,t.authenticated=!0,t.title="Hi welcome "+t.user.displayName;case 5:case"end":return e.stop()}},e,t)}))()}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{directives:[{name:"show",rawName:"v-show",value:!t.authenticated,expression:"!authenticated"}],attrs:{sliding:""}},[n("f7-nav-left",[n("f7-link",{attrs:{"icon-f7":"icon-bars","panel-open":"left"}})],1),t._v(" "),n("f7-nav-title",[t._v("\n      Home\n    ")])],1),t._v(" "),n("f7-navbar",{directives:[{name:"show",rawName:"v-show",value:t.authenticated,expression:"authenticated"}],attrs:{"back-link":"Logout",sliding:""}},[n("f7-nav-title",[t._v("\n      Logged In\n    ")])],1),t._v(" "),n("f7-block",{attrs:{inner:""}},[n("f7-block-title",[t._v(t._s(t.title))])],1),t._v(" "),n("f7-list",{directives:[{name:"show",rawName:"v-show",value:!t.authenticated,expression:"!authenticated"}]},[n("f7-list-button",{on:{click:t.signIn}},[t._v("Sign In")]),t._v(" "),n("f7-list-button",{on:{click:t.fsignIn}},[t._v("F Sign In")]),t._v(" "),n("f7-block-footer",[t._v("Sign in to Google")]),t._v(" "),n("p",[t._v("919100318693-o6ae41ihtvttf79nnncob92lsef0in30.apps.googleusercontent.com")]),t._v(" "),n("p",[t._v("O-ft97WleWf3mMQEZ7TW7Cpo")])],1),t._v(" "),n("f7-list",{directives:[{name:"show",rawName:"v-show",value:t.authenticated,expression:"authenticated"}]},[n("f7-list-button",{on:{click:function(e){t.$f7router.navigate("/students/")}}},[t._v("Students")]),t._v(" "),n("f7-list-button",{on:{click:function(e){t.$f7router.navigate("/performance/")}}},[t._v("Performance")]),t._v(" "),n("f7-list-button",{on:{click:function(e){t.$f7router.navigate("/settings/")}}},[t._v("Settings")]),t._v(" "),n("f7-list-button",{on:{click:function(e){t.$f7router.navigate("/session/")}}},[t._v("Start Session")])],1)],1)},staticRenderFns:[]},p=n("VU/8")(v,m,!1,null,null,null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{attrs:{name:"about"}},[n("f7-navbar",{attrs:{sliding:""}},[n("f7-nav-left",[n("f7-link",{attrs:{"icon-f7":"icon-bars","panel-open":"left"}})],1),t._v(" "),n("f7-nav-title",[t._v("\n      About\n    ")])],1),t._v(" "),n("f7-block-title",[t._v(t._s(t.title))]),t._v(" "),n("f7-block",{attrs:{inner:""}},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")]),t._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/about/another/",title:"Another Page"}})],1)],1)},staticRenderFns:[]},h=n("VU/8")({name:"About",data:function(){return{title:"About Page"}}},d,!1,null,null,null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",{attrs:{name:"another"}},[e("f7-navbar",{attrs:{"back-link":"Back",sliding:""}},[e("f7-nav-title",[this._v("\n      Another\n    ")])],1),this._v(" "),e("f7-block-title",[this._v(this._s(this.title))]),this._v(" "),e("f7-block",{attrs:{inner:""}},[this._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")])],1)},staticRenderFns:[]},g=n("VU/8")({name:"Another",data:function(){return{title:"Another Page"}}},_,!1,null,null,null).exports,b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Not found","back-link":"Back"}}),this._v(" "),e("f7-block",{attrs:{strong:""}},[e("p",[this._v("Sorry")]),this._v(" "),e("p",[this._v("Requested content not found.")])])],1)},staticRenderFns:[]},w=n("VU/8")({},b,!1,null,null,null).exports,k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{attrs:{name:"students"}},[n("f7-navbar",{attrs:{"back-link":"Back",sliding:""}},[n("f7-nav-title",[t._v("\n      Students\n    ")])],1),t._v(" "),n("f7-block-title",[t._v(t._s(t.title))]),t._v(" "),n("f7-block",{attrs:{inner:""}},[n("f7-list",[n("f7-list-item",[n("f7-label",[t._v("Name")]),t._v(" "),n("f7-input",{attrs:{type:"text",value:t.student.name,placeholder:"Name","clear-button":""},on:{input:function(e){t.student.name=e.target.value}}})],1),t._v(" "),n("f7-list-item",[n("f7-label",[t._v("Age")]),t._v(" "),n("f7-input",{attrs:{type:"number",value:t.student.age,placeholder:"Age","clear-button":""},on:{input:function(e){t.student.age=e.target.value}}})],1),t._v(" "),n("f7-list-item",[n("f7-label",[t._v("Gender")]),t._v(" "),n("f7-input",{attrs:{type:"select",value:t.student.gender,placeholder:"Gender","clear-button":""},on:{input:function(e){t.student.gender=e.target.value}}},[n("option",{attrs:{value:"Male"}},[t._v("Male")]),t._v(" "),n("option",{attrs:{value:"Female"}},[t._v("Female")])])],1),t._v(" "),n("f7-list-item",[n("f7-label",[t._v("School")]),t._v(" "),n("f7-input",{attrs:{type:"select",value:t.student.school,placeholder:"School","clear-button":""},on:{input:function(e){t.student.school=e.target.value}}},[n("option",{attrs:{value:"London"}},[t._v("London")]),t._v(" "),n("option",{attrs:{value:"Birmingham"}},[t._v("Birmingham")]),t._v(" "),n("option",{attrs:{value:"Manchester"}},[t._v("Manchester ")])])],1),t._v(" "),n("f7-list-item",[n("f7-label",[t._v("Start Date")]),t._v(" "),n("f7-input",{attrs:{type:"date",value:t.student.startdate,placeholder:"Start date","clear-button":""},on:{input:function(e){t.student.startdate=e.target.value}}})],1),t._v(" "),n("br"),t._v(" "),n("f7-button",{attrs:{"fill-ios":"true","big-ios":"true"}},[t._v("Add Student")])],1)],1),t._v(" "),n("p",[t._v(t._s(t.student))])],1)},staticRenderFns:[]},S=n("VU/8")({name:"Students",data:function(){return{title:"Students Page",student:{name:null,age:null,gender:null,school:null,startdate:null}}},methods:{addStudent:function(){this.student}}},k,!1,null,null,null).exports,x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",{attrs:{name:"after"}},[e("f7-block-title",[this._v(this._s(this.title))]),this._v(" "),e("f7-block",{attrs:{inner:""}},[this._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")]),this._v(" "),e("f7-list")],1)},staticRenderFns:[]},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{attrs:{name:"before"}},[n("f7-block-title",[t._v(t._s(t.title))]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(t.rangeValue))])],1)},staticRenderFns:[]},F={name:"Session",components:{AfterForm:n("VU/8")({name:"after",data:function(){return{title:"After Form"}}},x,!1,null,null,null).exports,BeforeForm:n("VU/8")({name:"before",data:function(){return{title:"Before Form",rangeValue:null}},methods:function(){}},A,!1,null,null,null).exports},data:function(){return{title:"Session Page",showQuestions:!1,showBefore:!1,showAfter:!1}},methods:{beforeForm:function(){this.showBefore=!0,this.showQuestions=!0},afterForm:function(){this.showAfter=!0,this.showQuestions=!0}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{attrs:{name:"Session"}},[n("f7-navbar",{attrs:{"back-link":"Back",sliding:""}},[n("f7-nav-title",[t._v("\n      Session\n    ")])],1),t._v(" "),n("f7-list",{directives:[{name:"show",rawName:"v-show",value:!t.showQuestions,expression:"!showQuestions"}]},[n("f7-list-button",{on:{click:t.beforeForm}},[t._v("Before")]),t._v(" "),n("f7-list-button",{on:{click:t.afterForm}},[t._v("After")])],1),t._v(" "),n("after-form",{directives:[{name:"show",rawName:"v-show",value:t.showAfter,expression:"showAfter"}]}),t._v(" "),n("before-form",{directives:[{name:"show",rawName:"v-show",value:t.showBefore,expression:"showBefore"}]})],1)},staticRenderFns:[]},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",{attrs:{name:"Performance"}},[e("f7-navbar",{attrs:{"back-link":"Back",sliding:""}},[e("f7-nav-title",[this._v("\n      Performance\n    ")])],1),this._v(" "),e("f7-block-title",[this._v(this._s(this.title))]),this._v(" "),e("f7-list")],1)},staticRenderFns:[]},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{attrs:{name:"Settings"}},[n("f7-navbar",{attrs:{"back-link":"Back",sliding:""}},[n("f7-nav-title",[t._v("\n      Settings\n    ")])],1),t._v(" "),n("f7-block-title",[t._v(t._s(t.title))]),t._v(" "),n("f7-block",{attrs:{inner:""}},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Distinctio est aliquam officiis quaerat placeat, cum explicabo magni\n    soluta totam maxime autem minima accusamus eos suscipit dignissimos\n    corporis modi voluptatum fugiat!\n  ")]),t._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/Settings/another/",title:"Another Page"}})],1)],1)},staticRenderFns:[]},E=[{path:"/",component:p},{path:"/about/",component:h},{path:"/about/another/",component:g},{path:"/students/",component:S},{path:"/session/",component:n("VU/8")(F,B,!1,null,null,null).exports},{path:"/performance/",component:n("VU/8")({name:"Performance",data:function(){return{title:"Performance Page"}}},$,!1,null,null,null).exports},{path:"/settings/",component:n("VU/8")({name:"Settings",data:function(){return{title:"Settings Page"}}},V,!1,null,null,null).exports},{path:"(.*)",component:w}],P={name:"LeftPanel",data:function(){return{isMaterial:window.isMaterial,isiOS:window.isiOS}},computed:{pageStyle:function(){return this.isiOS?"background-color: white;":""},panelEffect:function(){return this.isiOS?"reveal":"cover"}},methods:{logout:function(){window.plugins.googleplus.logout(function(t){alert(t)})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-panel",{attrs:{left:"",reveal:t.isiOS,effect:t.panelEffect}},[n("f7-navbar",{attrs:{title:"Menu"}}),t._v(" "),n("f7-page",{style:t.pageStyle},[n("f7-block-title",[t._v("Menu")]),t._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/",title:"Home","link-view":"#main-view","panel-close":"","reload-all":""}}),t._v(" "),n("f7-list-item",{attrs:{title:"Logout","link-view":"#main-view","panel-close":"","reload-all":""},on:{click:t.logout}})],1)],1)],1)},staticRenderFns:[]};var N={name:"App",components:{"left-panel-view":n("VU/8")(P,y,!1,function(t){n("vhfa")},"data-v-0c5c99d8",null).exports},methods:{handleBackButton:function(){return document.querySelector(".panel-left.panel-active")?this.$f7.panel.close():document.querySelector(".modal-in")?this.$f7.popover.close():this.$f7.views.main.router.history.length>1?this.$f7.views.main.router.back():window.navigator.app.exitApp()}},computed:{isiOS:function(){return this.$theme.ios}},created:function(){document.addEventListener("backbutton",this.handleBackButton)}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("f7-statusbar"),this._v(" "),e("left-panel-view"),this._v(" "),e("f7-view",{attrs:{id:"main-view",url:"/",main:""}})],1)},staticRenderFns:[]};var U=n("VU/8")(N,R,!1,function(t){n("/Zhu")},null,null).exports;window.isMaterial=!a.a.device.ios,window.isiOS=a.a.device.ios,i.a.use(s.a,a.a);new i.a({el:"#app",template:"<app/>",framework7:{id:"io.framework7.testapp",name:"Framework7",theme:"auto",pushStateNoAnimation:!0,panel:{leftBreakpoint:960},routes:E},components:{app:U}})},"VC+z":function(t,e){},VXnA:function(t,e){},vhfa:function(t,e){},"wj+B":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f6a86736bc8e177c6033.js.map