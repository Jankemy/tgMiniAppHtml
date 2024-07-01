import { Component, OnInit } from '@angular/core';
import { BoostTypes } from '../../shared/enums/boost.types';
import { BoostsService } from '../../shared/services/boosts.service';
import { NotifierService } from 'angular-notifier';
import { BaseComponent } from '../../shared/base/base.component';


@Component({
  selector: 'app-boosts',
  templateUrl: './boosts.component.html',
  styleUrls: ['./boosts.component.scss']
})
export class BoostsComponent extends BaseComponent implements OnInit{

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

    t.setLoading(true)
    t.boostsService.initBoostsService()
    .finally(() => {
      t.setLoading(false)
    })
  }

  applyBoost(type: BoostTypes){
    let t = this;
    t.boostsService.buyBoost(type)
    .then(resp => {
      t.notifier.notify('info', 'Boost successfuly applied')
    })
    .catch(er => {
      t.notifier.notify('error', er.error.errors[0].message)
    })
  }

}
