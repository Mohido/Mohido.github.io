import{u as x,h as L,e as _,f as z,g as S,d as A,i,n as l,F as E,q as a,j as I}from"./q-D8cAkvcG.js";import{_ as u}from"./q-uemlvruI.js";const R=async(t,n)=>{const[o,d,h]=x();if(!h.value)return;const f=window.getComputedStyle(h.value).gridTemplateColumns.split(" ").length,c=await d(n);let s=o[c[0]-1];for(let e=c[0];e<c[1]-1;e++)s=o[e]>s?s:o[e];n.style.gridColumn=`span ${f-s+1}`},P=()=>{L(a(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_ZYR6B82OMtg"));const t=_(),n=[{start:2021,end:2022,title:"Software Developer Intern",organization:"Nokia",descriptions:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quis dolor eius! Architecto pariatur exercitationem sit, aspernatur soluta similique reprehenderit eaque possimus sint, illum consequuntur laboriosam amet fugiat in perferendis!","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis nihil illum in cum ducimus odio qui error fugiat similique eos aliquam voluptatibus doloribus, nulla laboriosam inventore eligendi sit quisquam.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis nihil illum in cum ducimus odio qui error fugiat similique eos aliquam voluptatibus doloribus, nulla laboriosam inventore eligendi sit quisquam."],location:"Budapest"},{start:2021,end:2022,title:"Teacher Assisstent",organization:"Eotvos Lorand University",descriptions:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quis dolor eius! Architecto pariatur exercitationem sit, aspernatur soluta similique reprehenderit eaque possimus sint, illum consequuntur laboriosam amet fugiat in perferendis!","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis nihil illum in cum ducimus odio qui error fugiat similique eos aliquam voluptatibus doloribus, nulla laboriosam inventore eligendi sit quisquam.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis nihil illum in cum ducimus odio qui error fugiat similique eos aliquam voluptatibus doloribus, nulla laboriosam inventore eligendi sit quisquam."],location:"Budapest"},{start:2022,end:2024,title:"Software Developer",organization:"Nokia",descriptions:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quis dolor eius! Architecto pariatur exercitationem sit, aspernatur soluta similique reprehenderit eaque possimus sint, illum consequuntur laboriosam amet fugiat in perferendis!"],location:"Budapest"},{start:2024,end:2024,title:"Senior Software Developer",organization:"Ericsson",descriptions:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quis dolor eius! Architecto pariatur exercitationem sit, aspernatur soluta similique reprehenderit eaque possimus sint, illum consequuntur laboriosam amet fugiat in perferendis!"],location:"Budapest"}],o=n[0].start,d=[0,0,0,0],f=a(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_JrQQsLth2Ak",[d,a(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_ASyX0SojGbg"),t]),c=a(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_la84qLucxKo"),s=_(500);return z(a(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_r6FE2ddkA2M",[s])),S("resize",a(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_vH5BtNLYkY8",[s])),A(E,{children:i("section",null,{class:"mohido-experience-container"},i("div",null,{class:"timeline"},[i("div",{ref:t},{class:"timeline-grid"},n.map((e,b)=>{const r=e.start-o+1,g=e.end-e.start+r;d[r-1]++;for(let p=r;p<g-1;p++)d[p]++;const w=g-r>1?g-r:1,q=`grid-row: ${r} / ${g}; grid-column: span 1;`;let v=300;return s.value<=400&&(v=500),i("div",{style:q},{tabIndex:0,class:"timeline-item",onFocusOut$:c,onFocusIn$:f},i("div",null,{class:"timeline-item-inner"},[i("div",{style:`width: ${v*w}px;`},{class:"timeline-item-shorthand"},[i("h3",null,{class:"shorthand-title"},l(e,"title"),1,null),i("h3",null,{class:"shorthand-organization"},["@",l(e,"organization")],1,null)],1,null),i("div",null,{class:"timeline-content"},[i("h3",null,{class:"content-title"},l(e,"title"),1,null),i("div",null,{class:"content-location"},[i("h5",null,{class:"content-organization"},l(e,"organization"),1,null),i("div",null,{class:"organization-location"},[l(e,"start")," - ",l(e,"end"),", ",l(e,"location")],1,null)],1,null),i("div",null,{class:"content-description"},i("ul",null,null,e.descriptions.map((p,y)=>i("li",null,null,p,1,"jobdesc"+y)),1,null),1,null)],1,null)],1,null),1,"timeline-item"+b)}),1,null),i("div",null,{class:"timeline-years"},[i("div",null,{class:"timeline-year-item"},"2021",3,null),i("div",null,{class:"timeline-year-item"},"2022",3,null),i("div",null,{class:"timeline-year-item"},"2023",3,null),i("div",null,{class:"timeline-year-item"},"2024",3,null)],3,null)],1,null),1,null)},1,"BD_0")},O=()=>{const[t]=x();t.value=window.innerWidth},C=()=>{const[t]=x();t.value=window.innerWidth},$=(t,n)=>{n.style.gridColumn="span 1"},D=t=>{const o=window.getComputedStyle(t).gridRow.split(" / ").map(Number);return[o[0],o[1]]},N='.mohido-experience-container{margin-top:900px}.timeline{position:relative;min-height:1000px;margin:auto;padding:10px}.timeline-years{display:grid;position:absolute;top:0;left:-60px;grid-template-rows:repeat(4,300px);gap:10px}.timeline-year-item{color:var(--mohido-white);font-size:1.2em;font-weight:700;font-family:Arial,Helvetica,sans-serif;padding-top:15px}.timeline-grid{position:relative;grid-template-columns:repeat(6,minmax(50px,150px));grid-auto-rows:300px;gap:10px;display:grid;width:100%}.timeline:after{content:"";position:absolute;height:100%;top:0;left:-10px;background-color:#fff;border-radius:5px;width:5px}.timeline-item-inner{background:#1d1233;height:100%;transition:all .5s linear}.timeline-item-inner:hover{border-bottom:1px solid white}.timeline-item{padding:1px;color:#fff;cursor:pointer;overflow:hidden;position:relative;border-radius:5px;transition:all 1s linear}.timeline-item .timeline-item-shorthand{text-align:center;transform:rotate(90deg);transform-origin:bottom left;position:absolute;top:-40px;left:35%;width:100px;transition:.1s linear;visibility:visible}.timeline-item .timeline-content{opacity:0;transition:.1s linear;visibility:hidden;overflow-y:auto;padding:20px;height:100%;border-bottom:1px solid;border-radius:5px}.timeline-item:focus .timeline-item-inner:hover{border-bottom:none}.timeline-item:focus .timeline-content{opacity:1;visibility:visible}.timeline-item:focus .timeline-item-shorthand{opacity:0;visibility:hidden}.shorthand-organization{color:var(--mohido-gold)}.content-title{line-height:30px;font-size:2em}.content-organization{color:var(--mohido-gold);flex-grow:1;font-weight:unset;font-size:1.1em;margin-bottom:5px;flex-basis:300px;text-align:left}.content-location{display:flex;text-align:left;align-items:center;flex-wrap:wrap;margin:5px 0 20px}.organization-location{text-align:left;font-size:small}.content-description{padding-left:20px}.content-description li{margin-top:10px}@media (max-width: 400px){.timeline-grid{grid-template-columns:repeat(4,minmax(30px,50px));grid-auto-rows:500px}.timeline-years{grid-template-rows:repeat(4,500px)}.timeline-item .timeline-item-shorthand{top:-20px;left:30%}.shorthand-organization{display:none}.timeline{left:10px}.timeline:after{left:10px;width:2px}.timeline-years{left:-30px}.timeline-year-item{font-size:1em;font-weight:lighter}.timeline-content{font-size:.8em}}',T=N,m=Object.freeze(Object.defineProperty({__proto__:null,_hW:I,s_ASyX0SojGbg:D,s_JrQQsLth2Ak:R,s_QF2a9XNxb04:P,s_ZYR6B82OMtg:T,s_la84qLucxKo:$,s_r6FE2ddkA2M:O,s_vH5BtNLYkY8:C},Symbol.toStringTag,{value:"Module"}));export{I as _hW,D as s_ASyX0SojGbg,R as s_JrQQsLth2Ak,P as s_QF2a9XNxb04,T as s_ZYR6B82OMtg,$ as s_la84qLucxKo,O as s_r6FE2ddkA2M,C as s_vH5BtNLYkY8};