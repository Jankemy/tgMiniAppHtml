import { Component, OnInit, ViewChild } from '@angular/core';
// import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'
import Freezeframe from 'freezeframe';
import { PreloaderComponent } from './shared/preloader/preloader.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gifFF: Freezeframe | undefined;

  ngOnInit() {
    let t = this;
    t.setLoading(true)
    // register swipe event emitter
    var app = document.getElementById('app');
    console.log(app)
    var listener = (<any>window).SwipeListener(app);
    // listen for swipe event
    app?.addEventListener('swipe', (event: any) => {
      t.onSwipeFunc(event)
      // use swipe
      console.log(event.detail);
    })

    let gifElem = document.getElementById('gifElem') as HTMLElement 
    t.gifFF = new Freezeframe(gifElem, {
      trigger: false
    });
    t.gifFF.start();

    (<any>window).Telegram.WebApp.expand()
    window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
    
    const overflow = 100
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${overflow}px`
    document.body.style.height = window.innerHeight + overflow + "px"
    document.body.style.paddingBottom = `${overflow}px`
    window.scrollTo(0, overflow);
    
    (<any>window).Telegram.WebApp.ready()
    setTimeout(() => { t.setLoading(false) }, 2000)
  }

  setLoading(isLoading: boolean){
    PreloaderComponent.setLoading(isLoading);
  }

  onSwipeFunc(e?: any) {
    let t = this;
    // const logo = new Freezeframe('.freezeframe', {
    //   trigger: 'click'
    // });
    

    let swipeCounter = document.getElementById('swipeCounter')
    if (!swipeCounter) {
      swipeCounter = document.createElement('div')
      swipeCounter.id = 'swipeCounter'
      swipeCounter.innerHTML = '0'
      swipeCounter.style.background = 'white'
      swipeCounter.style.padding = '10px'
      swipeCounter.style.fontSize = '40px'
      document.getElementById('app')?.appendChild(swipeCounter)
    }

    if (+swipeCounter.innerHTML % 2){
      
      t.gifFF?.stop();
    }
    else {
      t.gifFF?.start();
    }

    let setMessage = function (msg: string) {
      let divMes = document.getElementById('message')
      if (!!divMes) {
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


}
