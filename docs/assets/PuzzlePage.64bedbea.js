var q=Object.defineProperty;var K=(i,t,s)=>t in i?q(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var y=(i,t,s)=>(K(i,typeof t!="symbol"?t+"":t,s),s);import{_ as U,l as J,T as B,o as d,c as p,a as A,b as E,w as c,n as N,F as Q,r as Z,d as z,e as tt,u as st,f as P,g as u,h as S,i as _,j as m,k as et,v as it,m as x,s as nt,p as ot,q as at}from"./index.b2c034ef.js";import{u as ht,N as R,a as lt,d as rt,p as ct,l as ut}from"./config.a1f8110f.js";const g=0;class dt{constructor(t){y(this,"dx");y(this,"dy");y(this,"blocks");y(this,"blankpos");if(this.dy=t.length,this.dx=t[0].length,this.dy<2||this.dx<2)throw new Error("cannot initialize with the array which has less than 2 col/rows");this.blocks=new Array(this.dx*this.dy);let s=0;for(let e=0;e<this.dy;e++)for(let o=0;o<this.dx;o++)this.blocks[s]=t[e][o],t[e][o]===g&&(this.blankpos=s),s++}row(t){return Math.floor(t/this.dx)}col(t){return t%this.dx}dimensions(){return{x:this.dx,y:this.dy}}checkInRange(...t){for(let s of t)if(this.blocks[s]==null)throw new Error(`Index ${s} not in range [0 .. ${this.blocks.length-1}]`)}direction(t,s){if(this.checkInRange(t,s),this.row(s)===this.row(t)){if(s%this.dx===t%this.dx-1)return"Left";if(s%this.dx===t%this.dx+1)return"Right"}return s===t+this.dx?"Below":s===t-this.dx?"Above":null}hamming(){let t=0;for(let s=0,e=1,o=this.blocks.length;s<o;s++,e++)this.blocks[s]!==g&&this.blocks[s]!==e&&t++;return t}manhattan(){let t=0;for(let s=0,e=this.blocks.length;s<e;s++){if(this.blocks[s]===g)continue;const o=Math.abs(this.row(this.blocks[s]-1)-this.row(s)),n=Math.abs(this.col(this.blocks[s]-1)-this.col(s));t+=o+n}return t}isGoal(){for(let t=0,s=this.blocks.length;t<s;t++)if(this.blocks[t]!==g&&this.blocks[t]!==t+1)return!1;return!0}swap(t,s,e){if(this.checkInRange(s,e),this.blocks[s]!==g&&this.blocks[e]!==g)throw new Error("cannot swap non-space block");return[t[s],t[e]]=[t[e],t[s]],this.blankpos=t[s]===g?s:e,this}swapAbove(t){return this.swap(this.blocks,t,t-this.dx)}swapBelow(t){return this.swap(this.blocks,t,t+this.dx)}swapLeft(t){return this.swap(this.blocks,t,t-1)}swapRight(t){return this.swap(this.blocks,t,t+1)}slide(t){switch(this.checkInRange(t),this.direction(t,this.blankpos||0)){case"Above":return this.swapAbove(t);case"Below":return this.swapBelow(t);case"Left":return this.swapLeft(t);case"Right":return this.swapRight(t);default:return this}}toArray2D(){let t=0;const s=[];for(let e=0;e<this.dy;e++){const o=[];for(let n=0;n<this.dx;n++,t++)o.push(this.blocks[t]);s.push(o)}return s}}const ft=(i,t)=>{const s=[];let e=0;for(let o=0;o<t;o++){const n=[];for(let a=0;a<i;a++)n.push(++e%(i*t));s.push(n)}return s},W=(i,t)=>{const s=ft(i,t),e=new dt(s),o=["swapAbove","swapLeft","swapRight","swapBelow"],n=o.length;for(let a=0;a<100;a++){const h=o[Math.floor(Math.random()*n)];try{e[h](e.blankpos)}catch{continue}}return e},mt={name:"PuzzleBoard",data(){this._blockPositions=[],this._isStarted=!1;const i=W(this.cols,this.rows);return{isTouchNeeded:!0,blocks:i.blocks,isGoal:!1,manhattan:null,hamming:null,internalWidth:this.width,internalHeight:this.height,board:i,rafId:null,_tmpCtx:void 0,_tmpCanvas:void 0}},props:{src:{type:String},sources:{type:Array},muted:{type:Boolean,default:!0},animation:{type:Boolean,default:!0},cols:{type:Number,default:4},width:{type:Number,default:300},height:{type:Number,default:300},rows:{type:Number,default:4},showNumber:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!1}},computed:{cellWidth(){return this.internalWidth/this.cols},cellHeight(){return this.internalHeight/this.rows},isImage(){return/\.(jpe?g|png|webm|gif)$/i.test(this.src)},canvasStyle(){return{left:this.isGoal?"-100%":0}},sourceStyle(){const i={};return this.isGoal||(i.visibility="hidden"),i}},beforeDestroy(){this.rafId&&cancelAnimationFrame(this.rafId)},mounted(){this.onResize(),window.addEventListener("resize",J(this.onResize.bind(this),300)),this._tmpCanvas=this.$refs["puzzle-canvas1"],this._tmpCtx=this._tmpCanvas.getContext("2d"),this._lastRenderVideoTime=-1,this._lastRenderTime=0,this.isImage?this.$nextTick(()=>{this._loadImageToCanvas(),this.$refs.sourceImg.addEventListener("load",()=>{this.isTouchNeeded=!1,console.log("image loaded"),this._loadImageToCanvas()})}):this.$nextTick(()=>{this.$refs.sourceImg.addEventListener("load",()=>{this.isTouchNeeded=!1,console.log("image loaded")})});const i=()=>{if(B.update(),this.$refs.sourceImg==null||this.$refs.sourceImg.readyState<3){requestAnimationFrame(i);return}const t=this.$refs.sourceImg,s=this.$refs["puzzle-canvas"],e=s.getContext("2d"),o=this.internalWidth;if(t.currentTime!==this._lastRender&&(this._lastRenderVideoTime=t.currentTime,this._loadVideoFrameToCanvas()),this.isGoal){requestAnimationFrame(i);return}e.clearRect(0,0,this.internalWidth,this.internalHeight),this.showNumber&&(e.font="24px 'Avenir', Helvetica, Arial, sans-serif",e.fillStyle="#ffffff",e.textBaseline="top");for(let n=0,a=this.blocks.length;n<a;n++){const h=this.blocks[n];if(h===0)continue;const l=this.board.row(h-1),r=this.board.col(h-1),I=this.cellWidth*r+o,T=this.cellHeight*l,b=this._blockPositions[h];if(b==null)continue;const k=b.x,f=b.y;if(e.drawImage(s,I,T,this.cellWidth,this.cellHeight,k,f,this.cellWidth,this.cellHeight),this.showNumber){const C=String(h),v=5;e.strokeText(C,v+k,v+f),e.fillText(C,v+k,v+f)}}this.rafId=requestAnimationFrame(i)};this.$nextTick(i),this.$emit("init")},watch:{cols(){this.initBoard()},rows(){this.initBoard()},board(){this.blocks=this.board.blocks},width(){this.onResize()},height(){this.onResize()},blocks(){const i=!this.animation;this.updateBlockPositions(i),this.isGoal=this.board.isGoal(),this.manhattan=this.board.manhattan(),this.hamming=this.board.hamming(),this.$emit("change",{blocks:this.blocks,isGoal:this.isGoal,distance:this.manhattan})},isGoal(){this.isGoal&&this.$emit("finish")},sources(){this.isImage||this.$nextTick(()=>{this.$refs.sourceImg.load(),this.isTouchNeeded=!0,this.$refs.sourceImg.play(),this.$refs.sourceImg.addEventListener("play",()=>{this.isTouchNeeded=!1})})},src(){this.isImage&&(this.isTouchNeeded=!1,this.initBoard(),this._loadImageToCanvas(),this.$nextTick(()=>{this.$refs.sourceImg.addEventListener("load",()=>{this._loadImageToCanvas()})}))}},methods:{initBoard(){this.board=W(this.cols,this.rows),this._blockPositions=[],this._isStarted=!1,this.isGoal=!1,this.$emit("init")},updateBlockPositions(i){for(let t=0,s=this.blocks.length;t<s;t++){const e=this.blocks[t],o=this.board.col(t),n=this.board.row(t),a=this.cellWidth*o,h=this.cellHeight*n,l=this._blockPositions[e]||{x:0,y:0};if(this._blockPositions[e]==null&&(this._blockPositions[e]=l),l.x-a===0&&l.y-h===0)continue;const r={x:l.x,y:l.y};i?(this._blockPositions[e].x=a,this._blockPositions[e].y=h):new B.Tween(r).to({x:a,y:h},200).easing(B.Easing.Quadratic.Out).onUpdate(()=>{this._blockPositions[e].x=r.x,this._blockPositions[e].y=r.y}).start()}},_loadImageToCanvas(){const i=this.$refs.sourceImg;if(i.width===0||i.height===0)return;const s=this.$refs["puzzle-canvas"].getContext("2d"),e=this.width,o=this.height,n=i.width,a=i.height,h=Math.max(e/n,o/a);this._tmpCanvas.width=n*h,this._tmpCanvas.height=a*h,this._tmpCtx.drawImage(i,0,0,n*h,a*h);const l=(n*h-e)/2||0,r=(a*h-o)/2||0;s.drawImage(this._tmpCanvas,l,r,e,o,e,0,e,o)},_loadVideoFrameToCanvas(){const i=this.$refs.sourceImg,s=this.$refs["puzzle-canvas"].getContext("2d"),e=this.internalWidth,o=this.internalHeight,n=i.videoWidth,a=i.videoHeight,h=Math.max(e/n,o/a);this._tmpCanvas.width=n*h,this._tmpCanvas.height=a*h,this._tmpCtx.drawImage(i,0,0,n*h,a*h);const l=(n*h-e)/2,r=(a*h-o)/2;s.drawImage(this._tmpCanvas,l,r,e,o,e,0,e,o)},slide(i){this._isStarted||(this._isStarted=!0,this.$emit("start")),this.board.slide(i),this.blocks=this.board.blocks.concat()},onTouchEnd(i){this.isTouchNeeded&&this.$refs.sourceImg.play();const t=i.changedTouches[0],s=this.$el.getBoundingClientRect(),e=t.clientX-s.left,o=t.clientY-s.top;this.handleClick(e,o)},onClick(i){const t=i.offsetX-(this.isGoal?this.width:0),s=i.offsetY;this.handleClick(t,s)},handleClick(i,t){i=i/this.cellWidth,t=t/this.cellHeight;const s=Math.floor(i),o=Math.floor(t)*this.cols+s;this.slide(o)},onClickBoard(){this.$el.focus()},onResize(){const i=this.$el.offsetWidth,t=this.$el.offsetHeight;this.autoResize?(this.internalWidth=i,this.internalHeight=t):(this.internalWidth=this.width,this.internalHeight=this.height),this.isImage&&this.$nextTick(this._loadImageToCanvas.bind(this)),this.updateBlockPositions(!0)},onKeyUp(i){const t=this.board.blankpos,s=this.blocks.length;switch(i.keyCode){case 37:t+1<s&&this.slide(t+1);break;case 38:t+this.cols<s&&this.slide(t+this.cols);break;case 39:t-1>=0&&this.slide(t-1);break;case 40:t-this.cols>=0&&this.slide(t-this.cols)}}}},gt={key:0,class:"puzzle-message"},pt=["width","height"],vt=["src"],wt=["muted","src","width","height"],bt=["src","type"];function kt(i,t,s,e,o,n){return d(),p("div",{class:"puzzle-board",tabindex:"-1",onKeyup:t[8]||(t[8]=c((...a)=>n.onKeyUp&&n.onKeyUp(...a),["prevent"])),onClick:t[9]||(t[9]=(...a)=>n.onClickBoard&&n.onClickBoard(...a))},[o.isTouchNeeded?(d(),p("div",gt,"Touch to start")):A("",!0),E("canvas",{ref:"puzzle-canvas1",class:"puzzle-canvas",style:{visibility:"hidden"},onClick:t[0]||(t[0]=c(()=>{},["prevent"])),onMousedown:t[1]||(t[1]=c(()=>{},["prevent"])),onMouseup:t[2]||(t[2]=c((...a)=>n.onClick&&n.onClick(...a),["prevent"])),onTouchend:t[3]||(t[3]=c((...a)=>n.onTouchEnd&&n.onTouchEnd(...a),["prevent"])),width:o.internalWidth*2,height:o.internalHeight},null,40,pt),E("canvas",{id:"main-canvas",ref:"puzzle-canvas",class:"puzzle-canvas",onClick:t[4]||(t[4]=c(()=>{},["prevent"])),onMousedown:t[5]||(t[5]=c(()=>{},["prevent"])),onMouseup:t[6]||(t[6]=c((...a)=>n.onClick&&n.onClick(...a),["prevent"])),onTouchend:t[7]||(t[7]=c((...a)=>n.onTouchEnd&&n.onTouchEnd(...a),["prevent"])),style:N(n.canvasStyle),width:1024,height:512},null,36),n.isImage?(d(),p("img",{key:1,style:N(n.sourceStyle),src:s.src,ref:"sourceImg"},null,12,vt)):(d(),p("video",{key:2,ref:"sourceImg",autoplay:"",loop:"",playsinline:"",muted:s.muted,src:s.src,style:N(n.sourceStyle),width:o.internalWidth,height:o.internalHeight},[(d(!0),p(Q,null,Z(s.sources,a=>(d(),p("source",{key:a.src,src:a.src,type:a.type},null,8,bt))),128)),z(" No video ")],12,wt))],32)}const yt=U(mt,[["render",kt],["__scopeId","data-v-7893bd7c"]]),Ct={class:"puzzle-container"},It=tt({__name:"PuzzlePage",setup(i){const{puzzleOpenedAchieves:t,puzzleAchieves:s,downloadTheBigPicture:e}=st(),o=P(()=>s.value.filter(w=>!t.value.map(H=>H.name).includes(w.name))),n=P(()=>o.value[0]),a=u(),h=u(!1),l=u(!1),r=u(!1),I=u(512),T=u(512),b=!0,k=u(!1),f=u(),C=u(),v=async w=>{f.value=w,f.value&&await ut(f.value)},$=async w=>{C.value=w},M=()=>{a.value=n.value},G=()=>{},L=()=>{},F=async()=>{l.value=t.value.length!==s.value.length,h.value=!0,r.value=!0,nt.value.puzzle.push(n.value.name)},D=()=>{r.value=!1,h.value=!1,t.value.push(n.value)},j=()=>{e(a.value)},V=()=>{t.value.push(n.value),ot.push({name:"finish"})},O=ht(),X=P(()=>O.value==="dark"?rt:null);return(w,H)=>{const Y=at("Particles");return d(),p("div",Ct,[r.value?(d(),S(Y,{key:0,id:"tsparticles",particlesInit:v,particlesLoaded:$,options:ct})):A("",!0),_(yt,{id:`board_${m(n).name}`,autoResize:!0,showNumber:k.value,cols:3,rows:4,src:m(n).small,animation:b,width:I.value,height:T.value,onInit:M,onStart:G,onChange:L,onFinish:F},null,8,["id","showNumber","src","width","height"]),et(E("div",null,[_(m(lt),{theme:m(X),style:{width:"100%",display:"flex","justify-content":"space-between","margin-top":"10px"}},{default:x(()=>[_(m(R),{onClick:j},{default:x(()=>[z("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435")]),_:1}),_(m(R),{onClick:V},{default:x(()=>[z("\u041A \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C")]),_:1}),l.value?(d(),S(m(R),{key:0,onClick:D},{default:x(()=>[z("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C")]),_:1})):A("",!0)]),_:1},8,["theme"])],512),[[it,h.value]])])}}});export{It as default};
