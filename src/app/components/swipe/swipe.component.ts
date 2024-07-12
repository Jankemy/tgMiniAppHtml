import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/sub-components/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';
import { ScoreService } from '../../shared/services/score.service';
import { EnergyService } from '../../shared/services/energy.service';
import { BoostsService } from '../../shared/services/boosts.service';
import { BoostTypes } from '../../shared/enums/boost.types';
import { ProfileService } from '../../shared/services/profile.service';
import { BaseComponent } from '../../shared/base/base.component';
import { EnergyHelpComponent } from '../../shared/sub-components/energy-help/energy-help.component';
import { ClipboardService } from 'ngx-clipboard';
import { NotifierService } from 'angular-notifier';
import { Overflow } from '../../../environments';


const beginCoinCount = 10
const afterCutCoinCount = 1

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cutBox', { read: ViewContainerRef }) cutBox!: ViewContainerRef;
  private cometCanvas!: HTMLCanvasElement;
  private cometContext: CanvasRenderingContext2D | null = null;
  private cometTrail: { x: number; y: number; createdAt: number }[] = [];

  // Cursor tail params
  BASE_RADIUS = 4;
  MAX_TRAIL_LENGTH = 150;
  BASE_COLOR = [127, 81, 232];
  TARGET_COLOR = [255, 0, 213];
  MAX_SPEED = 30; // px per frame
  TTL = 150; // Track lifetime (ms)
  
  // interpolation params
  previousPoint: { x: number, y: number } | null = null;
  stepSize: number = 15; // The size of the interpolation step in pixels

  componentMap: Map<number, ComponentRef<any>> = new Map<number, ComponentRef<any>>();
  cutBoxPosition = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }
  componentIdCounter = 0
  energyInterval: any = {}
  autoswipeCheckInterval: any = {}
  boostsCheckInterval: any = {}
  boostsCheckTimeout: any = {}
  swipeSubscription: any = {}
  updateSubscription: any = {}
  isEnabledAutoswipe = false
  userNickname = ''

  constructor(
    private renderer: Renderer2,
    private clip: ClipboardService,
    private notifier: NotifierService,
    private profileService: ProfileService,
    private eventService: EventService,
    private scoreService: ScoreService,
    private energyService: EnergyService,
    private boostsService: BoostsService
  ) {
    super()
  }

  get swipeCounter() {
    return this.scoreService.totalScore
  }

  get energyValue() {
    return this.energyService.totalEnergy
  }

  get isX5Boost() {
    let x5 = this.boostsService.boostsList.find(boost => boost.type === BoostTypes.swipe_x5)!
    return x5.isApplied
  }

  get autoswipe() {
    return this.boostsService.boostsList.find(boost => boost.type === BoostTypes.autoswipe)!
  }

  get isAutoswipeEnabled() {
    return this.autoswipe.isApplied
  }

  ngOnInit() {
    let t = this;
    t.initSwipeBox()
    t.initServices()

    t.updateSubscription = t.eventService.NeedUpdateEvent.subscribe(() => {
      t.initServices()
    })
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

    console.log(t.cutBoxPosition)
    let eventBox = document.getElementById('eventBox')!;
    eventBox.style.top = `${t.cutBoxPosition.top}px`
    eventBox.style.left = `${t.cutBoxPosition.left}px`
    eventBox.style.width = `${t.cutBoxPosition.width}px`;
    eventBox.style.height = `${t.cutBoxPosition.height}px`;

    for (let i = 0; i < beginCoinCount; i++) {
      t.addNewCutCoinComponent()
    }

    t.swipeSubscription = t.eventService.CutCoinEvent.subscribe((componentId: number) => {
      t.onCoinTouched(componentId)
    })
    t.initCanvas();
    
    if (t.isAutoswipeEnabled) {
      t.enableAutoswipe()
    }
  }

  ngOnDestroy() {
    let t = this;

    t.swipeSubscription.unsubscribe()
    t.updateSubscription.unsubscribe()
    clearInterval(t.energyInterval)
    clearInterval(t.autoswipeCheckInterval)
    clearInterval(t.boostsCheckInterval)
    clearTimeout(t.boostsCheckTimeout)
    t.isEnabledAutoswipe = false
    t.scoreService.saveSwipeBatch(t.energyService.availableUserEnergy)

    // document.body.style.overflowY = 'auto'
    // document.body.style.marginTop = '0'
    // document.body.style.marginBottom = '0'
  }

  initServices(){
    let t = this

    t.setLoading(true)
    t.profileService.initProfileService()
    .then((resp) => {
      t.userNickname = resp!.username
      t.eventService.NeedLoginEvent.emit(!resp!.usernameChanged)

      Promise.all([
        t.scoreService.initScoreService(),
        t.energyService.initEnergyService(),
        t.boostsService.initBoostsService()
      ])
      .finally(() => {

        if (t.isAutoswipeEnabled) {
          t.enableAutoswipe()
          
          t.boostsCheckTimeout = setTimeout(() => {
            t.boostsCheckInterval = setInterval(() => {
              t.boostsService.initBoostsService()
            }, 1000)
          }, t.autoswipe.appliedTime)
        }

        t.setLoading(false)
      })
    })
  }

  initSwipeBox(){
    let t =  this
    // register swipe event emitter
    let app = document.getElementById('app-swipe')!;
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${Overflow}px`
    document.body.style.marginBottom = `${Overflow}px`
    window.scrollTo(0, Overflow);

    (<any>window).Telegram?.WebApp?.expand()
    // window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
    app.addEventListener("touchmove", (e) => {
      t.touchmoveEvent(e)
    });
    app.addEventListener('touchend', t.touchEndEvent.bind(this));
    app.addEventListener('touchcancel', t.touchEndEvent.bind(this));
  }

  private initCanvas() {
    let t = this;
    t.cometCanvas = document.createElement('canvas')!;
    t.cometContext = t.cometCanvas.getContext('2d');
    if (!!t.cometContext) {
      t.setupCanvas();
      t.renderer.appendChild(document.body, t.cometCanvas);
      requestAnimationFrame(() => t.animate());
    }
  }

  // canvas params
  private setupCanvas() {
    let t = this;
    t.cometCanvas.width = window.innerWidth;
    t.cometCanvas.height = window.innerHeight;
    t.cometCanvas.style.position = 'absolute';
    t.cometCanvas.style.left = '0';
    t.cometCanvas.style.top = '0';
    t.cometCanvas.style.pointerEvents = 'none';
    t.cometCanvas.style.zIndex = '1000';
  }

  private addPoint(x: number, y: number) {
    this.cometTrail.push({ x, y, createdAt: Date.now() });
  }

  private animate() {
    let t = this;
    if (t.cometContext) {
      t.cometContext.clearRect(0, 0, t.cometCanvas.width, t.cometCanvas.height);
      t.cometTrail = t.cometTrail.filter((tp) => Date.now() - tp.createdAt < t.TTL);
      t.cometContext.filter = "blur(3px) opacity(.75)";
      t.bezierTrail();
      t.currentPos();
      t.cometContext.filter = "none";
      t.bezierTrail();
      t.currentPos();
      requestAnimationFrame(() => t.animate());
    }
  }

  // Drawing Bezier curves for a comet trail
  bezierTrail() {
    let t = this;
    let points: any = [null, null, null, null];
    const ctx = t.cometContext!;
    const trail = t.cometTrail.slice();

    for (var i = 0; i < trail.length; i++) {
      let trailPoint = trail[i];
      points[0] = points[1];
      points[1] = points[2];
      points[2] = trailPoint;

      if (!points[0]) continue;

      let lifeLeft = 1 - (Date.now() - trailPoint.createdAt) / t.TTL;
      let radius = t.BASE_RADIUS * lifeLeft;

      var p0 = points[0];
      var p1 = points[1];
      var p2 = points[2];

      var x0 = (p0.x + p1.x) / 2;
      var y0 = (p0.y + p1.y) / 2;

      var x1 = (p1.x + p2.x) / 2;
      var y1 = (p1.y + p2.y) / 2;

      ctx.beginPath();
      ctx.lineWidth = radius * 2;
      ctx.lineCap = "round";

      let x = x1 - x0;
      let y = y1 - y0;

      let speed = Math.min(Math.sqrt(x * x + y * y), t.MAX_SPEED) / t.MAX_SPEED;

      ctx.strokeStyle = this.getColor(speed);

      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(p1.x, p1.y, x1, y1);
      ctx.stroke();
    }
  }

  // Drawing the current position of the comet trail
  private currentPos() {
    let t = this;
    const ctx = t.cometContext!;
    const trail = t.cometTrail.slice();
    var mousePos = { x: t.cometCanvas.width / 2, y: t.cometCanvas.height / 2 };
    let lastSpeed = 0;

    if (trail.length < 1)
      return

    if (trail.length > 1) {
      let x = mousePos.x - trail[trail.length - 2].x;
      let y = mousePos.y - trail[trail.length - 2].y;
      lastSpeed = Math.min(Math.sqrt(x * x + y * y), t.MAX_SPEED) / t.MAX_SPEED;
    }

    let timeSinceMoved = Math.min(
      trail.length > 1
        ? (Date.now() - trail[trail.length - 2].createdAt) / 1000
        : 1,
      1
    );
    ctx.beginPath();
    ctx.fillStyle = t.getColor((1 - timeSinceMoved) * lastSpeed);
    ctx.fill();
  }

  private getColor(mix: number): string {
    let color = this.BASE_COLOR.map((c, i) => c + mix * (this.TARGET_COLOR[i] - c));
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }

  async enableAutoswipe() {
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
      y: cutCoin.top + 25
    }
    while (t.isEnabledAutoswipe && t.isAutoswipeEnabled) {
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

    clearInterval(t.boostsCheckInterval)
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
    let k = (last.y - next.y) / (last.x - next.x)
    let b = last.y - k * last.x
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

        t.emitCustomEvent({ x, y })
      }
    }
    else {
      for (let y = last.y;
        last.y > next.y ? y > next.y : y < next.y;
        last.y > next.y ? y -= pixStep : y += pixStep
      ) {
        await t.sleepTime(lineDelayMS)
        let x = (y - b) / k

        t.emitCustomEvent({ x, y })
      }
    }
  }

  onCoinTouched(componentId: number) {
    let t = this;
    var component = t.componentMap.get(componentId);

    component!.destroy();
    t.componentMap.delete(componentId);
    
    t.energyService.decrementEnergy()
    t.scoreService.incrementScore(t.energyService.availableUserEnergy)

    for (let i = 0; i < afterCutCoinCount; i++) {
      t.addNewCutCoinComponent()
    }
  }

  touchmoveEvent(e: any) {
    let t = this;

    if (e.view.scrollY === 0) {
      e.view.scrollTo(0, Overflow)
    }
    e.preventDefault()

    let currentPoint = {
      x: (e.clientX ?? e.changedTouches[0].clientX),
      y: (e.clientY ?? e.changedTouches[0].clientY) + Overflow
    };
    
    if (t.previousPoint) {
      let previousPoint = t.previousPoint;
      let distance = Math.sqrt(
          Math.pow(currentPoint.x - previousPoint.x, 2) +
          Math.pow(currentPoint.y - previousPoint.y, 2)
      );
      if (distance > t.stepSize) {
        // number of steps required to move from prevPoint to currentPoint with a given stepSize step
        let steps = Math.ceil(distance / t.stepSize);
    
        // calculating interpolated points
        for (let i = 1; i <= steps; i++) {
          let tValue = i / steps;
          let interpolatedPoint = {
            x: t.quadraticBezier(previousPoint.x, previousPoint.x + (currentPoint.x - previousPoint.x) / 2, currentPoint.x, tValue),
            y: t.quadraticBezier(previousPoint.y, previousPoint.y + (currentPoint.y - previousPoint.y) / 2, currentPoint.y, tValue)
          };
          // calling an event, but not displaying for interpolated points
          t.emitCustomEvent(interpolatedPoint, true);
        }
      }
    }
    t.previousPoint = currentPoint;
    t.emitCustomEvent(currentPoint)
  }

  // quadratic interpolation along a given Bezier curve
  private quadraticBezier(start: number, control: number, end: number, t: number): number {
    return Math.pow(1 - t, 2) * start + 2 * (1 - t) * t * control + Math.pow(t, 2) * end;
  }

  emitCustomEvent(tm: { x: number, y: number }, notShow: boolean = false) {
    let t = this;

    if (t.energyValue > 0) {
      t.eventService.TouchmoveCoordinatesEvent.emit(tm)
    }
    if (notShow) return;
    t.addPoint(tm.x, tm.y);
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

  showEnergyHelp(){
    EnergyHelpComponent.showEnergyHelp(true)
  }

  copyNickname(){
    this.clip.copy(this.userNickname)
    this.notifier.notify('success', 'Copied successfully')
  }

  private touchEndEvent(e: TouchEvent) {
    if (this.previousPoint) this.previousPoint = null;
  }
}
