import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './sub-components/preloader/preloader.component';
import { CutCoinComponent } from './cut-coin/cut-coin.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './sub-components/login/login.component';
import { EnergyHelpComponent } from './sub-components/energy-help/energy-help.component';
import { TokenSendComponent } from './sub-components/token-send/token-send.component';


@NgModule({
  declarations: [
    ContentLayoutComponent,
    PreloaderComponent,
    CutCoinComponent,
    ProgressBarComponent,
    LoginComponent,
    EnergyHelpComponent,
    TokenSendComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ContentLayoutComponent,
    PreloaderComponent,
    CutCoinComponent,
    ProgressBarComponent,
    LoginComponent,
    EnergyHelpComponent,
    TokenSendComponent,
  ]
})
export class SharedModule { }
