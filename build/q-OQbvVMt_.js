import{u as h,g as v,e as f,h as e,o as u,q as s,i as x}from"./q-CUnOVDMa.js";import{_ as c}from"./q-uemlvruI.js";import{a as _}from"./q-BM1hcpgE.js";const w=".mohido-project-section{color:#fff;position:relative;z-index:1;margin-bottom:960px}.mohido-project-section h1{font-size:4em;margin-bottom:30px;line-height:80px}.mohido-projects-container{display:flex;flex-direction:column;flex-grow:1;gap:10px;margin:20px 5px}.mohido-project-search input{padding:10px;outline:none;flex-grow:1;border:none}.mohido-searchbar{background-color:#fff;display:block;min-width:250px;max-width:500px;display:flex;align-items:center;color:#000;padding:0 10px;border-radius:5px;margin:auto}.mohido-project-item{background-color:var(--mohido-dark-neon-blue);display:flex;align-items:center;flex-wrap:wrap;border-radius:40px;min-width:250px}.mohido-project-item:nth-of-type(2n){flex-direction:row-reverse}.mohido-project-item:nth-of-type(2n) .item-title{text-align:right}.prj-item-thumbnail{width:100%;max-width:250px}.prj-item-thumbnail img{max-width:250px;width:100%;min-width:220px;min-height:220px;height:auto}.prj-item-content{align-self:flex-start;padding:20px 20px 0;flex-grow:1;flex-basis:500px}.prj-item-content .item-yr-lnk-cont{display:flex;flex:1;margin:10px auto;justify-content:center;align-items:center}.prj-item-content .item-yr-lnk-cont .item-year{text-align:right;flex-grow:1}.prj-item-content .item-yr-lnk-cont .item-links{flex-grow:1}.prj-item-content .item-yr-lnk-cont .item-links .item-links-button{font-size:22px;margin-right:10px}.prj-item-content .item-yr-lnk-cont .item-links .item-links-button a{color:#fff;transition:color .1s linear}.prj-item-content .item-yr-lnk-cont .item-links .item-links-button a:hover{color:var(--mohido-gold)}.prj-item-content .item-desc{padding:10px;line-height:20px}.prj-item-content .item-tags{padding:10px 5px 10px 0;font-style:italic;font-weight:700}.mohido-project-navs{display:flex;text-align:center;justify-content:center;align-items:center}.mohido-project-navs *{flex-grow:1}.mohido-project-navs .active{color:var(--mohido-gold)}@media (max-width: 1024px){.mohido-project-item:nth-of-type(2n) .item-title,.item-title{text-align:center;padding:10px 0}.prj-item-thumbnail img{border-radius:10px}.prj-item-thumbnail{margin:auto}}",j=w,k=(t,a)=>{const[n,r,d,g]=h();g.value=a.value.toLowerCase(),n.value=0,r().then(l=>{d.value=Math.ceil(l.length/5)})},P=()=>{v(s(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_sfFwcSwBMTI"));const t=_(),a=f(""),n=f(0),r=[{thumbnail:`${t.url}images/murmurs_of_creaks.jpg`,title:"Murmurs of Creaks",desc:"Dive into the shadows with my 3D creation —a mysterious animation born from the depths of Blender3D, meticulously color-graded, and masterfully edited in DaVinci Resolve.",year:"2024",tags:["Film","Art"],links:[{icon:"fa-brands fa-youtube",url:"https://youtu.be/P7-ePBS3WPE?feature=shared"}]},{thumbnail:`${t.url}images/shield.jpg`,title:"The Evil Shield",desc:"A blazing shield enshrouded with fire, inspired by the Shield Hero anime. This 3D animation, crafted in Blender, captures the intense and dynamic essence of a fiery.",year:"2024",tags:["Film","Art"],links:[{icon:"fa-brands fa-youtube",url:"https://youtube.com/shorts/-lT3T1JYlkM?feature=shared"}]},{thumbnail:`${t.url}images/brdfa.jpg`,title:"BRDFA 3D Shader Engine",desc:" 3D engine designed for analyzing various Bidirectional Reflectance Distribution Functions (BRDFs) over environment maps. It features a built-in shader code editor, enabling users to experiment with and visualize different lighting models in real-time.",year:"2022",tags:["C++","Programming"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/BRDFA_Engine"}]},{thumbnail:`${t.url}images/image_mapper_addon.jpg`,title:"Image Mapper Blender Addon",desc:"Blender Addon which maps images to Image Nodes in multiple objects. It also creates the materials for these objects from a common template material.",year:"2023",tags:["Blender","Addon","Python"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/Image-Mapper-Addon"},{icon:"fa-brands fa-youtube",url:"https://youtu.be/2nDAjvWrJ1U?feature=shared"}]},{thumbnail:`${t.url}images/tiny_yaml.jpg`,title:"Tiny Yaml",desc:"A powerful simple lightweight YAML parser library for C++. There are lots of libraries which parse yaml files in C++, yet they are cumbersome and very heavy to include in a performance-matter project, thus increasing the need for a minimal robust parser.",year:"2023",tags:["C++","Programming"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/Tiny_Yaml"}]},{thumbnail:`${t.url}images/matrix_rain.jpg`,title:"Matrix Rain Your Name",desc:"A simple visualization of the matrix rain using basic JavaScript techniques. This unique animation allows you to type any text, which then dynamically appears in the center of the cascading code.",year:"2024",tags:["Javascript","Programming"],links:[{icon:"fa-brands fa-youtube",url:"https://youtu.be/rWiF6opjLzQ?feature=shared"},{icon:"fa-brands fa-github",url:"https://github.com/Mohido/Your-Name-Matrix-Rain"}]},{thumbnail:`${t.url}images/Image Stitcher.jpg`,title:"Image Stitcher",desc:"Stitching 2 or more images to each other to form a larger image is done through a transformation matrix that projects (Transforms) 1 image plane into the other plane. This transformation matrix is called the 'Homography' matrix in the world of Computer Vission. You phone probably uses this technique when you shoot a panoramic scene (photo).",year:"2022",tags:["C++","Programming","Algorithms"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/Image_Stitcher"}]},{thumbnail:`${t.url}images/keycloak_client.jpg`,title:"Keycloak Client",desc:"This Keycloak-Client is an npm package responsible to handle the communication to a keycloak authentication server through one of the realm's clients. In any project, the developer can define 1+ clients, and use them to alter the realm or view some related data.",year:"2022",tags:["Typescript","Nodejs","Programming","Framework"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/Keycloak_Client"},{icon:"fa-brands fa-npm",url:"https://www.npmjs.com/package/mohido-keycloak-client"}]},{thumbnail:`${t.url}images/java_raytracer.jpg`,title:"Java Raytracer",desc:"A ray tracer made completely from scratch using Java, inspired by the detailed tutorials on Scratchapixel, accurately simulates the behavior of light to render stunning 3D graphics. Leveraging fundamental principles such as ray-sphere intersections, and reflection",year:"2020",tags:["Java","Prorgamming"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/RayTracer"}]},{thumbnail:`${t.url}images/chess.jpg`,title:"Clean Chess Application",desc:"A chess game created with a pure functional programming approach using Clean, showcases the elegance and rigor of functional paradigms. This project emphasizes immutability and declarative code, resulting in a robust and maintainable chess game that highlights the strengths of Clean's functional capabilities.",year:"2021",tags:["Clean","Programming","Game"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Tariqo/Clean-Chess-Application"}]},{thumbnail:`${t.url}images/tankwars.jpg`,title:"World of Tank Wars",desc:"This simple 2D game features an engine written entirely in Java, providing a robust foundation for game development. You can either create similar games using the versatile game engine or simply enjoy the engaging gameplay as it is",year:"2019",tags:["Java","Programming","Game"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/World_Of_Tank_Wars"}]},{thumbnail:`${t.url}images/memory.jpg`,title:"Java Memory Game",desc:"A simple memory game designed to apply and reinforce the basics of Java programming. This project offers a fun and interactive way to practice essential coding skills while creating an engaging game.",year:"2019",tags:["Java","Game","Prorgamming"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/Memory_Game"}]},{thumbnail:`${t.url}images/grading.jpg`,title:"FPC Grading Engine",desc:"The FPC Grading Engine is a tool that provides a simple framework for processing .csv files. Created to assist demonstrators of the 'Functional Programming Course' in grading student submissions, this engine streamlines and automates the evaluation process.",year:"2021",tags:["Python","Programming","Framework"],links:[{icon:"fa-brands fa-github",url:"https://github.com/Mohido/FPC_Grading_Engine"}]}].sort((i,o)=>parseInt(o.year.split(" ")[0])-parseInt(i.year.split(" ")[0])),d=()=>r.filter(i=>a.value.length===0||i.title.toLowerCase().includes(a.value)||i.year.toLowerCase().includes(a.value)||i.desc.toLowerCase().includes(a.value)||i.tags.filter(o=>o.toLowerCase().includes(a.value)).length>0),g=s(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_prn9YsYlru4",[r,a]),l=f(Math.ceil(r.length/5));return e("div",null,{class:"mohido-project-section"},[e("h1",null,{class:"mohido-project-header"},"Projects",3,null),e("div",null,{class:"mohido-project-search"},e("div",null,{class:"mohido-searchbar"},[e("label",null,{for:"search"},e("i",null,{class:"fa-solid fa-search"},null,3,null),3,null),e("input",null,{placeholder:"e.g John Doe",name:"search",type:"text",onKeyUp$:s(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_0IbtWcW0FDQ",[n,g,l,a])},null,3,null)],3,null),3,null),e("div",null,{class:"mohido-projects-container"},d().slice(n.value*5,n.value*5+5).map((i,o)=>e("div",null,{class:"mohido-project-item"},[e("div",null,{class:"prj-item-thumbnail"},e("img",{src:u(i,"thumbnail")},{width:"250",height:"250",alt:"Image"},null,3,null),1,null),e("div",null,{class:"prj-item-content"},[e("h2",null,{class:"item-title"},u(i,"title"),1,null),e("div",null,{class:"item-yr-lnk-cont"},[e("div",null,{class:"item-links"},i.links.map(({icon:p,url:b},y)=>e("span",null,{class:"item-links-button"},e("a",{href:b},null,e("i",{class:p},null,null,3,null),1,null),1,y)),1,null),e("div",null,{class:"item-year"},u(i,"year"),1,null)],1,null),e("div",null,{class:"item-desc"},u(i,"desc"),1,null),e("div",null,{class:"item-tags"},i.tags.map(p=>"#"+p+" "),1,null)],1,null)],1,`${i.title}-${o}`)),1,null),e("div",null,{class:"mohido-project-navs"},[e("button",null,{class:"mohido-navbar-button",onClick$:s(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_KEwudN35pY4",[n])},"Previous",3,null),Array(l.value).fill(0).map((i,o)=>e("span",{class:o==n.value&&"active"},null,o+1,1,i+"-"+o)),e("button",null,{class:"mohido-navbar-button",onClick$:s(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_20RQRNVJHNg",[n,l])},"Next",3,null)],1,null)],1,"XE_0")},C=()=>{const[t]=h();return t.value-=t.value>0?1:0},T=()=>{const[t,a]=h();return t.value+=t.value+1<a.value?1:0},A=()=>{const[t,a]=h();return t.filter(n=>a.value.length===0||n.title.toLowerCase().includes(a.value)||n.year.toLowerCase().includes(a.value)||n.desc.toLowerCase().includes(a.value)||n.tags.filter(r=>r.toLowerCase().includes(a.value)).length>0)},m=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0IbtWcW0FDQ:k,s_20RQRNVJHNg:T,s_AGfqOINtR4w:P,s_KEwudN35pY4:C,s_prn9YsYlru4:A,s_sfFwcSwBMTI:j},Symbol.toStringTag,{value:"Module"}));export{x as _hW,k as s_0IbtWcW0FDQ,T as s_20RQRNVJHNg,P as s_AGfqOINtR4w,C as s_KEwudN35pY4,A as s_prn9YsYlru4,j as s_sfFwcSwBMTI};
