import { Component, OnInit, ViewChild } from '@angular/core';
// import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'
import Freezeframe from 'freezeframe';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    inputText = ''
    
    constructor(
        private eventService: EventService
    ){

    }
    
    saveLogin(){
        let t = this
        console.log(t.inputText)
        t.eventService.LoginEvent.emit(t.inputText)
    }

    public static enableLogin(needLogin: boolean) {
        if (needLogin) {
          document.getElementById("loginContainer")!.style.display = 'flex';
        } else {
          document.getElementById("loginContainer")!.style.display = 'none';
        }
      };
}
