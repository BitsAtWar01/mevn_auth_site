(function(e){function t(t){for(var n,a,u=t[0],i=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1bde4ce4":"7eb527c1","chunk-2d217357":"196e59dc","chunk-2d21a3d2":"060a5535","chunk-2d22d746":"b25c6e0a","chunk-3473d334":"68df463d","chunk-6c8289f8":"b059d30c"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-1bde4ce4":1,"chunk-3473d334":1,"chunk-6c8289f8":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1bde4ce4":"f559cc3b","chunk-2d217357":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3473d334":"c0ba1da7","chunk-6c8289f8":"a4d8f279"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("br"),r("br"),r("div",{staticClass:"container"},[r("router-view"),r("Errors",{staticClass:"mt-3",attrs:{errors:e.errors}})],1)],1)},s=[],o=r("5530"),u=r("2f62"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Wanderling")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/",href:"#"}},[e._v("Home "),r("span",{staticClass:"sr-only"},[e._v("(current)")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about",href:"#"}},[e._v("About")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"Login",params:{role:"user"}},href:"#"}},[e._v("Login")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register",href:"#"}},[e._v("Register")])],1),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile",href:"#"}},[e._v("Profile")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{to:"/logout",href:"#"},on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[e._v("Logout")])]):e._e(),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/settings",href:"#"}},[r("svg",{staticClass:"bi bi-wrench",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"}})])])],1)])])])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l={computed:Object(o["a"])({},Object(u["c"])(["isLoggedIn"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},d=l,f=r("2877"),p=Object(f["a"])(d,i,c,!1,null,"6d80d5ae",null),g=p.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade",appear:""}},[e.errors?r("div",[r("h3",{staticClass:"text-danger"},[e._v("Errors:")]),r("ul",{staticClass:"list-group"},e._l(e.errors,(function(t){return r("li",{key:t,staticClass:"list-group-item list-group-item-danger"},[e._v(e._s(t.msg))])})),0)]):e._e()])},m=[],v={props:["errors"]},b=v,k=(r("a401"),Object(f["a"])(b,h,m,!1,null,"abf1ab5c",null)),_=k.exports,w={components:{Navbar:g,Errors:_},computed:Object(o["a"])({},Object(u["c"])(["errors"]))},C=w,y=Object(f["a"])(C,a,s,!1,null,null,null),O=y.exports,j=(r("45fc"),r("d3b7"),r("8c4f")),L=(r("96cf"),r("1da1")),x=r("bc3a"),S=r.n(x),E={token:localStorage.getItem("token")||"",user:{},status:"",errors:null},A={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},errors:function(e){return e.errors}},q={login:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("auth_request"),r.prev=2,r.next=5,S.a.post("/api/users/login-"+t.role,t.user);case 5:return a=r.sent,a.data.success&&(s=a.data.token,o=a.data.user,localStorage.setItem("token",s),S.a.defaults.headers.common["Authorization"]=s,n("auth_success",s,o)),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](2),n("auth_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},register:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("register_request"),r.next=5,S.a.post("/api/users/register-"+t.role,t.user);case 5:return a=r.sent,void 0!==a.data.success&&n("register_success"),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](1),n("register_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getProfile:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,S.a.get("/api/users/profile");case 4:return n=t.sent,r("user_profile",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete S.a.defaults.headers.common["Authorization"],M.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},I={auth_request:function(e){e.errors=null,e.status="loading"},auth_success:function(e,t,r){e.token=t,e.user=r,e.success="success",e.errors=null},auth_error:function(e,t){e.errors=t.response.data.errors,setTimeout((function(){e.errors=null}),5e3)},register_request:function(e){e.errors=null,e.success="loading"},register_success:function(e){e.errors=null,e.status="success"},register_error:function(e,t){e.errors=t.response.data.errors,setTimeout((function(){e.errors=null}),5e3)},logout:function(e){e.errors=null,e.status="",e.token="",e.user={}},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t}},P={state:E,actions:q,mutations:I,getters:A};n["a"].use(u["a"]);var T=new u["a"].Store({modules:{Auth:P},state:{},mutations:{},actions:{}});n["a"].use(j["a"]);var R=[{path:"/",name:"Home",component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return r.e("chunk-3473d334").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0},props:!0},{path:"/register",name:"Register",component:function(){return r.e("chunk-1bde4ce4").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:function(){return r.e("chunk-6c8289f8").then(r.bind(null,"26d3"))},meta:{requiresGuest:!0}}],N=new j["a"]({mode:"history",base:"/",routes:R});N.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?T.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&T.getters.isLoggedIn?r("/profile"):r()}));var M=N;n["a"].config.productionTip=!1,new n["a"]({router:M,store:T,render:function(e){return e(O)}}).$mount("#app")},"6e6a":function(e,t,r){},a401:function(e,t,r){"use strict";var n=r("6e6a"),a=r.n(n);a.a}});
//# sourceMappingURL=app.6a278470.js.map