import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';
import { ScoreService } from '../../shared/services/score.service';
import { EnergyService } from '../../shared/services/energy.service';
import { BoostsService } from '../../shared/services/boosts.service';
import { BoostTypes } from '../../shared/enums/boost.types';


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
  @ViewChild('cutBox', { read: ViewContainerRef }) cutBox!: ViewContainerRef;

  componentMap: Map<number, ComponentRef<any>> = new Map<number, ComponentRef<any>>();
  cutBoxPosition = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }
  componentIdCounter = 0
  energyInterval: any = {}
  swipeSubscription: any = {}
  isEnabledAutoswipe = false

  constructor(
    private renderer: Renderer2,
    private eventService: EventService,
    private scoreService: ScoreService,
    private energyService: EnergyService,
    private boostsService: BoostsService
  ) {
  }

  get swipeCounter() {
    return this.scoreService.totalScore
  }

  get energyValue() {
    return this.energyService.totalEnergy
  }

  get isX3Boost(){
    let x3 = this.boostsService.boostsList.find(boost => boost.type === BoostTypes.X3Multiplier)!
    return x3.isApplied
  }

  get isAutoswipe(){
    let autoswipe = this.boostsService.boostsList.find(boost => boost.type === BoostTypes.Autoswipe)!
    return autoswipe.isApplied
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
    app.addEventListener("touchmove", (e) => {
      t.touchmoveEvent(e)
    });

    // try {
    //   (<any>window).Telegram?.WebApp?.CloudStorage?.getItem(swipeCounterKey)
    //     .then((resp:any) => {
    //       t.swipeCounter = JSON.parse(resp)
    //     })
    // }
    // catch(er) {
    //   console.log(er)
    // }

    (<any>window).Telegram?.WebApp?.ready()

    // t.enableAutoswipeLine()
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

    for (let i = 0; i < beginCoinCount; i++) {
      t.addNewCutCoinComponent()
    }

    t.swipeSubscription = t.eventService.CutCoinEvent.subscribe((componentId: number) => {
      t.onCoinTouched(componentId)
    })

    // console.log('componentMap',t.componentMap)
    // let autoswipe = t.boostsService.boostsList
    // .find(boost => boost.type === BoostTypes.Autoswipe)!
    if (t.isAutoswipe) {
      t.enableAutoswipe()
    }
  }

  async enableAutoswipe(){
    let t = this;

    if (t.isEnabledAutoswipe) {
      return
    }
    t.isEnabledAutoswipe = true

    let last = { 
      x: t.cutBoxPosition.left, 
      y: t.cutBoxPosition.top 
    }

    // t.cutBoxPosition = {
    //   left: cutBoxPos.left,
    //   top: t.cutBox.element.nativeElement.offsetTop,
    // let cutCoinId = t.componentMap.entries().next().value[0]
    let cutCoinId = 0
    let cutCoin = t.componentMap.get(cutCoinId)!.instance
    let next = { 
      x: cutCoin.left + 25, 
      y: cutCoin.top  + 25
    }
    while (t.isEnabledAutoswipe && t.isAutoswipe) {
      await this.sleepTime(100)
      if (t.energyValue <= 0) {
        continue
      }
      await t.enableAutoswipeLine(last, next)
      last = next

      cutCoinId++
      let cutCoinFromMap = t.componentMap.get(cutCoinId)

      while (!cutCoinFromMap) {
        cutCoinId++
        cutCoinFromMap = t.componentMap.get(cutCoinId)
      }

      cutCoin = cutCoinFromMap!.instance
      next = { 
        x: cutCoin.left + 25, 
        y: cutCoin.top + 25
      }
      
    }
  }

  ngOnDestroy() {
    let t = this;

    // var app = document.getElementById('app-swipe')!;
    // app.removeEventListener('touchmove', t.touchmoveEvent)
    // t.eventService.CutCoinEvent.unsubscribe()
    t.swipeSubscription.unsubscribe()
    clearInterval(t.energyInterval)
    t.isEnabledAutoswipe = false
  }

  async enableAutoswipeLine(
    last: {
      x: number
      y: number
    },
    next: {
      x: number;
      y: number
    }
  ) {
    let t = this;

    // top: 244px; left: 124px;
    // top: 178px; left: 249px;

    // let last = {
    //   x: 124,
    //   y: 244
    // }

    // let next = {
    //   x: 249,
    //   y: 178
    // }


    let k = (last.y - next.y) / (last.x - next.x)
    // console.log('k', k)
    let b = last.y - k * last.x
    // console.log('b', b)
    // await t.sleepTime(1000 * 3)
    let isCalcFromX = Math.abs(last.x - next.x) > Math.abs(last.y - next.y)
    let pixStep = 15
    let lineDelayMS = 1

    if (isCalcFromX) {
      for (let x = last.x; 
        last.x > next.x ? x > next.x : x < next.x; 
        last.x > next.x ? x -= pixStep : x += pixStep
      ) {
        await t.sleepTime(lineDelayMS)
        let y = k * x + b
  
        // console.log('{x, y}', {x, y})
        t.emitCustomEvent({ x, y })
      }
    }
    else {
      for (let y = last.y; 
        last.y > next.y ? y > next.y : y < next.y; 
        last.y > next.y ? y -= pixStep : y += pixStep
      ) {
        await t.sleepTime(lineDelayMS)
        // let y = k * x + b
        let x = (y - b) / k
  
        // console.log('{x, y}', {x, y})
        t.emitCustomEvent({ x, y })
      }
    }

    
  }

  async sleepTime(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  onCoinTouched(componentId: number) {
    let t = this;
    var component = t.componentMap.get(componentId);
    // component!.onDestroy(()=>{})
    component!.destroy();
    t.componentMap.delete(componentId);

    // let swipeCounter = document.getElementById('swipeCounter')!
    // swipeCounter.innerHTML = '' + (+swipeCounter.innerHTML + 1)
    // t.swipeCounter++
    t.scoreService.incrementScore()
    // t.energyService.decrementEnergy()

    // console.log((<any>window).Telegram)
    // console.log((<any>window).Telegram?.WebApp)
    // console.log((<any>window).Telegram?.WebApp?.CloudStorage)
    // console.log((<any>window).Telegram?.WebApp?.CloudStorage?.setItem);

    // try{
    //   (<any>window).Telegram?.WebApp?.CloudStorage?.setItem(swipeCounterKey, JSON.stringify(t.swipeCounter))
    // }
    // catch(er) {
    //   console.log(er)
    // }


    // if (t.energyValue > 0){
    //   t.energyValue--
    // }

    for (let i = 0; i < afterCutCoinCount; i++) {
      t.addNewCutCoinComponent()
    }


    // console.log('componentMap', t.componentMap)
  }

  touchmoveEvent(e: any) {
    let t = this;
    e.preventDefault()

    let tm = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY + overflow
    };
    
    t.emitCustomEvent(tm)
    // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  }

  emitCustomEvent(tm: { x: number, y: number }) {
    let t = this;

    if (t.energyValue > 0) {
      t.eventService.TouchmoveCoordinatesEvent.emit(tm)
    }
    t.tailEffect(tm)
  }

  tailEffect({
    x,
    y
  }: {
    x: number;
    y: number
  }) {
    let radius = 5

    let canvas = document.createElement('canvas')!; //Create a canvas element
    //Set canvas width/height
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    //Set canvas drawing area width/height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //Position canvas
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.zIndex = '100000';
    canvas.style.pointerEvents = 'none'; //Make sure you can click 'through' the canvas
    document.body.appendChild(canvas); //Append canvas to body element
    let context = canvas.getContext('2d')!;
    //Draw rectangle
    // context.rect(x, y, width, height);
    context.arc(x, y, radius, 0, 2 * Math.PI, false)
    context.fillStyle = '#7f4dc7';
    context.fill();
    setTimeout(() => {
      document.body.removeChild(canvas)
    }, 100)
  }

  addNewCutCoinComponent() {
    let t = this;

    let cutCoinComponent = t.cutBox.createComponent(CutCoinComponent)
    let componentId = t.componentIdCounter++
    t.componentMap.set(componentId, cutCoinComponent)
    cutCoinComponent.instance.cutCoinId = componentId
    cutCoinComponent.instance.cutBoxPosition = t.cutBoxPosition
    t.renderer.appendChild(t.cutBox.element.nativeElement, cutCoinComponent.location.nativeElement)
  }

}
