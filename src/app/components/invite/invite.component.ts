import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { InviteService } from '../../shared/services/invite.service';
import { BaseComponent } from '../../shared/base/base.component';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent extends BaseComponent implements OnInit {

  isCopied = false

  constructor(
    private clip: ClipboardService,
    private inviteService: InviteService,
    private notifier: NotifierService
  ){
    super()
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
    t.inviteService.initInviteService()
    .finally(() => {
      t.setLoading(false)
    })
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
      t.notifier.notify('error', er.error.errors[0].message)
    })
    .finally(() => {
      t.setLoading(false)
    })
  }

}
