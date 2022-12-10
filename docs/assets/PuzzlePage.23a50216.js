var q=Object.defineProperty;var K=(i,t,e)=>t in i?q(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var y=(i,t,e)=>(K(i,typeof t!="symbol"?t+"":t,e),e);import{_ as U,T as B,o as u,c as p,a as H,b as R,w as d,n as N,F as J,d as Q,e as T,f as Z,u as tt,g as P,h as c,i as E,j as _,k as m,l as et,v as st,m as x,s as it,r as nt,p as ot}from"./main.6b756d4e.js";import{u as at,N as A,a as ht,d as lt,p as rt,l as ct}from"./config.ec6b0fdc.js";const g=0;class ut{constructor(t){y(this,"dx");y(this,"dy");y(this,"blocks");y(this,"blankpos");if(this.dy=t.length,this.dx=t[0].length,this.dy<2||this.dx<2)throw new Error("cannot initialize with the array which has less than 2 col/rows");this.blocks=new Array(this.dx*this.dy);let e=0;for(let s=0;s<this.dy;s++)for(let o=0;o<this.dx;o++)this.blocks[e]=t[s][o],t[s][o]===g&&(this.blankpos=e),e++}row(t){return Math.floor(t/this.dx)}col(t){return t%this.dx}dimensions(){return{x:this.dx,y:this.dy}}checkInRange(...t){for(let e of t)if(this.blocks[e]==null)throw new Error(`Index ${e} not in range [0 .. ${this.blocks.length-1}]`)}direction(t,e){if(this.checkInRange(t,e),this.row(e)===this.row(t)){if(e%this.dx===t%this.dx-1)return"Left";if(e%this.dx===t%this.dx+1)return"Right"}return e===t+this.dx?"Below":e===t-this.dx?"Above":null}hamming(){let t=0;for(let e=0,s=1,o=this.blocks.length;e<o;e++,s++)this.blocks[e]!==g&&this.blocks[e]!==s&&t++;return t}manhattan(){let t=0;for(let e=0,s=this.blocks.length;e<s;e++){if(this.blocks[e]===g)continue;const o=Math.abs(this.row(this.blocks[e]-1)-this.row(e)),n=Math.abs(this.col(this.blocks[e]-1)-this.col(e));t+=o+n}return t}isGoal(){for(let t=0,e=this.blocks.length;t<e;t++)if(this.blocks[t]!==g&&this.blocks[t]!==t+1)return!1;return!0}swap(t,e,s){if(this.checkInRange(e,s),this.blocks[e]!==g&&this.blocks[s]!==g)throw new Error("cannot swap non-space block");return[t[e],t[s]]=[t[s],t[e]],this.blankpos=t[e]===g?e:s,this}swapAbove(t){return this.swap(this.blocks,t,t-this.dx)}swapBelow(t){return this.swap(this.blocks,t,t+this.dx)}swapLeft(t){return this.swap(this.blocks,t,t-1)}swapRight(t){return this.swap(this.blocks,t,t+1)}slide(t){switch(this.checkInRange(t),this.direction(t,this.blankpos||0)){case"Above":return this.swapAbove(t);case"Below":return this.swapBelow(t);case"Left":return this.swapLeft(t);case"Right":return this.swapRight(t);default:return this}}toArray2D(){let t=0;const e=[];for(let s=0;s<this.dy;s++){const o=[];for(let n=0;n<this.dx;n++,t++)o.push(this.blocks[t]);e.push(o)}return e}}const dt=(i,t)=>{const e=[];let s=0;for(let o=0;o<t;o++){const n=[];for(let a=0;a<i;a++)n.push(++s%(i*t));e.push(n)}return e},W=(i,t)=>{const e=dt(i,t),s=new ut(e),o=["swapAbove","swapLeft","swapRight","swapBelow"],n=o.length;for(let a=0;a<100;a++){const h=o[Math.floor(Math.random()*n)];try{s[h](s.blankpos)}catch{continue}}return s},ft={name:"PuzzleBoard",data(){this._blockPositions=[],this._isStarted=!1;const i=W(this.cols,this.rows);return{isTouchNeeded:!0,blocks:i.blocks,isGoal:!1,manhattan:null,hamming:null,internalWidth:this.width,internalHeight:this.height,board:i,rafId:null,_tmpCtx:void 0,_tmpCanvas:void 0,touchedCell:void 0}},props:{src:{type:String},sources:{type:Array},muted:{type:Boolean,default:!0},animation:{type:Boolean,default:!0},cols:{type:Number,default:4},width:{type:Number,default:300},height:{type:Number,default:300},rows:{type:Number,default:4},showNumber:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!1}},computed:{cellWidth(){return this.internalWidth/this.cols},cellHeight(){return this.internalHeight/this.rows},isImage(){return/\.(jpe?g|png|webm|gif)$/i.test(this.src)},canvasStyle(){return{left:this.isGoal?"-100%":0}},sourceStyle(){const i={};return this.isGoal||(i.visibility="hidden"),i}},beforeDestroy(){this.rafId&&cancelAnimationFrame(this.rafId)},mounted(){this.onResize(),this._tmpCanvas=this.$refs["puzzle-canvas1"],this._tmpCtx=this._tmpCanvas.getContext("2d"),this._lastRenderVideoTime=-1,this._lastRenderTime=0,this.isImage?this.$nextTick(()=>{this._loadImageToCanvas(),this.$refs.sourceImg.addEventListener("load",()=>{this.isTouchNeeded=!1,this._loadImageToCanvas()})}):this.$nextTick(()=>{this.$refs.sourceImg.addEventListener("load",()=>{this.isTouchNeeded=!1})});const i=()=>{if(B.update(),this.$refs.sourceImg==null||this.$refs.sourceImg.readyState<3){requestAnimationFrame(i);return}const t=this.$refs.sourceImg,e=this.$refs["puzzle-canvas"],s=e.getContext("2d"),o=this.internalWidth;if(t.currentTime!==this._lastRender&&(this._lastRenderVideoTime=t.currentTime,this._loadVideoFrameToCanvas()),this.isGoal){requestAnimationFrame(i);return}s.clearRect(0,0,this.internalWidth,this.internalHeight),this.showNumber&&(s.font="24px 'Avenir', Helvetica, Arial, sans-serif",s.fillStyle="#ffffff",s.textBaseline="top");for(let n=0,a=this.blocks.length;n<a;n++){const h=this.blocks[n];if(h===0)continue;const l=this.board.row(h-1),r=this.board.col(h-1),z=this.cellWidth*r+o,I=this.cellHeight*l,b=this._blockPositions[h];if(b==null)continue;const k=b.x,f=b.y;if(s.drawImage(e,z,I,this.cellWidth,this.cellHeight,k,f,this.cellWidth,this.cellHeight),this.showNumber){const C=String(h),w=5;s.strokeText(C,w+k,w+f),s.fillText(C,w+k,w+f)}}this.rafId=requestAnimationFrame(i)};this.$nextTick(i),this.$emit("init")},watch:{cols(){this.initBoard()},rows(){this.initBoard()},board(){this.blocks=this.board.blocks},blocks(){const i=!this.animation;this.updateBlockPositions(i),this.isGoal=this.board.isGoal(),this.manhattan=this.board.manhattan(),this.hamming=this.board.hamming(),this.$emit("change",{blocks:this.blocks,isGoal:this.isGoal,distance:this.manhattan})},isGoal(){this.isGoal&&this.$emit("finish")},sources(){this.isImage||this.$nextTick(()=>{this.$refs.sourceImg.load(),this.isTouchNeeded=!0,this.$refs.sourceImg.play(),this.$refs.sourceImg.addEventListener("play",()=>{this.isTouchNeeded=!1})})},src(){this.isImage&&(this.isTouchNeeded=!1,this.initBoard(),this._loadImageToCanvas(),this.$nextTick(()=>{this.$refs.sourceImg.addEventListener("load",()=>{this._loadImageToCanvas()})}))}},methods:{initBoard(){this.board=W(this.cols,this.rows),this._blockPositions=[],this._isStarted=!1,this.isGoal=!1,this.$emit("init")},updateBlockPositions(i){for(let t=0,e=this.blocks.length;t<e;t++){const s=this.blocks[t],o=this.board.col(t),n=this.board.row(t),a=this.cellWidth*o,h=this.cellHeight*n,l=this._blockPositions[s]||{x:0,y:0};if(this._blockPositions[s]==null&&(this._blockPositions[s]=l),l.x-a===0&&l.y-h===0)continue;const r={x:l.x,y:l.y};i?(this._blockPositions[s].x=a,this._blockPositions[s].y=h):new B.Tween(r).to({x:a,y:h},200).easing(B.Easing.Quadratic.Out).onUpdate(()=>{this._blockPositions[s].x=r.x,this._blockPositions[s].y=r.y}).start()}},_loadImageToCanvas(){const i=this.$refs.sourceImg;if(i.width===0||i.height===0)return;const e=this.$refs["puzzle-canvas"].getContext("2d"),s=this.width,o=this.height,n=i.width,a=i.height,h=Math.max(s/n,o/a);this._tmpCanvas.width=n*h,this._tmpCanvas.height=a*h,this._tmpCtx.drawImage(i,0,0,n*h,a*h);const l=(n*h-s)/2||0,r=(a*h-o)/2||0;e.drawImage(this._tmpCanvas,l,r,s,o,s,0,s,o)},_loadVideoFrameToCanvas(){const i=this.$refs.sourceImg,e=this.$refs["puzzle-canvas"].getContext("2d"),s=this.internalWidth,o=this.internalHeight,n=i.videoWidth,a=i.videoHeight,h=Math.max(s/n,o/a);this._tmpCanvas.width=n*h,this._tmpCanvas.height=a*h,this._tmpCtx.drawImage(i,0,0,n*h,a*h);const l=(n*h-s)/2,r=(a*h-o)/2;e.drawImage(this._tmpCanvas,l,r,s,o,s,0,s,o)},slide(i){this._isStarted||(this._isStarted=!0,this.$emit("start")),this.board.slide(i),this.blocks=this.board.blocks.concat()},mouseDownTouchStartHandler(i){let t=i.offsetX-(this.isGoal?this.width:0),e=i.offsetY;t=t/this.cellWidth,e=e/this.cellHeight;const s=Math.floor(t),o=Math.floor(e);this.touchedCell=o*this.cols+s},onTouchEnd(i){if(this.isTouchNeeded&&this.$refs.sourceImg.play(),typeof this.touchedCell<"u"){this.slide(this.touchedCell);return}const t=i.changedTouches[0],e=this.$el.getBoundingClientRect(),s=t.clientX-e.left,o=t.clientY-e.top;this.handleClick(s,o)},onClick(i){if(typeof this.touchedCell<"u"){this.slide(this.touchedCell);return}const t=i.offsetX-(this.isGoal?this.width:0),e=i.offsetY;this.handleClick(t,e)},handleClick(i,t){i=i/this.cellWidth,t=t/this.cellHeight;const e=Math.floor(i),o=Math.floor(t)*this.cols+e;this.slide(o)},onClickBoard(){this.$el.focus()},onResize(){this.internalWidth=this.width,this.internalHeight=this.height,this.isImage&&this.$nextTick(this._loadImageToCanvas.bind(this)),this.updateBlockPositions(!0)},onKeyUp(i){const t=this.board.blankpos,e=this.blocks.length;switch(i.keyCode){case 37:t+1<e&&this.slide(t+1);break;case 38:t+this.cols<e&&this.slide(t+this.cols);break;case 39:t-1>=0&&this.slide(t-1);break;case 40:t-this.cols>=0&&this.slide(t-this.cols)}}}},mt={key:0,class:"puzzle-message"},gt=["width","height"],pt=["width","height"],wt=["src"],vt=["muted","src"],bt=["src","type"];function kt(i,t,e,s,o,n){return u(),p("div",{class:"puzzle-board",tabindex:"-1",onKeyup:t[7]||(t[7]=d((...a)=>n.onKeyUp&&n.onKeyUp(...a),["prevent"])),onClick:t[8]||(t[8]=(...a)=>n.onClickBoard&&n.onClickBoard(...a))},[o.isTouchNeeded?(u(),p("div",mt,"Touch to start")):H("",!0),R("canvas",{ref:"puzzle-canvas1",class:"puzzle-canvas",style:{visibility:"hidden"},onClick:t[0]||(t[0]=d(()=>{},["prevent"])),onMousedown:t[1]||(t[1]=d(()=>{},["prevent"])),width:o.internalWidth*2,height:o.internalHeight},null,40,gt),R("canvas",{id:"main-canvas",ref:"puzzle-canvas",class:"puzzle-canvas",onClick:t[2]||(t[2]=d(()=>{},["prevent"])),onMousedown:t[3]||(t[3]=d((...a)=>n.mouseDownTouchStartHandler&&n.mouseDownTouchStartHandler(...a),["prevent"])),onTouchstart:t[4]||(t[4]=d((...a)=>n.mouseDownTouchStartHandler&&n.mouseDownTouchStartHandler(...a),["prevent"])),onMouseup:t[5]||(t[5]=d((...a)=>n.onClick&&n.onClick(...a),["prevent"])),onTouchend:t[6]||(t[6]=d((...a)=>n.onTouchEnd&&n.onTouchEnd(...a),["prevent"])),style:N(n.canvasStyle),width:o.internalWidth*2,height:o.internalHeight},null,44,pt),n.isImage?(u(),p("img",{key:1,style:N(n.sourceStyle),src:e.src,ref:"sourceImg"},null,12,wt)):(u(),p("video",{key:2,ref:"sourceImg",autoplay:"",loop:"",playsinline:"",muted:e.muted,src:e.src,style:N(n.sourceStyle),width:"512",height:"512"},[(u(!0),p(J,null,Q(e.sources,a=>(u(),p("source",{key:a.src,src:a.src,type:a.type},null,8,bt))),128)),T(" No video ")],12,vt))],32)}const yt=U(ft,[["render",kt],["__scopeId","data-v-4a857c4e"]]),Ct={class:"puzzle-container square"},zt=Z({__name:"PuzzlePage",setup(i){const{puzzleOpenedAchieves:t,puzzleAchieves:e,downloadTheBigPicture:s}=tt(),o=P(()=>e.value.filter(v=>!t.value.map(S=>S.name).includes(v.name))),n=P(()=>o.value[0]),a=c(),h=c(!1),l=c(!1),r=c(!1),z=c(512),I=c(512),b=!0,k=c(!1),f=c(),C=c(),w=async v=>{f.value=v,f.value&&await ct(f.value)},M=async v=>{C.value=v},D=()=>{a.value=n.value},G=()=>{},$=()=>{},L=async()=>{l.value=t.value.length!==e.value.length,h.value=!0,r.value=!0,it.value.puzzle.push(n.value.name)},F=()=>{r.value=!1,h.value=!1,t.value.push(n.value)},j=()=>{s(a.value)},V=()=>{t.value.push(n.value),nt.push({name:"finish"})},X=at(),Y=P(()=>X.value==="dark"?lt:null);return(v,S)=>{const O=ot("Particles");return u(),p("div",Ct,[r.value?(u(),E(O,{key:0,id:"tsparticles",particlesInit:w,particlesLoaded:M,options:rt})):H("",!0),_(yt,{id:`board_${m(n).name}`,autoResize:!0,showNumber:k.value,cols:3,rows:3,src:m(n).small,animation:b,width:z.value,height:I.value,onInit:D,onStart:G,onChange:$,onFinish:L},null,8,["id","showNumber","src","width","height"]),et(R("div",null,[_(m(ht),{theme:m(Y),style:{width:"100%",display:"flex","justify-content":"space-between","margin-top":"10px"}},{default:x(()=>[_(m(A),{onClick:j},{default:x(()=>[T("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435")]),_:1}),_(m(A),{onClick:V},{default:x(()=>[T("\u041A \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C")]),_:1}),l.value?(u(),E(m(A),{key:0,onClick:F},{default:x(()=>[T("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C")]),_:1})):H("",!0)]),_:1},8,["theme"])],512),[[st,h.value]])])}}});export{zt as default};
