"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[505],{3505:(k,d,r)=>{r.r(d),r.d(d,{SwipeModule:()=>B});var m=r(345),n=r(4438);let u=(()=>{class i{constructor(){this.CutCoinEvent=new n.bkB,this.TouchmoveCoordinatesEvent=new n.bkB}static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275prov=n.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),C=(()=>{class i{constructor(t){this.eventService=t,this.cutCoinId=0,this.cutBoxPosition={},this.top=0,this.left=0,this.cutCoinSubscription={},this.imagePaths=["assets/cat-coin/cat-coin-1.png","assets/cat-coin/cat-coin-2.png","assets/cat-coin/cat-coin-3.png","assets/cat-coin/cat-coin-4.png"]}ngAfterViewInit(){let t=this,e=document.getElementById(`cutCoin-${t.cutCoinId}`),o=t.imagePaths[t.randomIntFromInterval(0,t.imagePaths.length-1)],s=t.randomIntFromInterval(0,359);e.style.backgroundImage=`url("${o}")`,e.style.transform=`rotate(${s}deg)`;let M=t.cutBoxPosition.left+t.cutBoxPosition.width-50;t.top=t.randomIntFromInterval(t.cutBoxPosition.top,t.cutBoxPosition.top+t.cutBoxPosition.height-50),t.left=t.randomIntFromInterval(t.cutBoxPosition.left,M),e.style.top=`${t.top}px`,e.style.left=`${t.left}px`,t.cutCoinSubscription=t.eventService.TouchmoveCoordinatesEvent.subscribe(E=>{t.checkTouchmove(E)})}ngOnDestroy(){this.cutCoinSubscription.unsubscribe()}checkTouchmove(t){let e=this;e.top<t.y&&e.top+50>t.y&&e.left<t.x&&e.left+50>t.x&&e.onHoverEnd()}onHoverEnd(){this.eventService.CutCoinEvent.emit(this.cutCoinId)}randomIntFromInterval(t,e){return Math.floor(Math.random()*(e-t+1)+t)}static#t=this.\u0275fac=function(e){return new(e||i)(n.rXU(u))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-cut-coin"]],inputs:{cutCoinId:"cutCoinId",cutBoxPosition:"cutBoxPosition"},decls:1,vars:2,consts:[[1,"cut-coin",3,"id"]],template:function(e,o){1&e&&n.nrm(0,"div",0),2&e&&n.Mz_("id","cutCoin-",o.cutCoinId,"")},styles:[".cut-coin[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;border:1px solid black;background-repeat:no-repeat;background-position:center;background-size:cover;position:absolute}"]})}return i})(),v=(()=>{class i{get valuePersentage(){return`${this.value}%`}get widthPersentage(){return`${this.width}%`}constructor(t){this.cd=t,this.value=50,this.label="",this.width=50}ngOnInit(){}ngOnChanges(t){}static#t=this.\u0275fac=function(e){return new(e||i)(n.rXU(n.gRc))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-progress-bar"]],inputs:{value:"value",label:"label",width:"width"},features:[n.OA$],decls:5,vars:5,consts:[[1,"progress-container"],[1,"prigress-label"],[1,"progress"],[1,"progress-bar"]],template:function(e,o){1&e&&(n.j41(0,"div",0)(1,"div",1),n.EFF(2),n.k0s(),n.j41(3,"div",2),n.nrm(4,"div",3),n.k0s()()),2&e&&(n.R7$(2),n.JRh(o.label),n.R7$(),n.xc7("width",o.widthPersentage),n.R7$(),n.xc7("width",o.valuePersentage))},styles:[".progress-container[_ngcontent-%COMP%]{height:32px;border:1px solid #7C6CFE;border-radius:17px;display:flex;align-items:center;justify-content:space-between}.progress-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:3px}.progress[_ngcontent-%COMP%]{height:24px;border:1px solid #7C6CFE;border-radius:15px;overflow:hidden}.prigress-label[_ngcontent-%COMP%]{margin-left:15px!important;color:#7c6cfe}.progress-bar[_ngcontent-%COMP%]{background-color:#7c6cfe;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);border-radius:15px;height:100%}"]})}return i})();const f=["cutBox"],p="swipeCounterKey";let g=(()=>{class i{constructor(t,e){this.renderer=t,this.eventService=e,this.componentMap=new Map,this.cutBoxPosition={},this.componentIdCounter=0,this.energyValue=25,this.energyInterval={},this.swipeCounter=0,this.swipeSubscription={}}ngOnInit(){let t=this;var e=document.getElementById("app-swipe");document.body.style.overflowY="hidden",document.body.style.marginTop="1px",document.body.style.marginBottom="1px",window.scrollTo(0,1),window.Telegram?.WebApp?.expand(),e.addEventListener("touchmove",o=>{t.touchmoveEvent(o)}),t.energyInterval=setInterval(()=>{t.energyValue<100&&t.energyValue++},1e3);try{window.Telegram?.WebApp?.CloudStorage?.getItem(p).then(o=>{t.swipeCounter=JSON.parse(o)})}catch(o){console.log(o)}window.Telegram?.WebApp?.ready()}ngAfterViewInit(){var t=this,e=t.cutBox.element.nativeElement.getBoundingClientRect();t.cutBoxPosition={left:e.left,top:t.cutBox.element.nativeElement.offsetTop,width:e.width,height:e.height};for(let o=0;o<10;o++)t.addNewCutCoinComponent();t.swipeSubscription=t.eventService.CutCoinEvent.subscribe(o=>{t.onCoinTouched(o)})}ngOnDestroy(){this.swipeSubscription.unsubscribe(),clearInterval(this.energyInterval)}onCoinTouched(t){let e=this;e.componentMap.get(t).destroy(),e.componentMap.delete(t),e.swipeCounter++;try{window.Telegram?.WebApp?.CloudStorage?.setItem(p,JSON.stringify(e.swipeCounter))}catch(s){console.log(s)}e.energyValue>0&&e.energyValue--;for(let s=0;s<1;s++)e.addNewCutCoinComponent()}touchmoveEvent(t){let e=this;t.preventDefault();let o={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY+1};e.energyValue>0&&e.eventService.TouchmoveCoordinatesEvent.emit(o),e.tailEffect(o)}tailEffect({x:t,y:e}){let s=document.createElement("canvas");s.style.width="100%",s.style.height="100%",s.width=window.innerWidth,s.height=window.innerHeight,s.style.position="absolute",s.style.left="0",s.style.top="0",s.style.zIndex="100000",s.style.pointerEvents="none",document.body.appendChild(s);let c=s.getContext("2d");c.arc(t,e,5,0,2*Math.PI,!1),c.fillStyle="#7f4dc7",c.fill(),setTimeout(()=>{document.body.removeChild(s)},100)}addNewCutCoinComponent(){let t=this,e=t.cutBox.createComponent(C),o=t.componentIdCounter++;t.componentMap.set(o,e),e.instance.cutCoinId=o,e.instance.cutBoxPosition=t.cutBoxPosition,t.renderer.appendChild(t.cutBox.element.nativeElement,e.location.nativeElement)}static#t=this.\u0275fac=function(e){return new(e||i)(n.rXU(n.sFG),n.rXU(u))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-swipe"]],viewQuery:function(e,o){if(1&e&&n.GBs(f,5,n.c1b),2&e){let s;n.mGM(s=n.lsd())&&(o.cutBox=s.first)}},decls:16,vars:4,consts:[["cutBox",""],["id","app-swipe",1,"swipe-box"],["id","totalHeader"],["id","swipeCounter"],["id","options"],["src","assets/boost-icons/X3-boost.svg"],["src","assets/boost-icons/recharging-boost.svg"],["src","assets/boost-icons/autoswipe-boost.svg"],["id","cutBox"],["id","energy"],[3,"label","width","value"]],template:function(e,o){1&e&&(n.j41(0,"div",1)(1,"div",2),n.EFF(2,"Total swipes"),n.k0s(),n.j41(3,"div",3),n.EFF(4),n.k0s(),n.j41(5,"div",4)(6,"div"),n.nrm(7,"img",5),n.k0s(),n.j41(8,"div"),n.nrm(9,"img",6),n.k0s(),n.j41(10,"div"),n.nrm(11,"img",7),n.k0s()(),n.nrm(12,"div",8,0),n.j41(14,"div",9),n.nrm(15,"app-progress-bar",10),n.k0s()()),2&e&&(n.R7$(4),n.JRh(o.swipeCounter),n.R7$(11),n.Y8G("label","Energy")("width","65")("value",o.energyValue))},dependencies:[v],styles:[".swipe-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:-webkit-fill-available;width:100%;background-color:#000}.gif-box[_ngcontent-%COMP%]{width:80%;margin-left:auto;margin-right:auto}#cutBox[_ngcontent-%COMP%]{height:-webkit-fill-available}#swipeCounter[_ngcontent-%COMP%]{font-size:48px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}#totalHeader[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}#energy[_ngcontent-%COMP%]{padding:20px}#options[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:30px;margin:5px}"]})}return i})();var y=r(3887),h=r(7112);const x=[{path:"",component:g}];let P=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=n.$C({type:i});static#n=this.\u0275inj=n.G2t({imports:[h.iI.forChild(x),h.iI]})}return i})();var I=r(177);let B=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=n.$C({type:i,bootstrap:[g]});static#n=this.\u0275inj=n.G2t({imports:[P,I.MD,m.Bb,y.G]})}return i})()}}]);