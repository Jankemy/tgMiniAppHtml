import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { EventService, TouchmoveCoordinates } from '../../services/event.service';

const cutCoinSize = 50;

@Component({
    selector: 'app-cut-coin',
    templateUrl: './cut-coin.component.html',
    styleUrls: ['./cut-coin.component.scss'],
})
export class CutCoinComponent implements AfterViewInit, OnDestroy {

    constructor(
        private eventService: EventService,
    ) { }

    @Input() cutCoinId: number = 0;
    @Input() cutBoxPosition: any = {};

    top: number = 0
    left: number = 0
    cutCoinSubscription: any = {}
    currentRotateDeg = 0
    currentCutCoinDestroying = false
    destroyInterval: any = {}

    imagePaths = [
        // 'assets/cat-coin/cat-coin-1.png',
        // 'assets/cat-coin/cat-coin-2.png',
        // 'assets/cat-coin/cat-coin-3.png',
        // 'assets/cat-coin/cat-coin-4.png',
        'assets/cat-coin/cat-coin-violet-1.png',
        'assets/cat-coin/cat-coin-violet-2.png',
        'assets/cat-coin/cat-coin-violet-3.png',
        'assets/cat-coin/cat-coin-violet-4.png',
    ]

    ngAfterViewInit() {
        let t = this;
        let currentCutCoin = document.getElementById(`cutCoin-${t.cutCoinId}`)!

        let randomImage = t.imagePaths[t.randomIntFromInterval(0, t.imagePaths.length-1)]
        let rotateDeg = t.randomIntFromInterval(0, 359)

        t.currentRotateDeg = rotateDeg

        currentCutCoin.style.backgroundImage = `url("${randomImage}")`;
        currentCutCoin.style.transform = `rotate(${t.currentRotateDeg}deg)`;

        let maxBottom = t.cutBoxPosition.top + t.cutBoxPosition.height - cutCoinSize
        let maxRight = t.cutBoxPosition.left + t.cutBoxPosition.width - cutCoinSize
        t.top = t.randomIntFromInterval(t.cutBoxPosition.top, maxBottom)
        t.left = t.randomIntFromInterval(t.cutBoxPosition.left, maxRight)

        currentCutCoin!.style.top = `${t.top}px`;
        currentCutCoin!.style.left = `${t.left}px`;

        t.cutCoinSubscription = t.eventService.TouchmoveCoordinatesEvent
            .subscribe((tm) => { t.checkTouchmove(tm) })
    }

    ngOnDestroy(){
        this.cutCoinSubscription.unsubscribe()
        clearInterval(this.destroyInterval)
    }

    checkTouchmove(tm: TouchmoveCoordinates) {
        let t = this
        if(t.top < tm.y && t.top+cutCoinSize > tm.y &&
            t.left < tm.x && t.left+cutCoinSize > tm.x
        ) {
            t.onHoverEnd()
        }
    }

    onHoverEnd() {
        let t = this;
        if(t.currentCutCoinDestroying) return
        else t.currentCutCoinDestroying = true

        let currentCutCoin = document.getElementById(`cutCoin-${t.cutCoinId}`)!

        let totalIntervalMS = 200
        let interval = totalIntervalMS / cutCoinSize

        let scale = 1
        let scaleDecrementer = scale / cutCoinSize

        let rotateDecrementer = 180 / cutCoinSize

        t.destroyInterval = setInterval(() => {
            t.currentRotateDeg -= rotateDecrementer
            scale -= scaleDecrementer
            console.log('currentRotateDeg', t.currentRotateDeg)
            console.log('scale', scale)

            if (scale >= 0) {
                currentCutCoin.style.transform = `scale(${scale}) rotate(${t.currentRotateDeg}deg)`
            }
            else {
                clearInterval(t.destroyInterval)
                t.eventService.CutCoinEvent.emit(t.cutCoinId);
            }
        }, interval)
    }

    onDone(e: any){
        this.eventService.CutCoinEvent.emit(this.cutCoinId);
    }

    randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
