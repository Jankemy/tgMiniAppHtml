"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[936],{4936:(F,d,e)=>{e.r(d),e.d(d,{BoostsModule:()=>B});var l=e(345),f=e(3887),b=e(1396),t=e(4438),g=e(3554),u=e(418),r=e(177);function m(o,c){if(1&o){const s=t.RV6();t.j41(0,"div",14),t.bIt("click",function(){t.eBV(s);const i=t.XpG().$implicit,y=t.XpG();return t.Njj(y.applyBoost(i.type))}),t.nrm(1,"img",15),t.j41(2,"div",16),t.EFF(3),t.k0s()()}if(2&o){const s=t.XpG().$implicit;t.R7$(3),t.SpI("\xa0",s.price>0?s.price:"Free","")}}function v(o,c){1&o&&(t.j41(0,"div",17),t.nrm(1,"img",18),t.k0s())}function x(o,c){if(1&o&&(t.j41(0,"div",5)(1,"div",6),t.nrm(2,"img",7),t.k0s(),t.j41(3,"div",8)(4,"div",9)(5,"div",10),t.EFF(6),t.k0s(),t.j41(7,"div",11),t.EFF(8),t.k0s()(),t.DNE(9,m,4,1,"div",12)(10,v,2,0,"div",13),t.k0s()()),2&o){const s=c.$implicit;t.R7$(2),t.Y8G("src",s.icon,t.B4B),t.R7$(4),t.JRh(s.text),t.R7$(2),t.JRh(s.subText),t.R7$(),t.Y8G("ngIf",!s.isApplied),t.R7$(),t.Y8G("ngIf",s.isApplied)}}let a=(()=>{class o extends b.${constructor(s,n){super(),this.boostsService=s,this.notifier=n}get boostsList(){return this.boostsService.boostsList}ngOnInit(){let s=this;s.setLoading(!0),s.boostsService.initBoostsService().finally(()=>{s.setLoading(!1)})}applyBoost(s){let n=this;n.boostsService.buyBoost(s).then(i=>{n.notifier.notify("info","Boost successfuly applied")}).catch(i=>{n.notifier.notify("error",i.error.errors[0].message)})}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Y),t.rXU(u.iJ))};static#o=this.\u0275cmp=t.VBU({type:o,selectors:[["app-boosts"]],features:[t.Vt3],decls:7,vars:3,consts:[["id","app-boosts"],["id","boostsHeader",1,"boostsHeader"],["id","boostText",1,"boostText"],[1,"boostsListContainer"],["class","boostContainer",4,"ngFor","ngForOf"],[1,"boostContainer"],[1,"boostIcon"],[3,"src"],[1,"boostDescriptionContainer"],[1,"boostDescription"],[1,"boostText"],[1,"boostSubText"],["class","boostPriceButton",3,"click",4,"ngIf"],["class","boostAppliedButton",4,"ngIf"],[1,"boostPriceButton",3,"click"],["src","assets/icons/candy-black-icon.svg"],[1,"boostPrice"],[1,"boostAppliedButton"],["src","assets/icons/check-button.svg"]],template:function(n,i){1&n&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2,"Boosts"),t.k0s(),t.j41(3,"div",2),t.EFF(4,"Speed up and get more with additional bonuses and multipliers"),t.k0s(),t.j41(5,"div",3),t.DNE(6,x,11,5,"div",4),t.k0s()()),2&n&&(t.R7$(5),t.xc7("height",i.calcContainerHeight("app-boosts","boostsHeader","boostText")),t.R7$(),t.Y8G("ngForOf",i.boostsList))},dependencies:[r.Sq,r.bT],styles:["#app-boosts[_ngcontent-%COMP%]{height:100%}.boostsHeader[_ngcontent-%COMP%]{font-size:48px;font-weight:700;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.boostText[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}.boostSubText[_ngcontent-%COMP%]{font-size:10px;color:#ffffff80}.boostContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.boostPriceButton[_ngcontent-%COMP%]{border-radius:15px;padding:10px 15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);font-size:14px;display:flex;align-items:center}.boostAppliedButton[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;padding:12px}.boostIcon[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;padding:15px}.boostPrice[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.boostDescription[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.boostDescription[_ngcontent-%COMP%]   .boostText[_ngcontent-%COMP%]{padding:0 0 5px}.boostDescriptionContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:15px}.boostsListContainer[_ngcontent-%COMP%]{overflow:auto}"]})}return o})();var p=e(4255);const C=[{path:"",component:a}];let h=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.$C({type:o});static#s=this.\u0275inj=t.G2t({imports:[p.iI.forChild(C),p.iI]})}return o})(),B=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.$C({type:o,bootstrap:[a]});static#s=this.\u0275inj=t.G2t({imports:[h,r.MD,l.Bb,f.G]})}return o})()}}]);