import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BoostTypes } from '../../shared/enums/boost.types';
import { BoostsService } from '../../shared/services/boosts.service';
import { NotifierService } from 'angular-notifier';
import { BaseComponent } from '../../shared/base/base.component';
import { Overflow } from '../../../environments';


@Component({
  selector: 'app-boosts',
  templateUrl: './boosts.component.html',
  styleUrls: ['./boosts.component.scss']
})
export class BoostsComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(
    private boostsService: BoostsService,
    private notifier: NotifierService,
  ){
    super()
  }

  get boostsList(){
    return this.boostsService.boostsList
  }

  ngOnInit() {
    let t = this
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${Overflow}px`
    // document.body.style.marginBottom = `${Overflow}px`
    window.scrollTo(0, Overflow);

    t.setLoading(true)
    t.boostsService.initBoostsService()
    .finally(() => {
      t.setLoading(false)
    })
  }

  ngAfterViewInit(): void {
    let app = document.getElementById('app-boosts')!;

    (<any>window).Telegram?.WebApp?.expand()
    app.addEventListener("touchmove", (e) => {
      if (e.view!.scrollY === 0) {
        e.view!.scrollTo(0, Overflow)
      }
    });
  }

  applyBoost(type: BoostTypes){
    let t = this;
    t.boostsService.buyBoost(type)
    .then(resp => {
      t.notifier.notify('info', 'Boost successfully applied');
      (<any>window).Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
    })
    .catch(er => {
      t.notifier.notify('error', t.errorMessage(er))
    })
  }

}
