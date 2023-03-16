import{n as d,l as k,ad as e,A as y,an as P,E as h,f as z,h as T,j as B,ao as S,ap as v,am as M,u as t,_ as H,aq as A,ar as D,c as b,y as I,C as E,as as F,at as R,w as U,m as u,ae as q,ag as x,au as $,av as N,ak as L,aa as G,aw as w,ax as O,F as W,d as V,ay as Z,az as J,aA as K,aB as Q,aC as X,aD as Y,al as j,aE as ee,aF as te,aG as se,b as oe,ai as ae,aH as ne,aI as le,aJ as re,aK as ie}from"./nav-e00a4eb8.js";import{N as ce}from"./NoteViewer-fe0d1671.js";import ue from"./DrawingControls-98b9d7b2.js";import{u as de}from"./index-f62bf7aa.js";import"./_commonjsHelpers-725317a4.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[pe];function ve(a,l){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(a,l){return d(),k("svg",fe,we)}const Se={name:"carbon-time",render:ye},ke="/react-webinar/assets/logo-title-horizontal-96c3c915.png";function Ce(){const a=y(Date.now()),l=P({interval:1e3}),_=h(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function p(){a.value=l.value}return{timer:_,resetTimer:p}}const be=z({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;T(B);const _=h(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),p=h(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.notesHTML});return(s,n)=>(d(),v(ce,{class:M(l.class),note:t(_),"note-html":t(p)},null,8,["class","note","note-html"]))}}),$e=H(be,[["__file","/Users/jedrzejsadowski/projects/bright/react-state-presentation/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},je={class:"grid-section top flex"},ze=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Te=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Me=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},Ae={class:"grid-section bottom"},De={class:"progress-bar"},Ie=z({__name:"Presenter",setup(a){T(B);const l=y();A(),D(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:p,resetTimer:s}=Ce(),n=y([]),o=h(()=>V.value<Z.value?{route:S.value,clicks:V.value+1}:J.value?{route:K.value,clicks:0}:null);return I(()=>{const C=l.value.querySelector("#slide-content"),i=E(F()),g=R();U(()=>{if(!g.value||X.value||!Y.value)return;const c=C.getBoundingClientRect(),r=(i.x-c.left)/c.width*100,m=(i.y-c.top)/c.height*100;if(!(r<0||r>100||m<0||m>100))return{x:r,y:m}},c=>{Q.cursor=c})}),(C,i)=>{const g=Se,c=he;return d(),k(W,null,[e("div",Ne,[e("div",Ve,[e("div",je,[ze,Te,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...r)=>t(s)&&t(s)(...r))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,q(t(p)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(j))},[u(N,{key:"main",class:"h-full w-full"},{default:$(()=>[u(ee,{context:"presenter"})]),_:1}),Me],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(j))},[t(o)?(d(),v(N,{key:"next",class:"h-full w-full"},{default:$(()=>{var r;return[u(t(se),{is:(r=t(o).route)==null?void 0:r.component,"clicks-elements":n.value,"onUpdate:clicks-elements":i[1]||(i[1]=m=>n.value=m),clicks:t(o).clicks,"clicks-disabled":!1,class:M(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):L("v-if",!0),He],4),e("div",Pe,[(d(),v($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ae,[u(re,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(ie),u(O,{modelValue:t(w),"onUpdate:modelValue":i[2]||(i[2]=r=>G(w)?w.value=r:null)},null,8,["modelValue"])],64)}}});const Le=H(Ie,[["__scopeId","data-v-574fd206"],["__file","/Users/jedrzejsadowski/projects/bright/react-state-presentation/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};