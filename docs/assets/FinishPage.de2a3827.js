import{f as h,u as _,aD as p,g as v,c as s,b as a,F as u,d as m,k as g,o as n}from"./main.6a41e1d3.js";const y=a("h1",{style:{"margin-bottom":"30px"}},"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B",-1),x={class:"achieves-container"},f={class:"achieve-box"},k=["onClick"],A=["src"],B={key:1,class:"not-opened",style:{width:"100%",height:"100%"}},w=["xlink:href"],D=h({__name:"FinishPage",setup(b){const{openedAchieves:i,downloadTheBigPicture:c}=_(),l=Array.from(p.values()),r=v(()=>l.map(e=>({...e,opened:i.value.map(o=>o.name).includes(e.name)}))),d=e=>{c(e)};return(e,o)=>(n(),s("div",null,[y,a("div",x,[(n(!0),s(u,null,m(g(r),(t,C)=>(n(),s("div",f,[t.opened?(n(),s(u,{key:0},[a("div",{class:"download-box",onClick:F=>d(t)},"\u0421\u041A\u0410\u0427\u0410\u0422\u042C",8,k),a("img",{src:t.small,style:{width:"100%",height:"100%"}},null,8,A)],64)):(n(),s("svg",B,[a("image",{"xlink:href":t.small,width:"100%",height:"100%",x:"0",y:"0"},null,8,w)]))]))),256))])]))}});export{D as default};