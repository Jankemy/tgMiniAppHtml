import { Injectable} from '@angular/core';
import { BoostsService } from './boosts.service';
import { BoostTypes } from '../enums/boost.types';
import { EnergyService } from './energy.service';
import { ApiService } from './api.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

    private totalUserScore = 0
    private scoreIncrementer = 1
    private scoreInterval: any = {}

    constructor(
        private api: ApiService,
        private profileService: ProfileService,
        private energyService: EnergyService
    ){
        let t = this;
        t.scoreInterval = setInterval(t.initScoreService, 1000 * 60 * 10) //10 minutes
    }

    get totalScore() {
        return this.totalUserScore
    }

    ngOnDestroy() {
        clearInterval(this.scoreInterval);
    }

    initScoreService(){
        let t = this;
        return t.profileService.profile()
        .then((resp) => {
            let profile = resp!.data!
            t.totalUserScore = profile.balance
            t.scoreIncrementer = profile.earnPerSwipe
        })
    }

    setIncrementer(newIncrementer: number){
        this.scoreIncrementer = newIncrementer
    }

    decrementScore(decrementer: number){
        this.totalUserScore -= decrementer
    }

    incrementScore(){
        let t = this;
        t.totalUserScore += t.scoreIncrementer

        t.api.post('swipes', {
            timestamp: new Date().getTime(),
            count: t.scoreIncrementer,
            availableEnergy: t.energyService.availableUserEnergy
        })
    }

    addClaimedSum(sum: number){
        this.totalUserScore += sum
    }
}
