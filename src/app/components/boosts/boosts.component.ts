import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CutCoinComponent } from '../../shared/cut-coin/cut-coin.component';
import { EventService } from '../../shared/services/event.service';
import { BoostTypes } from '../../shared/enums/boost.types';
import { BoostsService } from '../../shared/services/boosts.service';
import { NotifierService } from 'angular-notifier';
import { ScoreService } from '../../shared/services/score.service';
import { ProfileService } from '../../shared/services/profile.service';
import { PreloaderComponent } from '../../shared/preloader/preloader.component';


@Component({
  selector: 'app-boosts',
  templateUrl: './boosts.component.html',
  styleUrls: ['./boosts.component.scss']
})
export class BoostsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private boostsService: BoostsService,
    private notifier: NotifierService,
    private profileService: ProfileService
  ){
  }

  get boostsList(){
    return this.boostsService.boostsList
  }

  ngOnInit() {
    let t = this
    t.setLoading(true)
    
    Promise.all([
      t.profileService.initProfileService(),
      t.boostsService.initBoostsService()
    ])
    .finally(() => {
      t.setLoading(false)
    })
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
    let t = this;
    t.boostsService.buyBoost(type)
    .then(resp => {
      // console.log(resp)
      t.profileService.initProfileService()
      t.boostsService.initBoostsService()
      t.notifier.notify('info', 'Boost successfuly applied')
    })
    .catch(er => {
      // console.log(er)
      t.notifier.notify('error', er)
    })
  }

  setLoading(isLoading: boolean) {
    PreloaderComponent.setLoading(isLoading);
  }

}
