"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[946],{9946:(G,v,a)=>{a.r(v),a.d(v,{SwipeModule:()=>j});var I=a(345),m=a(467),n=a(4438);let y=(()=>{class i{constructor(){this.CutCoinEvent=new n.bkB,this.TouchmoveCoordinatesEvent=new n.bkB}static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275prov=n.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),B=(()=>{class i{constructor(t){this.eventService=t,this.cutCoinId=0,this.cutBoxPosition={},this.top=0,this.left=0,this.cutCoinSubscription={},this.imagePaths=["assets/cat-coin/cat-coin-1.png","assets/cat-coin/cat-coin-2.png","assets/cat-coin/cat-coin-3.png","assets/cat-coin/cat-coin-4.png"]}ngAfterViewInit(){let t=this,e=document.getElementById(`cutCoin-${t.cutCoinId}`),o=t.imagePaths[t.randomIntFromInterval(0,t.imagePaths.length-1)],s=t.randomIntFromInterval(0,359);e.style.backgroundImage=`url("${o}")`,e.style.transform=`rotate(${s}deg)`;let l=t.cutBoxPosition.left+t.cutBoxPosition.width-50;t.top=t.randomIntFromInterval(t.cutBoxPosition.top,t.cutBoxPosition.top+t.cutBoxPosition.height-50),t.left=t.randomIntFromInterval(t.cutBoxPosition.left,l),e.style.top=`${t.top}px`,e.style.left=`${t.left}px`,t.cutCoinSubscription=t.eventService.TouchmoveCoordinatesEvent.subscribe(p=>{t.checkTouchmove(p)})}ngOnDestroy(){this.cutCoinSubscription.unsubscribe()}checkTouchmove(t){let e=this;e.top<t.y&&e.top+50>t.y&&e.left<t.x&&e.left+50>t.x&&e.onHoverEnd()}onHoverEnd(){this.eventService.CutCoinEvent.emit(this.cutCoinId)}randomIntFromInterval(t,e){return Math.floor(Math.random()*(e-t+1)+t)}static#t=this.\u0275fac=function(e){return new(e||i)(n.rXU(y))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-cut-coin"]],inputs:{cutCoinId:"cutCoinId",cutBoxPosition:"cutBoxPosition"},decls:1,vars:2,consts:[[1,"cut-coin",3,"id"]],template:function(e,o){1&e&&n.nrm(0,"div",0),2&e&&n.Mz_("id","cutCoin-",o.cutCoinId,"")},styles:[".cut-coin[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;border:1px solid black;background-repeat:no-repeat;background-position:center;background-size:cover;position:absolute}"]})}return i})();var d=a(8471),P=a(3616),C=a(3554);let M=(()=>{class i{constructor(t){this.boostsService=t,this.stockMaxEnergy=100,this.totalUserEnergy=25,this.energyInterval={};let e=this;e.energyInterval=setInterval(()=>{e.totalUserEnergy<e.maxEnergy&&(e.totalUserEnergy+=e.energyIncrementer,e.totalUserEnergy>e.maxEnergy&&(e.totalUserEnergy=e.maxEnergy))},1e3)}get energyIncrementer(){return this.boostsService.boostsList.find(o=>o.type===d.b.RechargingSpeed).multiplier}get maxEnergy(){let e=this.boostsService.boostsList.find(o=>o.type===d.b.EnergyCapacity);return this.stockMaxEnergy+this.stockMaxEnergy*e.multiplier}get totalEnergy(){return this.totalUserEnergy/this.maxEnergy*100}decrementEnergy(){this.totalUserEnergy>0&&(this.totalUserEnergy-=1)}static#t=this.\u0275fac=function(e){return new(e||i)(n.KVO(C.Y))};static#e=this.\u0275prov=n.jDH({token:i,factory:i.\u0275fac,providedIn:"platform"})}return i})();var b=a(177);let S=(()=>{class i{get valuePersentage(){return`${this.value}%`}get widthPersentage(){return`${this.width}%`}constructor(t){this.cd=t,this.value=50,this.label="",this.width=50}ngOnInit(){}ngOnChanges(t){}static#t=this.\u0275fac=function(e){return new(e||i)(n.rXU(n.gRc))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-progress-bar"]],inputs:{value:"value",label:"label",width:"width"},features:[n.OA$],decls:5,vars:5,consts:[[1,"progress-container"],[1,"prigress-label"],[1,"progress"],[1,"progress-bar"]],template:function(e,o){1&e&&(n.j41(0,"div",0)(1,"div",1),n.EFF(2),n.k0s(),n.j41(3,"div",2),n.nrm(4,"div",3),n.k0s()()),2&e&&(n.R7$(2),n.JRh(o.label),n.R7$(),n.xc7("width",o.widthPersentage),n.R7$(),n.xc7("width",o.valuePersentage))},styles:[".progress-container[_ngcontent-%COMP%]{height:32px;border:1px solid #7C6CFE;border-radius:17px;display:flex;align-items:center;justify-content:space-between}.progress-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:3px}.progress[_ngcontent-%COMP%]{height:24px;border:1px solid #7C6CFE;border-radius:15px;overflow:hidden;background:transparent}.prigress-label[_ngcontent-%COMP%]{margin-left:15px!important;color:#7c6cfe}.progress-bar[_ngcontent-%COMP%]{background-color:#7c6cfe;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);border-radius:15px;height:100%;transition:all 1s ease 0s}"]})}return i})();const k=["cutBox"];function T(i,X){1&i&&(n.j41(0,"div"),n.nrm(1,"img",9),n.k0s())}function A(i,X){1&i&&(n.j41(0,"div"),n.nrm(1,"img",10),n.k0s())}let w=(()=>{class i{constructor(t,e,o,s,r){this.renderer=t,this.eventService=e,this.scoreService=o,this.energyService=s,this.boostsService=r,this.componentMap=new Map,this.cutBoxPosition={top:0,left:0,width:0,height:0},this.componentIdCounter=0,this.energyInterval={},this.swipeSubscription={},this.isEnabledAutoswipe=!1}get swipeCounter(){return this.scoreService.totalScore}get energyValue(){return this.energyService.totalEnergy}get isX3Boost(){return this.boostsService.boostsList.find(e=>e.type===d.b.X3Multiplier).isApplied}get isAutoswipe(){return this.boostsService.boostsList.find(e=>e.type===d.b.Autoswipe).isApplied}ngOnInit(){let t=this;var e=document.getElementById("app-swipe");document.body.style.overflowY="hidden",document.body.style.marginTop="1px",document.body.style.marginBottom="1px",window.scrollTo(0,1),window.Telegram?.WebApp?.expand(),e.addEventListener("touchmove",o=>{t.touchmoveEvent(o)}),window.Telegram?.WebApp?.ready()}ngAfterViewInit(){var t=this,e=t.cutBox.element.nativeElement.getBoundingClientRect();t.cutBoxPosition={left:e.left,top:t.cutBox.element.nativeElement.offsetTop,width:e.width,height:e.height};for(let o=0;o<10;o++)t.addNewCutCoinComponent();t.swipeSubscription=t.eventService.CutCoinEvent.subscribe(o=>{t.onCoinTouched(o)}),t.isAutoswipe&&t.enableAutoswipe()}enableAutoswipe(){var t=this;return(0,m.A)(function*(){let e=t;if(e.isEnabledAutoswipe)return;e.isEnabledAutoswipe=!0;let o={x:e.cutBoxPosition.left,y:e.cutBoxPosition.top},s=0,r=e.componentMap.get(s).instance,l={x:r.left+25,y:r.top+25};for(;e.isEnabledAutoswipe&&e.isAutoswipe;){if(yield t.sleepTime(100),e.energyValue<=0)continue;yield e.enableAutoswipeLine(o,l),o=l,s++;let p=e.componentMap.get(s);for(;!p;)s++,p=e.componentMap.get(s);r=p.instance,l={x:r.left+25,y:r.top+25}}})()}ngOnDestroy(){let t=this;t.swipeSubscription.unsubscribe(),clearInterval(t.energyInterval),t.isEnabledAutoswipe=!1}enableAutoswipeLine(t,e){var o=this;return(0,m.A)(function*(){let s=o,r=(t.y-e.y)/(t.x-e.x),l=t.y-r*t.x;if(Math.abs(t.x-e.x)>Math.abs(t.y-e.y))for(let c=t.x;t.x>e.x?c>e.x:c<e.x;t.x>e.x?c-=15:c+=15)yield s.sleepTime(1),s.emitCustomEvent({x:c,y:r*c+l});else for(let c=t.y;t.y>e.y?c>e.y:c<e.y;t.y>e.y?c-=15:c+=15)yield s.sleepTime(1),s.emitCustomEvent({x:(c-l)/r,y:c})})()}sleepTime(t){return(0,m.A)(function*(){return new Promise(e=>setTimeout(e,t))})()}onCoinTouched(t){let e=this;e.componentMap.get(t).destroy(),e.componentMap.delete(t),e.scoreService.incrementScore();for(let s=0;s<1;s++)e.addNewCutCoinComponent()}touchmoveEvent(t){t.preventDefault(),this.emitCustomEvent({x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY+1})}emitCustomEvent(t){let e=this;e.energyValue>0&&e.eventService.TouchmoveCoordinatesEvent.emit(t),e.tailEffect(t)}tailEffect({x:t,y:e}){let s=document.createElement("canvas");s.style.width="100%",s.style.height="100%",s.width=window.innerWidth,s.height=window.innerHeight,s.style.position="absolute",s.style.left="0",s.style.top="0",s.style.zIndex="100000",s.style.pointerEvents="none",document.body.appendChild(s);let r=s.getContext("2d");r.arc(t,e,5,0,2*Math.PI,!1),r.fillStyle="#7f4dc7",r.fill(),setTimeout(()=>{document.body.removeChild(s)},100)}addNewCutCoinComponent(){let t=this,e=t.cutBox.createComponent(B),o=t.componentIdCounter++;t.componentMap.set(o,e),e.instance.cutCoinId=o,e.instance.cutBoxPosition=t.cutBoxPosition,t.renderer.appendChild(t.cutBox.element.nativeElement,e.location.nativeElement)}static#t=this.\u0275fac=function(e){return new(e||i)(n.rXU(n.sFG),n.rXU(y),n.rXU(P.o),n.rXU(M),n.rXU(C.Y))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-swipe"]],viewQuery:function(e,o){if(1&e&&n.GBs(k,5,n.c1b),2&e){let s;n.mGM(s=n.lsd())&&(o.cutBox=s.first)}},decls:12,vars:6,consts:[["cutBox",""],["id","app-swipe",1,"swipe-box"],["id","totalHeader"],["id","swipeCounter"],["id","options"],[4,"ngIf"],["id","cutBox"],["id","energy"],[3,"label","width","value"],["src","assets/boost-icons/X3-boost.svg"],["src","assets/boost-icons/autoswipe-boost.svg"]],template:function(e,o){1&e&&(n.j41(0,"div",1)(1,"div",2),n.EFF(2,"Total swipes"),n.k0s(),n.j41(3,"div",3),n.EFF(4),n.k0s(),n.j41(5,"div",4),n.DNE(6,T,2,0,"div",5)(7,A,2,0,"div",5),n.k0s(),n.nrm(8,"div",6,0),n.j41(10,"div",7),n.nrm(11,"app-progress-bar",8),n.k0s()()),2&e&&(n.R7$(4),n.JRh(o.swipeCounter),n.R7$(2),n.Y8G("ngIf",o.isX3Boost),n.R7$(),n.Y8G("ngIf",o.isAutoswipe),n.R7$(4),n.Y8G("label","Energy")("width","65")("value",o.energyValue))},dependencies:[b.bT,S],styles:[".swipe-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:-webkit-fill-available;width:100%;background-color:#000}.gif-box[_ngcontent-%COMP%]{width:80%;margin-left:auto;margin-right:auto}#cutBox[_ngcontent-%COMP%]{height:-webkit-fill-available}#swipeCounter[_ngcontent-%COMP%]{font-size:48px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}#totalHeader[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}#energy[_ngcontent-%COMP%]{padding:20px}#options[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:30px;margin:5px}"]})}return i})();var $=a(3887),x=a(172);const U=[{path:"",component:w}];let R=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=n.$C({type:i});static#n=this.\u0275inj=n.G2t({imports:[x.iI.forChild(U),x.iI]})}return i})(),j=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=n.$C({type:i,bootstrap:[w]});static#n=this.\u0275inj=n.G2t({imports:[R,b.MD,I.Bb,$.G]})}return i})()}}]);