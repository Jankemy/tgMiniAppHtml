import { Injectable, Output, EventEmitter } from '@angular/core';

export type TouchmoveCoordinates = {
    x: number;
    y: number;
}

export type SendTokens = {
  nickname: string;
  amount: number;
}

@Injectable({
  providedIn: 'platform' //do not set 'root', ONLY 'platform'
})
export class EventService {

  @Output() CutCoinEvent = new EventEmitter<number>();
  @Output() TouchmoveCoordinatesEvent = new EventEmitter<TouchmoveCoordinates>();
  @Output() LoginEvent = new EventEmitter<string>();
  @Output() NeedUpdateEvent = new EventEmitter();
  @Output() NeedLoginEvent = new EventEmitter<boolean>();
  @Output() SendTokensEvent = new EventEmitter<SendTokens>();
  @Output() TechnicalWorksEvent = new EventEmitter();
}
