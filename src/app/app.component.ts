import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
// import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'
import Freezeframe from 'freezeframe';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { CutCoinComponent } from './shared/cut-coin/cut-coin.component';
import { EventService } from './shared/services/event.service';


// const animationTimeMS = 500
const beginCoinCount = 10
const afterCutCoinCount = 1

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
    const overflow = 100
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${overflow}px`
    document.body.style.marginBottom = `${overflow}px`
    window.scrollTo(0, overflow);

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

    (<any>window).Telegram?.WebApp?.expand()
    // window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
    app.addEventListener("touchmove", (e) => {
      e.preventDefault()
      let tm = {
        x: e.changedTouches[0].clientX, 
        y: e.changedTouches[0].clientY + overflow
      };
      t.eventService.TouchmoveCoordinatesEvent.emit(tm)
      t.tailEffect(tm)

      // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    });
    
    // app.addEventListener("touchstart", (e) => {
    //   e.preventDefault()
    //   console.log('touchstart', e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    // }, { passive: false });

    // app.addEventListener("touchend", (e) => {
    //   e.preventDefault()
    //   console.log('touchend', e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    // }, { passive: false });
    
    
    (<any>window).Telegram?.WebApp?.ready()
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

      for(let i = 0; i < afterCutCoinCount; i++){
        t.addNewCutCoinComponent()
      }
    })
  }

  tailEffect({ 
    x, 
    y 
  }:{ 
    x: number; 
    y: number
  }){
      // var width = 10;
      // var height = 10;
      let radius = 5

      let canvas = document.createElement('canvas')!; //Create a canvas element
      //Set canvas width/height
      canvas.style.width='100%';
      canvas.style.height='100%';
      //Set canvas drawing area width/height
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      //Position canvas
      canvas.style.position='absolute';
      canvas.style.left='0';
      canvas.style.top='0';
      canvas.style.zIndex='100000';
      canvas.style.pointerEvents='none'; //Make sure you can click 'through' the canvas
      document.body.appendChild(canvas); //Append canvas to body element
      let context = canvas.getContext('2d')!;
      //Draw rectangle
      // context.rect(x, y, width, height);
      context.arc(x, y, radius, 0, 45, false)
      context.fillStyle = '#7f4dc7';
      context.fill();
      setTimeout(()=>{
        document.body.removeChild(canvas)
      }, 100)
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
