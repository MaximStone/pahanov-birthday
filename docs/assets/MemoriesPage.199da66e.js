import{e as B,f as m,_ as z,o as r,c as v,b as _,a as h,g as c,al as K,aA as x,i as T,p as F,aB as Q,aC as ee,aD as ae,aq as te,aE as Z,F as ne,r as se,h as D,n as re,u as oe,k as ie,v as le,m as M,j as S,s as de,d as O}from"./index.fb9a1a97.js";import{u as ue,N as R,a as ce,d as fe,p as ve,l as me}from"./config.4875c1c9.js";function E(e,t,s,y){return(e/=y/2)<1?s/2*e*e*e+t:s/2*((e-=2)*e*e+2)+t}const he=[[1,2,3],[1,2,4],[1,2,5],[1,2,6],[1,2,7],[1,2,8],[1,2,9],[1,3,2],[1,3,4],[1,3,5],[1,3,6],[1,3,7],[1,3,8],[1,3,9],[1,4,2],[1,4,3],[1,4,5],[1,4,6],[1,4,7],[1,4,8],[1,4,9],[1,5,2],[1,5,3],[1,5,4],[1,5,6],[1,5,7],[1,5,8],[1,5,9],[1,6,2],[1,6,3],[1,6,4],[1,6,5],[1,6,7],[1,6,8],[1,6,9],[1,7,2],[1,7,3],[1,7,4],[1,7,5],[1,7,6],[1,7,8],[1,7,9],[1,8,2],[1,8,3],[1,8,4],[1,8,5],[1,8,6],[1,8,7],[1,8,9],[1,9,2],[1,9,3],[1,9,4],[1,9,5],[1,9,6],[1,9,7],[1,9,8],[2,1,3],[2,1,4],[2,1,5],[2,1,6],[2,1,7],[2,1,8],[2,1,9],[2,3,1],[2,3,4],[2,3,5],[2,3,6],[2,3,7],[2,3,8],[2,3,9],[2,4,1],[2,4,3],[2,4,5],[2,4,6],[2,4,7],[2,4,8],[2,4,9],[2,5,1],[2,5,3],[2,5,4],[2,5,6],[2,5,7],[2,5,8],[2,5,9],[2,6,1],[2,6,3],[2,6,4],[2,6,5],[2,6,7],[2,6,8],[2,6,9],[2,7,1],[2,7,3],[2,7,4],[2,7,5],[2,7,6],[2,7,8],[2,7,9],[2,8,1],[2,8,3],[2,8,4],[2,8,5],[2,8,6],[2,8,7],[2,8,9],[2,9,1],[2,9,3],[2,9,4],[2,9,5],[2,9,6],[2,9,7],[2,9,8],[3,1,2],[3,1,4],[3,1,5],[3,1,6],[3,1,7],[3,1,8],[3,1,9],[3,2,1],[3,2,4],[3,2,5],[3,2,6],[3,2,7],[3,2,8],[3,2,9],[3,4,1],[3,4,2],[3,4,5],[3,4,6],[3,4,7],[3,4,8],[3,4,9],[3,5,1],[3,5,2],[3,5,4],[3,5,6],[3,5,7],[3,5,8],[3,5,9],[3,6,1],[3,6,2],[3,6,4],[3,6,5],[3,6,7],[3,6,8],[3,6,9],[3,7,1],[3,7,2],[3,7,4],[3,7,5],[3,7,6],[3,7,8],[3,7,9],[3,8,1],[3,8,2],[3,8,4],[3,8,5],[3,8,6],[3,8,7],[3,8,9],[3,9,1],[3,9,2],[3,9,4],[3,9,5],[3,9,6],[3,9,7],[3,9,8],[4,1,2],[4,1,3],[4,1,5],[4,1,6],[4,1,7],[4,1,8],[4,1,9],[4,2,1],[4,2,3],[4,2,5],[4,2,6],[4,2,7],[4,2,8],[4,2,9],[4,3,1],[4,3,2],[4,3,5],[4,3,6],[4,3,7],[4,3,8],[4,3,9],[4,5,1],[4,5,2],[4,5,3],[4,5,6],[4,5,7],[4,5,8],[4,5,9],[4,6,1],[4,6,2],[4,6,3],[4,6,5],[4,6,7],[4,6,8],[4,6,9],[4,7,1],[4,7,2],[4,7,3],[4,7,5],[4,7,6],[4,7,8],[4,7,9],[4,8,1],[4,8,2],[4,8,3],[4,8,5],[4,8,6],[4,8,7],[4,8,9],[4,9,1],[4,9,2],[4,9,3],[4,9,5],[4,9,6],[4,9,7],[4,9,8],[5,1,2],[5,1,3],[5,1,4],[5,1,6],[5,1,7],[5,1,8],[5,1,9],[5,2,1],[5,2,3],[5,2,4],[5,2,6],[5,2,7],[5,2,8],[5,2,9],[5,3,1],[5,3,2],[5,3,4],[5,3,6],[5,3,7],[5,3,8],[5,3,9],[5,4,1],[5,4,2],[5,4,3],[5,4,6],[5,4,7],[5,4,8],[5,4,9],[5,6,1],[5,6,2],[5,6,3],[5,6,4],[5,6,7],[5,6,8],[5,6,9],[5,7,1],[5,7,2],[5,7,3],[5,7,4],[5,7,6],[5,7,8],[5,7,9],[5,8,1],[5,8,2],[5,8,3],[5,8,4],[5,8,6],[5,8,7],[5,8,9],[5,9,1],[5,9,2],[5,9,3],[5,9,4],[5,9,6],[5,9,7],[5,9,8],[6,1,2],[6,1,3],[6,1,4],[6,1,5],[6,1,7],[6,1,8],[6,1,9],[6,2,1],[6,2,3],[6,2,4],[6,2,5],[6,2,7],[6,2,8],[6,2,9],[6,3,1],[6,3,2],[6,3,4],[6,3,5],[6,3,7],[6,3,8],[6,3,9],[6,4,1],[6,4,2],[6,4,3],[6,4,5],[6,4,7],[6,4,8],[6,4,9],[6,5,1],[6,5,2],[6,5,3],[6,5,4],[6,5,7],[6,5,8],[6,5,9],[6,7,1],[6,7,2],[6,7,3],[6,7,4],[6,7,5],[6,7,8],[6,7,9],[6,8,1],[6,8,2],[6,8,3],[6,8,4],[6,8,5],[6,8,7],[6,8,9],[6,9,1],[6,9,2],[6,9,3],[6,9,4],[6,9,5],[6,9,7],[6,9,8],[7,1,2],[7,1,3],[7,1,4],[7,1,5],[7,1,6],[7,1,8],[7,1,9],[7,2,1],[7,2,3],[7,2,4],[7,2,5],[7,2,6],[7,2,8],[7,2,9],[7,3,1],[7,3,2],[7,3,4],[7,3,5],[7,3,6],[7,3,8],[7,3,9],[7,4,1],[7,4,2],[7,4,3],[7,4,5],[7,4,6],[7,4,8],[7,4,9],[7,5,1],[7,5,2],[7,5,3],[7,5,4],[7,5,6],[7,5,8],[7,5,9],[7,6,1],[7,6,2],[7,6,3],[7,6,4],[7,6,5],[7,6,8],[7,6,9],[7,8,1],[7,8,2],[7,8,3],[7,8,4],[7,8,5],[7,8,6],[7,8,9],[7,9,1],[7,9,2],[7,9,3],[7,9,4],[7,9,5],[7,9,6],[7,9,8],[8,1,2],[8,1,3],[8,1,4],[8,1,5],[8,1,6],[8,1,7],[8,1,9],[8,2,1],[8,2,3],[8,2,4],[8,2,5],[8,2,6],[8,2,7],[8,2,9],[8,3,1],[8,3,2],[8,3,4],[8,3,5],[8,3,6],[8,3,7],[8,3,9],[8,4,1],[8,4,2],[8,4,3],[8,4,5],[8,4,6],[8,4,7],[8,4,9],[8,5,1],[8,5,2],[8,5,3],[8,5,4],[8,5,6],[8,5,7],[8,5,9],[8,6,1],[8,6,2],[8,6,3],[8,6,4],[8,6,5],[8,6,7],[8,6,9],[8,7,1],[8,7,2],[8,7,3],[8,7,4],[8,7,5],[8,7,6],[8,7,9],[8,9,1],[8,9,2],[8,9,3],[8,9,4],[8,9,5],[8,9,6],[8,9,7],[9,1,2],[9,1,3],[9,1,4],[9,1,5],[9,1,6],[9,1,7],[9,1,8],[9,2,1],[9,2,3],[9,2,4],[9,2,5],[9,2,6],[9,2,7],[9,2,8],[9,3,1],[9,3,2],[9,3,4],[9,3,5],[9,3,6],[9,3,7],[9,3,8],[9,4,1],[9,4,2],[9,4,3],[9,4,5],[9,4,6],[9,4,7],[9,4,8],[9,5,1],[9,5,2],[9,5,3],[9,5,4],[9,5,6],[9,5,7],[9,5,8],[9,6,1],[9,6,2],[9,6,3],[9,6,4],[9,6,5],[9,6,7],[9,6,8],[9,7,1],[9,7,2],[9,7,3],[9,7,4],[9,7,5],[9,7,6],[9,7,8],[9,8,1],[9,8,2],[9,8,3],[9,8,4],[9,8,5],[9,8,6],[9,8,7]],_e=B({name:"FrontFaceCard",props:{imageSrc:String,maskType:Number},setup(e){return{maskNumbers:m(()=>he[e.maskType||0])}}}),ye={xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 200 200"},ke=["id"],ge={key:0,r:"24",id:"svg_2",cy:"46",cx:"43",stroke:"#fff","stroke-width":"3",fill:"#fff"},pe={key:1,r:"24",id:"svg_3",cy:"158",cx:"156",stroke:"#fff","stroke-width":"3",fill:"#fff"},be={key:2,r:"25",id:"svg_4",cy:"46",cx:"158",stroke:"#fff","stroke-width":"3",fill:"#fff"},Ce={key:3,stroke:"#fff","stroke-width":"3",r:"27",id:"svg_5",cy:"101.5",cx:"100.5",fill:"#fff"},$e={key:4,r:"23",id:"svg_6",cy:"158",cx:"44",stroke:"#fff","stroke-width":"3",fill:"#fff"},Ie={key:5,stroke:"#fff","stroke-width":"3",r:"18",id:"svg_7",cy:"100.5",cx:"55.5",fill:"#fff"},Se={key:6,stroke:"#fff","stroke-width":"3",r:"20",id:"svg_8",cy:"102",cx:"146",fill:"#fff"},we={key:7,stroke:"#fff","stroke-width":"3",r:"20",id:"svg_9",cy:"56",cx:"100",fill:"#fff"},Ae={key:8,stroke:"#fff","stroke-width":"3",r:"20",id:"svg_10",cy:"146",cx:"100",fill:"#fff"},Me=["xlink:href","mask"];function Ne(e,t,s,y,f,o){return r(),v("svg",ye,[_("mask",{id:`cardmask_${e.maskNumbers.join("-")}`},[e.maskNumbers.includes(1)?(r(),v("circle",ge)):h("",!0),e.maskNumbers.includes(2)?(r(),v("circle",pe)):h("",!0),e.maskNumbers.includes(3)?(r(),v("circle",be)):h("",!0),e.maskNumbers.includes(4)?(r(),v("circle",Ce)):h("",!0),e.maskNumbers.includes(5)?(r(),v("circle",$e)):h("",!0),e.maskNumbers.includes(6)?(r(),v("circle",Ie)):h("",!0),e.maskNumbers.includes(7)?(r(),v("circle",Se)):h("",!0),e.maskNumbers.includes(8)?(r(),v("circle",we)):h("",!0),e.maskNumbers.includes(9)?(r(),v("circle",Ae)):h("",!0)],8,ke),_("image",{"xlink:href":e.imageSrc,width:"100%",height:"100%",x:"0",y:"0",mask:`url(#cardmask_${e.maskNumbers.join("-")})`},null,8,Me)])}const Te=z(_e,[["render",Ne]]),P=B({name:"MCard",components:{FrontFaceCard:Te},props:{initiallyOpened:Boolean,enabled:Boolean,frontImage:String,reactiveState:Object,backImage:String,cardId:Number,sizeMetric:{type:String,default:()=>"px"},cornerRadius:{type:Number,default:()=>10},width:{type:Number,default:()=>200},height:{type:Number,default:()=>300},openCloseAnimationDuration:{type:Number,default:()=>800},holdAfterTurningDuration:{type:Number,default:()=>200},goBackDuration:{type:Number,default:()=>300}},emits:["open","open:before","close"],setup(e,{emit:t}){const f=c(e.initiallyOpened),o=c(!1),i=c(0),a=c(e.initiallyOpened?0:180),n=c(0),l=c(0),k=async()=>{if(o.value)return;const d=e.openCloseAnimationDuration/3.5;let u=0,C=0,g=0;o.value=!0;const p=a.value;return new Promise(b=>{const A=setInterval(()=>{l.value=E(u,0,2,e.openCloseAnimationDuration),u>=d&&(a.value=E(g,p,180,e.openCloseAnimationDuration-d),g+=8),a.value>=p+180&&(clearInterval(A),setTimeout(()=>{const H=setInterval(()=>{l.value=E(C,2,-2,e.goBackDuration),l.value<=0&&(clearInterval(H),o.value=!1,b(!0)),C+=8},8)},e.holdAfterTurningDuration)),u+=8},8)})},$=async()=>{f.value||(t("open:before",e.reactiveState),e.reactiveState&&(e.reactiveState.animated=!0),await k(),e.reactiveState&&(e.reactiveState.animated=!1),f.value=!0,e.reactiveState&&(e.reactiveState.opened=!0),t("open",e.reactiveState))},I=async()=>{!f.value||(e.reactiveState&&(e.reactiveState.animated=!0),await k(),e.reactiveState&&(e.reactiveState.animated=!0),f.value=!1,e.reactiveState&&(e.reactiveState.opened=!1),t("close",e.reactiveState))},w=()=>{!e.enabled||(f.value?I():$())};return K(e.reactiveState,()=>{var d,u;f&&!((d=e.reactiveState)!=null&&d.opened)&&I(),!f&&((u=e.reactiveState)==null?void 0:u.opened)&&$()}),{cardClickHandler:w,xRotate:`${i.value}deg`,yRotate:`${a.value}deg`,zRotate:`${n.value}deg`,backImageUrl:`url(${e.backImage}`,rotation:m(()=>`rotateX(${i.value}deg) rotateY(${a.value}deg)`),rotationOutsize:m(()=>`translateZ(${l.value*50}px)`),rotationShade:m(()=>`scaleX(${Math.round(Math.abs(Math.cos(a.value*Math.PI/180)*100))/100})`),opacityShade:m(()=>`${Math.max(0,Math.min(1,(10-l.value)/10))}`),shadeBlur:m(()=>l.value>0?`blur(${l.value*3}px)`:"none"),calculatedWidth:m(()=>`${e.width}${e.sizeMetric}`),calculatedHeight:m(()=>`${e.height}${e.sizeMetric}`),calculatedBorderRadius:m(()=>`${e.cornerRadius}${e.sizeMetric}`)}}}),G=()=>{x(e=>({"3e0d4fb6":e.calculatedWidth,"69cdad37":e.calculatedHeight,"7c1ecbee":e.calculatedBorderRadius,"510b8bc2":e.shadeBlur,"227da9cd":e.backImageUrl,"6f616e30":e.rotation,"4b806a94":e.opacityShade,"10fe4ddd":e.rotationShade,"0e4b0bff":e.rotationOutsize}))},V=P.setup;P.setup=V?(e,t)=>(G(),V(e,t)):G;const J=e=>(Q("data-v-94740686"),e=e(),ee(),e),De={class:"shape cuboid-1 cub-1 card-rotate-outside"},Be={class:"shape-body card-rotate"},He={class:"face ft"},Oe={class:"photon-shader"},Re=J(()=>_("div",{class:"face bk"},[_("div",{class:"photon-shader",style:{"background-color":"rgba(0, 0, 0, 0.15)"}})],-1)),Ee=J(()=>_("div",{class:"shade-rotate shade-element shade-blur shade-opacity"},null,-1));function ze(e,t,s,y,f,o){const i=F("FrontFaceCard");return r(),v("div",{class:"card-container",onClick:t[0]||(t[0]=(...a)=>e.cardClickHandler&&e.cardClickHandler(...a))},[_("div",De,[_("div",Be,[_("div",He,[_("div",Oe,[T(i,{imageSrc:e.frontImage,"mask-type":e.cardId},null,8,["imageSrc","mask-type"])])]),Re])]),Ee])}const Fe=z(P,[["render",ze],["__scopeId","data-v-94740686"]]);function W(e,t){const s=new Set;for(;s.size<e;)s.add(Math.floor(Math.random()*t)+1);return Array.from(s.values())}function N(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}}const Pe="/pahanov-birthday/assets/frame.51e935ef.svg",L=100,Y=100,Xe=4,X=B({name:"MemoriesBoard",components:{MCard:Fe},props:{columns:Number,rows:Number,achieve:Object},emits:["victory"],setup(e,{emit:t}){const s=Array.from(ae.values());N(s);const y=(e.columns||1)*(e.rows||1),f=s.slice(0,Math.floor(y/2));let o=W(y,500);N(o);const i=c(!0),a=c(),n=c();let l=0;const k=m(()=>{const d=f.map((g,p)=>Z({cardId:o[p],model:g,hidden:!1,matched:!1,opened:!1})),u=f.map((g,p)=>Z({cardId:o[p],model:g,hidden:!1,matched:!1,opened:!1})),C=d.concat(u);return N(C),C});return te(()=>{o=W(y,500),N(o)}),{openBeforeCardHandler:d=>{typeof a.value>"u"?a.value=k.value.find(u=>u===d):(n.value=k.value.find(u=>u===d&&u!==a.value)||void 0,i.value=!1),a.value&&n.value&&a.value.cardId===n.value.cardId&&(a.value.matched=!0,n.value.matched=!0)},openAfterCardHandler:d=>{a.value!==d&&(l&&clearTimeout(l),a.value&&n.value&&(l=setTimeout(()=>{!(a.value&&n.value)||(a.value.cardId===n.value.cardId&&(a.value.hidden=!0,n.value.hidden=!0,setTimeout(()=>{k.value.every(u=>u.matched)?t("victory"):i.value=!0,a.value=void 0,n.value=void 0},500)),a.value.cardId!==n.value.cardId&&(a.value.opened=!1,n.value.opened=!1))},500)))},closeCardHandler:d=>{a.value===d&&(a.value=void 0),n.value===d&&(n.value=void 0),i.value=!(a.value&&n.value)},firstOpenedCard:a,enabledInteractivity:i,CARD_WIDTH:L,CARD_HEIGHT:Y,GAP:Xe,cardDataArray:k,frameSvg:Pe,bindGridColsWidth:m(()=>`repeat(${e.columns}, ${L}px)`),bindGridRowsHeight:m(()=>`repeat(${e.rows}, ${Y}px)`)}}}),U=()=>{x(e=>({"7c7d3752":e.bindGridColsWidth,"7f5570fe":e.bindGridRowsHeight}))},q=X.setup;X.setup=q?(e,t)=>(U(),q(e,t)):U;const je={class:"scene"},Ze={class:"scene-grid"},Ge=["src"];function Ve(e,t,s,y,f,o){const i=F("MCard");return r(),v("div",je,[_("div",Ze,[(r(!0),v(ne,null,se(e.cardDataArray,(a,n)=>(r(),D(i,{key:`card_${a.cardId}_${n}`,id:`card_${a.cardId}_${n}`,style:re({opacity:a.hidden?0:1}),height:e.CARD_HEIGHT,width:e.CARD_WIDTH,cardId:a.cardId,reactiveState:a,"front-image":a.model.small,"back-image":e.frameSvg,"open-close-animation-duration":500,enabled:e.enabledInteractivity&&a!==e.firstOpenedCard,onOpen:l=>e.openAfterCardHandler(a),"onOpen:before":l=>e.openBeforeCardHandler(a),onClose:e.closeCardHandler},null,8,["id","style","height","width","cardId","reactiveState","front-image","back-image","enabled","onOpen","onOpen:before","onClose"]))),128))]),e.achieve?(r(),v("img",{key:0,src:e.achieve.small,style:{"z-index":"-1",position:"absolute",top:"0",left:"0"}},null,8,Ge)):h("",!0)])}const We=z(X,[["render",Ve],["__scopeId","data-v-a86a3911"]]),Le={class:"memories-game-container"},Ye={id:"memoryContainer",class:"memory-container"},xe=B({__name:"MemoriesPage",setup(e){const{memoryOpenedAchieves:t,memoryAchieves:s,downloadTheBigPicture:y}=oe(),f=m(()=>s.value.filter(b=>!t.value.map(A=>A.name).includes(b.name))),o=m(()=>f.value[0]),i=c(),a=c(!1),n=c(!1),l=c(!1);c(512),c(512);const k=c(),$=c(),I=async b=>{k.value=b,k.value&&await me(k.value)},w=async b=>{$.value=b},d=async()=>{n.value=t.value.length!==s.value.length,a.value=!0,l.value=!0,de.value.memories.push(o.value.name)},u=()=>{l.value=!1,a.value=!1,t.value.push(o.value),i.value=o.value},C=()=>{y(i.value)},g=ue(),p=m(()=>g.value==="dark"?fe:null);return i.value=o.value,(b,A)=>{var j;const H=F("Particles");return r(),v("div",Le,[l.value?(r(),D(H,{key:0,id:"tsparticles",particlesInit:I,particlesLoaded:w,options:ve})):h("",!0),_("div",Ye,[(r(),D(We,{key:`name_${((j=i.value)==null?void 0:j.name)||"1"}`,rows:5,columns:5,achieve:i.value,onVictory:d},null,8,["achieve"]))]),ie(_("div",null,[T(S(ce),{theme:S(p),style:{width:"100%",display:"flex","justify-content":"space-between","margin-top":"10px"}},{default:M(()=>[T(S(R),{onClick:C},{default:M(()=>[O("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435")]),_:1}),T(S(R),null,{default:M(()=>[O("\u041A \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C")]),_:1}),n.value?(r(),D(S(R),{key:0,onClick:u},{default:M(()=>[O("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C")]),_:1})):h("",!0)]),_:1},8,["theme"])],512),[[le,a.value]])])}}});export{xe as default};