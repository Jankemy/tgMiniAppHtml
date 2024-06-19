import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';
import { BoostTypes } from '../../shared/enums/boost.types';


@Component({
  selector: 'app-boosts',
  templateUrl: './boosts.component.html',
  styleUrls: ['./boosts.component.scss']
})
export class BoostsComponent implements OnInit, AfterViewInit, OnDestroy {

  boostsList = [
    {
      type: BoostTypes.X3Multiplier,
      icon: 'assets/boost-icons/X3-boost.svg',
      text: 'Swipe Multiplier',
      subText: 'For each swipe you get X3',
      price: 100,
      isApplied: false,
    },
    {
      type: BoostTypes.Recharging,
      icon: 'assets/boost-icons/recharging-boost.svg',
      text: 'Recharging Speed',
      subText: 'Increases the energy recharge',
      price: 150,
      isApplied: false,
    },
    {
      type: BoostTypes.EnergyCapacity,
      icon: 'assets/boost-icons/energy-capacity-boost.svg',
      text: 'Energy Bar Capacity',
      subText: 'Greater energy reserve',
      price: 200,
      isApplied: false,
    },
    {
      type: BoostTypes.Autoswipe,
      icon: 'assets/boost-icons/autoswipe-boost.svg',
      text: 'Auto swipe',
      subText: 'Auto-swipe for 4 hours',
      price: 1500,
      isApplied: false,
    },
  ]

  constructor(
  ){
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

    console.log(appBoosts.offsetHeight)
    console.log(boostsHeader.offsetHeight)
    console.log(boostText.offsetHeight)
    let res = appBoosts.offsetHeight - boostsHeader.offsetHeight - boostText.offsetHeight //- 15//($margin-box = 15)
    console.log(res)

    return `${res}px`
  }

  applyBoost(type: BoostTypes){
    let t = this;
    let boost = t.boostsList.find(boost => boost.type === type)
    boost!.isApplied = true
  }

}
