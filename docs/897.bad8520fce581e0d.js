"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[897],{7897:(L,p,s)=>{s.r(p),s.d(p,{EarnModule:()=>I});var m=s(345),C=s(3887),d=function(t){return t[t.daily_sign_in=0]="daily_sign_in",t[t.follow_twitter=1]="follow_twitter",t[t.follow_discord=2]="follow_discord",t[t.invite_3_friends=3]="invite_3_friends",t[t.follow_telegram=4]="follow_telegram",t[t.follow_instagram=5]="follow_instagram",t}(d||{}),u=s(1396),e=s(4438),k=s(9692),v=s(3616),_=s(7554);let x=(()=>{class t{constructor(n){this.api=n,this.tasks=[{type:d.follow_twitter,icon:"assets/earn-icons/X_social.svg",text:"Follow X",reward:0,isCompleted:!1,isClaimed:!1,link:""},{type:d.follow_discord,icon:"assets/earn-icons/Discord_social.svg",text:"Follow Discord",reward:0,isCompleted:!1,isClaimed:!1,link:""},{type:d.invite_3_friends,icon:"assets/earn-icons/Invite_social.svg",text:"Invite 3 friends",reward:0,isCompleted:!1,isClaimed:!1,link:""},{type:d.follow_telegram,icon:"assets/earn-icons/Telegram_social.svg",text:"Follow Telegram chat",reward:0,isCompleted:!1,isClaimed:!1,link:""},{type:d.follow_instagram,icon:"assets/earn-icons/Instagram_social.svg",text:"Follow Instagram",reward:0,isCompleted:!1,isClaimed:!1,link:""}],this.daily={type:d.daily_sign_in,reward:0,loginStreak:0,isAvailable:!1}}get taskList(){return this.tasks}get dailyTask(){return this.daily}getTasks(){return this.api.get("tasks")}mapTasks(n){let i=this,a=n.find(r=>r.id===d[d.daily_sign_in]);i.daily.reward=a.reward,i.daily.loginStreak=++a.streak,i.daily.isAvailable=a.isAvailable,n.map(r=>{let l=i.tasks.find(G=>G.type===d[r.id]);l&&(l.link=r.link,l.reward=r.reward,l.isClaimed=!r.isAvailable,l.isCompleted=!r.isAvailable)})}claimTaskReward(n){let i=this;return i.api.post("tasks",{id:d[n]}).then(a=>(i.mapTasks(a.data),a))}initTaskService(){let n=this;return n.getTasks().then(i=>(n.mapTasks(i.data),i))}static#e=this.\u0275fac=function(i){return new(i||t)(e.KVO(_.G))};static#t=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var b=s(418),c=s(177);const y=(t,o)=>({earnButton:t,earnButtonCopied:o}),w=(t,o)=>({earnButton:t,taskCompletedButton:o});function h(t,o){1&t&&e.nrm(0,"img",23)}function M(t,o){1&t&&e.nrm(0,"img",24)}function O(t,o){if(1&t){const n=e.RV6();e.j41(0,"div",25),e.bIt("click",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.completeTask(a.dailyTask.type))}),e.EFF(1,"Claim"),e.k0s()}}function P(t,o){1&t&&(e.j41(0,"div",26),e.nrm(1,"div",27),e.k0s())}function F(t,o){1&t&&(e.j41(0,"div",26),e.nrm(1,"img",24),e.EFF(2,"\xa0Claimed "),e.k0s())}function E(t,o){1&t&&(e.j41(0,"span"),e.EFF(1,"Follow"),e.k0s())}function T(t,o){1&t&&(e.j41(0,"span",18),e.EFF(1,"+ Claim"),e.k0s())}function j(t,o){if(1&t){const n=e.RV6();e.j41(0,"div",12),e.bIt("click",function(){e.eBV(n);const a=e.XpG().$implicit,r=e.XpG();return e.Njj(r.completeTask(a.type))}),e.DNE(1,E,2,0,"span",37)(2,T,2,0,"span",38),e.k0s()}if(2&t){const n=e.XpG().$implicit;e.Y8G("ngClass",e.l_i(3,w,!n.isCompleted,n.isCompleted&&!n.isClaimed)),e.R7$(),e.Y8G("ngIf",!n.isCompleted),e.R7$(),e.Y8G("ngIf",n.isCompleted&&!n.isClaimed)}}function B(t,o){1&t&&(e.j41(0,"div",39),e.nrm(1,"div",27),e.k0s())}function S(t,o){1&t&&(e.j41(0,"div",39),e.nrm(1,"img",24),e.k0s())}function R(t,o){if(1&t&&(e.j41(0,"div",28)(1,"div",29),e.nrm(2,"img",30),e.k0s(),e.j41(3,"div",31)(4,"div",32)(5,"div",5),e.EFF(6),e.k0s(),e.j41(7,"div",33),e.nrm(8,"img",8),e.j41(9,"div",34),e.EFF(10),e.k0s()()(),e.DNE(11,j,3,6,"div",35)(12,B,2,0,"div",36)(13,S,2,0,"div",36),e.k0s()()),2&t){const n=o.$implicit,i=e.XpG();e.R7$(2),e.Y8G("src",n.icon,e.B4B),e.R7$(4),e.JRh(n.text),e.R7$(4),e.SpI("\xa0+",n.reward,""),e.R7$(),e.Y8G("ngIf",!n.isClaimed&&!i.isLoader[n.type]),e.R7$(),e.Y8G("ngIf",i.isLoader[n.type]),e.R7$(),e.Y8G("ngIf",n.isClaimed&&!i.isLoader[n.type])}}let f=(()=>{class t extends u.${constructor(n,i,a,r){super(),this.clip=n,this.scoreService=i,this.taskService=a,this.notifier=r,this.evmAddress="0xd64bd54d1c5e6271c8ea8ebbd12349ad757adc83",this.isAddressCopied=!1,this.isLoader={}}get swipeCounter(){return this.scoreService.totalScore}get taskList(){return this.taskService.taskList}get dailyTask(){return this.taskService.dailyTask}ngOnInit(){let n=this;n.setLoading(!0),Promise.all([n.scoreService.initScoreService(),n.taskService.initTaskService()]).finally(()=>{n.setLoading(!1)})}completeTask(n){let i=this,a=i.taskList.find(r=>r.type===n);if(i.isLoader[n]=!0,n!=d.daily_sign_in)if(a.isCompleted)a.isClaimed||(i.isLoader[n]=!0,i.taskService.claimTaskReward(a.type).catch(r=>{i.notifier.notify("error",r.error.errors[0].message)}).finally(()=>{i.scoreService.initScoreService().catch(r=>{i.notifier.notify("error",r.error.errors[0].message)}).finally(()=>{i.isLoader[n]=!1,a.isClaimed=!0})}));else{let r=document.createElement("a");r.href=a.link,r.target="_black",r.click(),setTimeout(()=>{i.isLoader[n]=!1,a.isCompleted=!0},6e4)}else i.taskService.claimTaskReward(n).catch(r=>{i.notifier.notify("error",r.error.errors[0].message)}).finally(()=>{i.scoreService.initScoreService().catch(r=>{i.notifier.notify("error",r.error.errors[0].message)}).finally(()=>{i.isLoader[n]=!1})})}copyEvmAddress(){let n=this;n.clip.copy(n.evmAddress),n.notifier.notify("info","Copied"),n.isAddressCopied=!0,setTimeout(()=>{n.isAddressCopied=!1},3e3)}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(k.WW),e.rXU(v.o),e.rXU(x),e.rXU(b.iJ))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["app-earn"]],features:[e.Vt3],decls:38,vars:16,consts:[["id","app-earn"],["id","earnHeader",1,"earnHeader"],["id","earnText",1,"earnText"],[1,"earnScrollContainer"],[1,"earnBonusContainer"],[1,"earnText"],[1,"earnSubText"],[1,"earnScoreBox"],["src","assets/icons/candy-icon.svg"],[1,"earnScore"],[1,"evmAddressContainer"],[1,"evmAddress"],[3,"click","ngClass"],["src","assets/icons/copy-icon.svg",4,"ngIf"],["src","assets/icons/check-button.svg",4,"ngIf"],[1,"daylyRewardContainer"],[1,"claimDayCount"],[1,"claimBox"],[1,"claimCount"],["class","earnButton",3,"click",4,"ngIf"],["class","earnCompletedButton",4,"ngIf"],[1,"taskListContainer"],["class","taskContainer",4,"ngFor","ngForOf"],["src","assets/icons/copy-icon.svg"],["src","assets/icons/check-button.svg"],[1,"earnButton",3,"click"],[1,"earnCompletedButton"],[1,"loader"],[1,"taskContainer"],[1,"taskIcon"],[3,"src"],[1,"taskDescriptionContainer"],[1,"taskDescription"],[1,"taskRewardBox"],[1,"taskReward"],[3,"ngClass","click",4,"ngIf"],["class","taskCompletedButton",4,"ngIf"],[4,"ngIf"],["class","claimCount",4,"ngIf"],[1,"taskCompletedButton"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1),e.EFF(2,"More"),e.k0s(),e.j41(3,"div",2),e.EFF(4,"Complete tasks and get extra swipes every day!"),e.k0s(),e.j41(5,"div",3)(6,"div",4)(7,"div",5),e.EFF(8,"Your wallet"),e.k0s(),e.j41(9,"div",6),e.EFF(10,"This wallet will be used to get rewards and airdrop in the future"),e.k0s(),e.j41(11,"div",7),e.nrm(12,"img",8),e.j41(13,"div",9),e.EFF(14),e.k0s()(),e.j41(15,"div",10)(16,"div",11),e.EFF(17),e.k0s(),e.j41(18,"div",12),e.bIt("click",function(){return a.copyEvmAddress()}),e.DNE(19,h,1,0,"img",13)(20,M,1,0,"img",14),e.k0s()()(),e.j41(21,"div",4)(22,"div",5),e.EFF(23,"Daily reward"),e.k0s(),e.j41(24,"div",6),e.EFF(25,"Log in to the game every day and increase your daily reward!"),e.k0s(),e.j41(26,"div",15)(27,"div",16),e.EFF(28),e.k0s(),e.j41(29,"div",17),e.nrm(30,"img",8),e.j41(31,"div",18),e.EFF(32),e.k0s()()(),e.DNE(33,O,2,0,"div",19)(34,P,2,0,"div",20)(35,F,3,0,"div",20),e.k0s(),e.j41(36,"div",21),e.DNE(37,R,14,6,"div",22),e.k0s()()()),2&i&&(e.R7$(5),e.xc7("height",a.calcContainerHeight("app-earn","earnHeader","earnText")),e.R7$(9),e.SpI("\xa0",a.swipeCounter,""),e.R7$(3),e.JRh(a.evmAddress),e.R7$(),e.Y8G("ngClass",e.l_i(13,y,!a.isAddressCopied,a.isAddressCopied)),e.R7$(),e.Y8G("ngIf",!a.isAddressCopied),e.R7$(),e.Y8G("ngIf",a.isAddressCopied),e.R7$(8),e.SpI("Day ",a.dailyTask.loginStreak,""),e.R7$(4),e.SpI("\xa0+",a.dailyTask.reward,""),e.R7$(),e.Y8G("ngIf",a.dailyTask.isAvailable&&!a.isLoader[a.dailyTask.type]),e.R7$(),e.Y8G("ngIf",a.isLoader[a.dailyTask.type]),e.R7$(),e.Y8G("ngIf",!a.dailyTask.isAvailable&&!a.isLoader[a.dailyTask.type]),e.R7$(2),e.Y8G("ngForOf",a.taskList))},dependencies:[c.YU,c.Sq,c.bT],styles:["#app-earn[_ngcontent-%COMP%]{display:grid;align-content:space-between;height:-webkit-fill-available}.earnHeader[_ngcontent-%COMP%]{font-size:48px;font-weight:700;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.earnText[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}.earnBonusContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.earnSubText[_ngcontent-%COMP%]{font-size:15px;color:#ffffff80}.earnButton[_ngcontent-%COMP%]{border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);font-size:14px}.earnButtonCopied[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;padding:15px;font-size:14px}.daylyRewardContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:15px;padding:10px 15px;border:1px solid #7C6CFE;border-radius:15px}.claimDayCount[_ngcontent-%COMP%]{font-size:18px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.claimBox[_ngcontent-%COMP%]{display:flex;align-items:center}.claimCount[_ngcontent-%COMP%]{font-size:24px;font-weight:600;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.earnScore[_ngcontent-%COMP%]{font-size:36px;font-weight:600;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.earnScoreBox[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:15px}.earnScoreBox[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:30px}.taskContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.taskCompletedButton[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;padding:12px}.earnCompletedButton[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid #7C6CFE;border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:18px}.taskCompletedButton[_ngcontent-%COMP%]   .claimCount[_ngcontent-%COMP%]{font-size:18px}.taskIcon[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;padding:15px}.taskReward[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#7c6cfe}.taskDescription[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.taskDescription[_ngcontent-%COMP%]   .earnText[_ngcontent-%COMP%]{padding:0 0 5px;font-size:14px}.taskDescriptionContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:0 15px 15px}.taskDescriptionContainer[_ngcontent-%COMP%] > .earnButton[_ngcontent-%COMP%]{margin:0;padding:10px 20px;font-size:20px;font-weight:500}.earnScrollContainer[_ngcontent-%COMP%]{overflow:auto}.taskRewardBox[_ngcontent-%COMP%]{display:flex;align-items:center}.taskRewardBox[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:17px}.evmAddress[_ngcontent-%COMP%]{font-size:18px;padding:12px;margin:0 15px 15px;border:1px solid #7C6CFE;border-radius:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}.evmAddressContainer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.evmAddressContainer[_ngcontent-%COMP%] > .earnButton[_ngcontent-%COMP%], .evmAddressContainer[_ngcontent-%COMP%] > .earnButtonCopied[_ngcontent-%COMP%]{padding:12px;margin:0 15px 15px 0}.evmAddressContainer[_ngcontent-%COMP%] > .earnButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .evmAddressContainer[_ngcontent-%COMP%] > .earnButtonCopied[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:22px}.earnButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .earnButtonCopied[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:22px}.loader[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:50%;animation:_ngcontent-%COMP%_spin .75s infinite linear;border:2px solid transparent;background-image:linear-gradient(#000,#000),linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);background-origin:border-box;background-clip:content-box,border-box}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return t})();var g=s(4255);const A=[{path:"",component:f}];let $=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[g.iI.forChild(A),g.iI]})}return t})(),I=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.$C({type:t,bootstrap:[f]});static#n=this.\u0275inj=e.G2t({imports:[$,c.MD,m.Bb,C.G]})}return t})()}}]);