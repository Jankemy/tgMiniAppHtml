import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { BoostsComponent } from './boosts.component';
import { BoostsRoutingModule } from './boosts-routing.module';
import { CommonModule } from '@angular/common';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from '../../../environments/environment';

@NgModule({
  declarations: [
    BoostsComponent,
  ],
  imports: [
    BoostsRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    // NotifierModule.withConfig(customNotifierOptions)
  ],
  bootstrap: [BoostsComponent]
})
export class BoostsModule {}