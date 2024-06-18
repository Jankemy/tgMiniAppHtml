import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { BoostsComponent } from './boosts.component';
import { BoostsRoutingModule } from './boosts-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BoostsComponent,
  ],
  imports: [
    BoostsRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [BoostsComponent]
})
export class BoostsModule {}