import { Component, OnInit, ViewChild } from '@angular/core';
// import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'
import Freezeframe from 'freezeframe';


@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
    
  public static setLoading(isLoading: boolean) {
    if (isLoading) {
      document.getElementById("preloader")!.style.display = 'flex';
    } else {
      document.getElementById("preloader")!.style.display = 'none';
    }
  };

}
