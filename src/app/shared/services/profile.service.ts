import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProfileModel } from '../models/profile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private api: ApiService
    ) {

    }

    public profile(){
        return this.api.post<ProfileModel>('me', {})
    }
}
