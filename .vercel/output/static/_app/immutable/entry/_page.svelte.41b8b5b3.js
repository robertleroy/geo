import{S as kt,i as wt,s as Ct,k as l,q as d,a as _,l as a,m as o,r as v,h as i,c as u,n as r,b as jt,D as t,u as Lt,I as Rt}from"../chunks/index.48413d8c.js";function zt(h){var It,pt,gt,Dt,Et,Vt,bt,yt;let c,e,n,p,y,F,R=((It=h[0])==null?void 0:It.host)+"",w,J,g,H,K,M,k=((pt=h[0])==null?void 0:pt.hostname)+"",C,N,D,S,O,Q,nt=((gt=h[1])==null?void 0:gt.ip)+"",T,U,W,X,E,f,P,Y,Z,_t=((Dt=h[1])==null?void 0:Dt.city)+"",$,x,ut=((Et=h[1])==null?void 0:Et.region)+"",tt,et,q,ht=((Vt=h[1])==null?void 0:Vt.country)+"",lt,at,m,B,st,dt,ft=((bt=h[1])==null?void 0:bt.lat)+"",vt,it,mt=((yt=h[1])==null?void 0:yt.lon)+"",ot,rt,ct;return{c(){c=l("div"),e=l("div"),n=l("div"),p=l("div"),y=d("Host:"),F=_(),w=d(R),J=_(),g=l("div"),H=l("div"),K=d("Hostname:"),M=_(),C=d(k),N=_(),D=l("div"),S=l("div"),O=d("Ip:"),Q=_(),T=d(nt),U=_(),W=l("br"),X=_(),E=l("div"),f=l("div"),P=l("div"),Y=d("Location:"),Z=_(),$=d(_t),x=d(", "),tt=d(ut),et=_(),q=l("div"),lt=d(ht),at=_(),m=l("div"),B=l("div"),st=d("GPS:"),dt=_(),vt=d(ft),it=d(", "),ot=d(mt),rt=_(),ct=l("br"),this.h()},l(V){c=a(V,"DIV",{class:!0});var I=o(c);e=a(I,"DIV",{class:!0});var s=o(e);n=a(s,"DIV",{class:!0});var b=o(n);p=a(b,"DIV",{class:!0});var Ht=o(p);y=v(Ht,"Host:"),Ht.forEach(i),F=u(b),w=v(b,R),b.forEach(i),J=u(s),g=a(s,"DIV",{class:!0});var j=o(g);H=a(j,"DIV",{class:!0});var St=o(H);K=v(St,"Hostname:"),St.forEach(i),M=u(j),C=v(j,k),j.forEach(i),N=u(s),D=a(s,"DIV",{class:!0});var z=o(D);S=a(z,"DIV",{class:!0});var Pt=o(S);O=v(Pt,"Ip:"),Pt.forEach(i),Q=u(z),T=v(z,nt),z.forEach(i),U=u(s),W=a(s,"BR",{}),X=u(s),E=a(s,"DIV",{class:!0});var A=o(E);f=a(A,"DIV",{class:!0});var G=o(f);P=a(G,"DIV",{class:!0});var qt=o(P);Y=v(qt,"Location:"),qt.forEach(i),Z=u(G),$=v(G,_t),x=v(G,", "),tt=v(G,ut),G.forEach(i),et=u(A),q=a(A,"DIV",{class:!0});var Bt=o(q);lt=v(Bt,ht),Bt.forEach(i),A.forEach(i),at=u(s),m=a(s,"DIV",{class:!0});var L=o(m);B=a(L,"DIV",{class:!0});var Gt=o(B);st=v(Gt,"GPS:"),Gt.forEach(i),dt=u(L),vt=v(L,ft),it=v(L,", "),ot=v(L,mt),L.forEach(i),s.forEach(i),rt=u(I),ct=a(I,"BR",{}),I.forEach(i),this.h()},h(){r(p,"class","label svelte-tddgvl"),r(n,"class","host"),r(H,"class","label svelte-tddgvl"),r(g,"class","hostname"),r(S,"class","label svelte-tddgvl"),r(D,"class","ip"),r(P,"class","label svelte-tddgvl"),r(f,"class","location"),r(q,"class","country"),r(E,"class","row svelte-tddgvl"),r(B,"class","label svelte-tddgvl"),r(m,"class","gps svelte-tddgvl"),r(e,"class","location"),r(c,"class","my_page svelte-tddgvl")},m(V,I){jt(V,c,I),t(c,e),t(e,n),t(n,p),t(p,y),t(n,F),t(n,w),t(e,J),t(e,g),t(g,H),t(H,K),t(g,M),t(g,C),t(e,N),t(e,D),t(D,S),t(S,O),t(D,Q),t(D,T),t(e,U),t(e,W),t(e,X),t(e,E),t(E,f),t(f,P),t(P,Y),t(f,Z),t(f,$),t(f,x),t(f,tt),t(E,et),t(E,q),t(q,lt),t(e,at),t(e,m),t(m,B),t(B,st),t(m,dt),t(m,vt),t(m,it),t(m,ot),t(c,rt),t(c,ct)},p(V,[I]){var s,b;I&1&&R!==(R=((s=V[0])==null?void 0:s.host)+"")&&Lt(w,R),I&1&&k!==(k=((b=V[0])==null?void 0:b.hostname)+"")&&Lt(C,k)},i:Rt,o:Rt,d(V){V&&i(c)}}}function At(h,c,e){let{data:n}=c;const{location:p}=n;return h.$$set=y=>{"data"in y&&e(0,n=y.data)},[n,p]}class Jt extends kt{constructor(c){super(),wt(this,c,At,zt,Ct,{data:0})}}export{Jt as default};
