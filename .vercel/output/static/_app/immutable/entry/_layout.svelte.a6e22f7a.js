import{S as j,i as w,s as z,C as B,k as p,q as M,a as H,l as m,m as g,r as R,h as f,c as q,n as u,b as D,D as d,E as J,F as K,G as O,g as P,d as Q,H as T,I as U}from"../chunks/index.e3c2d60e.js";function G(o,t,l){const n=o.slice();return n[3]=t[l],n}function L(o){let t,l,n=o[3].name+"",r,v;return{c(){t=p("div"),l=p("a"),r=M(n),v=H(),this.h()},l(h){t=m(h,"DIV",{class:!0});var i=g(t);l=m(i,"A",{href:!0});var E=g(l);r=R(E,n),E.forEach(f),v=q(i),i.forEach(f),this.h()},h(){u(l,"href",o[3].path),u(t,"class","route")},m(h,i){D(h,t,i),d(t,l),d(l,r),d(t,v)},p:U,d(h){h&&f(t)}}}function W(o){let t,l,n,r,v,h,i,E,y,k,$,A=o[0],s=[];for(let e=0;e<A.length;e+=1)s[e]=L(G(o,A,e));const I=o[2].default,c=B(I,o,o[1],null);return{c(){t=p("header"),l=p("div"),n=p("div"),r=p("a"),v=M("Vercel App"),h=H(),i=p("nav");for(let e=0;e<s.length;e+=1)s[e].c();E=H(),y=p("main"),k=p("div"),c&&c.c(),this.h()},l(e){t=m(e,"HEADER",{class:!0});var _=g(t);l=m(_,"DIV",{class:!0});var a=g(l);n=m(a,"DIV",{class:!0});var V=g(n);r=m(V,"A",{href:!0,target:!0,rel:!0});var C=g(r);v=R(C,"Vercel App"),C.forEach(f),V.forEach(f),h=q(a),i=m(a,"NAV",{class:!0});var N=g(i);for(let b=0;b<s.length;b+=1)s[b].l(N);N.forEach(f),a.forEach(f),_.forEach(f),E=q(e),y=m(e,"MAIN",{});var S=g(y);k=m(S,"DIV",{class:!0});var F=g(k);c&&c.l(F),F.forEach(f),S.forEach(f),this.h()},h(){u(r,"href","https://geo-nine-teal.vercel.app/"),u(r,"target","_blank"),u(r,"rel","noopener noreferrer"),u(n,"class","title"),u(i,"class","svelte-1hmy21k"),u(l,"class","flex svelte-1hmy21k"),u(t,"class"," svelte-1hmy21k"),u(k,"class","router svelte-1hmy21k")},m(e,_){D(e,t,_),d(t,l),d(l,n),d(n,r),d(r,v),d(l,h),d(l,i);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(i,null);D(e,E,_),D(e,y,_),d(y,k),c&&c.m(k,null),$=!0},p(e,[_]){if(_&1){A=e[0];let a;for(a=0;a<A.length;a+=1){const V=G(e,A,a);s[a]?s[a].p(V,_):(s[a]=L(V),s[a].c(),s[a].m(i,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=A.length}c&&c.p&&(!$||_&2)&&J(c,I,e,e[1],$?O(I,e[1],_,null):K(e[1]),null)},i(e){$||(P(c,e),$=!0)},o(e){Q(c,e),$=!1},d(e){e&&f(t),T(s,e),e&&f(E),e&&f(y),c&&c.d(e)}}}function X(o,t,l){let{$$slots:n={},$$scope:r}=t;const v=[{name:"Home",path:"/"}];return o.$$set=h=>{"$$scope"in h&&l(1,r=h.$$scope)},[v,r,n]}class Z extends j{constructor(t){super(),w(this,t,X,W,z,{})}}export{Z as default};
