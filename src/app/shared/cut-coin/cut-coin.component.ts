import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'
import Freezeframe from 'freezeframe';
import { EventService, TouchmoveCoordinates } from '../services/event.service';

const cutCoinSize = 50;

@Component({
    selector: 'app-cut-coin',
    templateUrl: './cut-coin.component.html',
    styleUrls: ['./cut-coin.component.scss']
})
export class CutCoinComponent implements AfterViewInit {

    constructor(
        private eventService: EventService
    ) { }

    @Input() cutCoinId: number = 0;
    @Input() cutBoxPosition: any = {};

    //isTouchstart = false
    top: number = 0
    left: number = 0

    ngAfterViewInit() {
        let t = this;
        let currentCutCoin = document.getElementById(`cutCoin-${t.cutCoinId}`)!
        let maxBottom = t.cutBoxPosition.top + t.cutBoxPosition.height - cutCoinSize
        let maxRight = t.cutBoxPosition.left + t.cutBoxPosition.width - cutCoinSize
        t.top = t.randomIntFromInterval(t.cutBoxPosition.top, maxBottom)
        t.left = t.randomIntFromInterval(t.cutBoxPosition.left, maxRight)

        // console.log(t.cutBoxPosition)
        // console.log(maxBottom)
        // console.log(maxRight)

        currentCutCoin!.style.top = `${t.top}px`;
        currentCutCoin!.style.left = `${t.left}px`;

        // currentCutCoin.addEventListener('touchstart', () => { t.isTouchstart = true })
        // currentCutCoin.addEventListener('touchend', () => { if (t.isTouchstart) t.onHoverEnd() })
        // currentCutCoin.addEventListener('mouseenter', () => { t.onHoverEnd() })
        // currentCutCoin.addEventListener('mousemove', () => { t.onHoverEnd() })

        t.eventService.TouchmoveCoordinatesEvent.subscribe((tm) => { t.checkTouchmove(tm) })
    }

    checkTouchmove(tm: TouchmoveCoordinates) {
        let t = this
        if(t.top < tm.y && t.top+cutCoinSize > tm.y &&
            t.left < tm.x && t.left+cutCoinSize > tm.x
        ) {
            console.log('hover, Id', t.cutCoinId)
            t.onHoverEnd()
        }
    }

    onHoverEnd() {
        let t = this;
        t.eventService.CutCoinEvent.emit(t.cutCoinId);
    }

    randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
