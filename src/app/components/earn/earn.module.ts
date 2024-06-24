import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { EarnComponent } from './earn.component';
import { EarnRoutingModule } from './earn-routing.module';
import { CommonModule } from '@angular/common';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from '../../../environments/environment';

@NgModule({
  declarations: [
    EarnComponent,
  ],
  imports: [
    EarnRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    // NotifierModule.withConfig(customNotifierOptions)
  ],
  bootstrap: [EarnComponent]
})
export class EarnModule {}