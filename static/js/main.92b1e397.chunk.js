(this["webpackJsonpreddit-clone"]=this["webpackJsonpreddit-clone"]||[]).push([[0],{91:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),i=c(13),u=c(4),l=c(3),d=c(1),o=function(e){var t=e.onClick,c=e.children;return Object(d.jsx)("div",{className:"border-gray radius-1 flex",onClick:t,children:c})},j=c(9),b=c(44),f=c(30),O=function(e){var t=e.type,c=e.preference,n=e.onClick,a={like:"#6dc16d",dislike:"#ca7979",neutral:"#bdbbbb"};return Object(d.jsx)("div",{onClick:n,className:"cursor-pointer",children:Object(d.jsx)(b.a,{icon:"like"===t?f.b:f.a,color:c[t]?a[t]:a.neutral,className:"icon-size"})})},h=function(e){var t=e.likes,c=a.a.useState({like:!1,dislike:!1,value:0}),n=Object(u.a)(c,2),r=n[0],s=n[1];return a.a.useEffect((function(){s((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:t})}))}),[t]),Object(d.jsxs)("div",{className:"py-22 pl-30 flex column align-center justify-between",children:[Object(d.jsx)(O,{type:"like",preference:r,onClick:function(){return s((function(e){return{like:!e.like,dislike:!1,value:e.like?t:t+1}}))}}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:r.value})}),Object(d.jsx)(O,{type:"dislike",preference:r,onClick:function(){return s((function(e){return{like:!1,dislike:!e.dislike,value:e.dislike?t:t-1}}))}})]})},p=c(46),x=function(e){var t=e.title,c=e.description,n=e.details,a=e.onClick;return Object(d.jsxs)("div",{className:"py-20 px-30 cursor-pointer",style:{flex:1},onClick:a,children:[t&&Object(d.jsx)("div",{children:Object(d.jsx)("h4",{className:"mb-14",children:t})}),c&&Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"text-light-gray ",children:c})}),n&&Object(d.jsxs)("div",{className:"mt-12 flex justify-between",children:[Object(d.jsx)("span",{className:"text-light-gray",children:Object(d.jsx)("small",{children:Object(d.jsxs)("a",{href:"#",children:["/u/",n.user]})})}),Object(d.jsx)("span",{className:"text-light-gray",children:Object(d.jsx)("small",{children:Object(d.jsx)(p.a,{date:n.createdAt})})})]})]})},v=c(19),m=c.n(v),y=c(6),g=c.n(y),k=c(15),S=c(11),N=c(12),w=c.n(N),E=function(e){var t=a.a.useState(!0),c=Object(u.a)(t,2),n=c[0],r=c[1],s=a.a.useState([]),i=Object(u.a)(s,2),l=i[0],d=i[1],o=a.a.useState(!1),j=Object(u.a)(o,2),b=j[0],f=j[1],O=a.a.useState(!1),h=Object(u.a)(O,2),p=h[0],x=h[1],v=function(){var t=Object(S.a)(g.a.mark((function t(){var c,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get("https://6040c786f34cf600173c8cb7.mockapi.io/subreddits"+"?page=".concat(e,"&limit=10"));case 3:return c=t.sent,t.next=6,c.data;case 6:0===(n=t.sent).length?f(!0):d((function(e){return[].concat(Object(k.a)(e),Object(k.a)(n))})),r(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),x(!0),r(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){v()}),[e]),[n,l,b,p]},C=function(){var e=Object(l.e)(),t=e.subredditID,c=e.postID,n=a.a.useState(!0),r=Object(u.a)(n,2),s=r[0],i=r[1],d=a.a.useState([]),o=Object(u.a)(d,2),j=o[0],b=o[1],f=a.a.useState(!1),O=Object(u.a)(f,2),h=O[0],p=O[1],x=function(){var e=Object(S.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/".concat(t,"/posts/").concat(c,"/comments"));case 3:return n=e.sent,e.next=6,n.data;case 6:a=e.sent,b(a),i(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),p(!0),i(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){x()}),[]),[s,j,h]},D=function(e,t){var c=Object(l.e)().subredditID,n=a.a.useState(!0),r=Object(u.a)(n,2),s=r[0],i=r[1],d=a.a.useState([]),o=Object(u.a)(d,2),j=o[0],b=o[1],f=a.a.useState(!1),O=Object(u.a)(f,2),h=O[0],p=O[1],x=a.a.useState(!1),v=Object(u.a)(x,2),m=v[0],y=v[1],N=function(){var n=Object(S.a)(g.a.mark((function n(){var a,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.a.get("https://6040c786f34cf600173c8cb7.mockapi.io/subreddits"+"/".concat(c,"/posts?page=").concat(e,"&limit=10&sortBy=").concat(t));case 3:return a=n.sent,n.next=6,a.data;case 6:0===(r=n.sent).length?p(!0):b((function(e){return[].concat(Object(k.a)(e),Object(k.a)(r))})),i(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),y(!0),i(!1);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return a.a.useEffect((function(){return b([])}),[t]),a.a.useEffect((function(){return N()}),[t,e]),[s,j,h,m]};function I(e){var t=a.a.useState(!1),c=Object(u.a)(t,2),n=c[0],r=c[1],s=new IntersectionObserver((function(e){var t=Object(u.a)(e,1)[0];return r(t.isIntersecting)}));return a.a.useEffect((function(){return void 0!==e.current&&s.observe(e.current),function(){s.disconnect()}}),[]),n}var A=function(){var e=Object(l.e)().subredditID,t=a.a.useState(!0),c=Object(u.a)(t,2),n=c[0],r=c[1],s=a.a.useState([]),i=Object(u.a)(s,2),d=i[0],o=i[1],j=a.a.useState(!1),b=Object(u.a)(j,2),f=b[0],O=(b[1],a.a.useState(!1)),h=Object(u.a)(O,2),p=h[0],x=h[1],v=function(){var t=Object(S.a)(g.a.mark((function t(){var c,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get("https://6040c786f34cf600173c8cb7.mockapi.io/subreddits"+"/".concat(e));case 3:return c=t.sent,t.next=6,c.data;case 6:n=t.sent,o(n),r(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),x(!0),r(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){v()}),[]),[n,d,f,p]},P=function(){var e=Object(l.e)(),t=e.subredditID,c=e.postID,n=a.a.useState(!0),r=Object(u.a)(n,2),s=r[0],i=r[1],d=a.a.useState([]),o=Object(u.a)(d,2),j=o[0],b=o[1],f=a.a.useState(!1),O=Object(u.a)(f,2),h=O[0],p=O[1],x=function(){var e=Object(S.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://6040c786f34cf600173c8cb7.mockapi.io/subreddits"+"/".concat(t,"/posts/").concat(c));case 3:return n=e.sent,e.next=6,n.data;case 6:a=e.sent,b(a),i(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),p(!0),i(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){return x()}),[]),[s,j,h]},U="MAIN/SET_HEADER_DESCRIBER",R=function(e){return{type:U,headerDescriber:e}};var B=function(e){var t=e.pageStates,c=e.setPageState,n=Object(l.d)(),r=Object(i.b)(),s=a.a.useRef(),j=a.a.useState(1),b=Object(u.a)(j,2),f=b[0],O=b[1],h=E(f),p=Object(u.a)(h,4),v=p[0],y=p[1],g=p[2],k=p[3],S=I(s);return a.a.useEffect((function(){r(R({title:"subreddits",byUser:""}))}),[]),a.a.useEffect((function(){g||S&&O((function(e){return e+1}))}),[S,y]),a.a.useEffect((function(){if(k)return c(t.error);c(t.neutral)}),[v]),Object(d.jsxs)("div",{className:"grid p-38 m-auto",children:[y.map((function(e,t){return Object(d.jsx)(o,{onClick:function(){return n("/r/".concat(e.id))},children:Object(d.jsx)(x,{title:e.title,description:e.description})},t)})),Object(d.jsx)("div",{ref:s,className:"flex-center",children:g?"You've reached the end":Object(d.jsx)(m.a,{type:"spin",width:"40px",color:"lightgray"})})]})},F=function(e){var t=e.pageStates,c=e.setPageState,n=Object(i.b)(),r=P(),s=Object(u.a)(r,3),l=s[0],j=s[1],b=s[2],f=C(),O=Object(u.a)(f,3),p=O[0],v=O[1],m=O[2];return a.a.useEffect((function(){n(R({title:"".concat(j.title),byUser:j.user}))}),[j]),a.a.useEffect((function(){if(b||m)return c(t.error);l||p||c(t.neutral)}),[l,p]),Object(d.jsxs)("div",{className:"p-30 m-auto",style:{width:"100%",maxWidth:900},children:[Object(d.jsx)("div",{children:Object(d.jsxs)(o,{children:[Object(d.jsx)(h,{likes:j.upvotes}),Object(d.jsx)(x,{title:j.title,description:j.body,details:{user:j.user,createdAt:j.createdAt}})]})}),Object(d.jsxs)("div",{className:"m-auto mobile-full-width",style:{width:"86%"},children:[Object(d.jsx)("div",{className:"py-20 text-light-gray",children:"Comments"}),v.map((function(e,t){return Object(d.jsx)("div",{className:"mb-30",children:Object(d.jsx)(o,{children:Object(d.jsx)(x,{description:e.body,details:{user:e.name,createdAt:e.createdAt}},t)})},t)}))]})]})},H=c(45),T=function(e){var t=e.pageStates,c=e.setPageState,n=Object(i.b)(),r=[{value:"title",label:"Title"},{value:"date",label:"Date"}],s=Object(l.d)(),j=a.a.useRef(),b=a.a.useState("date"),f=Object(u.a)(b,2),O=f[0],p=f[1],v=a.a.useState(1),y=Object(u.a)(v,2),g=y[0],k=y[1],S=I(j),N=A(),w=Object(u.a)(N,3),E=w[0],C=w[1],P=w[2],U=D(g,O),B=Object(u.a)(U,4),F=B[0],T=B[1],W=B[2],z=B[3];return a.a.useEffect((function(){n(R({title:"/r/".concat(C.title||""),byUser:""}))}),[C]),a.a.useEffect((function(){(P||z)&&c(t.error),E||F||c(t.neutral)}),[E,F]),a.a.useEffect((function(){W||S&&k((function(e){return e+1}))}),[S,T]),Object(d.jsxs)("div",{className:"p-40 flex posts-size-medium",children:[Object(d.jsxs)("div",{className:"flex column",style:{flex:1},children:[Object(d.jsxs)("div",{className:"flex justify-end align-center",children:[Object(d.jsx)("span",{className:"mr-18",children:"Sort by"}),Object(d.jsx)(H.a,{options:r,defaultValue:r[1],onChange:function(e){k(1),p(e.value)}})]}),Object(d.jsxs)("div",{className:"mt-30 flex column align-end",children:[T.map((function(e,t){return Object(d.jsx)("div",{className:"pb-30",style:{maxWidth:750,width:"100%"},children:Object(d.jsx)("div",{children:Object(d.jsxs)(o,{children:[Object(d.jsx)(h,{likes:e.upvotes}),Object(d.jsx)(x,{onClick:function(){return s("".concat(e.id,"/comments"))},title:e.title,description:e.body,details:{user:e.user,createdAt:e.createdAt}})]},t)})},t)})),Object(d.jsx)("div",{ref:j,className:"flex-center",children:W?"You've reached the end":Object(d.jsx)(m.a,{type:"spin",width:"40px",color:"lightgray"})})]})]}),Object(d.jsx)("div",{style:{width:60}}),Object(d.jsx)("div",{className:"pb-30",style:{minWidth:500},children:Object(d.jsx)(o,{children:Object(d.jsx)(x,{title:C.title,description:C.description,details:{user:C.admin,createdAt:C.createdAt}})})})]})},W=function(){var e=Object(i.c)((function(e){return e.Header.headerDescriber})),t=Object(l.d)();return Object(d.jsxs)("div",{className:"px-38 p-30 flex align-center",style:{backgroundColor:"#545871",color:"white"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h2",{style:{margin:0,cursor:"pointer"},onClick:function(){return t({pathname:"/"})},children:Object(d.jsx)("b",{children:"reddit"})})}),Object(d.jsx)("div",{style:{width:25}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:e.title}),""!==e.byUser&&Object(d.jsxs)("span",{className:"ml-62",children:["by",Object(d.jsxs)("a",{className:"ml-12",style:{color:"#47e2ea"},children:["/u/",e.byUser]})]})]})]})},z=function(e){var t=e.children,c={loading:"loading",error:"error",neutral:"neutral"},n=a.a.useState(c.loading),r=Object(u.a)(n,2),s=r[0],i=r[1],l="neutral"!==s?{display:"none"}:{};return Object(d.jsxs)("div",{className:"flex column",style:{minHeight:"100vh"},children:[Object(d.jsx)(W,{}),Object(d.jsxs)("div",{style:{position:"relative",flex:1},children:[{loading:Object(d.jsx)("div",{className:"flex justify-center py-60",style:{width:"100%"},children:Object(d.jsx)(m.a,{type:"spin",color:"lightgray",width:47})}),error:Object(d.jsx)("div",{children:"Something went wrong! Please report this."}),neutral:null}[s],Object(d.jsx)("div",{style:Object(j.a)({},l),children:a.a.cloneElement(t,{pageStates:c,setPageState:i})})]})]})};var J=function(){return Object(l.g)([{path:"/",element:Object(d.jsx)(z,{children:Object(d.jsx)(B,{})})},{path:"r/:subredditID",element:Object(d.jsx)(z,{children:Object(d.jsx)(T,{})})},{path:"r/:subredditID/:postID/comments",element:Object(d.jsx)(z,{children:Object(d.jsx)(F,{})})}])},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,93)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},M=c(29),Y=(c(91),c(31)),_={Header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{headerDescriber:{title:"",byUser:""}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(j.a)(Object(j.a)({},e),{},{headerDescriber:t.headerDescriber})}return e}};var V=Object(Y.b)(Object(Y.a)(Object(j.a)({},_)));s.a.render(Object(d.jsx)(i.a,{store:V,children:Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(M.a,{children:Object(d.jsx)(J,{})})})}),document.getElementById("root")),L()}},[[92,1,2]]]);
//# sourceMappingURL=main.92b1e397.chunk.js.map