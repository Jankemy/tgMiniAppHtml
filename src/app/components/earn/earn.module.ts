import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { EarnComponent } from './earn.component';
import { EarnRoutingModule } from './earn-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EarnComponent,
  ],
  imports: [
    EarnRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [EarnComponent]
})
export class EarnModule {}