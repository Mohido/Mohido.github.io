import{_ as k,t as ae,j as K,k as P,Q as G,r as Z,m as $,l as ee,n as N,o as ie,q as le,v as D,w as q,x as ce,y as ue,z as de,A as _e,c as fe,C as pe,d as me,D as ve,R as ye,e as Se,f as he,h as Ce,i as be}from"./q-DlGxqtQN.js";import{h as te,v as oe,x as ge,n as Ee,y as we,A as qe,a as Le,r as z,B as Re,s as V,t as y,C as Ie,m as Ae,q as Q,S as De,z as Pe}from"./q-VvH6Aqsg.js";const ke=":root{view-transition-name:none}",Te=Object.freeze(Object.defineProperty({__proto__:null,s_RPDJAz33WLA:ke},Symbol.toStringTag,{value:"Module"}));const xe=()=>k(()=>import("./q-Bm4Aci23.js"),[]),W=[["/",[xe,()=>k(()=>import("./q-NHGfHptq.js"),[])]]],B=[];const J=!0;const Oe=async(u,n)=>{const[S,b,s,g]=te(),{type:i="link",forceReload:f=u===void 0,replaceState:p=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n};if(typeof u=="number"){history.go(u);return}const l=s.value.dest,o=u===void 0?l:ae(u,g.url);if(!K(o,l)){location.href=o.href;return}if(!f&&P(o,l)){{i==="link"&&o.href!==location.href&&history.pushState(null,"",o);const m=document.getElementById(G)??document.documentElement;Z(i,o,new URL(location.href),m,$()),i==="popstate"&&(window._qCityScrollEnabled=!0)}return}return s.value={type:i,dest:o,forceReload:f,replaceState:p,scroll:E},ee(o,oe()),N(W,B,J,o.pathname),S.value=void 0,g.isNavigating=!0,new Promise(m=>{b.r=m})},je=Object.freeze(Object.defineProperty({__proto__:null,s_fX0bDjeJa0E:Oe},Symbol.toStringTag,{value:"Module"})),Ue=({track:u})=>{const[n,S,b,s,g,i,f,p,E,l,o]=te();async function m(){var X;const[d,L]=u(()=>[l.value,n.value]),ne=ge(""),R=o.url,_=L?"form":d.type,re=d.replaceState;let r,I,H=null,T;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let x=N(W,B,J,r.pathname);T=oe();const O=I=await ee(r,T,{action:L,clearCache:!0});if(!O){l.untrackedValue={type:_,dest:r};return}const j=O.href,U=new URL(j,r);P(U,r)||(r=U,x=N(W,B,J,r.pathname));try{H=await x}catch{window.location.href=j;return}}if(H){const[x,O,j,U]=H,A=j,se=A[A.length-1];o.prevUrl=R,o.url=r,o.params={...O},l.untrackedValue={type:_,dest:r};const w=ie(I,o,A,ne);S.headings=se.headings,S.menu=U,b.value=Ee(A),s.links=w.links,s.meta=w.meta,s.styles=w.styles,s.scripts=w.scripts,s.title=w.title,s.frontmatter=w.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let Y;_==="popstate"&&(Y=$());const h=document.getElementById(G)??document.documentElement;(d.scroll&&(!d.forceReload||!P(r,R))&&(_==="link"||_==="popstate")||_==="form"&&!P(r,R))&&(document.__q_scroll_restore__=()=>Z(_,r,R,h,Y));const F=I==null?void 0:I.loaders,e=window;if(F&&Object.assign(f,F),le.clear(),!e._qCitySPA){if(e._qCitySPA=!0,history.scrollRestoration="manual",e.addEventListener("popstate",()=>{e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),i(location.href,{type:"popstate"})}),e.removeEventListener("popstate",e._qCityInitPopstate),e._qCityInitPopstate=void 0,!e._qCityHistoryPatch){e._qCityHistoryPatch=!0;const a=history.pushState,v=history.replaceState,C=t=>(t===null||typeof t>"u"?t={}:(t==null?void 0:t.constructor)!==Object&&(t={_data:t}),t._qCityScroll=t._qCityScroll||q(h),t);history.pushState=(t,c,M)=>(t=C(t),a.call(history,t,c,M)),history.replaceState=(t,c,M)=>(t=C(t),v.call(history,t,c,M))}document.body.addEventListener("click",a=>{if(a.defaultPrevented)return;const v=a.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const C=v.getAttribute("href"),t=new URL(location.href),c=new URL(C,t);if(K(c,t)&&P(c,t)){if(a.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==t.href&&history.pushState(null,"",c),e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),D({...q(h),x:0,y:0}),location.reload();return}i(v.getAttribute("href"))}}}),document.body.removeEventListener("click",e._qCityInitAnchors),e._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(e._qCityScrollEnabled&&document.visibilityState==="hidden"){const a=q(h);D(a)}},{passive:!0}),document.removeEventListener("visibilitychange",e._qCityInitVisibility),e._qCityInitVisibility=void 0),e.addEventListener("scroll",()=>{e._qCityScrollEnabled&&(clearTimeout(e._qCityScrollDebounce),e._qCityScrollDebounce=setTimeout(()=>{const a=q(h);D(a),e._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",e._qCityInitScroll),e._qCityInitScroll=void 0,(X=e._qCityBootstrap)==null||X.remove(),e._qCityBootstrap=void 0,ce.resolve()}if(_!=="popstate"){e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce);const a=q(h);D(a)}ue(window,_,R,r,re),we(T).then(()=>{var C;de(T).setAttribute("q:route",x);const v=q(h);D(v),e._qCityScrollEnabled=!0,o.isNavigating=!1,(C=p.r)==null||C.call(p)})}}}m()},ze=Object.freeze(Object.defineProperty({__proto__:null,_hW:Pe,s_02wMImzEAbk:Ue},Symbol.toStringTag,{value:"Module"})),Ve=u=>{qe(Q(()=>k(()=>Promise.resolve().then(()=>Te),void 0),"s_RPDJAz33WLA"));const n=_e();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const S=Le("url");if(!S)throw new Error("Missing Qwik URL Env Data");const b=new URL(S),s=z({url:b,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),g={},i=Re(z(n.response.loaders,{deep:!1})),f=V({type:"initial",dest:b,forceReload:!1,replaceState:!1,scroll:!0}),p=z(fe),E=z({headings:void 0,menu:void 0}),l=V(),o=n.response.action,m=o?n.response.loaders[o]:void 0,d=V(m?{id:o,data:n.response.formData,output:{result:m,status:n.response.status}}:void 0),L=Q(()=>k(()=>Promise.resolve().then(()=>je),void 0),"s_fX0bDjeJa0E",[d,g,f,s]);return y(pe,E),y(me,l),y(ve,p),y(ye,s),y(Se,L),y(he,i),y(Ce,d),y(be,f),Ie(Q(()=>k(()=>Promise.resolve().then(()=>ze),void 0),"s_02wMImzEAbk",[d,E,l,p,n,L,i,g,u,f,s])),Ae(De,null,3,"qY_0")};export{Ue as a,Ve as b,Oe as s,ke as s_RPDJAz33WLA};
