"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[792],{4429:(s,l,r)=>{var o=document.getElementById("app");function p(n){let i=document.getElementById("swipeCounter");i||(i=document.createElement("div"),i.id="swipeCounter",i.innerHTML="0",document.getElementById("app")?.appendChild(i));let e=function(c){let d=document.getElementById("message");d&&(d.innerHTML=c)};if(n instanceof PointerEvent)e('Clicked to "test counter".');else{console.log("swipe",n);var t=n.detail.directions;t.top?e(t.right?"Swiped top-right.":t.left?"Swiped top-left.":"Swiped top."):t.bottom?e(t.right?"Swiped bottom-right.":t.left?"Swiped bottom-left.":"Swiped bottom."):t.right?e("Swiped right."):t.left&&e("Swiped left.")}i.innerHTML=""+(+i.innerHTML+1)}console.log(o),window.SwipeListener(o),o?.addEventListener("swipe",n=>{p(n),console.log(n.detail)}),document.getElementById("button")?.addEventListener("click",p)}},s=>{s(s.s=4429)}]);