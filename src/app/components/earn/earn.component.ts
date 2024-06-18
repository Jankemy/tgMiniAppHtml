import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';


@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
  ){
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
  }

}
