export class ProfileModel {
    id: string;
    balance: number;
    maxEnergy: number;
    availableEnergy: number;
    energyRechargingPerSec: number;
    earnPerSwipe: number;
    lastSyncAt: number;
    upgrades: []
    tasks: []
}