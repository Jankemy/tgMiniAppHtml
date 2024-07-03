import { Injectable, Output, EventEmitter } from '@angular/core';

export type TouchmoveCoordinates = {
    x: number;
    y: number;
}

@Injectable({
  providedIn: 'platform' //do not set 'root', ONLY 'platform'
})
export class EventService {

  @Output() CutCoinEvent = new EventEmitter<number>();
  @Output() TouchmoveCoordinatesEvent = new EventEmitter<TouchmoveCoordinates>();
  @Output() LoginEvent = new EventEmitter<string>();
  @Output() NeedLoginEvent = new EventEmitter<boolean>();

}
