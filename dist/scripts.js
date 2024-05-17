"use strict";var _extends=Object.assign||function(o){for(var e,i=1;i<arguments.length;i++)for(var v in e=arguments[i])Object.prototype.hasOwnProperty.call(e,v)&&(o[v]=e[v]);return o},SwipeListener=function(o,e){if(o){typeof window<"u"&&function(){function t(r,l){l=l||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(r,l.bubbles,l.cancelable,l.detail),c}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),e||(e={}),e=_extends({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},e);var i=[],v=!1,T=function(){v=!0},z=function(t){v=!1,m(t)},H=function(t){v&&(t.changedTouches=[{clientX:t.clientX,clientY:t.clientY}],g(t))};e.mouse&&(o.addEventListener("mousedown",T),o.addEventListener("mouseup",z),o.addEventListener("mousemove",H));var m=function(t){var r=Math.abs,l=Math.max,c=Math.min;if(i.length){for(var f="function"==typeof TouchEvent&&t instanceof TouchEvent,a=[],s=[],n={top:!1,right:!1,bottom:!1,left:!1},d=0;d<i.length;d++)a.push(i[d].x),s.push(i[d].y);var w=a[0],y=a[a.length-1],L=s[0],x=s[s.length-1],C={x:[w,y],y:[L,x]};if(1<i.length){var O={detail:_extends({touch:f,target:t.target},C)},P=new CustomEvent("swiperelease",O);o.dispatchEvent(P)}var h=a[0]-a[a.length-1],p="none";p=0<h?"left":"right";var M=c.apply(Math,a),S=l.apply(Math,a);if(r(h)>=e.minHorizontal&&("left"==p?r(M-a[a.length-1])<=e.deltaHorizontal&&(n.left=!0):"right"==p&&r(S-a[a.length-1])<=e.deltaHorizontal&&(n.right=!0)),p="none",p=0<(h=s[0]-s[s.length-1])?"top":"bottom",M=c.apply(Math,s),S=l.apply(Math,s),r(h)>=e.minVertical&&("top"==p?r(M-s[s.length-1])<=e.deltaVertical&&(n.top=!0):"bottom"==p&&r(S-s[s.length-1])<=e.deltaVertical&&(n.bottom=!0)),i=[],n.top||n.right||n.bottom||n.left){e.lockAxis&&((n.left||n.right)&&r(w-y)>r(L-x)?n.top=n.bottom=!1:(n.top||n.bottom)&&r(w-y)<r(L-x)&&(n.left=n.right=!1));var X={detail:_extends({directions:n,touch:f,target:t.target},C)},Y=new CustomEvent("swipe",X);o.dispatchEvent(Y)}else{var A=new CustomEvent("swipecancel",{detail:_extends({touch:f,target:t.target},C)});o.dispatchEvent(A)}}},g=function(t){var r=t.changedTouches[0];if(i.push({x:r.clientX,y:r.clientY}),1<i.length){var s={detail:{x:[i[0].x,i[i.length-1].x],y:[i[0].y,i[i.length-1].y],touch:"function"==typeof TouchEvent&&t instanceof TouchEvent,target:t.target}},n=new CustomEvent("swiping",s);(!0===e.preventScroll||"function"==typeof e.preventScroll&&e.preventScroll(n))&&t.preventDefault(),o.dispatchEvent(n)}},E=!1;try{var V=Object.defineProperty({},"passive",{get:function(){E={passive:!e.preventScroll}}});window.addEventListener("testPassive",null,V),window.removeEventListener("testPassive",null,V)}catch{}return e.touch&&(o.addEventListener("touchmove",g,E),o.addEventListener("touchend",m)),{off:function(){o.removeEventListener("touchmove",g,E),o.removeEventListener("touchend",m),o.removeEventListener("mousedown",T),o.removeEventListener("mouseup",z),o.removeEventListener("mousemove",H)}}}};typeof module<"u"&&typeof module.exports<"u"?(module.exports=SwipeListener,module.exports.default=SwipeListener):"function"==typeof define&&define.amd?define([],function(){return SwipeListener}):window.SwipeListener=SwipeListener;