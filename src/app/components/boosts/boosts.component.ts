import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';
import { BoostTypes } from '../../shared/enums/boost.types';
import { BoostsService } from '../../shared/services/boosts.service';


@Component({
  selector: 'app-boosts',
  templateUrl: './boosts.component.html',
  styleUrls: ['./boosts.component.scss']
})
export class BoostsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private boostsService: BoostsService
  ){
  }

  get boostsList(){
    return this.boostsService.boostsList
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
  }

  calcBoostsListContainerHeight(){
    let t = this;

    let appBoosts = document.getElementById('app-boosts')!
    let boostsHeader = document.getElementById('boostsHeader')!
    let boostText = document.getElementById('boostText')!

    // console.log(appBoosts.offsetHeight)
    // console.log(boostsHeader.offsetHeight)
    // console.log(boostText.offsetHeight)
    let res = appBoosts.offsetHeight - boostsHeader.offsetHeight - boostText.offsetHeight //- 15//($margin-box = 15)
    // console.log(res)

    return `${res}px`
  }

  applyBoost(type: BoostTypes){
    this.boostsService.buyBoost(type)
  }

}
