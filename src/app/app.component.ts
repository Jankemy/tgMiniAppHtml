import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
// import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'
import Freezeframe from 'freezeframe';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { CutCoinComponent } from './shared/cut-coin/cut-coin.component';
import { EventService } from './shared/services/event.service';


const animationTimeMS = 500
const beginCoinCount = 10

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('cutBox', {read: ViewContainerRef}) cutBox!: ViewContainerRef;

  // gifFF: Freezeframe | undefined
  // gifStopTimeout: any = {}
  // isStartedGif = false

  // isUp = true;
  // isDown = false;

  componentMap: Map<number, ComponentRef<any>> = new Map<number, ComponentRef<any>>();
  cutBoxPosition = {}
  componentIdCounter = 0

  constructor(
    private renderer: Renderer2,
    private eventService: EventService
  ){
  }

  ngOnInit() {
    let t = this;
    t.setLoading(true)

    // register swipe event emitter
    var app = document.getElementById('app')!;
    // console.log(app)
    // var listener = (<any>window).SwipeListener(app);
    // console.log(listener)
    // listen for swipe event
    // app?.addEventListener('swipe', (event: any) => {
    //   t.onSwipeFunc(event)
    //   // use swipe
    //   console.log(event.detail);
    // });

    // let gifElems = document.getElementById('gifElems')!.children
    // t.gifFF = new Freezeframe(gifElems, {
    //   trigger: false
    // });
    // t.gifFF.start();

    (<any>window).Telegram.WebApp.expand()
    // window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
    window.addEventListener("touchmove", (e) => {
      let tm = {
        x: e.changedTouches[0].clientX, 
        y: e.changedTouches[0].clientY
      };
      t.eventService.TouchmoveCoordinatesEvent.emit(tm)
      e.preventDefault()
      // console.log(tm)
    }
    , { passive: false });
    
    const overflow = 100
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${overflow}px`
    document.body.style.marginBottom = `${overflow}px`
    window.scrollTo(0, overflow);
    
    (<any>window).Telegram.WebApp.ready()
    window.onload = () => { t.setLoading(false) }
  }

  ngAfterViewInit() {
    var t = this;
    var editorPos = t.cutBox.element.nativeElement.getBoundingClientRect();
    t.cutBoxPosition = {
      left: editorPos.left,
      top: t.cutBox.element.nativeElement.offsetTop,
      width: editorPos.width,
      height: editorPos.height, 
    }

    for(let i = 0; i < beginCoinCount; i++){
      t.addNewCutCoinComponent()
    }

    t.eventService.CutCoinEvent.subscribe((componentId: number) => {
      var component = t.componentMap.get(componentId);
      // component!.onDestroy(()=>{})
      component!.destroy();
      t.componentMap.delete(componentId);

      let swipeCounter = document.getElementById('swipeCounter')!
      swipeCounter.innerHTML = '' + (+swipeCounter.innerHTML + 1)
      t.addNewCutCoinComponent()
    })
  }

  addNewCutCoinComponent(){
    let t = this;

    let cutCoinComponent = t.cutBox.createComponent(CutCoinComponent)
    let componentId = t.componentIdCounter++
    t.componentMap.set(componentId, cutCoinComponent)
    cutCoinComponent.instance.cutCoinId = componentId
    cutCoinComponent.instance.cutBoxPosition = t.cutBoxPosition
    // t.renderer.appendChild(t.cutBox.element.nativeElement, cutCoinComponent)
    t.renderer.appendChild(t.cutBox.element.nativeElement, cutCoinComponent.location.nativeElement)
  }

  setLoading(isLoading: boolean){
    PreloaderComponent.setLoading(isLoading);
  }

  onSwipeFunc(e?: any) {
    let t = this;

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

    // if (+swipeCounter.innerHTML % 2){
    //   t.gifFF?.stop();
    // }
    // else {
    //   t.gifFF?.start();
    // }

    if (!(e instanceof PointerEvent)) {
      console.log('swipe', e);
      var d = e.detail.directions;

      if (d.top) {
        // t.isUp = true
        // t.isDown = false
        if (d.right) {
          t.setMessage('Swiped top-right.');
        } else if (d.left) {
          t.setMessage('Swiped top-left.');
        } else {
          t.setMessage('Swiped top.');
        }
      } else if (d.bottom) {
        // t.isUp = false
        // t.isDown = true
        if (d.right) {
          t.setMessage('Swiped bottom-right.');
        } else if (d.left) {
          t.setMessage('Swiped bottom-left.');
        } else {
          t.setMessage('Swiped bottom.');
        }
      } else {
        // t.isUp = true
        // t.isDown = false
        if (d.right) {
          t.setMessage('Swiped right.');
        } else if (d.left) {
          t.setMessage('Swiped left.');
        }
      }
    }
    else {
      t.setMessage('Clicked to "test counter".');
    }

    // if (!t.isStartedGif) {
    //   t.gifFF?.start()
    //   t.isStartedGif = true
    //   t.gifStopTimeout = setTimeout(() => {
    //     t.gifFF?.stop()
    //     t.isStartedGif = false
    //   }, animationTimeMS)
    // }
    // else {
    //   clearTimeout(t.gifStopTimeout)
    //   t.gifStopTimeout = setTimeout(() => {
    //     t.gifFF?.stop()
    //     t.isStartedGif = false
    //   }, animationTimeMS)
    // }

    // if (!t.isStartedGif) {
    //   // t.gifFF?.start()
    //   t.isStartedGif = true
    //   t.gifStopTimeout = setTimeout(() => {
    //     // t.gifFF?.stop()
    //     t.isStartedGif = false
    //   }, animationTimeMS)
    // }
    // else {
    //   clearTimeout(t.gifStopTimeout)
    //   t.gifStopTimeout = setTimeout(() => {
    //     // t.gifFF?.stop()
    //     t.isStartedGif = false
    //   }, animationTimeMS)
    // }

    // swipeCounter.innerHTML = '' + (+swipeCounter.innerHTML + 1)
  }

  setMessage(msg: string) {
    let divMes = document.getElementById('message')
    if (!!divMes) {
      divMes.innerHTML = msg;
    }
  }


}
