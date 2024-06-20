"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[717],{8717:(h,r,e)=>{e.r(r),e.d(r,{InviteModule:()=>b});var l=e(345),p=e(3887),t=e(4438),g=e(9692),c=e(177);const v=(n,d)=>({inviteButton:n,inviteButtonCopied:d});function u(n,d){if(1&n&&(t.j41(0,"div",16)(1,"div"),t.EFF(2),t.k0s(),t.j41(3,"div"),t.EFF(4),t.k0s()()),2&n){const i=d.$implicit;t.R7$(2),t.JRh(i.nick),t.R7$(2),t.JRh(i.score)}}function C(n,d){1&n&&(t.j41(0,"span"),t.nrm(1,"img",17),t.EFF(2,"\xa0Copy link"),t.k0s())}function m(n,d){1&n&&(t.j41(0,"span"),t.nrm(1,"img",18),t.EFF(2,"\xa0Copied "),t.k0s())}let a=(()=>{class n{constructor(i){this.clip=i,this.isCopied=!1,this.friendsScore=[{nick:"@adam_smith",score:34678},{nick:"@kate_smith",score:24690}]}ngOnInit(){}ngAfterViewInit(){}ngOnDestroy(){}copyRefLink(){let i=this;i.clip.copy("Copied ref link"),i.isCopied=!0,setTimeout(()=>{i.isCopied=!1},3e3)}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(g.WW))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-invite"]],decls:30,vars:7,consts:[["id","app-invite"],[1,"inviteHeader"],[1,"inviteText"],[1,"bonusContainer"],[1,"inviteSubText"],[1,"claimBox"],["src","assets/icons/candy-icon.svg"],[1,"claimCount"],[1,"inviteButton"],[1,"invitedFriends"],[1,"invitedListTitle"],["class","invitedListBody",4,"ngFor","ngForOf"],[1,"inviteButtons"],["src","assets/icons/invite-icon.svg","alt",""],[3,"click","ngClass"],[4,"ngIf"],[1,"invitedListBody"],["src","assets/icons/copy-icon.svg","alt",""],["src","assets/icons/check-button.svg"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2,"Invite friends!"),t.k0s(),t.j41(3,"div",2),t.EFF(4,"Send a link or share points to your friends and get bonuses"),t.k0s(),t.j41(5,"div",3)(6,"div",2),t.EFF(7,"Bonuses"),t.k0s(),t.j41(8,"div",4),t.EFF(9,"10% from friends + 2% from their referrals"),t.k0s(),t.j41(10,"div",5),t.nrm(11,"img",6),t.j41(12,"div",7),t.EFF(13,"\xa0+150"),t.k0s()(),t.j41(14,"div",8),t.EFF(15,"Claim"),t.k0s()(),t.j41(16,"div",9)(17,"div",10)(18,"div"),t.EFF(19,"Your friends"),t.k0s(),t.j41(20,"div"),t.EFF(21,"3 invites left"),t.k0s()(),t.DNE(22,u,5,2,"div",11),t.k0s(),t.j41(23,"div",12)(24,"div",8),t.nrm(25,"img",13),t.EFF(26,"\xa0Invite friend "),t.k0s(),t.j41(27,"div",14),t.bIt("click",function(){return s.copyRefLink()}),t.DNE(28,C,3,0,"span",15)(29,m,3,0,"span",15),t.k0s()()()),2&o&&(t.R7$(22),t.Y8G("ngForOf",s.friendsScore),t.R7$(5),t.Y8G("ngClass",t.l_i(4,v,!s.isCopied,s.isCopied)),t.R7$(),t.Y8G("ngIf",!s.isCopied),t.R7$(),t.Y8G("ngIf",s.isCopied))},dependencies:[c.YU,c.Sq,c.bT],styles:["#app-invite[_ngcontent-%COMP%]{display:grid;align-content:space-between;height:-webkit-fill-available}.inviteHeader[_ngcontent-%COMP%]{font-size:48px;font-weight:700;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.inviteText[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}.bonusContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.inviteSubText[_ngcontent-%COMP%]{font-size:15px;color:#ffffff80}.inviteButton[_ngcontent-%COMP%]{border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);font-size:14px}.inviteButtonCopied[_ngcontent-%COMP%]{font-size:14px;font-weight:600;border:1px solid #7C6CFE;border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.inviteButton[_ngcontent-%COMP%], .inviteButtonCopied[_ngcontent-%COMP%], .inviteButton[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .inviteButtonCopied[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.claimCount[_ngcontent-%COMP%]{font-size:24px;font-weight:600;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.claimBox[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:15px}.inviteButtons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.inviteButtons[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%}.inviteButtons[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-right:0}.invitedListTitle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#7c6cfe;margin:15px;font-size:20px}.invitedListTitle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{font-size:12px;border:1px solid #7C6CFE;border-radius:15px;padding:3px 10px;text-decoration:underline}.invitedListBody[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#7c6cfe;margin:15px;font-size:18px;color:#fff}.invitedListBody[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{font-size:20px;color:#7c6cfe}.inviteButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .inviteButtonCopied[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:18px}"]})}return n})();var f=e(7112);const x=[{path:"",component:a}];let k=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.$C({type:n});static#i=this.\u0275inj=t.G2t({imports:[f.iI.forChild(x),f.iI]})}return n})(),b=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.$C({type:n,bootstrap:[a]});static#i=this.\u0275inj=t.G2t({imports:[k,c.MD,l.Bb,p.G]})}return n})()}}]);