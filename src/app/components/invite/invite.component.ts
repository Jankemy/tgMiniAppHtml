import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit, AfterViewInit, OnDestroy {

  isCopied = false

  friendsScore = [
    {
      nick: '@adam_smith',
      score: 34678 
    },
    {
      nick: '@kate_smith',
      score: 24690  
    }
  ]

  constructor(
    private clip: ClipboardService
  ){
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
  }

  copyRefLink(){
    let t = this;
    t.clip.copy('Copied ref link')
    t.isCopied = true
    setTimeout(() => { t.isCopied = false }, 1000 * 3) //3 sec
  }

}
