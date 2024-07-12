import {
    Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter,
    ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
//import { Observable } from 'rxjs/Rx';
//import { Observable } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// //import 'rxjs/add/observable/range';
// import { range } from 'rxjs/observable/range';
// import { interval } from 'rxjs/observable/interval';
// import { Subscription } from 'rxjs/Subscription';
// import { zip, tap } from 'rxjs/operators';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit, OnChanges {

    // @Input() source: Observable<number>;
    @Input() value: number = 50;
    @Input() label: string = '';
    @Input() width: number = 50;
    // @Output() start: EventEmitter<void> = new EventEmitter();
    // @Output() cancel: EventEmitter<void> = new EventEmitter();
    // suscripcion: Subscription = null;
    // working: boolean;

    get valuePersentage(): string {
        return `${this.value}%`;
    }

    get widthPersentage(): string {
        return `${this.width}%`;
    }

    constructor(private cd: ChangeDetectorRef) {
        // this.cancelar();
    }

    ngOnInit() {
        // this.working = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        // if (!this.source) {
        //     this.progreso = changes.value.currentValue;
        // }
    }

    

    // iniciar() {
    //     if (!!this.source) { // using source
    //         this.progreso = 0;
    //         this.suscripcion = this.source.pipe(tap(tick => this.progreso++))
    //             .subscribe(paso => { this.cd.markForCheck() }, error => console.error(error), () => this.suscripcion = null);
    //     } else { // using value
    //         this.start.emit();
    //     }
    //     this.working = true;
    // }

    // private cancelar() {
    //     if (this.suscripcion !== null) {
    //         this.suscripcion.unsubscribe();
    //         this.suscripcion = null;
    //     }
    //     this.working = false;
    //     if (!this.source) { // using value
    //         this.cancel.emit();
    //     }
    // }

    // private limpiar() {
    //     this.progreso = 0;
    // }
}