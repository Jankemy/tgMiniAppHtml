"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSwipeFunc = void 0;
const SwipeListener = require('swipe-listener');
// import SwipeListener from 'swipe-listener'
// register swipe event emitter
var app = document.getElementById('app');
console.log(app);
var listener = SwipeListener(app);
// listen for swipe event
app === null || app === void 0 ? void 0 : app.addEventListener('swipe', (event) => {
    onSwipeFunc();
    // use swipe
    console.log(event.detail);
});
function onSwipeFunc() {
    var _a;
    let swipeCounter = document.getElementById('swipeCounter');
    if (!swipeCounter) {
        swipeCounter = document.createElement('div');
        swipeCounter.id = 'swipeCounter';
        swipeCounter.innerHTML = '0';
        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(swipeCounter);
    }
    swipeCounter.innerHTML = '' + (+swipeCounter.innerHTML + 1);
}
exports.onSwipeFunc = onSwipeFunc;
(_a = document.getElementById('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onSwipeFunc);
