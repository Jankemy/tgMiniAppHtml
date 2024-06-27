import { Injectable } from '@angular/core';
import { BoostsService } from './boosts.service';
import { BoostTypes } from '../enums/boost.types';
import { ProfileService } from './profile.service';

@Injectable({
    providedIn: 'root',
})
export class EnergyService {
    // private stockMaxEnergy = 100
    private maxEnergy = 100
    private energyIncrementer = 1
    private totalUserEnergy = 25
    private energyIntervals: any[] = []

    constructor(
        // private boostsService: BoostsService,
        private profileService: ProfileService,
    ) {
        let t = this;
        t.energyIntervals.push(setInterval(() => {
            if (t.totalUserEnergy < t.maxEnergy) {
                t.totalUserEnergy += t.energyIncrementer

                if (t.totalUserEnergy > t.maxEnergy) {
                    t.totalUserEnergy = t.maxEnergy
                }
            }
        }, 1000))

        t.energyIntervals.push(setInterval(t.initEnergyService, 1000 * 60 * 10)) //10 minutes
    }

    get availableUserEnergy() {
        return this.totalUserEnergy
    }

    // private get energyIncrementer() {
    //     let t = this;
    //     let appliedRechargingBoost = t.boostsService.boostsList
    //         .find(boost => boost.type === BoostTypes.RechargingSpeed)!

    //     return appliedRechargingBoost.multiplier
    // }

    // private get maxEnergy() {
    //     let t = this;
    //     let appliedCapacityBoost = t.boostsService.boostsList
    //         .find(boost => boost.type === BoostTypes.EnergyCapacity)!

    //     return this.stockMaxEnergy + this.stockMaxEnergy * appliedCapacityBoost.multiplier
    // }

    get totalEnergy() {
        return this.totalUserEnergy / this.maxEnergy * 100
    }

    ngOnDestroy() {
        this.energyIntervals.map(interval => clearInterval(interval));
    }

    initEnergyService(){
        let t = this;
        return t.profileService.profile()
        .then(profile => {
            t.maxEnergy = profile.maxEnergy
            t.energyIncrementer = profile.energyRechargingPerSec
            t.totalUserEnergy = profile.availableEnergy
        })
    }

    decrementEnergy() {
        if (this.totalUserEnergy > 0) {
            this.totalUserEnergy -= 1
        }
    }
}
