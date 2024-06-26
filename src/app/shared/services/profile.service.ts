import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProfileModel } from '../models/profile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private profileInterval: any = {}
    private userProfile?: ProfileModel
    private promiseUserProfile?: Promise<ProfileModel> = undefined;

    constructor(
        private api: ApiService
    ) {
        let t = this
        t.profileInterval = setInterval(t.initProfileService, 1000 * 60 * 10)
    }

    ngOnDestroy() {
        clearInterval(this.profileInterval);
    }

    initProfileService(){
        let t = this
        t.refreshProfile()
        .then(profile => {
            t.userProfile = profile
        })
    }

    refreshProfile(){
        return this.api.post<ProfileModel>('me', {})
        .then(resp => {
            return resp!.data!
        })
    }


    public profile(){
        let t = this
        if (!t.promiseUserProfile && !t.userProfile?.id) {
            t.promiseUserProfile = this.refreshProfile();
        }

        return t.promiseUserProfile ?? new Promise<ProfileModel>((resolve, reject) => {
            resolve(t.userProfile!)
        });
    }
}
