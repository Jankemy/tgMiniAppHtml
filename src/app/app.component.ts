import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from './shared/preloader/preloader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  activeSwipe = true
  activeInvite = false
  activeBoosts = false
  activeEarn = false

  constructor(
  ){
  }

  ngOnInit() {
    let t = this;
    t.setLoading(true);
    
    
    window.onload = () => { 
      (<any>window).Telegram?.WebApp?.ready();
      t.setLoading(false); }
  }

  setLoading(isLoading: boolean){
    PreloaderComponent.setLoading(isLoading);
  }

}
