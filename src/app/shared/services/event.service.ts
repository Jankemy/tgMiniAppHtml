import { Injectable, Output, EventEmitter } from '@angular/core';

export type TouchmoveCoordinates = {
    x: number;
    y: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() CutCoinEvent = new EventEmitter<number>();
  @Output() TouchmoveCoordinatesEvent = new EventEmitter<TouchmoveCoordinates>();
}
