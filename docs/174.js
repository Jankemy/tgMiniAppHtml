"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[174],{8174:(O,l,r)=>{r.r(l),r.d(l,{EarnModule:()=>h});var f=r(345),m=r(3887),a=function(n){return n[n.FollowX=0]="FollowX",n[n.FollowDiscord=1]="FollowDiscord",n[n.InviteFriends=2]="InviteFriends",n[n.FollowTgChat=3]="FollowTgChat",n[n.FollowInstagram=4]="FollowInstagram",n}(a||{}),t=r(4438),C=r(9692),c=r(177);const u=(n,s)=>({earnButton:n,earnButtonCopied:s});function x(n,s){1&n&&t.nrm(0,"img",22)}function v(n,s){1&n&&t.nrm(0,"img",23)}function k(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",33),t.bIt("click",function(){t.eBV(e);const i=t.XpG().$implicit,d=t.XpG();return t.Njj(d.completeTask(i.type))}),t.EFF(1," Follow "),t.k0s()}}function w(n,s){1&n&&(t.j41(0,"div",34),t.nrm(1,"img",23),t.k0s())}function b(n,s){if(1&n&&(t.j41(0,"div",24)(1,"div",25),t.nrm(2,"img",26),t.k0s(),t.j41(3,"div",27)(4,"div",28)(5,"div",5),t.EFF(6),t.k0s(),t.j41(7,"div",29),t.nrm(8,"img",8),t.j41(9,"div",30),t.EFF(10),t.k0s()()(),t.DNE(11,k,2,0,"div",31)(12,w,2,0,"div",32),t.k0s()()),2&n){const e=s.$implicit;t.R7$(2),t.Y8G("src",e.icon,t.B4B),t.R7$(4),t.JRh(e.text),t.R7$(4),t.SpI("\xa0+",e.reward,""),t.R7$(),t.Y8G("ngIf",!e.isCompleted),t.R7$(),t.Y8G("ngIf",e.isCompleted)}}let g=(()=>{class n{constructor(e){this.clip=e,this.evmAddress="0xd64bd54d1c5e6271c8ea8ebbd12349ad757adc83",this.isAddressCopied=!1,this.taskList=[{type:a.FollowX,icon:"assets/earn-icons/X_social.svg",text:"Follow X",reward:150,isCompleted:!1,link:"https://x.com/?lang=ru"},{type:a.FollowDiscord,icon:"assets/earn-icons/Discord_social.svg",text:"Follow Discord",reward:150,isCompleted:!1,link:"https://discord.com/login"},{type:a.InviteFriends,icon:"assets/earn-icons/Invite_social.svg",text:"Invite 3 friends",reward:150,isCompleted:!1,link:"invite"},{type:a.FollowTgChat,icon:"assets/earn-icons/Telegram_social.svg",text:"Follow Telegram chat",reward:150,isCompleted:!1,link:"https://web.telegram.org/a/"},{type:a.FollowInstagram,icon:"assets/earn-icons/Instagram_social.svg",text:"Follow Instagram",reward:150,isCompleted:!1,link:"https://www.instagram.com/accounts/login/"}]}ngOnInit(){}ngAfterViewInit(){}ngOnDestroy(){}calcTaskListContainerHeight(){let e=document.getElementById("app-earn"),o=document.getElementById("earnHeader"),i=document.getElementById("earnText");return e.offsetHeight-o.offsetHeight-i.offsetHeight+"px"}completeTask(e){let i=this.taskList.find(M=>M.type===e),d=document.createElement("a");d.href=i.link,e!==a.InviteFriends&&(d.target="_black"),d.click()}copyEvmAddress(){let e=this;e.clip.copy(e.evmAddress),e.isAddressCopied=!0,setTimeout(()=>{e.isAddressCopied=!1},3e3)}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(C.WW))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-earn"]],decls:37,vars:10,consts:[["id","app-earn"],["id","earnHeader",1,"earnHeader"],["id","earnText",1,"earnText"],[1,"earnScrollContainer"],[1,"earnBonusContainer"],[1,"earnText"],[1,"earnSubText"],[1,"earnScoreBox"],["src","assets/icons/candy-icon.svg"],[1,"earnScore"],[1,"evmAddressContainer"],[1,"evmAddress"],[3,"click","ngClass"],["src","assets/icons/copy-icon.svg",4,"ngIf"],["src","assets/icons/check-button.svg",4,"ngIf"],[1,"daylyRewardContainer"],[1,"claimDayCount"],[1,"claimBox"],[1,"claimCount"],[1,"earnButton"],[1,"taskListContainer"],["class","taskContainer",4,"ngFor","ngForOf"],["src","assets/icons/copy-icon.svg"],["src","assets/icons/check-button.svg"],[1,"taskContainer"],[1,"taskIcon"],[3,"src"],[1,"taskDescriptionContainer"],[1,"taskDescription"],[1,"taskRewardBox"],[1,"taskReward"],["class","earnButton",3,"click",4,"ngIf"],["class","taskCompletedButton",4,"ngIf"],[1,"earnButton",3,"click"],[1,"taskCompletedButton"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2,"More"),t.k0s(),t.j41(3,"div",2),t.EFF(4,"Complete tasks and get extra swipes every day!"),t.k0s(),t.j41(5,"div",3)(6,"div",4)(7,"div",5),t.EFF(8,"Your wallet"),t.k0s(),t.j41(9,"div",6),t.EFF(10,"This wallet will be used to get rewards and airdrop in the future"),t.k0s(),t.j41(11,"div",7),t.nrm(12,"img",8),t.j41(13,"div",9),t.EFF(14,"\xa0321654"),t.k0s()(),t.j41(15,"div",10)(16,"div",11),t.EFF(17),t.k0s(),t.j41(18,"div",12),t.bIt("click",function(){return i.copyEvmAddress()}),t.DNE(19,x,1,0,"img",13)(20,v,1,0,"img",14),t.k0s()()(),t.j41(21,"div",4)(22,"div",5),t.EFF(23,"Daily reward"),t.k0s(),t.j41(24,"div",6),t.EFF(25,"Log in to the game every day and increase your daily reward!"),t.k0s(),t.j41(26,"div",15)(27,"div",16),t.EFF(28,"Day 6"),t.k0s(),t.j41(29,"div",17),t.nrm(30,"img",8),t.j41(31,"div",18),t.EFF(32,"\xa0+150"),t.k0s()()(),t.j41(33,"div",19),t.EFF(34,"Claim"),t.k0s()(),t.j41(35,"div",20),t.DNE(36,b,13,5,"div",21),t.k0s()()()),2&o&&(t.R7$(5),t.xc7("height",i.calcTaskListContainerHeight()),t.R7$(12),t.JRh(i.evmAddress),t.R7$(),t.Y8G("ngClass",t.l_i(7,u,!i.isAddressCopied,i.isAddressCopied)),t.R7$(),t.Y8G("ngIf",!i.isAddressCopied),t.R7$(),t.Y8G("ngIf",i.isAddressCopied),t.R7$(16),t.Y8G("ngForOf",i.taskList))},dependencies:[c.YU,c.Sq,c.bT],styles:["#app-earn[_ngcontent-%COMP%]{display:grid;align-content:space-between;height:-webkit-fill-available}.earnHeader[_ngcontent-%COMP%]{font-size:48px;font-weight:700;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.earnText[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}.earnBonusContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.earnSubText[_ngcontent-%COMP%]{font-size:15px;color:#ffffff80}.earnButton[_ngcontent-%COMP%]{border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);font-size:14px}.earnButtonCopied[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;padding:15px;font-size:14px}.daylyRewardContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:15px;padding:10px 15px;border:1px solid #7C6CFE;border-radius:15px}.claimDayCount[_ngcontent-%COMP%]{font-size:18px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.claimBox[_ngcontent-%COMP%]{display:flex;align-items:center}.claimCount[_ngcontent-%COMP%]{font-size:24px;font-weight:600;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.earnScore[_ngcontent-%COMP%]{font-size:36px;font-weight:600;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.earnScoreBox[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:15px}.earnScoreBox[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:30px}.taskContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.taskCompletedButton[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;padding:12px}.taskIcon[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;padding:15px}.taskReward[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#7c6cfe}.taskDescription[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.taskDescription[_ngcontent-%COMP%]   .earnText[_ngcontent-%COMP%]{padding:0 0 5px;font-size:14px}.taskDescriptionContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:0 15px 15px}.taskDescriptionContainer[_ngcontent-%COMP%] > .earnButton[_ngcontent-%COMP%]{margin:0;padding:10px 20px;font-size:20px;font-weight:500}.earnScrollContainer[_ngcontent-%COMP%]{overflow:auto}.taskRewardBox[_ngcontent-%COMP%]{display:flex;align-items:center}.taskRewardBox[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:17px}.evmAddress[_ngcontent-%COMP%]{font-size:18px;padding:12px;margin:0 15px 15px;border:1px solid #7C6CFE;border-radius:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}.evmAddressContainer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.evmAddressContainer[_ngcontent-%COMP%] > .earnButton[_ngcontent-%COMP%], .evmAddressContainer[_ngcontent-%COMP%] > .earnButtonCopied[_ngcontent-%COMP%]{padding:12px;margin:0 15px 15px 0}.evmAddressContainer[_ngcontent-%COMP%] > .earnButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .evmAddressContainer[_ngcontent-%COMP%] > .earnButtonCopied[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:22px}.earnButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .earnButtonCopied[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:22px}"]})}return n})();var p=r(7112);const _=[{path:"",component:g}];let F=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[p.iI.forChild(_),p.iI]})}return n})(),h=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.$C({type:n,bootstrap:[g]});static#e=this.\u0275inj=t.G2t({imports:[F,c.MD,f.Bb,m.G]})}return n})()}}]);