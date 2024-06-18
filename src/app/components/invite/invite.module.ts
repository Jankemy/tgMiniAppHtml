import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { InviteComponent } from './invite.component';
import { InviteRoutingModule } from './invite-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InviteComponent,
  ],
  imports: [
    InviteRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [InviteComponent]
})
export class InviteModule {}