import { Component } from '@angular/core';
import { ProfileModel } from '../../models/profile.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-token-send',
  templateUrl: './token-send.component.html',
  styleUrls: ['./token-send.component.scss']
})
export class TokenSendComponent {

  static userProfile = new ProfileModel

  constructor(
    private eventService: EventService,
  ){
  }

  get balance(){
    return TokenSendComponent.userProfile?.balance ?? 0
  }

  public static needTokenSend(needSend: boolean, profile: any){
    this.userProfile = profile
    document.getElementById('tokenSendContainer')!.style.display = needSend ? 'flex' : 'none';
  }

  selectAllTokens(){
    let t = this;

    let tokenInput = document.getElementById('tokenAmountInput')! as HTMLInputElement
    tokenInput.value = ''+t.balance
  }

  cancel(){
    TokenSendComponent.needTokenSend(false, undefined)
  }

  sendTokens(){
    let t = this;

    let amount = +(document.getElementById('tokenAmountInput')! as HTMLInputElement).value
    let nickname = (document.getElementById('nicknameInput')! as HTMLInputElement).value
    t.eventService.SendTokensEvent.emit({amount, nickname})
  }

}
