import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { FriendsModel } from '../models/friends.model';

@Injectable({
    providedIn: 'root',
})
export class InviteService {

    private userFriends!: FriendsModel
    
    constructor(
        private api: ApiService
    ) {
    }

    get inviteData(){
        return this.userFriends
    }

    getFriends(){
        return this.api.get<FriendsModel>('friends')
    }
    
    claimRewards(){
        let t = this;
        return t.api.post<FriendsModel>('friends/rewards', {})
        .then(resp => {
            t.userFriends = resp!.data!
            return resp
        })
    }

    initInviteService(){
        let t = this
        return t.getFriends()
        .then(resp => {
            t.userFriends = resp!.data!
            return resp
        })
    }
    
}
