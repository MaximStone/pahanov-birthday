import{e as T,f as d,_ as E,o,c,b as v,a as m,g as i,al as J,aA as x,i as I,p as F,aB as K,aC as Q,aD as ee,aq as ae,aE as j,m as A,F as te,r as se,h as O,aw as ne,u as re,k as oe,v as ie,j as w,d as B}from"./index.02eaf5c7.js";import{u as ce,N as H,a as de,d as le,l as ue}from"./dark.e2227639.js";function R(e,a,n,h){return(e/=h/2)<1?n/2*e*e*e+a:n/2*((e-=2)*e*e+2)+a}const fe=[[1,2,3],[1,2,4],[1,2,5],[1,2,6],[1,2,7],[1,2,8],[1,2,9],[1,3,2],[1,3,4],[1,3,5],[1,3,6],[1,3,7],[1,3,8],[1,3,9],[1,4,2],[1,4,3],[1,4,5],[1,4,6],[1,4,7],[1,4,8],[1,4,9],[1,5,2],[1,5,3],[1,5,4],[1,5,6],[1,5,7],[1,5,8],[1,5,9],[1,6,2],[1,6,3],[1,6,4],[1,6,5],[1,6,7],[1,6,8],[1,6,9],[1,7,2],[1,7,3],[1,7,4],[1,7,5],[1,7,6],[1,7,8],[1,7,9],[1,8,2],[1,8,3],[1,8,4],[1,8,5],[1,8,6],[1,8,7],[1,8,9],[1,9,2],[1,9,3],[1,9,4],[1,9,5],[1,9,6],[1,9,7],[1,9,8],[2,1,3],[2,1,4],[2,1,5],[2,1,6],[2,1,7],[2,1,8],[2,1,9],[2,3,1],[2,3,4],[2,3,5],[2,3,6],[2,3,7],[2,3,8],[2,3,9],[2,4,1],[2,4,3],[2,4,5],[2,4,6],[2,4,7],[2,4,8],[2,4,9],[2,5,1],[2,5,3],[2,5,4],[2,5,6],[2,5,7],[2,5,8],[2,5,9],[2,6,1],[2,6,3],[2,6,4],[2,6,5],[2,6,7],[2,6,8],[2,6,9],[2,7,1],[2,7,3],[2,7,4],[2,7,5],[2,7,6],[2,7,8],[2,7,9],[2,8,1],[2,8,3],[2,8,4],[2,8,5],[2,8,6],[2,8,7],[2,8,9],[2,9,1],[2,9,3],[2,9,4],[2,9,5],[2,9,6],[2,9,7],[2,9,8],[3,1,2],[3,1,4],[3,1,5],[3,1,6],[3,1,7],[3,1,8],[3,1,9],[3,2,1],[3,2,4],[3,2,5],[3,2,6],[3,2,7],[3,2,8],[3,2,9],[3,4,1],[3,4,2],[3,4,5],[3,4,6],[3,4,7],[3,4,8],[3,4,9],[3,5,1],[3,5,2],[3,5,4],[3,5,6],[3,5,7],[3,5,8],[3,5,9],[3,6,1],[3,6,2],[3,6,4],[3,6,5],[3,6,7],[3,6,8],[3,6,9],[3,7,1],[3,7,2],[3,7,4],[3,7,5],[3,7,6],[3,7,8],[3,7,9],[3,8,1],[3,8,2],[3,8,4],[3,8,5],[3,8,6],[3,8,7],[3,8,9],[3,9,1],[3,9,2],[3,9,4],[3,9,5],[3,9,6],[3,9,7],[3,9,8],[4,1,2],[4,1,3],[4,1,5],[4,1,6],[4,1,7],[4,1,8],[4,1,9],[4,2,1],[4,2,3],[4,2,5],[4,2,6],[4,2,7],[4,2,8],[4,2,9],[4,3,1],[4,3,2],[4,3,5],[4,3,6],[4,3,7],[4,3,8],[4,3,9],[4,5,1],[4,5,2],[4,5,3],[4,5,6],[4,5,7],[4,5,8],[4,5,9],[4,6,1],[4,6,2],[4,6,3],[4,6,5],[4,6,7],[4,6,8],[4,6,9],[4,7,1],[4,7,2],[4,7,3],[4,7,5],[4,7,6],[4,7,8],[4,7,9],[4,8,1],[4,8,2],[4,8,3],[4,8,5],[4,8,6],[4,8,7],[4,8,9],[4,9,1],[4,9,2],[4,9,3],[4,9,5],[4,9,6],[4,9,7],[4,9,8],[5,1,2],[5,1,3],[5,1,4],[5,1,6],[5,1,7],[5,1,8],[5,1,9],[5,2,1],[5,2,3],[5,2,4],[5,2,6],[5,2,7],[5,2,8],[5,2,9],[5,3,1],[5,3,2],[5,3,4],[5,3,6],[5,3,7],[5,3,8],[5,3,9],[5,4,1],[5,4,2],[5,4,3],[5,4,6],[5,4,7],[5,4,8],[5,4,9],[5,6,1],[5,6,2],[5,6,3],[5,6,4],[5,6,7],[5,6,8],[5,6,9],[5,7,1],[5,7,2],[5,7,3],[5,7,4],[5,7,6],[5,7,8],[5,7,9],[5,8,1],[5,8,2],[5,8,3],[5,8,4],[5,8,6],[5,8,7],[5,8,9],[5,9,1],[5,9,2],[5,9,3],[5,9,4],[5,9,6],[5,9,7],[5,9,8],[6,1,2],[6,1,3],[6,1,4],[6,1,5],[6,1,7],[6,1,8],[6,1,9],[6,2,1],[6,2,3],[6,2,4],[6,2,5],[6,2,7],[6,2,8],[6,2,9],[6,3,1],[6,3,2],[6,3,4],[6,3,5],[6,3,7],[6,3,8],[6,3,9],[6,4,1],[6,4,2],[6,4,3],[6,4,5],[6,4,7],[6,4,8],[6,4,9],[6,5,1],[6,5,2],[6,5,3],[6,5,4],[6,5,7],[6,5,8],[6,5,9],[6,7,1],[6,7,2],[6,7,3],[6,7,4],[6,7,5],[6,7,8],[6,7,9],[6,8,1],[6,8,2],[6,8,3],[6,8,4],[6,8,5],[6,8,7],[6,8,9],[6,9,1],[6,9,2],[6,9,3],[6,9,4],[6,9,5],[6,9,7],[6,9,8],[7,1,2],[7,1,3],[7,1,4],[7,1,5],[7,1,6],[7,1,8],[7,1,9],[7,2,1],[7,2,3],[7,2,4],[7,2,5],[7,2,6],[7,2,8],[7,2,9],[7,3,1],[7,3,2],[7,3,4],[7,3,5],[7,3,6],[7,3,8],[7,3,9],[7,4,1],[7,4,2],[7,4,3],[7,4,5],[7,4,6],[7,4,8],[7,4,9],[7,5,1],[7,5,2],[7,5,3],[7,5,4],[7,5,6],[7,5,8],[7,5,9],[7,6,1],[7,6,2],[7,6,3],[7,6,4],[7,6,5],[7,6,8],[7,6,9],[7,8,1],[7,8,2],[7,8,3],[7,8,4],[7,8,5],[7,8,6],[7,8,9],[7,9,1],[7,9,2],[7,9,3],[7,9,4],[7,9,5],[7,9,6],[7,9,8],[8,1,2],[8,1,3],[8,1,4],[8,1,5],[8,1,6],[8,1,7],[8,1,9],[8,2,1],[8,2,3],[8,2,4],[8,2,5],[8,2,6],[8,2,7],[8,2,9],[8,3,1],[8,3,2],[8,3,4],[8,3,5],[8,3,6],[8,3,7],[8,3,9],[8,4,1],[8,4,2],[8,4,3],[8,4,5],[8,4,6],[8,4,7],[8,4,9],[8,5,1],[8,5,2],[8,5,3],[8,5,4],[8,5,6],[8,5,7],[8,5,9],[8,6,1],[8,6,2],[8,6,3],[8,6,4],[8,6,5],[8,6,7],[8,6,9],[8,7,1],[8,7,2],[8,7,3],[8,7,4],[8,7,5],[8,7,6],[8,7,9],[8,9,1],[8,9,2],[8,9,3],[8,9,4],[8,9,5],[8,9,6],[8,9,7],[9,1,2],[9,1,3],[9,1,4],[9,1,5],[9,1,6],[9,1,7],[9,1,8],[9,2,1],[9,2,3],[9,2,4],[9,2,5],[9,2,6],[9,2,7],[9,2,8],[9,3,1],[9,3,2],[9,3,4],[9,3,5],[9,3,6],[9,3,7],[9,3,8],[9,4,1],[9,4,2],[9,4,3],[9,4,5],[9,4,6],[9,4,7],[9,4,8],[9,5,1],[9,5,2],[9,5,3],[9,5,4],[9,5,6],[9,5,7],[9,5,8],[9,6,1],[9,6,2],[9,6,3],[9,6,4],[9,6,5],[9,6,7],[9,6,8],[9,7,1],[9,7,2],[9,7,3],[9,7,4],[9,7,5],[9,7,6],[9,7,8],[9,8,1],[9,8,2],[9,8,3],[9,8,4],[9,8,5],[9,8,6],[9,8,7]],me=T({name:"FrontFaceCard",props:{imageSrc:String,maskType:Number},setup(e){return{maskNumbers:d(()=>fe[e.maskType||0])}}}),ve={xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 200 200"},he=["id"],_e={key:0,r:"21",id:"svg_2",cy:"46",cx:"43",stroke:"#fff","stroke-width":"3",fill:"#fff"},pe={key:1,r:"21",id:"svg_3",cy:"158",cx:"156",stroke:"#fff","stroke-width":"3",fill:"#fff"},ke={key:2,r:"21",id:"svg_4",cy:"46",cx:"158",stroke:"#fff","stroke-width":"3",fill:"#fff"},ge={key:3,stroke:"#fff","stroke-width":"3",r:"24.5",id:"svg_5",cy:"101.5",cx:"100.5",fill:"#fff"},ye={key:4,r:"21",id:"svg_6",cy:"158",cx:"44",stroke:"#fff","stroke-width":"3",fill:"#fff"},be={key:5,stroke:"#fff","stroke-width":"3",r:"15.5",id:"svg_7",cy:"100.5",cx:"55.5",fill:"#fff"},Ce={key:6,stroke:"#fff","stroke-width":"3",r:"17",id:"svg_8",cy:"102",cx:"146",fill:"#fff"},Ie={key:7,stroke:"#fff","stroke-width":"3",r:"17",id:"svg_9",cy:"56",cx:"100",fill:"#fff"},$e={key:8,stroke:"#fff","stroke-width":"3",r:"17",id:"svg_10",cy:"146",cx:"100",fill:"#fff"},we=["xlink:href","mask"];function Ae(e,a,n,h,r,u){return o(),c("svg",ve,[v("mask",{id:`cardmask_${e.maskNumbers.join("-")}`},[e.maskNumbers.includes(1)?(o(),c("circle",_e)):m("",!0),e.maskNumbers.includes(2)?(o(),c("circle",pe)):m("",!0),e.maskNumbers.includes(3)?(o(),c("circle",ke)):m("",!0),e.maskNumbers.includes(4)?(o(),c("circle",ge)):m("",!0),e.maskNumbers.includes(5)?(o(),c("circle",ye)):m("",!0),e.maskNumbers.includes(6)?(o(),c("circle",be)):m("",!0),e.maskNumbers.includes(7)?(o(),c("circle",Ce)):m("",!0),e.maskNumbers.includes(8)?(o(),c("circle",Ie)):m("",!0),e.maskNumbers.includes(9)?(o(),c("circle",$e)):m("",!0)],8,he),v("image",{"xlink:href":e.imageSrc,width:"100%",height:"100%",x:"0",y:"0",mask:`url(#cardmask_${e.maskNumbers.join("-")})`},null,8,we)])}const Me=E(me,[["render",Ae]]),P=T({name:"MCard",components:{FrontFaceCard:Me},props:{initiallyOpened:Boolean,enabled:Boolean,frontImage:String,reactiveState:Object,backImage:String,cardId:Number,sizeMetric:{type:String,default:()=>"px"},cornerRadius:{type:Number,default:()=>10},width:{type:Number,default:()=>200},height:{type:Number,default:()=>300},openCloseAnimationDuration:{type:Number,default:()=>800},holdAfterTurningDuration:{type:Number,default:()=>200},goBackDuration:{type:Number,default:()=>300}},emits:["open","close"],setup(e,{emit:a}){const r=i(e.initiallyOpened),u=i(!1),s=i(0),t=i(e.initiallyOpened?0:180),_=i(0),l=i(0),C=async()=>{if(u.value)return;const g=e.openCloseAnimationDuration/3.5;let f=0,b=0,M=0;u.value=!0;const y=t.value;return new Promise(S=>{const D=setInterval(()=>{l.value=R(f,0,2,e.openCloseAnimationDuration),f>=g&&(t.value=R(M,y,180,e.openCloseAnimationDuration-g),M+=8),t.value>=y+180&&(clearInterval(D),setTimeout(()=>{const q=setInterval(()=>{l.value=R(b,2,-2,e.goBackDuration),l.value<=0&&(clearInterval(q),u.value=!1,S(!0)),b+=8},8)},e.holdAfterTurningDuration)),f+=8},8)})},$=async()=>{r.value||(await C(),r.value=!0,e.reactiveState&&(e.reactiveState.opened=!0),a("open",e.cardId))},p=async()=>{!r.value||(await C(),r.value=!1,e.reactiveState&&(e.reactiveState.opened=!1),a("close",e.cardId))},k=()=>{!e.enabled||(r.value?p():$())};return J(e.reactiveState,()=>{var g,f;r&&!((g=e.reactiveState)!=null&&g.opened)&&p(),!r&&((f=e.reactiveState)==null?void 0:f.opened)&&$()}),{cardClickHandler:k,xRotate:`${s.value}deg`,yRotate:`${t.value}deg`,zRotate:`${_.value}deg`,backImageUrl:`url(${e.backImage}`,rotation:d(()=>`rotateX(${s.value}deg) rotateY(${t.value}deg)`),rotationOutsize:d(()=>`translateZ(${l.value*50}px)`),rotationShade:d(()=>`scaleX(${Math.round(Math.abs(Math.cos(t.value*Math.PI/180)*100))/100})`),opacityShade:d(()=>`${Math.max(0,Math.min(1,(10-l.value)/10))}`),shadeBlur:d(()=>l.value>0?`blur(${l.value*3}px)`:"none"),calculatedWidth:d(()=>`${e.width}${e.sizeMetric}`),calculatedHeight:d(()=>`${e.height}${e.sizeMetric}`),calculatedBorderRadius:d(()=>`${e.cornerRadius}${e.sizeMetric}`)}}}),z=()=>{x(e=>({"46893e7e":e.calculatedWidth,"70cf976f":e.calculatedHeight,fa33a7b4:e.calculatedBorderRadius,b4979eec:e.shadeBlur,"10851ff6":e.backImageUrl,"97a5df30":e.rotation,"20c030cc":e.opacityShade,"389162b6":e.rotationShade,"16c6fac7":e.rotationOutsize}))},G=P.setup;P.setup=G?(e,a)=>(z(),G(e,a)):z;const U=e=>(K("data-v-55e1c4a8"),e=e(),Q(),e),Se={class:"shape cuboid-1 cub-1 card-rotate-outside"},Ne={class:"shape-body card-rotate"},Te={class:"face ft"},De={class:"photon-shader"},Be=U(()=>v("div",{class:"face bk"},[v("div",{class:"photon-shader",style:{"background-color":"rgba(0, 0, 0, 0.15)"}})],-1)),He=U(()=>v("div",{class:"shade-rotate shade-element shade-blur shade-opacity"},null,-1));function Re(e,a,n,h,r,u){const s=F("FrontFaceCard");return o(),c("div",{class:"card-container",onClick:a[0]||(a[0]=(...t)=>e.cardClickHandler&&e.cardClickHandler(...t))},[v("div",Se,[v("div",Ne,[v("div",Te,[v("div",De,[I(s,{imageSrc:e.frontImage,"mask-type":e.cardId},null,8,["imageSrc","mask-type"])])]),Be])]),He])}const Oe=E(P,[["render",Re],["__scopeId","data-v-55e1c4a8"]]);function Z(e,a){const n=new Set;for(;n.size<e;)n.add(Math.floor(Math.random()*a)+1);return Array.from(n.values())}function N(e){for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}}const Ee="/pahanov-birthday/assets/frame.51e935ef.svg",V=100,W=100,Fe=4,X=T({name:"MemoriesBoard",components:{MCard:Oe},props:{columns:Number,rows:Number,achieve:Object},setup(e){const a=Array.from(ee.values());N(a);const n=(e.columns||1)*(e.rows||1),h=a.slice(0,Math.floor(n/2));let r=Z(n,500);N(r);const u=i(!0),s=i(),t=i();let _=0;const l=d(()=>{const p=h.map((f,b)=>j({cardId:r[b],model:f,hidden:!1,matched:!1,opened:!1})),k=h.map((f,b)=>j({cardId:r[b],model:f,hidden:!1,matched:!1,opened:!1})),g=p.concat(k);return N(g),g});return ae(()=>{r=Z(n,500),N(r)}),{openCardHandler:p=>{typeof s.value>"u"?s.value=l.value.find(k=>k.cardId===p):(t.value=l.value.find(k=>k.cardId===p&&k!==s.value),u.value=!1),_&&clearTimeout(_),_=setTimeout(()=>{s.value&&t.value&&s.value.cardId===t.value.cardId&&(s.value.hidden=!0,t.value.hidden=!0),s.value&&t.value&&s.value.cardId!==t.value.cardId&&(s.value.opened=!1,t.value.opened=!1)},1e3)},closeCardHandler:p=>{typeof s.value<"u"?s.value=void 0:(t.value=void 0,u.value=!0)},enabledInteractivity:u,CARD_WIDTH:V,CARD_HEIGHT:W,GAP:Fe,cardDataArray:l,frameSvg:Ee,bindGridColsWidth:d(()=>`repeat(${e.columns}, ${V}px)`),bindGridRowsHeight:d(()=>`repeat(${e.rows}, ${W}px)`)}}}),L=()=>{x(e=>({"78c5f3be":e.bindGridColsWidth,"5d2f5292":e.bindGridRowsHeight}))},Y=X.setup;X.setup=Y?(e,a)=>(L(),Y(e,a)):L;const Pe={class:"scene"},Xe=["src"];function je(e,a,n,h,r,u){const s=F("MCard");return o(),c("div",Pe,[I(ne,{class:"scene-grid",tag:"div"},{default:A(()=>[(o(!0),c(te,null,se(e.cardDataArray,(t,_)=>(o(),O(s,{key:`card_${t.cardId}_${_}`,id:`card_${t.cardId}_${_}`,height:e.CARD_HEIGHT,width:e.CARD_WIDTH,cardId:t.cardId,reactiveState:t,"front-image":t.model.small,"back-image":e.frameSvg,"open-close-animation-duration":500,enabled:e.enabledInteractivity,onOpen:e.openCardHandler,onClose:e.closeCardHandler},null,8,["id","height","width","cardId","reactiveState","front-image","back-image","enabled","onOpen","onClose"]))),128))]),_:1}),e.achieve?(o(),c("img",{key:0,src:e.achieve.small,style:{"z-index":"-1",position:"absolute",top:"0",left:"0"}},null,8,Xe)):m("",!0)])}const ze=E(X,[["render",je],["__scopeId","data-v-68254080"]]),Ge={class:"memories-game-container"},Ze={id:"memoryContainer",class:"memory-container"},Le=T({__name:"MemoriesPage",setup(e){const{memoryOpenedAchieves:a,memoryAchieves:n,downloadTheBigPicture:h}=re(),r=d(()=>n.value.filter(y=>!a.value.map(S=>S.name).includes(y.name))),u=d(()=>r.value[0]),s=i(),t=i(!1),_=i(!1),l=i(!1);i(512),i(512);const C=i(),$=i(),p=async y=>{C.value=y,C.value&&await ue(C.value)},k=async y=>{$.value=y},g=()=>{l.value=!1,t.value=!1,a.value.push(u.value)},f=()=>{h(s.value)},b=ce(),M=d(()=>b.value==="dark"?le:null);return s.value=u.value,(y,S)=>{const D=F("Particles");return o(),c("div",Ge,[l.value?(o(),O(D,{key:0,id:"tsparticles",particlesInit:p,particlesLoaded:k,url:"src/assets/config.json"})):m("",!0),v("div",Ze,[I(ze,{rows:5,columns:5,achieve:s.value},null,8,["achieve"])]),oe(v("div",null,[I(w(de),{theme:w(M),style:{width:"100%",display:"flex","justify-content":"space-between","margin-top":"10px"}},{default:A(()=>[I(w(H),{onClick:f},{default:A(()=>[B("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435")]),_:1}),I(w(H),null,{default:A(()=>[B("\u041A \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C")]),_:1}),_.value?(o(),O(w(H),{key:0,onClick:g},{default:A(()=>[B("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C")]),_:1})):m("",!0)]),_:1},8,["theme"])],512),[[ie,t.value]])])}}});export{Le as default};
