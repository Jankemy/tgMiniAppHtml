import { Injectable} from '@angular/core';
import { BoostsService } from './boosts.service';
import { BoostTypes } from '../enums/boost.types';

@Injectable({
  providedIn: 'platform'
})
export class ScoreService {

    private totalUserScore = 0

    constructor(
        private boostsService: BoostsService
    ){
    }

    private get scoreIncrementer(){
        let t = this;
        let appliedX3Boost = t.boostsService.boostsList
            .find(boost => boost.type === BoostTypes.X3Multiplier)!
            
        if (appliedX3Boost.isApplied){
            return appliedX3Boost.multiplier
        }
        
        return 1
    } 

    get totalScore() {
        return this.totalUserScore
    }

    incrementScore(){
        this.totalUserScore += this.scoreIncrementer
    }
}
