import{f as a,h as c,j as m,n as s,l as i,am as l,ae as d,_ as u}from"./nav-f2dfa07d.js";const p=["innerHTML"],f=["textContent"],k=a({__name:"NoteViewer",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1}},emits:["click"],setup(e){const n=e;return c(m),(o,t)=>e.noteHtml?(s(),i("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=r=>o.$emit("click")),innerHTML:e.noteHtml},null,10,p)):(s(),i("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=r=>o.$emit("click")),textContent:d(e.note)},null,10,f))}}),C=u(k,[["__file","/Users/jedrzejsadowski/projects/bright/react-state-presentation/node_modules/@slidev/client/internals/NoteViewer.vue"]]);export{C as N};
