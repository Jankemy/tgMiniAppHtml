import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { InviteService } from '../../shared/services/invite.service';
import { BaseComponent } from '../../shared/base/base.component';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent extends BaseComponent implements OnInit {

  isCopied = false

  constructor(
    private clip: ClipboardService,
    private inviteService: InviteService
  ){
    super()
  }

  get friendList() {
    return this.inviteService.friendList
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
    t.clip.copy('Copied ref link')
    t.isCopied = true
    setTimeout(() => { t.isCopied = false }, 1000 * 3) //3 sec
  }

}
