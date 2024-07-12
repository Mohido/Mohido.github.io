import{u as f,g as P,e as _,f as S,o as z,d as A,h as e,q as a,p as r,F as I,i as R}from"./q-BRSQIzmA.js";import{_ as l}from"./q-uemlvruI.js";const L=async(i,n)=>{const[o,m,h]=f();if(!h.value)return;const v=window.getComputedStyle(h.value).gridTemplateColumns.split(" ").length,p=await m(n);let s=o[p[0]-1];for(let t=p[0];t<p[1]-1;t++)s=o[t]>s?s:o[t];n.style.animation="none",n.style.gridColumn=`span ${v-s+1}`},D=()=>{P(a(()=>l(()=>Promise.resolve().then(()=>c),void 0),"s_ZYR6B82OMtg"));const i=_(),n=[{start:2021,end:2022,title:"Software Developer Intern",organization:"Nokia",descriptions:["Contributed significantly to the development of a large-scale full-stack application encompassing 5 distinct micro-services.","Focused on essential DevOps and backend development tasks.","Developed and deployed a REST API micro-service using Node.js.","Automated the deployment of 5 interconnected micro-services using Docker-compose."],location:"Budapest"},{start:2021,end:2022,title:"Teacher Assisstent",organization:"Eotvos Lorand University",descriptions:["Introduced over 100 students to functional programming paradigms using the Clean Programming Language, enriching the academic curriculum and fostering a deeper understanding of programming concepts.","Provided more than 20 comprehensive consultations on complex data structures and algorithms, enhancing students' problem-solving skills.","Created and administered 4 examinations, assessing and grading students' understanding and application of functional programming concepts, contributing to their academic success."],location:"Budapest"},{start:2022,end:2024,title:"Software Developer",organization:"Nokia",descriptions:["Contributed to the maintenance and enhancement of a large-scale, cloud-native Platform as a Service (PaaS) that integrates 100+ Cloud Service Functions.","Engaged in system engineering and DevOps practices, utilizing Python automation, REST API development, Docker, Terraform and Ansible for optimal service management across 3 to 16 node environments","Addressed critical Galera MariaDB issues, including brain-splits in a 3-node setup, ensuring database integrity and high availability.","Participated in agile project management.","Assisted in solving intricate networking, system, and coding challenges."],location:"Budapest"},{start:2024,end:2024,title:"Senior Software Developer",organization:"Ericsson",descriptions:["Played a crucial role in developing a critical distributed Virtual Network Function (VNF) within the IMS network, deployed across over 20 virtual machines to enhance network efficiency and scalability.","Leveraged Erlang/OTP for robust runtime environment management and Python for effective automation processes.","Managed hundreds of concurrent processes, resolving complex issues such as race conditions and deadlocks. ","Adopted Agile methodologies to support a continuous development and deployment cycle."],location:"Budapest"}],o=n[0].start,m=[0,0,0,0],v=a(()=>l(()=>Promise.resolve().then(()=>c),void 0),"s_JrQQsLth2Ak",[m,a(()=>l(()=>Promise.resolve().then(()=>c),void 0),"s_ASyX0SojGbg"),i]),p=a(()=>l(()=>Promise.resolve().then(()=>c),void 0),"s_la84qLucxKo"),s=_(500);return S(a(()=>l(()=>Promise.resolve().then(()=>c),void 0),"s_r6FE2ddkA2M",[s])),z("resize",a(()=>l(()=>Promise.resolve().then(()=>c),void 0),"s_vH5BtNLYkY8",[s])),A(I,{children:e("section",null,{id:"experience",class:"mohido-experience-container"},[e("h1",null,null,"Experience",3,null),e("div",null,{class:"timeline"},[e("div",{ref:i},{class:"timeline-grid"},n.map((t,y)=>{const d=t.start-o+1,g=t.end-t.start+d;m[d-1]++;for(let u=d;u<g-1;u++)m[u]++;const b=g-d>1?g-d:1,w=`grid-row: ${d} / ${g}; grid-column: span 1;`;let x=300;return s.value<=400&&(x=500),e("div",{style:w},{tabIndex:0,class:"timeline-item",onFocusOut$:p,onFocusIn$:v,onMouseEnter$:a(()=>l(()=>import("./q-BYOgYWFX.js"),[]),"s_6041qfJvsro"),onMouseLeave$:a(()=>l(()=>import("./q-C30ytaPG.js"),[]),"s_xhxF1JqbKSI")},e("div",null,{class:"timeline-item-inner"},[e("div",{style:`width: ${x*b}px;`},{class:"timeline-item-shorthand"},[e("h3",null,{class:"shorthand-title"},r(t,"title"),1,null),e("h3",null,{class:"shorthand-organization"},["@",r(t,"organization")],1,null)],1,null),e("div",null,{class:"timeline-content"},[e("h3",null,{class:"content-title"},r(t,"title"),1,null),e("div",null,{class:"content-location"},[e("h5",null,{class:"content-organization"},r(t,"organization"),1,null),e("div",null,{class:"organization-location"},[r(t,"start")," - ",r(t,"end"),", ",r(t,"location")],1,null)],1,null),e("div",null,{class:"content-description"},e("ul",null,null,t.descriptions.map((u,E)=>e("li",null,null,u,1,"jobdesc"+E)),1,null),1,null)],1,null)],1,null),1,"timeline-item"+y)}),1,null),e("div",null,{class:"timeline-years"},[e("div",null,{class:"timeline-year-item"},"2021",3,null),e("div",null,{class:"timeline-year-item"},"2022",3,null),e("div",null,{class:"timeline-year-item"},"2023",3,null),e("div",null,{class:"timeline-year-item"},"2024",3,null)],3,null)],1,null)],1,null)},1,"BD_0")},O=()=>{const[i]=f();i.value=window.innerWidth},C=()=>{const[i]=f();i.value=window.innerWidth},T=(i,n)=>{n.style.gridColumn="span 1"},k=i=>{const o=window.getComputedStyle(i).gridRow.split(" / ").map(Number);return[o[0],o[1]]},V='.mohido-experience-container{margin-top:100px;position:relative;z-index:1}.mohido-experience-container h1{font-size:4em;margin-bottom:70px;line-height:80px}.timeline{position:relative;min-height:1000px;margin:auto;padding:10px}.timeline-years{display:grid;position:absolute;top:0;left:-60px;grid-template-rows:repeat(4,300px);gap:10px}.timeline-year-item{color:var(--mohido-white);font-size:1.2em;font-weight:700;font-family:Arial,Helvetica,sans-serif;padding-top:15px}.timeline-grid{position:relative;grid-template-columns:repeat(6,minmax(50px,150px));grid-auto-rows:300px;gap:10px;display:grid;width:100%}.timeline:after{content:"";position:absolute;height:100%;top:0;left:-10px;background-color:#fff;border-radius:5px;width:5px}.timeline-item-inner{background:#0f091c;height:100%;transition:all .5s linear}.timeline-item-inner:hover{border-bottom:1px solid white}.timeline-item{padding:1px;color:#fff;cursor:pointer;overflow:hidden;position:relative;border-radius:5px;transition:transform .2s ease-in-out}.timeline-item .timeline-item-shorthand{text-align:center;transform:rotate(90deg);transform-origin:bottom left;position:absolute;top:-40px;left:35%;width:100px;transition:.1s linear;visibility:visible}.timeline-item .timeline-content{opacity:0;transition:.1s linear;visibility:hidden;overflow-y:auto;padding:20px;height:100%;border-bottom:1px solid;border-radius:5px}.timeline-item:focus .timeline-item-inner:hover{border-bottom:none}.timeline-item:focus .timeline-content{opacity:1;visibility:visible}.timeline-item:focus .timeline-item-shorthand{opacity:0;visibility:hidden}.shorthand-organization{color:var(--mohido-gold)}.content-title{line-height:30px;font-size:2em}.content-organization{color:var(--mohido-gold);flex-grow:1;font-weight:unset;font-size:1.1em;margin-bottom:5px;flex-basis:300px;text-align:left}.content-location{display:flex;text-align:left;align-items:center;flex-wrap:wrap;margin:5px 0 20px}.organization-location{text-align:left;font-size:small}.content-description{padding-left:20px}.content-description li{margin-top:10px}@keyframes pulse{0%{transform:scale(1)}33%{transform:rotate(-2deg)}50%{transform:rotate(0) scale(1.05)}86%{transform:rotate(2deg)}to{transform:rotate(0) scale(1)}}@media (max-width: 400px){.mohido-experience-container h1{font-size:3em;margin-bottom:70px;line-height:60px}.timeline-grid{grid-template-columns:repeat(4,minmax(30px,50px));grid-auto-rows:500px}.timeline-years{grid-template-rows:repeat(4,500px)}.timeline-item .timeline-item-shorthand{top:-20px;left:30%}.shorthand-organization{display:none}.timeline{left:10px}.timeline:after{left:10px;width:2px}.timeline-years{left:-30px}.timeline-year-item{font-size:1em;font-weight:lighter}.timeline-content{font-size:.8em}}',$=V,c=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_ASyX0SojGbg:k,s_JrQQsLth2Ak:L,s_QF2a9XNxb04:D,s_ZYR6B82OMtg:$,s_la84qLucxKo:T,s_r6FE2ddkA2M:O,s_vH5BtNLYkY8:C},Symbol.toStringTag,{value:"Module"}));export{R as _hW,k as s_ASyX0SojGbg,L as s_JrQQsLth2Ak,D as s_QF2a9XNxb04,$ as s_ZYR6B82OMtg,T as s_la84qLucxKo,O as s_r6FE2ddkA2M,C as s_vH5BtNLYkY8};
