import { Injectable } from '@angular/core';
import { BoostTypes } from '../enums/boost.types';
import { ScoreService } from './score.service';

@Injectable({
    providedIn: 'root'
})
export class BoostsService {

    private boosts = [
        {
            type: BoostTypes.X3Multiplier,
            icon: 'assets/boost-icons/X3-boost.svg',
            text: 'Swipe Multiplier',
            subText: 'For each swipe you get X3',
            price: 100,
            isApplied: false,
            multiplier: 3,
        },
        {
            type: BoostTypes.RechargingSpeed,
            icon: 'assets/boost-icons/recharging-boost.svg',
            text: 'Recharging Speed',
            subText: 'Increases the energy recharge',
            price: 150,
            isApplied: false,
            multiplier: 1,
        },
        {
            type: BoostTypes.EnergyCapacity,
            icon: 'assets/boost-icons/energy-capacity-boost.svg',
            text: 'Energy Bar Capacity',
            subText: 'Greater energy reserve',
            price: 200,
            isApplied: false,
            multiplier: 1,
        },
        {
            type: BoostTypes.Autoswipe,
            icon: 'assets/boost-icons/autoswipe-boost.svg',
            text: 'Auto swipe',
            subText: 'Auto-swipe for 4 hours',
            price: 1500,
            isApplied: false,
            multiplier: 1,
        },
    ]

    constructor(
        private scoreService: ScoreService
    ){

    }

    get boostsList() {
        return this.boosts
    }

    buyBoost(type: BoostTypes) {
        let t = this;

        let boost = t.boostsList.find(boost => boost.type === type)!

        return new Promise((resolve, reject) => {
            // if (t.scoreService.totalScore < boost.price) {
            //     return reject('Insufficient balance')
            // }
    
            switch (type) {
                case BoostTypes.X3Multiplier:
                    boost.multiplier = 3
                    t.scoreService.setIncrementer(boost.multiplier)
                    break;
    
                case BoostTypes.Autoswipe:
                    boost.multiplier = 1
                    setTimeout(() => { boost.isApplied = false }, 1000 * 60)// * 60 * 4)
                    break;
    
                case BoostTypes.EnergyCapacity:
                case BoostTypes.RechargingSpeed:
                default:
                    boost.multiplier += 1
                    setTimeout(() => { boost.isApplied = false }, 1000 * 3)
                    break;
            }
    
            boost.isApplied = true
            t.scoreService.decrementScore(boost.price)
            return resolve(true)
        })
    }
}
