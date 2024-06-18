import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwipeComponent } from './swipe.component';
import { SharedModule } from '../../shared/shared.module';
import { SwipeRoutingModule } from './swipe-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SwipeComponent,
  ],
  imports: [
    SwipeRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [SwipeComponent]
})
export class SwipeModule {}