"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[76],{8471:(b,l,o)=>{o.d(l,{b:()=>s});var s=function(t){return t[t.X3Multiplier=0]="X3Multiplier",t[t.RechargingSpeed=1]="RechargingSpeed",t[t.EnergyCapacity=2]="EnergyCapacity",t[t.Autoswipe=3]="Autoswipe",t}(s||{})},3554:(b,l,o)=>{o.d(l,{Y:()=>f});var s=o(8471),t=o(4438),d=o(3616);let f=(()=>{class c{constructor(h){this.scoreService=h,this.boosts=[{type:s.b.X3Multiplier,icon:"assets/boost-icons/X3-boost.svg",text:"Swipe Multiplier",subText:"For each swipe you get X3",price:100,isApplied:!1,multiplier:3},{type:s.b.RechargingSpeed,icon:"assets/boost-icons/recharging-boost.svg",text:"Recharging Speed",subText:"Increases the energy recharge",price:150,isApplied:!1,multiplier:1},{type:s.b.EnergyCapacity,icon:"assets/boost-icons/energy-capacity-boost.svg",text:"Energy Bar Capacity",subText:"Greater energy reserve",price:200,isApplied:!1,multiplier:1},{type:s.b.Autoswipe,icon:"assets/boost-icons/autoswipe-boost.svg",text:"Auto swipe",subText:"Auto-swipe for 4 hours",price:1500,isApplied:!1,multiplier:1}]}get boostsList(){return this.boosts}buyBoost(h){let u=this,i=u.boostsList.find(a=>a.type===h);return new Promise((a,e)=>{if(u.scoreService.totalScore<i.price)return e("Insufficient balance");switch(h){case s.b.X3Multiplier:i.multiplier=3,u.scoreService.setIncrementer(i.multiplier);break;case s.b.Autoswipe:i.multiplier=1,setTimeout(()=>{i.isApplied=!1},6e4);break;default:i.multiplier+=1,setTimeout(()=>{i.isApplied=!1},3e3)}return i.isApplied=!0,u.scoreService.decrementScore(i.price),a(!0)})}static#e=this.\u0275fac=function(u){return new(u||c)(t.KVO(d.o))};static#t=this.\u0275prov=t.jDH({token:c,factory:c.\u0275fac,providedIn:"platform"})}return c})()},3616:(b,l,o)=>{o.d(l,{o:()=>t});var s=o(4438);let t=(()=>{class d{constructor(){this.totalUserScore=0,this.scoreIncrementer=1}get totalScore(){return this.totalUserScore}setIncrementer(c){this.scoreIncrementer=c}decrementScore(c){this.totalUserScore-=c}incrementScore(){this.totalUserScore+=this.scoreIncrementer}static#e=this.\u0275fac=function(v){return new(v||d)};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"platform"})}return d})()},9692:(b,l,o)=>{o.d(l,{WW:()=>c});var s=o(177),t=o(4438);const d=new t.nKC("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var f=o(1413);let c=(()=>{class i{constructor(e,r,p){this.ngZone=e,this.document=r,this.window=p,this.copySubject=new f.B,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(e){this.config=e}copy(e){if(!this.isSupported||!e)return this.pushCopyResponse({isSuccess:!1,content:e});const r=this.copyFromContent(e);return this.pushCopyResponse(r?{content:e,isSuccess:r}:{isSuccess:!1,content:e})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){if(e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(e,r=!0){try{this.selectTarget(e);const p=this.copyText();return this.clearSelection(r?e:void 0,this.window),p&&this.isCopySuccessInIE11()}catch{return!1}}isCopySuccessInIE11(){const e=this.window.clipboardData;return!(e&&e.getData&&!e.getData("Text"))}copyFromContent(e,r=this.document.body){if(this.tempTextArea&&!r.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{r.appendChild(this.tempTextArea)}catch{throw new Error("Container should be a Dom element")}}this.tempTextArea.value=e;const p=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),p}destroy(e=this.document.body){this.tempTextArea&&(e.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(e){return e.select(),e.setSelectionRange(0,e.value.length),e.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(e,r){e&&e.focus(),r.getSelection()?.removeAllRanges()}createTempTextArea(e,r){const p="rtl"===e.documentElement.getAttribute("dir");let n;return n=e.createElement("textarea"),n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[p?"right":"left"]="-9999px",n.style.top=(r.pageYOffset||e.documentElement.scrollTop)+"px",n.setAttribute("readonly",""),n}pushCopyResponse(e){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(e)})}pushCopyReponse(e){this.pushCopyResponse(e)}}return i.\u0275fac=function(e){return new(e||i)(t.KVO(t.SKi),t.KVO(s.qQ),t.KVO(d,8))},i.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);