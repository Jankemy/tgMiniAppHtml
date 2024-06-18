import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';


@Component({
  selector: 'app-boosts',
  templateUrl: './boosts.component.html',
  styleUrls: ['./boosts.component.scss']
})
export class BoostsComponent implements OnInit, AfterViewInit, OnDestroy {

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
