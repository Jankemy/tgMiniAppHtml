import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';


// const animationTimeMS = 500
const overflow = 1
const beginCoinCount = 10
const afterCutCoinCount = 1
const swipeCounterKey = 'swipeCounterKey'

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cutBox', {read: ViewContainerRef}) cutBox!: ViewContainerRef;

  componentMap: Map<number, ComponentRef<any>> = new Map<number, ComponentRef<any>>();
  cutBoxPosition = {}
  componentIdCounter = 0
  energyValue = 25
  energyInterval: any = {}
  swipeCounter = 0
  swipeSubscription: any = {}

  constructor(
    private renderer: Renderer2,
    private eventService: EventService
  ){
  }

  ngOnInit() {
    let t = this;

    // register swipe event emitter
    var app = document.getElementById('app-swipe')!;
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${overflow}px`
    document.body.style.marginBottom = `${overflow}px`
    window.scrollTo(0, overflow);

    (<any>window).Telegram?.WebApp?.expand()
    // window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
    app.addEventListener("touchmove", (e)=>{
        t.touchmoveEvent(e)
    });
    
    t.energyInterval = setInterval(()=>{
        if(t.energyValue < 100){
            t.energyValue++
        }
    }, 1000);

    try {
      (<any>window).Telegram?.WebApp?.CloudStorage?.getItem(swipeCounterKey)
        .then((resp:any) => {
          t.swipeCounter = JSON.parse(resp)
        })
    }
    catch(er) {
      console.log(er)
    }

    (<any>window).Telegram?.WebApp?.ready()
  }

  ngAfterViewInit() {
    var t = this;
    var cutBoxPos = t.cutBox.element.nativeElement.getBoundingClientRect();
    t.cutBoxPosition = {
      left: cutBoxPos.left,
      top: t.cutBox.element.nativeElement.offsetTop,
      width: cutBoxPos.width,
      height: cutBoxPos.height, 
    }

    for(let i = 0; i < beginCoinCount; i++){
      t.addNewCutCoinComponent()
    }

    t.swipeSubscription = t.eventService.CutCoinEvent.subscribe((componentId: number) => {
      t.onCoinTouched(componentId)
    })
  }

  ngOnDestroy(){
    let t = this;
    
    // var app = document.getElementById('app-swipe')!;
    // app.removeEventListener('touchmove', t.touchmoveEvent)
    // t.eventService.CutCoinEvent.unsubscribe()
    t.swipeSubscription.unsubscribe()
    clearInterval(t.energyInterval)
  }

  onCoinTouched(componentId: number) {
    let t = this;
    var component = t.componentMap.get(componentId);
    // component!.onDestroy(()=>{})
    component!.destroy();
    t.componentMap.delete(componentId);

    // let swipeCounter = document.getElementById('swipeCounter')!
    // swipeCounter.innerHTML = '' + (+swipeCounter.innerHTML + 1)
    t.swipeCounter++

    
    // console.log((<any>window).Telegram)
    // console.log((<any>window).Telegram?.WebApp)
    // console.log((<any>window).Telegram?.WebApp?.CloudStorage)
    // console.log((<any>window).Telegram?.WebApp?.CloudStorage?.setItem);
    
    try{
      (<any>window).Telegram?.WebApp?.CloudStorage?.setItem(swipeCounterKey, JSON.stringify(t.swipeCounter))
    }
    catch(er) {
      console.log(er)
    }
    

    if (t.energyValue > 0){
      t.energyValue--
    }

    for(let i = 0; i < afterCutCoinCount; i++){
      t.addNewCutCoinComponent()
    }
  }

  touchmoveEvent(e: any) {
    let t = this;
    e.preventDefault()
    let tm = {
      x: e.changedTouches[0].clientX, 
      y: e.changedTouches[0].clientY + overflow
    };
    if (t.energyValue > 0) {
      t.eventService.TouchmoveCoordinatesEvent.emit(tm)
    }
    t.tailEffect(tm)

    // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  }

  tailEffect({ 
    x, 
    y 
  }:{ 
    x: number; 
    y: number
  }){
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
      context.arc(x, y, radius, 0, 2 * Math.PI, false)
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
    t.renderer.appendChild(t.cutBox.element.nativeElement, cutCoinComponent.location.nativeElement)
  }

}
