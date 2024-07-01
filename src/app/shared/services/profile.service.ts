import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProfileModel } from '../models/profile.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {

    private userProfile?: ProfileModel
    private promiseUserProfile?: Promise<ProfileModel> = undefined;

    constructor(
        private api: ApiService
    ) {
    }

    get isProfileExist(){
        return !!this.userProfile?.id
    }

    initProfileService(){
        let t = this
        
        return t.refreshProfile()
        .then(profile => {
            t.userProfile = profile
            return t.userProfile
        })
    }

    refreshProfile(){
        return this.api.get<ProfileModel>('me')
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
