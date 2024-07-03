import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private eventService: EventService
  ) {

  }

  saveLogin() {
    let t = this
    let inputText = document.getElementById("inputText")! as HTMLInputElement
    console.log(inputText.value)
    t.eventService.LoginEvent.emit(inputText.value)
  }

  public static enableLogin(needLogin: boolean) {
    document.getElementById("loginContainer")!.style.display = needLogin ? 'flex' : 'none';
  };
}
