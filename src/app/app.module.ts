import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { CutCoinComponent } from './shared/cut-coin/cut-coin.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { BoostsService } from './shared/services/boosts.service';
import { EnergyService } from './shared/services/energy.service';
import { ProfileService } from './shared/services/profile.service';
import { ScoreService } from './shared/services/score.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions),
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  // providers: [
  //   ApiService,
  //   BoostsService,
  //   EnergyService,
  //   ProfileService,
  //   ScoreService
  // ]
})
export class AppModule {}