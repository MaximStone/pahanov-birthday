import{ak as h,ar as _,aA as p,a9 as v,c as s,b as n,F as u,r as m,au as g,o as a}from"./index.e28983e5.js";const y=n("h1",{style:{"margin-bottom":"30px"}},"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B",-1),x={class:"achieves-container"},k={class:"achieve-box"},A=["onClick"],f=["src"],B={key:1,class:"not-opened",style:{width:"100%",height:"100%"}},w=["xlink:href"],D=h({__name:"FinishPage",setup(b){const{openedAchieves:i,downloadTheBigPicture:c}=_(),l=Array.from(p.values()),r=v(()=>l.map(e=>({...e,opened:i.value.map(o=>o.name).includes(e.name)}))),d=e=>{c(e)};return(e,o)=>(a(),s("div",null,[y,n("div",x,[(a(!0),s(u,null,m(g(r),(t,C)=>(a(),s("div",k,[t.opened?(a(),s(u,{key:0},[n("div",{class:"download-box",onClick:F=>d(t)},"\u0421\u041A\u0410\u0427\u0410\u0422\u042C",8,A),n("img",{src:t.small,style:{width:"100%",height:"100%"}},null,8,f)],64)):(a(),s("svg",B,[n("image",{"xlink:href":t.small,width:"100%",height:"100%",x:"0",y:"0"},null,8,w)]))]))),256))])]))}});export{D as default};
