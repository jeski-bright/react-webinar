import{f as d,h as _,j as p,ab as h,c as m,ac as u,l as n,ad as t,ae as s,u as o,F as f,af as g,ag as v,ah as x,n as r,ai as b,aj as y,m as j,ak as k,al as N,_ as w}from"./nav-e00a4eb8.js";import{N as P}from"./NoteViewer-fe0d1671.js";import{u as V}from"./index-f62bf7aa.js";import"./_commonjsHelpers-725317a4.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(A){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(o(N))},[t("div",S,[t("div",L,[t("h1",T,s(o(m).title),1),t("div",z,s(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(o(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,s(e==null?void 0:e.no)+"/"+s(o(b)),1),y(" "+s(e==null?void 0:e.title)+" ",1),D])]),j(P,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(l).length-1?(r(),n("hr",F)):k("v-if",!0)]))),128))])],4))}}),$=w(M,[["__file","/Users/jedrzejsadowski/projects/bright/react-state-presentation/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{$ as default};
