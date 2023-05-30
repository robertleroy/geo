import{S as Ee,i as Ie,s as ye,k as p,q as s,a as m,l as u,m as v,r as n,h as l,c as g,n as E,b as Ct,F as t,P as te,y as De,z as Ve,p as Ce,A as Ne,u as I,g as Se,d as we,B as Ge,N as ee,O as Le}from"../chunks/index.764ff3e9.js";import{c as ge,i as Oe,m as Pe}from"../chunks/store.3c6a101a.js";function Je(o){let c,_,e,h,N=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">ipLocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dev <span class="token operator">?</span> ipapi <span class="token operator">:</span> vercel<span class="token operator">-</span>ip
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">geolocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  success <span class="token operator">?</span> geoData <span class="token operator">:</span> ipData
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">apiFetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){c=p("h2"),_=s("Notes"),e=m(),h=p("pre"),this.h()},l(d){c=u(d,"H2",{});var r=v(c);_=n(r,"Notes"),r.forEach(l),e=g(d),h=u(d,"PRE",{class:!0});var G=v(h);G.forEach(l),this.h()},h(){E(h,"class","language-js")},m(d,r){Ct(d,c,r),t(c,_),Ct(d,e,r),Ct(d,h,r),h.innerHTML=N},p:te,i:te,o:te,d(d){d&&l(c),d&&l(e),d&&l(h)}}}class be extends Ee{constructor(c){super(),Ie(this,c,null,Je,ye,{})}}function Re(o){var ae,se,ne,le,oe,ie,ce,re,pe,ue,ve;let c,_,e,h,N,d,r,G=((ae=o[1])==null?void 0:ae.ip)+"",pt,Nt,P,St,wt,y,A=((se=o[1])==null?void 0:se.city)+"",ut,Gt,B=((ne=o[1])==null?void 0:ne.region)+"",vt,Lt,T=((le=o[1])==null?void 0:le.country)+"",dt,Ot,J,Pt,Jt,S,W=((oe=o[1])==null?void 0:oe.lat)+"",ft,bt,K=((ie=o[1])==null?void 0:ie.lon)+"",_t,Rt,b,jt,qt,R,Ft,Ht,j,Mt,zt,q,Q=(o[2]??"")+"",kt,At,F,Bt,Tt,D,U=(((ce=o[0])==null?void 0:ce.city)??"")+"",ht,Wt,X=(((re=o[0])==null?void 0:re.region)??"")+"",mt,Kt,Y=(((pe=o[0])==null?void 0:pe.country)??"")+"",gt,Qt,H,Ut,Xt,w,Z=(((ue=o[0])==null?void 0:ue.lat)??"")+"",Et,Yt,$=(((ve=o[0])==null?void 0:ve.lon)??"")+"",It,Zt,x,tt=JSON.stringify(o[1],0,2)+"",yt,$t,et,at=(JSON.stringify(o[0],0,2)??"loading...")+"",Dt,xt,M,L,k;return L=new be({}),{c(){c=p("div"),_=p("div"),e=p("div"),h=p("div"),N=s("Ip:"),d=m(),r=p("div"),pt=s(G),Nt=m(),P=p("div"),St=s("Ip City:"),wt=m(),y=p("div"),ut=s(A),Gt=s(", "),vt=s(B),Lt=s("   "),dt=s(T),Ot=m(),J=p("div"),Pt=s("Ip Coords:"),Jt=m(),S=p("div"),ft=s(W),bt=s(", "),_t=s(K),Rt=m(),b=p("div"),jt=s("-"),qt=m(),R=p("div"),Ft=s("-"),Ht=m(),j=p("div"),Mt=s("Geolocation:"),zt=m(),q=p("div"),kt=s(Q),At=m(),F=p("div"),Bt=s("Geo City"),Tt=m(),D=p("div"),ht=s(U),Wt=s(", "),mt=s(X),Kt=s("   "),gt=s(Y),Qt=m(),H=p("div"),Ut=s("Geo Coords"),Xt=m(),w=p("div"),Et=s(Z),Yt=s(", "),It=s($),Zt=m(),x=p("pre"),yt=s(tt),$t=m(),et=p("pre"),Dt=s(at),xt=m(),M=p("div"),De(L.$$.fragment),this.h()},l(i){c=u(i,"DIV",{class:!0});var f=v(c);_=u(f,"DIV",{});var V=v(_);e=u(V,"DIV",{class:!0});var a=v(e);h=u(a,"DIV",{class:!0});var st=v(h);N=n(st,"Ip:"),st.forEach(l),d=g(a),r=u(a,"DIV",{class:!0});var nt=v(r);pt=n(nt,G),nt.forEach(l),Nt=g(a),P=u(a,"DIV",{class:!0});var lt=v(P);St=n(lt,"Ip City:"),lt.forEach(l),wt=g(a),y=u(a,"DIV",{class:!0});var C=v(y);ut=n(C,A),Gt=n(C,", "),vt=n(C,B),Lt=n(C,"   "),dt=n(C,T),C.forEach(l),Ot=g(a),J=u(a,"DIV",{class:!0});var ot=v(J);Pt=n(ot,"Ip Coords:"),ot.forEach(l),Jt=g(a),S=u(a,"DIV",{class:!0});var O=v(S);ft=n(O,W),bt=n(O,", "),_t=n(O,K),O.forEach(l),Rt=g(a),b=u(a,"DIV",{class:!0});var it=v(b);jt=n(it,"-"),it.forEach(l),qt=g(a),R=u(a,"DIV",{class:!0});var ct=v(R);Ft=n(ct,"-"),ct.forEach(l),Ht=g(a),j=u(a,"DIV",{class:!0});var rt=v(j);Mt=n(rt,"Geolocation:"),rt.forEach(l),zt=g(a),q=u(a,"DIV",{class:!0});var de=v(q);kt=n(de,Q),de.forEach(l),At=g(a),F=u(a,"DIV",{class:!0});var fe=v(F);Bt=n(fe,"Geo City"),fe.forEach(l),Tt=g(a),D=u(a,"DIV",{class:!0});var z=v(D);ht=n(z,U),Wt=n(z,", "),mt=n(z,X),Kt=n(z,"   "),gt=n(z,Y),z.forEach(l),Qt=g(a),H=u(a,"DIV",{class:!0});var _e=v(H);Ut=n(_e,"Geo Coords"),_e.forEach(l),Xt=g(a),w=u(a,"DIV",{class:!0});var Vt=v(w);Et=n(Vt,Z),Yt=n(Vt,", "),It=n(Vt,$),Vt.forEach(l),a.forEach(l),Zt=g(V),x=u(V,"PRE",{});var ke=v(x);yt=n(ke,tt),ke.forEach(l),$t=g(V),et=u(V,"PRE",{});var he=v(et);Dt=n(he,at),he.forEach(l),V.forEach(l),xt=g(f),M=u(f,"DIV",{style:!0});var me=v(M);Ve(L.$$.fragment,me),me.forEach(l),f.forEach(l),this.h()},h(){E(h,"class","key"),E(r,"class","value"),E(P,"class","key"),E(y,"class","value"),E(J,"class","key"),E(S,"class","value"),E(b,"class","value"),E(R,"class","key"),E(j,"class","value"),E(q,"class","key"),E(F,"class","value"),E(D,"class","key"),E(H,"class","value"),E(w,"class","key"),E(e,"class","locationData svelte-1d4mx0x"),Ce(M,"flex","1"),E(c,"class","page svelte-1d4mx0x")},m(i,f){Ct(i,c,f),t(c,_),t(_,e),t(e,h),t(h,N),t(e,d),t(e,r),t(r,pt),t(e,Nt),t(e,P),t(P,St),t(e,wt),t(e,y),t(y,ut),t(y,Gt),t(y,vt),t(y,Lt),t(y,dt),t(e,Ot),t(e,J),t(J,Pt),t(e,Jt),t(e,S),t(S,ft),t(S,bt),t(S,_t),t(e,Rt),t(e,b),t(b,jt),t(e,qt),t(e,R),t(R,Ft),t(e,Ht),t(e,j),t(j,Mt),t(e,zt),t(e,q),t(q,kt),t(e,At),t(e,F),t(F,Bt),t(e,Tt),t(e,D),t(D,ht),t(D,Wt),t(D,mt),t(D,Kt),t(D,gt),t(e,Qt),t(e,H),t(H,Ut),t(e,Xt),t(e,w),t(w,Et),t(w,Yt),t(w,It),t(_,Zt),t(_,x),t(x,yt),t(_,$t),t(_,et),t(et,Dt),t(c,xt),t(c,M),Ne(L,M,null),k=!0},p(i,[f]){var V,a,st,nt,lt,C,ot,O,it,ct,rt;(!k||f&2)&&G!==(G=((V=i[1])==null?void 0:V.ip)+"")&&I(pt,G),(!k||f&2)&&A!==(A=((a=i[1])==null?void 0:a.city)+"")&&I(ut,A),(!k||f&2)&&B!==(B=((st=i[1])==null?void 0:st.region)+"")&&I(vt,B),(!k||f&2)&&T!==(T=((nt=i[1])==null?void 0:nt.country)+"")&&I(dt,T),(!k||f&2)&&W!==(W=((lt=i[1])==null?void 0:lt.lat)+"")&&I(ft,W),(!k||f&2)&&K!==(K=((C=i[1])==null?void 0:C.lon)+"")&&I(_t,K),(!k||f&4)&&Q!==(Q=(i[2]??"")+"")&&I(kt,Q),(!k||f&1)&&U!==(U=(((ot=i[0])==null?void 0:ot.city)??"")+"")&&I(ht,U),(!k||f&1)&&X!==(X=(((O=i[0])==null?void 0:O.region)??"")+"")&&I(mt,X),(!k||f&1)&&Y!==(Y=(((it=i[0])==null?void 0:it.country)??"")+"")&&I(gt,Y),(!k||f&1)&&Z!==(Z=(((ct=i[0])==null?void 0:ct.lat)??"")+"")&&I(Et,Z),(!k||f&1)&&$!==($=(((rt=i[0])==null?void 0:rt.lon)??"")+"")&&I(It,$),(!k||f&2)&&tt!==(tt=JSON.stringify(i[1],0,2)+"")&&I(yt,tt),(!k||f&1)&&at!==(at=(JSON.stringify(i[0],0,2)??"loading...")+"")&&I(Dt,at)},i(i){k||(Se(L.$$.fragment,i),k=!0)},o(i){we(L.$$.fragment,i),k=!1},d(i){i&&l(c),Ge(L)}}}function je(o,c,_){let e,h,N;ee(o,ge,r=>_(0,e=r)),ee(o,Oe,r=>_(1,h=r)),ee(o,Pe,r=>_(2,N=r));let{form:d}=c;return o.$$set=r=>{"form"in r&&_(3,d=r.form)},o.$$.update=()=>{o.$$.dirty&8&&Le(ge,e=d==null?void 0:d.newLocation,e)},[e,h,N,d]}class He extends Ee{constructor(c){super(),Ie(this,c,je,Re,ye,{form:3})}}export{He as component};