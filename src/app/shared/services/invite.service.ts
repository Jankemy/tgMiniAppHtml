import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { FriendsModel } from '../models/friends.model';

@Injectable({
    providedIn: 'root',
})
export class InviteService {

    private userFriends!: FriendsModel
    private plug: FriendsModel = {
        percentFromChildren: 0,
        percentFromGrandchildren: 0,
        invitesLeft: 0,
        inviteLink: '',
        claimableBalance: 0,
        canClaim: false,
        friends: [],
    }
    
    constructor(
        private api: ApiService
    ) {
    }

    get inviteData(){
        return this.userFriends ?? this.plug
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
