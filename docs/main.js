"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[792],{4429:(s,l,r)=>{var o=document.getElementById("app");function p(n){let e=document.getElementById("swipeCounter");e||(e=document.createElement("div"),e.id="swipeCounter",e.innerHTML="0",e.style.background="white",e.style.padding="10px",document.getElementById("app")?.appendChild(e));let t=function(c){let d=document.getElementById("message");d&&(d.innerHTML=c)};if(n instanceof PointerEvent)t('Clicked to "test counter".');else{console.log("swipe",n);var i=n.detail.directions;i.top?t(i.right?"Swiped top-right.":i.left?"Swiped top-left.":"Swiped top."):i.bottom?t(i.right?"Swiped bottom-right.":i.left?"Swiped bottom-left.":"Swiped bottom."):i.right?t("Swiped right."):i.left&&t("Swiped left.")}e.innerHTML=""+(+e.innerHTML+1)}console.log(o),window.SwipeListener(o),o?.addEventListener("swipe",n=>{p(n),console.log(n.detail)}),document.getElementById("button")?.addEventListener("click",p)}},s=>{s(s.s=4429)}]);