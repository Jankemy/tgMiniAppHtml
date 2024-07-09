import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { InviteService } from '../../shared/services/invite.service';
import { BaseComponent } from '../../shared/base/base.component';
import { NotifierService } from 'angular-notifier';
import { TokenSendComponent } from '../../shared/sub-components/token-send/token-send.component';
import { EventService } from '../../shared/services/event.service';
import { ProfileService } from '../../shared/services/profile.service';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent extends BaseComponent implements OnInit, OnDestroy {

  isCopied = false
  timeToClaim = 'Nothing to claim'
  timeToClaimIntervel: any = {}
  sendTokensEvent: any = {}

  constructor(
    private clip: ClipboardService,
    private inviteService: InviteService,
    private profileService: ProfileService,
    private eventService: EventService,
    private notifier: NotifierService
  ){
    super()

    let t = this

    t.sendTokensEvent = t.eventService.SendTokensEvent.subscribe(evResp => {

      t.setLoading(true)
      t.inviteService.sendTokens(evResp.nickname, evResp.amount)
      .then(resp => {
        t.notifier.notify('success', 'Tokens successfuly sent')
      })
      .catch(er => {
        t.notifier.notify('error', t.errorMessage(er))
      })
      .finally(() => {
        t.setLoading(false)
        TokenSendComponent.needTokenSend(false, undefined)
      })
    })
  }

  get inviteData() {
    return this.inviteService.inviteData
  }

  get friendList() {
    return this.inviteData.friends
  }

  ngOnInit() {
    let t = this

    t.setLoading(true)
    Promise.all([
      t.profileService.initProfileService(),
      t.inviteService.initInviteService()
      .then(resp => {
        if (!!resp!.data!.canClaimAt) {
          t.setTimeToClaim()
          t.timeToClaimIntervel = setInterval(() => {
            t.setTimeToClaim()
          }, 1000)
        }
      }),
    ])
    .finally(() => {
      t.setLoading(false)
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.timeToClaimIntervel)
    this.sendTokensEvent.unsubscribe()
  }

  setTimeToClaim(){
    let t = this

    let today = new Date();
    let claimDate = new Date(t.inviteData.canClaimAt!);

    if (claimDate.getTime() <= today.getTime() || (claimDate.getTime() - today.getTime()) <= 60000) {
      clearInterval(t.timeToClaimIntervel)
      t.inviteService.initInviteService()
    }
    else { 
      let diffSec = (claimDate.getTime() - today.getTime()); // milliseconds between now & claimDate
      let diffDays = Math.floor(diffSec / 86400000); // days
      let diffHrs = Math.floor((diffSec % 86400000) / 3600000); // hours
      let diffMins = Math.round(((diffSec % 86400000) % 3600000) / 60000); // minutes
  
      t.timeToClaim = ''
      if (diffDays > 0 ) { t.timeToClaim = t.timeToClaim.concat(`${diffDays} days`)}
      if (diffHrs > 0 ) { t.timeToClaim = t.timeToClaim.concat(` ${diffHrs} hours`)}
      t.timeToClaim = t.timeToClaim.concat(` ${diffMins} minutes`)
  
      console.log(t.timeToClaim);
    }
  }

  copyRefLink(){
    let t = this;
    t.clip.copy(t.inviteData.inviteLink)
    t.isCopied = true
    setTimeout(() => { t.isCopied = false }, 1000 * 3) //3 sec
  }

  claimRefRevards(){
    let t = this;

    t.setLoading(true)
    t.inviteService.claimRewards()
    .then(resp => {
      t.notifier.notify('success', 'Claimed successfuly')
    })
    .catch(er => {
      t.notifier.notify('error', t.errorMessage(er))
    })
    .finally(() => {
      t.setLoading(false)
    })
  }

  showSendTokenPage(){
    let t = this;
    t.profileService.profile()
    .then(profile => {
      TokenSendComponent.needTokenSend(true, profile)
    })
  }

}
