"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[717],{8717:(F,r,s)=>{s.r(r),s.d(r,{InviteModule:()=>k});var f=s(345),p=s(3887),t=s(4438),g=s(9692),c=s(177);const v=(n,d)=>({inviteButton:n,inviteButtonCopied:d});function u(n,d){if(1&n&&(t.j41(0,"div",18)(1,"div"),t.EFF(2),t.k0s(),t.j41(3,"div"),t.EFF(4),t.k0s()()),2&n){const i=d.$implicit;t.R7$(2),t.JRh(i.nick),t.R7$(2),t.JRh(i.score)}}function C(n,d){1&n&&(t.j41(0,"span"),t.nrm(1,"img",19),t.EFF(2,"\xa0Copy link"),t.k0s())}function m(n,d){1&n&&(t.j41(0,"span"),t.nrm(1,"img",20),t.EFF(2,"\xa0Copied "),t.k0s())}let a=(()=>{class n{constructor(i){this.clip=i,this.isCopied=!1,this.friendsScore=[{nick:"@adam_smith",score:34678},{nick:"@kate_smith",score:24690}]}ngOnInit(){}ngAfterViewInit(){}ngOnDestroy(){}copyRefLink(){let i=this;i.clip.copy("Copied ref link"),i.isCopied=!0,setTimeout(()=>{i.isCopied=!1},3e3)}calcInviteContainerHeight(){let i=document.getElementById("app-invite"),e=document.getElementById("inviteHeader"),o=document.getElementById("inviteText");return i.offsetHeight-e.offsetHeight-o.offsetHeight+"px"}static#t=this.\u0275fac=function(e){return new(e||n)(t.rXU(g.WW))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-invite"]],decls:31,vars:9,consts:[["id","app-invite"],["id","inviteHeader",1,"inviteHeader"],["id","inviteText",1,"inviteText"],[1,"inviteContainer"],[1,"bonusContainer"],[1,"inviteText"],[1,"inviteSubText"],[1,"claimBox"],["src","assets/icons/candy-icon.svg"],[1,"claimCount"],[1,"inviteButton"],[1,"invitedFriends"],[1,"invitedListTitle"],["class","invitedListBody",4,"ngFor","ngForOf"],[1,"inviteButtons"],["src","assets/icons/invite-icon.svg","alt",""],[3,"click","ngClass"],[4,"ngIf"],[1,"invitedListBody"],["src","assets/icons/copy-icon.svg","alt",""],["src","assets/icons/check-button.svg"]],template:function(e,o){1&e&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2,"Invite friends!"),t.k0s(),t.j41(3,"div",2),t.EFF(4,"Send a link or share points to your friends and get bonuses"),t.k0s(),t.j41(5,"div",3)(6,"div",4)(7,"div",5),t.EFF(8,"Bonuses"),t.k0s(),t.j41(9,"div",6),t.EFF(10,"10% from friends + 2% from their referrals"),t.k0s(),t.j41(11,"div",7),t.nrm(12,"img",8),t.j41(13,"div",9),t.EFF(14,"\xa0+150"),t.k0s()(),t.j41(15,"div",10),t.EFF(16,"Claim"),t.k0s()(),t.j41(17,"div",11)(18,"div",12)(19,"div"),t.EFF(20,"Your friends"),t.k0s(),t.j41(21,"div"),t.EFF(22,"3 invites left"),t.k0s()(),t.DNE(23,u,5,2,"div",13),t.k0s(),t.j41(24,"div",14)(25,"div",10),t.nrm(26,"img",15),t.EFF(27,"\xa0Invite friend "),t.k0s(),t.j41(28,"div",16),t.bIt("click",function(){return o.copyRefLink()}),t.DNE(29,C,3,0,"span",17)(30,m,3,0,"span",17),t.k0s()()()()),2&e&&(t.R7$(5),t.xc7("height",o.calcInviteContainerHeight()),t.R7$(18),t.Y8G("ngForOf",o.friendsScore),t.R7$(5),t.Y8G("ngClass",t.l_i(6,v,!o.isCopied,o.isCopied)),t.R7$(),t.Y8G("ngIf",!o.isCopied),t.R7$(),t.Y8G("ngIf",o.isCopied))},dependencies:[c.YU,c.Sq,c.bT],styles:["#app-invite[_ngcontent-%COMP%]{display:grid;align-content:space-between;height:-webkit-fill-available}.inviteHeader[_ngcontent-%COMP%]{font-size:48px;font-weight:700;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.inviteText[_ngcontent-%COMP%]{font-size:17px;padding:10px;color:#fff}.bonusContainer[_ngcontent-%COMP%]{border:1px solid #7C6CFE;border-radius:15px;margin:15px;background:linear-gradient(223.87deg,#ff24d326 -10.47%,#865ffe26 47.28%,#36bdfd26 109.84%)}.inviteSubText[_ngcontent-%COMP%]{font-size:15px;color:#ffffff80}.inviteButton[_ngcontent-%COMP%]{border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);font-size:14px}.inviteButtonCopied[_ngcontent-%COMP%]{font-size:14px;font-weight:600;border:1px solid #7C6CFE;border-radius:15px;margin:15px;padding:15px;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.inviteButton[_ngcontent-%COMP%], .inviteButtonCopied[_ngcontent-%COMP%], .inviteButton[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .inviteButtonCopied[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.claimCount[_ngcontent-%COMP%]{font-size:24px;font-weight:600;background:linear-gradient(223.87deg,#ff24d3 -10.47%,#865ffe 47.28%,#36bdfd 109.84%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.claimBox[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:15px}.inviteButtons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.inviteButtons[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%}.inviteButtons[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-right:0}.invitedListTitle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#7c6cfe;margin:15px;font-size:20px}.invitedListTitle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{font-size:12px;border:1px solid #7C6CFE;border-radius:15px;padding:3px 10px;text-decoration:underline}.invitedListBody[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#7c6cfe;margin:15px;font-size:18px;color:#fff}.invitedListBody[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{font-size:20px;color:#7c6cfe}.inviteButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .inviteButtonCopied[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:18px}.inviteContainer[_ngcontent-%COMP%]{overflow:auto}"]})}return n})();var l=s(172);const x=[{path:"",component:a}];let h=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.$C({type:n});static#i=this.\u0275inj=t.G2t({imports:[l.iI.forChild(x),l.iI]})}return n})(),k=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.$C({type:n,bootstrap:[a]});static#i=this.\u0275inj=t.G2t({imports:[h,c.MD,f.Bb,p.G]})}return n})()}}]);