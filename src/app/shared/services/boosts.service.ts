import { Injectable } from '@angular/core';
import { BoostTypes } from '../enums/boost.types';

@Injectable({
    providedIn: 'platform'
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

    get boostsList() {
        return this.boosts
    }

    buyBoost(type: BoostTypes) {
        let t = this;

        let boost = t.boostsList.find(boost => boost.type === type)!

        switch (type) {
            case BoostTypes.X3Multiplier:
                boost.multiplier = 3
                break;

            case BoostTypes.Autoswipe:
                //TODO: autoswipe logic
                boost.multiplier = 1
                break;

            case BoostTypes.EnergyCapacity:
            case BoostTypes.RechargingSpeed:
            default:
                boost.multiplier += 1
                setTimeout(() => { boost.isApplied = false }, 1000 * 3)
                break;
        }

        boost.isApplied = true
    }
}
