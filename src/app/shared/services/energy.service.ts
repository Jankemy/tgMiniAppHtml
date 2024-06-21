import { Injectable } from '@angular/core';
import { BoostsService } from './boosts.service';
import { BoostTypes } from '../enums/boost.types';

@Injectable({
    providedIn: 'platform'
})
export class EnergyService {
    private stockMaxEnergy = 100
    private totalUserEnergy = 25
    private energyInterval = {}

    constructor(
        private boostsService: BoostsService
    ) {
        let t = this;
        t.energyInterval = setInterval(() => {
            if (t.totalUserEnergy < t.maxEnergy) {
                t.totalUserEnergy += t.energyIncrementer

                if (t.totalUserEnergy > t.maxEnergy) {
                    t.totalUserEnergy = t.maxEnergy
                }
            }
        }, 1000)
    }

    private get energyIncrementer() {
        let t = this;
        let appliedRechargingBoost = t.boostsService.boostsList
            .find(boost => boost.type === BoostTypes.RechargingSpeed)!

        return appliedRechargingBoost.multiplier
    }

    private get maxEnergy() {
        let t = this;
        let appliedCapacityBoost = t.boostsService.boostsList
            .find(boost => boost.type === BoostTypes.EnergyCapacity)!

        return this.stockMaxEnergy + this.stockMaxEnergy * appliedCapacityBoost.multiplier
    }

    get totalEnergy() {
        return this.totalUserEnergy / this.maxEnergy * 100
    }

    decrementEnergy() {
        if (this.totalUserEnergy > 0) {
            this.totalUserEnergy -= 1
        }
    }
}
