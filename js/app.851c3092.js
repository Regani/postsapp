(function(e){function t(t){for(var r,o,a=t[0],c=t[1],i=t[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==u[a]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u={app:0},s=[];function a(e){return c.p+"js/"+({home:"home",login:"login",notFound:"notFound",post:"post",user:"user"}[e]||e)+"."+{home:"142d83e5",login:"9eb57b2e",notFound:"6677abbb",post:"79c2e703",user:"e6a9bbd8"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={home:1,login:1,post:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({home:"home",login:"login",notFound:"notFound",post:"post",user:"user"}[e]||e)+"."+{home:"c73b59d5",login:"0fd8bcc0",notFound:"31d6cfe0",post:"c73b59d5",user:"31d6cfe0"}[e]+".css",u=c.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===u))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){i=d[a],l=i.getAttribute("data-href");if(l===r||l===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||u,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/postsapp/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"365c":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n("bc3a"),o=n.n(r);const u="https://jsonplaceholder.typicode.com",s=o.a.create({baseURL:u});async function a(e){return s.get(`/users/${e}`)}async function c(){return s.get("/users")}async function i(){return s.get("/posts")}async function l(e){return s.get(`/posts/${e}`)}async function d(e){return s.get(`/comments?postId=${e}`)}},"4e16":function(e,t,n){"use strict";var r=n("6793"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("router-view")],1)])},u=[],s=(n("5c0b"),n("4e16"),n("2877")),a={},c=Object(s["a"])(a,o,u,!1,null,"000e1433",null),i=c.exports,l=n("8c4f");const d=()=>n.e("home").then(n.bind(null,"bb51")),f=()=>n.e("login").then(n.bind(null,"a55b")),p=()=>n.e("user").then(n.bind(null,"1511")),h=()=>n.e("notFound").then(n.bind(null,"9703")),m=()=>n.e("post").then(n.bind(null,"37d3"));r["default"].use(l["a"]);const g=[{path:"/",name:"home",meta:{requiresAuth:!0},component:d},{path:"/login",name:"login",meta:{requiresAuth:!1},component:f},{path:"/user/:id",name:"user",meta:{requiresAuth:!0},component:p},{path:"/posts/:id",name:"post",meta:{requiresAuth:!0},component:m},{path:"/404",name:"notFound",meta:{requiresAuth:!1},component:h},{path:"*",redirect:"/404"}],b=new l["a"]({mode:"history",routes:g});var v=b;function y(e){return e("/login")}function w(e){return e.state.token||""}function j(e,t){e.beforeEach((e,n,r)=>{const o=e.matched.some(e=>e.meta.requiresAuth);if(!o)return r();const u=w(t);return u?r():y(r)})}var k=n("2f62"),O=n("0e44"),_=n("365c");function A(){return new k["a"].Store({plugins:[Object(O["a"])({key:"posts_app"})],state:()=>({user:{},token:""}),actions:{async loginUser({commit:e},t){const{data:n}=await Object(_["e"])(),r=n.find(e=>e.email===t);if(!r)throw{message:"No such user, check the list of users here at jsonplaceholder"};const o=`${r.email}_${r.id}`;e("setUser",r),e("setToken",o)}},mutations:{setUser(e,t){e.user=t},setToken(e,t){e.token=t}},getters:{currentUser:e=>e.user}})}r["default"].use(k["a"]);var E=n("5c96"),P=n.n(E);n("0fae");r["default"].use(P.a),r["default"].config.productionTip=!1;const S=A();j(v,S),new r["default"]({router:v,store:S,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6793:function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.851c3092.js.map