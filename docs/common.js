"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[76],{8471:(f,h,i)=>{i.d(h,{b:()=>s});var s=function(o){return o[o.X3Multiplier=0]="X3Multiplier",o[o.RechargingSpeed=1]="RechargingSpeed",o[o.EnergyCapacity=2]="EnergyCapacity",o[o.Autoswipe=3]="Autoswipe",o}(s||{})},7554:(f,h,i)=>{i.d(h,{G:()=>c});var s=i(467),o=i(5312),v=i(4438),p=i(1626),l=i(418);const d=o.cA.apiUrl;let c=(()=>{class r{constructor(n,e){this.http=n,this.notifier=e,this.accessToken=""}get initData(){return"query_id=AAH9MJ8DAAAAAP0wnwP9J3br&user=%7B%22id%22%3A60764413%2C%22first_name%22%3A%22Ruslan%22%2C%22last_name%22%3A%22Kamaev%22%2C%22username%22%3A%22triamero%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1718265865&hash=1bcbcf7bfb3d6161ac8388dfee779a68eb15947aa6e9d0886250f3f93f4b0416"}getAccessToken(){var n=this;return(0,s.A)(function*(){let e=n;return!e.expired_at||e.expired_at<=new Date?e.http.request("POST",d+"auth/telegram",{body:{initData:e.initData},headers:{"Content-Type":"application/json"}}).toPromise().then(a=>{let u=new Date;return u.setSeconds(u.getSeconds()+a.data.expiresIn),e.expired_at=u,e.accessToken=a.data.accessToken,e.accessToken}).catch(a=>(e.notifier.notify("error",a),e.accessToken)):e.accessToken})()}getAnonym(n){return this.http.get(d+n).toPromise()}get(n){return this.getAuthorizationHeaders().then(e=>this.http.get(d+n,{headers:e}).toPromise())}postAnonym(n,e){return this.http.post(d+n,e,{headers:this.getPublicHeaders()}).toPromise()}post(n,e){return this.getAuthorizationHeaders().then(a=>this.http.post(d+n,e,{headers:a}).toPromise())}getPublicHeaders(){return{"Content-Type":"application/json"}}getAuthorizationHeaders(){var n=this;return(0,s.A)(function*(){return{Authorization:`Bearer ${yield n.getAccessToken()}`,"Content-Type":"application/json"}})()}static#e=this.\u0275fac=function(e){return new(e||r)(v.KVO(p.Qq),v.KVO(l.iJ))};static#t=this.\u0275prov=v.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},3554:(f,h,i)=>{i.d(h,{Y:()=>p});var s=i(8471),o=i(4438),v=i(3616);let p=(()=>{class l{constructor(c){this.scoreService=c,this.boosts=[{type:s.b.X3Multiplier,icon:"assets/boost-icons/X3-boost.svg",text:"Swipe Multiplier",subText:"For each swipe you get X3",price:100,isApplied:!1,multiplier:3},{type:s.b.RechargingSpeed,icon:"assets/boost-icons/recharging-boost.svg",text:"Recharging Speed",subText:"Increases the energy recharge",price:150,isApplied:!1,multiplier:1},{type:s.b.EnergyCapacity,icon:"assets/boost-icons/energy-capacity-boost.svg",text:"Energy Bar Capacity",subText:"Greater energy reserve",price:200,isApplied:!1,multiplier:1},{type:s.b.Autoswipe,icon:"assets/boost-icons/autoswipe-boost.svg",text:"Auto swipe",subText:"Auto-swipe for 4 hours",price:1500,isApplied:!1,multiplier:1}]}get boostsList(){return this.boosts}buyBoost(c){let r=this,t=r.boostsList.find(n=>n.type===c);return new Promise((n,e)=>{switch(c){case s.b.X3Multiplier:t.multiplier=3,r.scoreService.setIncrementer(t.multiplier);break;case s.b.Autoswipe:t.multiplier=1,setTimeout(()=>{t.isApplied=!1},6e4);break;default:t.multiplier+=1,setTimeout(()=>{t.isApplied=!1},3e3)}return t.isApplied=!0,r.scoreService.decrementScore(t.price),n(!0)})}static#e=this.\u0275fac=function(r){return new(r||l)(o.KVO(v.o))};static#t=this.\u0275prov=o.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},5286:(f,h,i)=>{i.d(h,{c:()=>p});var s=i(4438),o=i(3554),v=i(79);let p=(()=>{class l{constructor(c,r){this.boostsService=c,this.profileService=r,this.maxEnergy=100,this.energyIncrementer=1,this.totalUserEnergy=25,this.energyIntervals=[];let t=this;t.energyIntervals.push(setInterval(()=>{t.totalUserEnergy<t.maxEnergy&&(t.totalUserEnergy+=t.energyIncrementer,t.totalUserEnergy>t.maxEnergy&&(t.totalUserEnergy=t.maxEnergy))},1e3)),t.energyIntervals.push(setInterval(t.initEnergyService,6e5))}get availableUserEnergy(){return this.totalUserEnergy}get totalEnergy(){return this.totalUserEnergy/this.maxEnergy*100}ngOnDestroy(){this.energyIntervals.map(c=>clearInterval(c))}initEnergyService(){let c=this;return c.profileService.profile().then(r=>{let t=r.data;c.maxEnergy=t.maxEnergy,c.energyIncrementer=t.energyRechargingPerSec,c.totalUserEnergy=t.availableEnergy})}decrementEnergy(){this.totalUserEnergy>0&&(this.totalUserEnergy-=1)}static#e=this.\u0275fac=function(r){return new(r||l)(s.KVO(o.Y),s.KVO(v.p))};static#t=this.\u0275prov=s.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},79:(f,h,i)=>{i.d(h,{p:()=>v});var s=i(4438),o=i(7554);let v=(()=>{class p{constructor(d){this.api=d}profile(){return this.api.post("me",{})}static#e=this.\u0275fac=function(c){return new(c||p)(s.KVO(o.G))};static#t=this.\u0275prov=s.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},3616:(f,h,i)=>{i.d(h,{o:()=>l});var s=i(4438),o=i(7554),v=i(79),p=i(5286);let l=(()=>{class d{constructor(r,t,n){this.api=r,this.profileService=t,this.energyService=n,this.totalUserScore=0,this.scoreIncrementer=1,this.scoreInterval={},this.scoreInterval=setInterval(this.initScoreService,6e5)}get totalScore(){return this.totalUserScore}ngOnDestroy(){clearInterval(this.scoreInterval)}initScoreService(){let r=this;return r.profileService.profile().then(t=>{let n=t.data;r.totalUserScore=n.balance,r.scoreIncrementer=n.earnPerSwipe})}setIncrementer(r){this.scoreIncrementer=r}decrementScore(r){this.totalUserScore-=r}incrementScore(){let r=this;r.totalUserScore+=r.scoreIncrementer,r.api.post("swipes",{timestamp:(new Date).getTime(),count:r.scoreIncrementer,availableEnergy:r.energyService.availableUserEnergy})}addClaimedSum(r){this.totalUserScore+=r}static#e=this.\u0275fac=function(t){return new(t||d)(s.KVO(o.G),s.KVO(v.p),s.KVO(p.c))};static#t=this.\u0275prov=s.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},9692:(f,h,i)=>{i.d(h,{WW:()=>l});var s=i(177),o=i(4438);const v=new o.nKC("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var p=i(1413);let l=(()=>{class t{constructor(e,a,u){this.ngZone=e,this.document=a,this.window=u,this.copySubject=new p.B,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(e){this.config=e}copy(e){if(!this.isSupported||!e)return this.pushCopyResponse({isSuccess:!1,content:e});const a=this.copyFromContent(e);return this.pushCopyResponse(a?{content:e,isSuccess:a}:{isSuccess:!1,content:e})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){if(e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(e,a=!0){try{this.selectTarget(e);const u=this.copyText();return this.clearSelection(a?e:void 0,this.window),u&&this.isCopySuccessInIE11()}catch{return!1}}isCopySuccessInIE11(){const e=this.window.clipboardData;return!(e&&e.getData&&!e.getData("Text"))}copyFromContent(e,a=this.document.body){if(this.tempTextArea&&!a.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{a.appendChild(this.tempTextArea)}catch{throw new Error("Container should be a Dom element")}}this.tempTextArea.value=e;const u=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),u}destroy(e=this.document.body){this.tempTextArea&&(e.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(e){return e.select(),e.setSelectionRange(0,e.value.length),e.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(e,a){e&&e.focus(),a.getSelection()?.removeAllRanges()}createTempTextArea(e,a){const u="rtl"===e.documentElement.getAttribute("dir");let g;return g=e.createElement("textarea"),g.style.fontSize="12pt",g.style.border="0",g.style.padding="0",g.style.margin="0",g.style.position="absolute",g.style[u?"right":"left"]="-9999px",g.style.top=(a.pageYOffset||e.documentElement.scrollTop)+"px",g.setAttribute("readonly",""),g}pushCopyResponse(e){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(e)})}pushCopyReponse(e){this.pushCopyResponse(e)}}return t.\u0275fac=function(e){return new(e||t)(o.KVO(o.SKi),o.KVO(s.qQ),o.KVO(v,8))},t.\u0275prov=o.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);