import { Injectable} from '@angular/core';
import { ApiService } from './api.service';
import { BalanceModel } from '../models/balance.model';

const maxBatchSize = 10 // 10 * scoreIncrementer

@Injectable({
    providedIn: 'root',
})
export class ScoreService {

    private totalUserScore = 0
    private scoreIncrementer = 1
    private swipeBatch = 0

    constructor(
        private api: ApiService,
    ){
    }

    get totalScore() {
        return this.totalUserScore
    }

    getScore(){
        return this.api.get<BalanceModel>('swipes')
    }

    initScoreService(){
        let t = this;
        return t.getScore()
        .then((resp) => {
            t.totalUserScore = resp!.data!.balance
            t.scoreIncrementer = resp!.data!.earnPerSwipe
            t.scoreIncrementer *= (resp!.data!.swipeXmultiplier > 0 
                ? resp!.data!.swipeXmultiplier 
                : 1)
        })
    }

    setIncrementer(newIncrementer: number){
        this.scoreIncrementer = newIncrementer
    }

    decrementScore(decrementer: number){
        this.totalUserScore -= decrementer
    }

    incrementScore(availableEnergy: number){
        let t = this;
        t.totalUserScore += t.scoreIncrementer
        t.swipeBatch += t.scoreIncrementer

        if (t.swipeBatch >= maxBatchSize * t.scoreIncrementer) {
            t.saveSwipeBatch(availableEnergy)
        }
    }

    saveSwipeBatch(availableEnergy: number){
        let t = this;

        if (t.swipeBatch > 0) {
            t.api.post('swipes', {
                timestamp: new Date().getTime(),
                count: t.swipeBatch,
                availableEnergy
            })
        }
        
        t.swipeBatch = 0
    }
}
