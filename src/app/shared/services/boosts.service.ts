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
            level: 5,
            isPermanent: false,

            icon: 'assets/boost-icons/X5-boost.svg',
            text: 'Swipe Multiplier',
            subText: 'For each swipe you get X5',
        },
        {
            type: BoostTypes.energy_refill,
            price: 0,
            isApplied: false,
            isAvailable: false,
            level: 1,
            isPermanent: false,
            
            icon: 'assets/boost-icons/energy-refill-boost.svg',
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

    private upgrades: any = []
    private userBoosts: any = []

    constructor(
        private api: ApiService
    ) {
    }

    get boostsList() {
        return this.boosts
    }

    mapBoosts(){
        let t = this;

        t.userBoosts.map((ub:any) => {
            let b = t.boosts.find(x => x.type === BoostTypes[ub.id as keyof typeof BoostTypes])!

            b.price = ub.price
            b.isAvailable = ub.isAvailable
            b.isApplied = ub.maxAttempts > ub.attempts && (!b.isAvailable || !!ub.coolDown)
        })

        t.upgrades.map((u:any) => {
            let b = t.boosts.find(x => x.type === BoostTypes[u.id as keyof typeof BoostTypes])!

            b.price = u.price
            b.isAvailable = u.isAvailable
            b.level = u.level
            b.isApplied = u.price == 0
        })
    }

    initBoostsService() {
        let t = this;

        return Promise.all([
            t.getBoostList().then(resp => { t.userBoosts = resp!.data! }),
            t.getUpgradesList().then(resp => { t.upgrades = resp!.data! }),
        ])
        .finally(() => {
            t.mapBoosts()
        })
    }

    getBoostList() {
        return this.api.get<BoostModel>('boosts')
    }

    getUpgradesList() {
        return this.api.get<UpgradeModel>('upgrades')
    }

    applyBoost(id: string) {
        return this.api.post<BoostModel[]>('boosts', { id })
    }

    applyUpgrades(id: string) {
        return this.api.post<UpgradeModel[]>('upgrades', { id })
    }

    buyBoost(type: BoostTypes) {
        let t = this;

        let boost = t.boostsList.find(boost => boost.type === type)!

        if (boost.isPermanent) {
            return t.applyUpgrades(BoostTypes[boost.type!])
            .then(resp => { 
                t.upgrades = resp!.data!
                t.mapBoosts()
                return resp
            })
        }
        else {
            return t.applyBoost(BoostTypes[boost.type!])
            .then(resp => { 
                t.userBoosts = resp!.data!
                t.mapBoosts()
                return resp
            })
        }
    }
}
