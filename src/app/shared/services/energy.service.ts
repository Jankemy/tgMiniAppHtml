import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { EnergyModel } from '../models/energy.model';

@Injectable({
    providedIn: 'root',
})
export class EnergyService {
    
    private maxEnergy = 100
    private energyIncrementer = 1
    private totalUserEnergy = 0
    private energyInterval: any = {}

    constructor(
        private api: ApiService
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

    get availableUserEnergy() {
        return this.totalUserEnergy
    }

    get totalEnergy() {
        return this.totalUserEnergy / this.maxEnergy * 100
    }

    ngOnDestroy() {
        clearInterval(this.energyInterval)
    }

    getEnergy(){
        return this.api.get<EnergyModel>('energy')
    }

    initEnergyService(){
        let t = this;
        return t.getEnergy()
        .then(resp => {
            t.maxEnergy = resp!.data!.maxEnergy
            t.energyIncrementer = resp!.data!.energyRechargingPerSec
            t.totalUserEnergy = resp!.data!.availableEnergy
        })
    }

    decrementEnergy() {
        if (this.totalUserEnergy > 0) {
            this.totalUserEnergy -= 1
        }
    }
}
