(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"13b3":function(t,s,e){"use strict";var n=e("bbb9"),a=e.n(n);a.a},"2af9":function(t,s,e){"use strict";var n=e("f4dd"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"posts_list"},t._l(t.filteredPosts,(function(s,n){return e("div",{key:n,staticClass:"post_element"},[e("h3",{staticClass:"text_center"},[e("router-link",{attrs:{to:"/posts/"+s.id}},[t._v(" "+t._s(s.title)+" ")])],1),e("p",[e("span",[e("strong",[t._v("Body:")]),t._v(" "+t._s(s.body))])]),e("p",[e("router-link",{attrs:{to:"/user/"+s.userId}},[t._v(" User Profile ")])],1)])})),0)},r=[],o=e("365c"),i={name:"PostsList",props:{userId:{type:Number}},data(){return{posts:[]}},computed:{filteredPosts(){return this.userId?this.posts.filter(t=>t.userId===this.userId):this.posts}},async created(){await this.fetchPosts()},methods:{async fetchPosts(){const{data:t}=await Object(o["c"])();this.posts=t}}},c=i,u=(e("52cd"),e("2877")),l=Object(u["a"])(c,a,r,!1,null,"619dc34f",null),d=l.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comments_list"},t._l(t.comments,(function(s,n){return e("div",{key:n,staticClass:"comment_element"},[e("div",{staticClass:"author"},[t._v(" "+t._s(s.email)+" ")]),e("div",{staticClass:"info"},[e("p",[t._v("Name: "+t._s(s.name))]),e("p",[t._v("Body: "+t._s(s.body))])])])})),0)},f=[],p={name:"CommentsList",props:{postId:Number},data(){return{comments:[]}},watch:{async postId(t){t&&await this.fetchComments()}},methods:{async fetchComments(){const{data:t}=await Object(o["a"])(this.postId);this.comments=t}}},_=p,v=(e("13b3"),Object(u["a"])(_,m,f,!1,null,"e290923a",null)),h=v.exports;e.d(s,"b",(function(){return n["a"]})),e.d(s,"c",(function(){return d})),e.d(s,"a",(function(){return h}))},5239:function(t,s,e){},"52cd":function(t,s,e){"use strict";var n=e("5239"),a=e.n(n);a.a},bb51:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Navigation"),e("PostsList")],1)},a=[],r=e("2af9"),o={name:"home",components:{Navigation:r["b"],PostsList:r["c"]}},i=o,c=e("2877"),u=Object(c["a"])(i,n,a,!1,null,null,null);s["default"]=u.exports},bbb9:function(t,s,e){},f4dd:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[e("el-menu-item",[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("el-menu-item",[e("router-link",{attrs:{to:"/user/"+t.currentUser.id}},[t._v("User")])],1)],1)},a=[],r=e("2f62"),o={name:"Navigation",computed:{...Object(r["c"])(["currentUser"])}},i=o,c=e("2877"),u=Object(c["a"])(i,n,a,!1,null,null,null);s["a"]=u.exports}}]);
//# sourceMappingURL=home.142d83e5.js.map