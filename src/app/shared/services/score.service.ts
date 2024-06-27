import { Injectable} from '@angular/core';
import { BoostsService } from './boosts.service';
import { BoostTypes } from '../enums/boost.types';
import { EnergyService } from './energy.service';
import { ApiService } from './api.service';
import { ProfileService } from './profile.service';


const maxBatchSize = 10 // 10 * scoreIncrementer

@Injectable({
    providedIn: 'root',
})
export class ScoreService {

    private totalUserScore = 0
    private scoreIncrementer = 1
    private scoreInterval: any = {}
    private swipeBatch = 0

    constructor(
        private api: ApiService,
        private profileService: ProfileService,
        private energyService: EnergyService,
        private boostsService: BoostsService
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
        .then((profile) => {
            t.totalUserScore = profile.balance
            t.scoreIncrementer = profile.earnPerSwipe
            t.boostsService.initBoostsService()
            .then(() => {
                let xBoost = t.boostsService.boostsList.find(b => b.type === BoostTypes.swipe_x5)!
                if (xBoost.isApplied) {
                    t.scoreIncrementer *= 5
                }
            })
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
        t.swipeBatch += t.scoreIncrementer

        if (t.swipeBatch >= maxBatchSize * t.scoreIncrementer) {
            t.saveSwipeBatch()
        }
    }

    saveSwipeBatch(){
        let t = this;

        if (t.swipeBatch > 0) {
            t.api.post('swipes', {
                timestamp: new Date().getTime(),
                count: t.swipeBatch,
                availableEnergy: t.energyService.availableUserEnergy
            })
        }
        
        t.swipeBatch = 0
    }

    addClaimedSum(sum: number){
        let t = this;
        t.totalUserScore += sum
        t.api.post('swipes', {
            timestamp: new Date().getTime(),
            count: sum,
            availableEnergy: t.energyService.availableUserEnergy
        })
    }
}
