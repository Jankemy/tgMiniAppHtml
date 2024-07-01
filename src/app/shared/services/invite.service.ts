import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { FriendModel } from '../models/friend.model';

@Injectable({
    providedIn: 'root',
})
export class InviteService {

    private userFriends: FriendModel[] = []
    
    constructor(
        private api: ApiService
    ) {
    }

    get friendList(){
        return this.userFriends
    }

    getFriends(){
        return this.api.get<FriendModel[]>('friends')
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
