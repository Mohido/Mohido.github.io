function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as D,$ as Y,g as G,s as at,M as st,S as it,r as lt,f as ct,a as H,h as ut,l as j,e as p,T as dt,E as _t,q as N,U as mt,w as ft}from"./q-DJJFedoV.js";import{t as pt,j as K,k as O,r as Z,m as tt,l as et,n as W,o as vt,q as yt,v as ht,w as A,x as b,y as St,z as Ct,A as Et,B as wt,c as qt,C as bt,d as gt,D as Rt,R as Lt,e as Pt,f as At,h as Dt,i as It}from"./q-B6_91X9W.js";const kt=":root{view-transition-name:none}";const Tt=()=>D(()=>import("./q-B5YK3Toy.js"),__vite__mapDeps([])),J=[["/",[Tt,()=>D(()=>import("./q-By4kT1vM.js"),__vite__mapDeps([]))]]],Q=[];const B=!0;const Ut=async(v,n)=>{const[y,S,a,C]=Y(),{type:i="link",forceReload:_=v===void 0,replaceState:m=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=v===void 0?l:pt(v,C.url);if(!K(o,l)){location.href=o.href;return}if(!_&&O(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),Z(i,o,new URL(location.href),tt()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:E},et(o,G()),W(J,Q,B,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(w=>{S.r=w})},xt=({track:v})=>{const[n,y,S,a,C,i,_,m,E,l,o]=Y();async function w(){var X;const[u,g]=v(()=>[l.value,n.value]),ot=at(""),R=o.url,d=g?"form":u.type,nt=u.replaceState;let r,L,M=null,I;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let k=W(J,Q,B,r.pathname);I=G();const T=L=await et(r,I,{action:g,clearCache:!0});if(!T){l.untrackedValue={type:d,dest:r};return}const U=T.href,x=new URL(U,r);vt(x,r)||(r=x,k=W(J,Q,B,r.pathname));try{M=await k}catch{window.location.href=U;return}}if(M){const[k,T,U,x]=M,P=U,rt=P[P.length-1];o.prevUrl=R,o.url=r,o.params={...T},l.untrackedValue={type:d,dest:r};const q=yt(L,o,P,ot);y.headings=rt.headings,y.menu=x,S.value=st(P),a.links=q.links,a.meta=q.meta,a.styles=q.styles,a.scripts=q.scripts,a.title=q.title,a.frontmatter=q.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let $;d==="popstate"&&($=tt()),(u.scroll&&(!u.forceReload||!O(r,R))&&(d==="link"||d==="popstate")||d==="form"&&!O(r,R))&&(document.__q_scroll_restore__=()=>Z(d,r,R,$));const F=L==null?void 0:L.loaders,t=window;if(F&&Object.assign(_,F),ht.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,f=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||b(document.documentElement),e);history.pushState=(e,c,V)=>(e=h(e),s.call(history,e,c,V)),history.replaceState=(e,c,V)=>(e=h(e),f.call(history,e,c,V))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const f=s.target.closest("a[href]");if(f&&!f.hasAttribute("preventdefault:click")){const h=f.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(K(c,e)&&O(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),A({...b(document.documentElement),x:0,y:0}),location.reload();return}i(f.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=b(document.documentElement);A(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=b(document.documentElement);A(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(X=t._qCityBootstrap)==null||X.remove(),t._qCityBootstrap=void 0,St.resolve()}if(d!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=b(document.documentElement);A(s)}Ct(window,d,R,r,nt),it(I).then(()=>{var h;Et(I).setAttribute("q:route",k);const f=b(document.documentElement);A(f),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=m.r)==null||h.call(m)})}}}w()},Ht=v=>{lt(N(()=>D(()=>Promise.resolve().then(()=>z),void 0),"s_RPDJAz33WLA"));const n=wt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=ct("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=H({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=ut(H(n.response.loaders,{deep:!1})),_=j({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),m=H(qt),E=H({headings:void 0,menu:void 0}),l=j(),o=n.response.action,w=o?n.response.loaders[o]:void 0,u=j(w?{id:o,data:n.response.formData,output:{result:w,status:n.response.status}}:void 0),g=N(()=>D(()=>Promise.resolve().then(()=>z),void 0),"s_fX0bDjeJa0E",[u,C,_,a]);return p(bt,E),p(gt,l),p(Rt,m),p(Lt,a),p(Pt,g),p(At,i),p(Dt,u),p(It,_),dt(N(()=>D(()=>Promise.resolve().then(()=>z),void 0),"s_02wMImzEAbk",[u,E,l,m,n,g,i,C,v,_,a])),_t(mt,null,3,"qY_0")},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:ft,s_02wMImzEAbk:xt,s_RPDJAz33WLA:kt,s_TxCFOy819ag:Ht,s_fX0bDjeJa0E:Ut},Symbol.toStringTag,{value:"Module"}));export{ft as _hW,xt as s_02wMImzEAbk,kt as s_RPDJAz33WLA,Ht as s_TxCFOy819ag,Ut as s_fX0bDjeJa0E};