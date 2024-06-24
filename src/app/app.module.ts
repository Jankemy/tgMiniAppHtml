import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { CutCoinComponent } from './shared/cut-coin/cut-coin.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}