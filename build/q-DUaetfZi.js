import{t as ie,j as G,k as j,Q as Z,r as $,m as ee,l as te,n as W,o as le,q as ce,v as ue,w as P,x as b,y as de,z as _e,A as me,B as ve,c as fe,C as pe,d as ye,D as he,R as Se,e as Ce,f as Ee,h as we,i as ge}from"./q-BhE8VWTo.js";import{u as oe,p as ne,r as qe,s as be,t as Le,h as Re,v as Ie,n as H,w as De,e as z,o as y,x as Pe,d as Ae,q as M,S as ke,j as Te}from"./q-vabwtRAL.js";import{_ as A}from"./q-uemlvruI.js";const xe=":root{view-transition-name:none}";const Ue=()=>A(()=>import("./q-ChRiA5GJ.js"),[]),B=[["/",[Ue,()=>A(()=>import("./q-DzY91BGd.js"),[])]]],J=[];const X=!0;const Oe=async(u,n)=>{const[h,E,s,w]=oe(),{type:i="link",forceReload:m=u===void 0,replaceState:v=!1,scroll:g=!0}=typeof n=="object"?n:{forceReload:n};if(typeof u=="number"){history.go(u);return}const l=s.value.dest,o=u===void 0?l:ie(u,w.url);if(!G(o,l)){location.href=o.href;return}if(!m&&j(o,l)){{i==="link"&&o.href!==location.href&&history.pushState(null,"",o);const f=document.getElementById(Z)??document.documentElement;$(i,o,new URL(location.href),f,ee()),i==="popstate"&&(window._qCityScrollEnabled=!0)}return}return s.value={type:i,dest:o,forceReload:m,replaceState:v,scroll:g},te(o,ne()),W(B,J,X,o.pathname),h.value=void 0,w.isNavigating=!0,new Promise(f=>{E.r=f})},He=({track:u})=>{const[n,h,E,s,w,i,m,v,g,l,o]=oe();async function f(){var Y;const[d,L]=u(()=>[l.value,n.value]),re=qe(""),R=o.url,_=L?"form":d.type,se=d.replaceState;let r,I,V=null,k;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let T=W(B,J,X,r.pathname);k=ne();const x=I=await te(r,k,{action:L,clearCache:!0});if(!x){l.untrackedValue={type:_,dest:r};return}const U=x.href,O=new URL(U,r);le(O,r)||(r=O,T=W(B,J,X,r.pathname));try{V=await T}catch{window.location.href=U;return}}if(V){const[T,x,U,O]=V,D=U,ae=D[D.length-1];o.prevUrl=R,o.url=r,o.params={...x},l.untrackedValue={type:_,dest:r};const q=ce(I,o,D,re);h.headings=ae.headings,h.menu=O,E.value=be(D),s.links=q.links,s.meta=q.meta,s.styles=q.styles,s.scripts=q.scripts,s.title=q.title,s.frontmatter=q.frontmatter;{g.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;_==="popstate"&&(F=ee());const S=document.getElementById(Z)??document.documentElement;(d.scroll&&(!d.forceReload||!j(r,R))&&(_==="link"||_==="popstate")||_==="form"&&!j(r,R))&&(document.__q_scroll_restore__=()=>$(_,r,R,S,F));const K=I==null?void 0:I.loaders,e=window;if(K&&Object.assign(m,K),ue.clear(),!e._qCitySPA){if(e._qCitySPA=!0,history.scrollRestoration="manual",e.addEventListener("popstate",()=>{e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),i(location.href,{type:"popstate"})}),e.removeEventListener("popstate",e._qCityInitPopstate),e._qCityInitPopstate=void 0,!e._qCityHistoryPatch){e._qCityHistoryPatch=!0;const a=history.pushState,p=history.replaceState,C=t=>(t===null||typeof t>"u"?t={}:(t==null?void 0:t.constructor)!==Object&&(t={_data:t}),t._qCityScroll=t._qCityScroll||b(S),t);history.pushState=(t,c,Q)=>(t=C(t),a.call(history,t,c,Q)),history.replaceState=(t,c,Q)=>(t=C(t),p.call(history,t,c,Q))}document.body.addEventListener("click",a=>{if(a.defaultPrevented)return;const p=a.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const C=p.getAttribute("href"),t=new URL(location.href),c=new URL(C,t);if(G(c,t)&&j(c,t)){if(a.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==t.href&&history.pushState(null,"",c),e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),P({...b(S),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",e._qCityInitAnchors),e._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(e._qCityScrollEnabled&&document.visibilityState==="hidden"){const a=b(S);P(a)}},{passive:!0}),document.removeEventListener("visibilitychange",e._qCityInitVisibility),e._qCityInitVisibility=void 0),e.addEventListener("scroll",()=>{e._qCityScrollEnabled&&(clearTimeout(e._qCityScrollDebounce),e._qCityScrollDebounce=setTimeout(()=>{const a=b(S);P(a),e._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",e._qCityInitScroll),e._qCityInitScroll=void 0,(Y=e._qCityBootstrap)==null||Y.remove(),e._qCityBootstrap=void 0,de.resolve()}if(_!=="popstate"){e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce);const a=b(S);P(a)}_e(window,_,R,r,se),Le(k).then(()=>{var C;me(k).setAttribute("q:route",T);const p=b(S);P(p),e._qCityScrollEnabled=!0,o.isNavigating=!1,(C=v.r)==null||C.call(v)})}}}f()},je=u=>{Re(M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=ve();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const h=Ie("url");if(!h)throw new Error("Missing Qwik URL Env Data");const E=new URL(h),s=H({url:E,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),w={},i=De(H(n.response.loaders,{deep:!1})),m=z({type:"initial",dest:E,forceReload:!1,replaceState:!1,scroll:!0}),v=H(fe),g=H({headings:void 0,menu:void 0}),l=z(),o=n.response.action,f=o?n.response.loaders[o]:void 0,d=z(f?{id:o,data:n.response.formData,output:{result:f,status:n.response.status}}:void 0),L=M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[d,w,m,s]);return y(pe,g),y(ye,l),y(he,v),y(Se,s),y(Ce,L),y(Ee,i),y(we,d),y(ge,m),Pe(M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[d,g,l,v,n,L,i,w,u,m,s])),Ae(ke,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:Te,s_02wMImzEAbk:He,s_RPDJAz33WLA:xe,s_TxCFOy819ag:je,s_fX0bDjeJa0E:Oe},Symbol.toStringTag,{value:"Module"}));export{Te as _hW,He as s_02wMImzEAbk,xe as s_RPDJAz33WLA,je as s_TxCFOy819ag,Oe as s_fX0bDjeJa0E};
