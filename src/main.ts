// const SwipeListener = require('swipe-listener');
// import * as SwipeListener from 'swipe-listener'

// register swipe event emitter
var app = document.getElementById('app');
console.log(app)
var listener = (<any>window).SwipeListener(app);
// listen for swipe event
app?.addEventListener('swipe', (event:any) => {
    onSwipeFunc(event)
    // use swipe
    console.log(event.detail);
})

export function onSwipeFunc(e?:any){
    let swipeCounter = document.getElementById('swipeCounter')
    if (!swipeCounter) {
        swipeCounter = document.createElement('div')
        swipeCounter.id = 'swipeCounter'
        swipeCounter.innerHTML = '0'
        swipeCounter.style.background = 'white'
        swipeCounter.style.padding = '10px'
        document.getElementById('app')?.appendChild(swipeCounter)
    }

    let setMessage = function (msg:string) {
        let divMes = document.getElementById('message')
        if (!!divMes){
            divMes.innerHTML = msg;
        }
    }

    if (!(e instanceof PointerEvent)) {
      console.log('swipe', e);
      var d = e.detail.directions;

      if (d.top) {
        if (d.right) {
          setMessage('Swiped top-right.');
        } else if (d.left) {
          setMessage('Swiped top-left.');
        } else {
          setMessage('Swiped top.');
        }
      } else if (d.bottom) {
        if (d.right) {
          setMessage('Swiped bottom-right.');
        } else if (d.left) {
          setMessage('Swiped bottom-left.');
        } else {
          setMessage('Swiped bottom.');
        }
      } else {
        if (d.right) {
          setMessage('Swiped right.');
        } else if (d.left) {
          setMessage('Swiped left.');
        }
      }
    }
    else {
      setMessage('Clicked to "test counter".');
    }

    swipeCounter.innerHTML = '' + (+swipeCounter.innerHTML + 1)
}

document.getElementById('button')?.addEventListener('click', onSwipeFunc)