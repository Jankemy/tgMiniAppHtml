import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { fadeIn } from 'ng-animate';
// import { trigger, transition, useAnimation } from '@angular/animations';
// import { fadeIn } from 'ng-animate';
// import { NavService } from '../../services/nav.service';
// import { environment } from 'src/environments';
// import { SpotifyPlayerComponent } from '../spotify-player/spotify-player.component';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  animations: [
    trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2 seconds
      //params: { timing: 3}
    }))])
  ]
})
export class ContentLayoutComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  public getRouterOutletState(outlet:any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  
}
