import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  animations: [
    trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {}))])
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
