import { Injectable } from '@angular/core';
import { BoostTypes } from '../enums/boost.types';
import { ScoreService } from './score.service';
import { ApiService } from './api.service';
import { BoostModel } from '../models/boost.model';
import { UpgradeModel } from '../models/upgrade.model';

@Injectable({
    providedIn: 'root',
})
export class BoostsService {

    private boosts = [
        {
            type: BoostTypes.swipe_x5,
            price: 0,
            isApplied: false,
            isAvailable: false,
            level: 3,
            isPermanent: false,

            icon: 'assets/boost-icons/X3-boost.svg',
            text: 'Swipe Multiplier',
            subText: 'For each swipe you get X3',
        },
        {
            type: BoostTypes.energy_refill,
            price: 0,
            isApplied: false,
            isAvailable: false,
            level: 1,
            isPermanent: false,
            
            icon: 'assets/boost-icons/recharging-boost.svg',
            text: 'Energy Refill',
            subText: 'Full energy charge',
        },

        {
            type: BoostTypes.earn_per_swipe,
            price: 100,
            isApplied: false,
            isAvailable: false,
            level: 0,
            isPermanent: true,

            icon: 'assets/boost-icons/recharging-boost.svg',
            text: 'Earn per swipe',
            subText: 'Increases the energy recharge',
        },
        {
            type: BoostTypes.recharging_speed,
            price: 150,
            isApplied: false,
            isAvailable: false,
            level: 0,
            isPermanent: true,
            
            icon: 'assets/boost-icons/recharging-boost.svg',
            text: 'Recharging Speed',
            subText: 'Increases the energy recharge',
        },
        {
            type: BoostTypes.energy_capacity,
            price: 200,
            isApplied: false,
            isAvailable: false,
            level: 0,
            isPermanent: true,
            
            icon: 'assets/boost-icons/energy-capacity-boost.svg',
            text: 'Energy Bar Capacity',
            subText: 'Greater energy reserve',
        },
        {
            type: BoostTypes.autoswipe,
            price: 1500,
            isApplied: false,
            isAvailable: false,
            level: 1,
            isPermanent: false,
            
            icon: 'assets/boost-icons/autoswipe-boost.svg',
            text: 'Auto swipe',
            subText: 'Auto-swipe for 4 hours',
        },
    ]

    // private boosts: any = []
    private upgrades: any = []
    private userBoosts: any = []
    private autoswipeTimeout: any = {}

    constructor(
        // private scoreService: ScoreService,
        private api: ApiService
    ) {

    }

    get boostsList() {
        return this.boosts
    }

    initBoostsService() {
        let t = this;

        return Promise.all([
            t.getBoostList().then(resp => { t.userBoosts = resp!.data! }),
            t.getUpgradesList().then(resp => { t.upgrades = resp!.data! }),
        ])
        .finally(() => {
            t.userBoosts.map((ub:any) => {
                let b = t.boosts.find(x => x.type === BoostTypes[ub.id as keyof typeof BoostTypes])!

                b.price = ub.price
                b.isAvailable = ub.isAvailable
                b.isApplied = ub.maxAttempts > ub.attempts
            })

            t.upgrades.map((u:any) => {
                let b = t.boosts.find(x => x.type === BoostTypes[u.id as keyof typeof BoostTypes])!

                b.price = u.price
                b.isAvailable = u.isAvailable
                b.level = u.level
                b.isApplied = u.price == 0
            })
        })
    }

    getBoostList() {
        return this.api.get<BoostModel>('boosts')
    }

    getUpgradesList() {
        return this.api.get<UpgradeModel>('upgrades')
    }

    applyBoost(id: string) {
        return this.api.post<BoostModel>('boosts', { id })
    }

    applyUpgrades(id: string) {
        return this.api.post<UpgradeModel>('upgrades', { id })
    }

    buyBoost(type: BoostTypes) {
        let t = this;

        let boost = t.boostsList.find(boost => boost.type === type)!

        if (boost.isPermanent) {
            return t.applyUpgrades(BoostTypes[boost.type!])
        }
        else {
            return t.applyBoost(BoostTypes[boost.type!])
        }
        // return new Promise((resolve, reject) => {
        //     if (t.scoreService.totalScore < boost.price) {
        //         return reject('Insufficient balance')
        //     }

        //     switch (type) {
        //         case BoostTypes.X3Multiplier:
        //             boost.multiplier = 3
        //             // t.scoreService.setIncrementer(boost.multiplier)
        //             break;

        //         case BoostTypes.Autoswipe:
        //             boost.multiplier = 1
        //             setTimeout(() => { boost.isApplied = false }, 1000 * 60)// * 60 * 4)
        //             break;

        //         case BoostTypes.EnergyCapacity:
        //         case BoostTypes.RechargingSpeed:
        //         default:
        //             boost.multiplier += 1
        //             setTimeout(() => { boost.isApplied = false }, 1000 * 3)
        //             break;
        //     }

        //     boost.isApplied = true
        //     // t.scoreService.decrementScore(boost.price)
        //     return resolve(true)
        // })
    }
}
